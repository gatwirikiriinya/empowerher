import database from '../database';
import bcrypt from 'bcrypt';

const saltRounds = process.env.SALT_ROUNDS
  ? parseInt(process.env.SALT_ROUNDS)
  : 10;
const pepper = process.env.BCRYPT_PASSWORD;

// Type for user model
export type User = {
  id?: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
};

// Create methods for all CRUD actions
export class UserModel {
  // Index Method
  async index(): Promise<User[]> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT * FROM users';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not retrieve the users list. Error ${err}`);
    }
  }

  // Create Method
  async create(u: User): Promise<User> {
    try {
      const connection = await database.connect();
      const sql =
        'INSERT INTO users ( first_name, last_name, phone_number, email, password) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';

      const hash = bcrypt.hashSync(u.password + pepper, saltRounds);
      const result = await connection.query(sql, [
        u.first_name,
        u.last_name,
        u.phone_number,
        u.email,
        hash
      ]);
      const user = result.rows[0];
      connection.release();
      return user;
    } catch (err) {
      throw new Error(`Could not retrieve the users list. Error ${err}`);
    }
  }

  // Read Method
  async show(id: number): Promise<User> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT * from users WHERE id=$1';
      const result = await connection.query(sql, [id]);
      const user = result.rows[0];
      connection.release();
      return user;
    } catch (err) {
      throw new Error(
        `Could not retrieve the user with id ${id}. Error ${err}`
      );
    }
  }

  //   Update method
  async update(id: number, updates: Partial<User>): Promise<User> {
    try {
      const connection = await database.connect();
      const sql = `UPDATE users SET username=$1, first_name=$2, last_name=$3, phone_number=$4, email=$5, address=$6, password=$7 WHERE id=$8 RETURNING *`;
      const hash = bcrypt.hashSync(
        (updates.password as string) + pepper,
        saltRounds
      );
      const result = await connection.query(sql, [
        updates.first_name,
        updates.last_name,
        updates.phone_number,
        updates.email,
        hash,
        id
      ]);
      const user = result.rows[0];
      connection.release();
      return user;
    } catch (err) {
      throw new Error(`Could not update the user with id ${id}. Error ${err}`);
    }
  }

  // Delete Method
  async delete(id: number): Promise<boolean> {
    try {
      const connection = await database.connect();
      const sql = 'DELETE FROM users WHERE id=$1';
      const result = await connection.query(sql, [id]);
      const user = result.rowCount > 0;
      connection.release();
      return user;
    } catch (err) {
      throw new Error(`Could not delete the user with id ${id}. Error ${err}`);
    }
  }

  async authenticate(email: string, password: string): Promise<User | null> {
    try {
      const connection = await database.connect();
      const sql = 'SELECT password FROM users WHERE email=$1';

      const result = await connection.query(sql, [email]);

      // Check if user with email exists
      if (result.rows.length) {
        const user = result.rows[0];
        if (bcrypt.compareSync(password + pepper, user.password)) {
          return user;
        }
      }
      return null;
    } catch (err) {
      throw new Error(
        `Could not authenticate the user ${email}. Error: ${err}`
      );
    }
  }
}
