'use strict';

var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({

    first_name: String,
    last_name: String,
    fav_sup: String,
    email: String,
    active: {type: Boolean, default: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

//
//UserSchema.pre('save', function preSave(next){
//    var user = this;
//});


mongoose.model('User', UserSchema);