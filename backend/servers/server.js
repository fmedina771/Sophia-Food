// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************



// *** Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var firebase = require("firebase");


// Requiring our models for syncing
var db = require("./models");


// Initialize and set up Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 7777;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));



