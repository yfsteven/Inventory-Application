#! /usr/bin/env node


// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const VideoGame = require("./models/videogame");
const Category = require("./models/category");


const videogames = [];
const categories = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createVideoGames();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function categoryCreate(index, title, description) {
  const category = new Category({ title: title, description: description });
  await category.save();
  categories[index] = category;
}

async function videoGameCreate(index, title, description, category, numberstocks, price) {
  const videogamedetail = {
    title: title,
    description: description,
    numberstocks: numberstocks,
    price: price,
  };
  if (category != false) videogamedetail.category = category;

  const videogame = new VideoGame(videogamedetail);
  await videogame.save();
  videogames[index] = videogame;
}


async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "Xbox", "Console 1"),
    categoryCreate(1, "Playstation", "Console 2"),
    categoryCreate(2, "Nintendo", "Console 3"),
    categoryCreate(3, "Steam", "Steam platform"),
  ]);
}


async function createVideoGames() {
  console.log("Adding VideoGames");
  await Promise.all([
    videoGameCreate(0,
      "Persona 3 Reload",
      "Step into the shoes of a transfer student thrust into an unexpected fate when entering the hour hidden between one day and the next. Awaken an incredible power and chase the mysteries of the Dark Hour, fight for your friends, and leave a mark on their memories forever.",
      [categories[0], categories[1], categories[3]],
      200,
      69.99
    ),
    videoGameCreate(1,
      "Super Mario Odyssey",
      "An entry in the Super Mario series, it follows Mario and his new ally Cappy—a sentient hat that allows Mario to control other characters and objects—as they journey across various kingdoms to save Princess Peach from Mario's nemesis Bowser's plans of forced marriage. In contrast to the linear gameplay of prior entries, the game returns to the primarily open-ended, 3D platform gameplay featured in Super Mario 64 and Super Mario Sunshine.",
      [categories[2]],
      5,
      80.00
    ),
    videoGameCreate(2,
      "Elden Ring",
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
      [categories[0], categories[1], categories[3]],
      3000,
      70.00
    ),
    videoGameCreate(3,
      "Pokémon Legends: Arceus",
      "Your adventure takes place in the expansive natural majesty of the Hisui region, where you embark on survey missions from your main base in Jubilife Village.  Mount Coronet rises from the center, surrounded on all sides by areas with distinct environments.",
      [categories[2]],
      19060,
      70.00
    ),
    videoGameCreate(4,
      "Marvel's Spider-Man 2",
      "Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
      [categories[1]],
      10000,
      69.99
    ),
    videoGameCreate(5,
      "Test VideoGame 1",
      "Description of test videogame 1",
      [categories[1]],
      1,
      5.00
    ),
    videoGameCreate(6,
      "Test VideoGame 2",
      "Description of test videogame 2",
      [categories[3]],
      49,
      59.99
    ),
  ]);
}
