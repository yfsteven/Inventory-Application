const VideoGame = require("../models/videogame");
const Category = require("../models/category");
const asyncHandler = require("express-async-handler");
const category = require("../models/category");


exports.index = asyncHandler(async (req, res, next) => {
    const [
        numGames
    ] = await Promise.all([
        VideoGame.countDocuments({}).exec(),
    ]);

    const allCategories = await Category.find().sort({ title: 1}).exec();

    let platforms = "";

    for(i = 0; i < allCategories.length; i++) {
        if(i != allCategories.length - 1) {
            platforms += allCategories[i].title + ', ';
        } else {
            platforms += 'and ' + allCategories[i].title;
        }
    }

    res.render("index", {
        title: "Videogame Inventory Application",
        videogame_count: numGames,
        category_title: platforms,
    });
});

exports.videogame_list = asyncHandler(async (req, res, next) => {
    const allVideogames = await VideoGame.find({}, "title description category numberstocks price")
    .sort({ title: 1 })
    .populate("description")
    .populate("category")
    .populate("numberstocks")
    .populate("price")
    .exec();

    
    res.render("videogame_list", { title: "Video Games", videogame_list: allVideogames});
});
/*
const allVideogames = await VideoGame.find({}, "title description category numberstocks price")
    .sort({ title: 1 })
    .populate("description")
    .populate("category")
    .populate("numberstocks")
    .populate("price")
    .exec();
    
console.log(allVideogames.description)*/
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