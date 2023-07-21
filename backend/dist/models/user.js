"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = process.env.SALT_ROUNDS
    ? parseInt(process.env.SALT_ROUNDS)
    : 10;
const pepper = process.env.BCRYPT_PASSWORD;
// Create methods for all CRUD actions
class UserModel {
    // Index Method
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'SELECT * FROM users';
                const result = yield connection.query(sql);
                connection.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Could not retrieve the users list. Error ${err}`);
            }
        });
    }
    // Create Method
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'INSERT INTO users ( first_name, last_name, phone_number, email, password) VALUES($1, $2, $3, $4, $5) RETURNING *';
                const hash = bcrypt_1.default.hashSync(u.password + pepper, saltRounds);
                const result = yield connection.query(sql, [
                    u.first_name,
                    u.last_name,
                    u.phone_number,
                    u.email,
                    hash
                ]);
                const user = result.rows[0];
                connection.release();
                return user;
            }
            catch (err) {
                throw new Error(`Could not retrieve the users list. Error ${err}`);
            }
        });
    }
    // Read Method
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'SELECT * from users WHERE id=$1';
                const result = yield connection.query(sql, [id]);
                const user = result.rows[0];
                connection.release();
                return user;
            }
            catch (err) {
                throw new Error(`Could not retrieve the user with id ${id}. Error ${err}`);
            }
        });
    }
    //   Update method
    update(id, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = `UPDATE users SET username=$1, first_name=$2, last_name=$3, phone_number=$4, email=$5, address=$6, password=$7 WHERE id=$8 RETURNING *`;
                const hash = bcrypt_1.default.hashSync(updates.password + pepper, saltRounds);
                const result = yield connection.query(sql, [
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
            }
            catch (err) {
                throw new Error(`Could not update the user with id ${id}. Error ${err}`);
            }
        });
    }
    // Delete Method
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'DELETE FROM users WHERE id=$1';
                const result = yield connection.query(sql, [id]);
                const user = result.rowCount > 0;
                connection.release();
                return user;
            }
            catch (err) {
                throw new Error(`Could not delete the user with id ${id}. Error ${err}`);
            }
        });
    }
    authenticate(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'SELECT password FROM users WHERE email=$1';
                const result = yield connection.query(sql, [email]);
                // Check if user with email exists
                if (result.rows.length) {
                    const user = result.rows[0];
                    if (bcrypt_1.default.compareSync(password + pepper, user.password)) {
                        return user;
                    }
                }
                return null;
            }
            catch (err) {
                throw new Error(`Could not authenticate the user ${email}. Error: ${err}`);
            }
        });
    }
}
exports.UserModel = UserModel;
