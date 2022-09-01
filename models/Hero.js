const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    superHero:{
        type: String,
        required: [true, "please name the hero"],
        unique: true,
        trim: true
    },

    realName: {
        type: String,
        required: true,
        maxlenghth: [200, "Please keep the name short"]
    }
})

module.exports = mongoose.models.Hero || mongoose.model('Hero', HeroSchema);