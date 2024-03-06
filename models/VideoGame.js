const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoGameSchema = new Schema({
    title: { type: String, required: true, minLength: 3, maxLength: 100 },
    description: { type: String, required: true },
    category: [ {type: Schema.Types.ObjectId, ref: "Category"} ],
    numberstocks: { type: Number},
    price: { type: String, required: true },
});

VideoGameSchema.virtual('url').get(function () {
    return `/videogame/${this._id}`;
});

module.exports = mongoose.model('VideoGame', VideoGameSchema);