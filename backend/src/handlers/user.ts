import express, { Request, Response } from 'express';
import { User, UserModel } from '../models/user';
import jwt from 'jsonwebtoken';
import verifyAuthToken from '../middlewares/verifyAuth';

const userStore = new UserModel();

const index = async (_req: Request, res: Response) => {
  try {
    const users = await userStore.index();
    res.json(users);
  } catch (err) {
    res.status(400).send({ message: 'Error retrieving users.' });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const user: User = {
      first_name: req.body.first_name as string,
      last_name: req.body.last_name as string,
      phone_number: req.body.phone_number as string,
      email: req.body.email as string,
      password: req.body.password as string
    };
    const newUser = await userStore.create(user);
    const token = jwt.sign(
      { user: newUser },
      process.env.TOKEN_SECRET as string
    );
    res.json(token);
  } catch (err) {
    console.log(err)
    res.status(400).send({ message: 'Error creating a user.', error: err });
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const user = await userStore.show(req.params.id as unknown as number);
    if (!user) res.status(404).send({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).send({ message: 'Error retrieving user' });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const user: User = {
      first_name: req.body.first_name as string,
      last_name: req.body.last_name as string,
      phone_number: req.body.phone_number as string,
      email: req.body.email as string,
      password: req.body.password as string
    };
    const userId = req.params.id as unknown as number;
    const updatedUser = await userStore.update(userId, user);
    if (!updatedUser)
      res.status(404).send({ message: 'User to update not found' });
    res.json(updatedUser);
  } catch (err) {
    res.status(404).send({
      message: 'Error updating the user',
      error: err
    });
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const deletedUser = await userStore.delete(
      req.params.id as unknown as number
    );

    if (deletedUser) {
      res.status(200).send({ message: 'User deleted successfully' });
    } else {
      res.status(404).send({ message: 'User to delete not found' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error deleting the user' });
  }
};

const authenticate = async (req: Request, res: Response) => {
  try {
    const user = await userStore.authenticate(
      req.body.email,
      req.body.password
    );

    if (!user) {
      res.status(401).send({ message: 'Authentication failed!' });
    } else {
      const token = jwt.sign(
        { user: user },
        process.env.TOKEN_SECRET as string
      );
      res.json(token);
    }
  } catch (err) {
    res
      .status(400)
      .send({ message: 'Error authenticating the user.', error: err });
  }
};

const userRoutes = (app: express.Application) => {
  app.route('/api/users').get(verifyAuthToken, index).post(create);
  app
    .route('/api/users/:id')
    .get(verifyAuthToken, show)
    .put(verifyAuthToken, update)
    .delete(verifyAuthToken, destroy);
  app.post('/api/users/sign-in', authenticate);
  // app.get('/api/users', index);
  // app.get('/api/users/:id', show);
  // app.post('/api/users', create);
  // app.put('/api/users/:id', update);
  // app.delete('/api/users/:id', destroy);
};

export default userRoutes;
