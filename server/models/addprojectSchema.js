const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    domain: {
        type: String,
        required: true
    },

    lang: {
        type:String,
        required: true
    },

    files:{
        type:Buffer,
        contentType: pdf
    },







});