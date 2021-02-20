"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express = require("express");
// Create a new express application instance
const app = express();
const libs = require('./libs');
libs.forEach((lib) => require(`./libs/${lib}`)(app));
