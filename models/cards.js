'use strict';

const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    },
    footer: {
        type: String,
        required: false
    },
    titleFont: {
        type: String,
        required: false
    },
    bodyFont: {
        type: String,
        required: false
    },
    footerFont: {
        type: String,
        required: false
    },
    titleColor: {
        type: String,
        required: false
    },
    bodyColor: {
        type: String,
        required: false
    },
    footerColor: {
        type: String,
        required: false
    },
    titleSize: {
        type: String,
        required: false
    },
    bodySize: {
        type: String,
        required: false
    },
    footerSize: {
        type: String,
        required: false
    },
    titleStyle: {
        type: String,
        required: false
    },
    bodyStyle: {
        type: String,
        required: false
    },
    footerStyle: {
        type: String,
        required: false
    },
    borderStyle: {
        type: String,
        required: false
    },
    borderColor: {
        type: String,
        required: false
    },
    borderWidth: {
        type: String,
        required: false
    },
    backgroundColor: {
        type: String,
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    photographer: {
        type: String,
        required: false
    },
    photoUrl: {
        type: String,
        required: false
    },
    width: {
        type: String,
        required: false
    },
    height: {
        type: String,
        required: false
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
