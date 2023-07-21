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
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyAuth_1 = __importDefault(require("../middlewares/verifyAuth"));
const userStore = new user_1.UserModel();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userStore.index();
        res.json(users);
    }
    catch (err) {
        res.status(400).send({ message: 'Error retrieving users.' });
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            email: req.body.email,
            password: req.body.password
        };
        const newUser = yield userStore.create(user);
        const token = jsonwebtoken_1.default.sign({ user: newUser }, process.env.TOKEN_SECRET);
        res.json(token);
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ message: 'Error creating a user.', error: err });
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userStore.show(req.params.id);
        if (!user)
            res.status(404).send({ message: 'User not found' });
        res.json(user);
    }
    catch (err) {
        res.status(400).send({ message: 'Error retrieving user' });
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            email: req.body.email,
            password: req.body.password
        };
        const userId = req.params.id;
        const updatedUser = yield userStore.update(userId, user);
        if (!updatedUser)
            res.status(404).send({ message: 'User to update not found' });
        res.json(updatedUser);
    }
    catch (err) {
        res.status(404).send({
            message: 'Error updating the user',
            error: err
        });
    }
});
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield userStore.delete(req.params.id);
        if (deletedUser) {
            res.status(200).send({ message: 'User deleted successfully' });
        }
        else {
            res.status(404).send({ message: 'User to delete not found' });
        }
    }
    catch (err) {
        res.status(500).send({ message: 'Error deleting the user' });
    }
});
const authenticate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userStore.authenticate(req.body.email, req.body.password);
        if (!user) {
            res.status(401).send({ message: 'Authentication failed!' });
        }
        else {
            const token = jsonwebtoken_1.default.sign({ user: user }, process.env.TOKEN_SECRET);
            res.json(token);
        }
    }
    catch (err) {
        res
            .status(400)
            .send({ message: 'Error authenticating the user.', error: err });
    }
});
const userRoutes = (app) => {
    app.route('/api/users').get(verifyAuth_1.default, index).post(create);
    app
        .route('/api/users/:id')
        .get(verifyAuth_1.default, show)
        .put(verifyAuth_1.default, update)
        .delete(verifyAuth_1.default, destroy);
    app.post('/api/users/sign-in', authenticate);
    // app.get('/api/users', index);
    // app.get('/api/users/:id', show);
    // app.post('/api/users', create);
    // app.put('/api/users/:id', update);
    // app.delete('/api/users/:id', destroy);
};
exports.default = userRoutes;
