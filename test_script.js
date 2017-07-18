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
  client.query("SELECT * from famous_people where first_name ='Abraham'", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(typeof(result.rows[0].last_name)); //output: 1
    client.end();
  });
});