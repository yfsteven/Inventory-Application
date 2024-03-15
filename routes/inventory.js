const express = require("express");
const router = express.Router();

const videogame_controller = require("../controllers/videogameController");
const category_controller = require("../controllers/categoryController");

router.get("/", videogame_controller.index);

router.get("/videogame/create", videogame_controller.videogame_create_get);

router.post("/videogame/create", videogame_controller.videogame_create_post);

router.get("/videogame/:id/delete", videogame_controller.videogame_delete_get);

router.post("/videogame/:id/delete", videogame_controller.videogame_delete_post);

router.get("/videogame/:id/update", videogame_controller.videogame_update_get);

router.post("/videogame/:id/update", videogame_controller.videogame_update_post);

router.get("/videogame/:id", videogame_controller.videogame_detail);

router.get("/videogames", videogame_controller.videogame_list);

//Category routes

router.get("/category/create", category_controller.category_create_get);

router.post("/category/create", category_controller.category_create_post);

router.get("/category/:id/delete", category_controller.category_delete_get);

router.post("/category/:id/delete", category_controller.category_delete_post);

router.get("/category/:id/update", category_controller.category_update_get);

router.post("/category/:id/update", category_controller.category_update_post);

router.get("/category/:id", category_controller.category_detail);

router.get("/categories", category_controller.category_list);

module.exports = router;