const settings = require("./settings"); // settings.json
const pg = require("pg");
var args = process.argv[2];
const knex = require("knex")({
  client: 'pg',
  connection: {
    host : settings.host,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});


knex.where({last_name: args}).select("*").from("famous_people").asCallback(function (err, values) {
  if (err) {
    console.log(err);
  } else {
    length = values.length;
    id = values[0].id;
    first = values[0].first_name;
    last = values[0].last_name;
    date = values[0].birthdate.getDate();
    month = values[0].birthdate.getMonth() + 1;
    year = values[0].birthdate.getFullYear();
    console.log(`Found ${length} person(s) by the name '${args}'`);
    console.log(`- ${id}: ${first} ${last}, born '${year}/${month}/${date}' `)
  }
  knex.destroy();
})