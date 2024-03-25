const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoGameSchema = new Schema({
    title: { type: String, required: true, minLength: 3, maxLength: 100 },
    description: { type: String, required: true },
    category: [ {type: Schema.Types.ObjectId, required: true, ref: "Category"}],
    numberstocks: { type: Number, required: true},
    price: { type: Number, required: true },
});

VideoGameSchema.virtual('url').get(function () {
    return `/videogame/${this._id}`;
});




module.exports = mongoose.model('VideoGame', VideoGameSchema);