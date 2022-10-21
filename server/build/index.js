"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const words_1 = __importDefault(require("./routes/words"));
const rank_1 = __importDefault(require("./routes/rank"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// app middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded());
app.use((0, cors_1.default)());
// routes middleware
app.use('/words', words_1.default);
app.use('/rank', rank_1.default);
const PORT = 5000;
app.listen(PORT, () => {
    console.log("running in http://localhost:" + PORT);
});
