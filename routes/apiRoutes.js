//dependencies
const fs = require("fs");
const db = require("../db/db.json");

//api routes
module.exports = function (app) {
  //get returns db.json as a json
  //THERES A BUG HERE! DELETE IS SUCCESSFULLY MODIFYING THE DB.JSON, BUT THE PAGE IS NOT UPDATING CORRECTLY. I AM LIKELY NOT GRABBING THE UPDATED JSON ON UPDATE
  app.get("/api/notes", function (req, res) {
    //const db = require("../db/db.json");

    res.json(db);
  });
  // creates a new note, pushes new note to list of notes, writes new list to db.json
  app.post("/api/notes", function (req, res) {
    //const db = require("../db/db.json");
    //new note contains id generated its place in the list
    var newNote = {
      id: db.length,
      title: req.body.title,
      text: req.body.text,
    };
    console.log(newNote);

    db.push(newNote);

    //write new db to json
    fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
    });

    res.json(db);
  });

  //delete note with input id
  app.delete("/api/notes/:id", function (req, res) {
    const delID = req.params.id;
    console.log(delID);
    console.log("params", req.params);
    const filtereddb = db.filter((note) => `${note.id}` !== delID);

    console.log(filtereddb);
    fs.writeFile("db/db.json", JSON.stringify(filtereddb), (err) => {
      console.log(err);
      if (err) throw err;
    });

    res.json(filtereddb);
  });
};
