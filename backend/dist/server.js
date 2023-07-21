"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_1 = __importDefault(require("./handlers/user"));
const app = (0, express_1.default)();
const PORT = 3000;
const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSucessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Welcome to EmpowerHer!');
});
(0, user_1.default)(app);
app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
