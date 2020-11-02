"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var schema_1 = __importDefault(require("./schema"));
var app = express_1.default();
var server = new apollo_server_express_1.ApolloServer({ schema: schema_1.default });
server.applyMiddleware({ app: app });
// Production build configuration
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', '..', 'client', 'build')));
app.get('*', function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'));
});
var port = process.env.PORT || 4000;
app.listen(port, function () { return console.log("Server started on port " + port); });
