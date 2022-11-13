const db = require('../models')
const bcrypt = require("bcrypt");
const authService = require('../services/authService')

const { QueryTypes } = require('sequelize');


// create main Model
const Account = db.accounts
const Role = db.roles