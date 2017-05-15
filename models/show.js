/**
 * Created by tuanung on 5/11/17.
 */
// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model

var showSchema = mongoose.Schema({

    _id: Number,
    name: String,
    airsDayOfWeek: String,
    airsTime: String,
    firstAired: Date,
    genre: [String],
    network: String,
    overview: String,
    rating: Number,
    ratingCount: Number,
    status: String,
    poster: String,
    subscribers: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    episodes: [{
        season: Number,
        episodeNumber: Number,
        episodeName: String,
        firstAired: Date,
        overview: String
    }]

});

// create the model for show and expose it to our app
module.exports = mongoose.model('Show', showSchema);
