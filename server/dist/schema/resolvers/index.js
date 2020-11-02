"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = __importDefault(require("./launch"));
var rocket_1 = __importDefault(require("./rocket"));
exports.default = [launch_1.default, rocket_1.default];
