const { StatusCodes } = require("http-status-codes");
const User = require("../models/userSchema");
const { BadRequestError, NotFoundError } = require("../errors");

const register = async (req, res) => {};

const getAllUsers = async (req, res) => {};

const login = async (req, res) => {};

module.exports = { login, register, getAllUsers };
