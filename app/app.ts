// lib/app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();
const libs = require('./libs');
libs.forEach((lib: any) => require(`./libs/${lib}`)(app));