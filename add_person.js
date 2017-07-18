const settings = require("./settings"); // settings.json
const pg = require("pg");
var first = process.argv[2];
var last = process.argv[3];


const knex = require("knex")({
  client: 'pg',
  connection: {
    host : settings.host,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex.insert({first_name: first, last_name: last, birthdate: new Date}).into('famous_people').then(function() {
  knex.select("*").from("famous_people").asCallback(function (err, values) {
    if (err) {
      console.log(err);
    } else {
      console.log(values);
    }
  })
});



