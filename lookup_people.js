var args = process.argv[2];

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * from famous_people where last_name = $1",[args], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    length = result.rows.length;
    id = result.rows[0].id;
    first = result.rows[0].first_name;
    last = result.rows[0].last_name;
    date = result.rows[0].birthdate.getDate();
    month = result.rows[0].birthdate.getMonth() + 1;
    year = result.rows[0].birthdate.getFullYear();
    console.log(`Found ${length} person(s) by the name '${args}'`);
    console.log(`- ${id}: ${first} ${last}, born '${year}/${month}/${date}' `)
    client.end();
  });
})
