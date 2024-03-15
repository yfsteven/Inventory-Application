const VideoGame = require("../models/videogame");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.send("Not implemented Homepage")
});

exports.videogame_list = asyncHandler(async (req, res, next) => {
    res.send("Not implemented vg list")
});

exports.videogame_detail = asyncHandler(async (req, res, next) => {
    res.send("Not implemented vg detail")
});

exports.videogame_create_get = asyncHandler(async (req, res, next) => {
    res.send("Not implemented vg create get")
});

exports.videogame_create_post = asyncHandler(async (req, res, next) => {
    res.send("Not implemented vg create post")
});

exports.videogame_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Not implemented vg delete get")
});

exports.videogame_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Not implemented vg delete post")
});

exports.videogame_update_get = asyncHandler(async (req, res, next) => {
    res.send("Not implemented vg update get")
});

exports.videogame_update_post = asyncHandler(async (req, res, next) => {
    res.send("Not implemented vg update post")
});