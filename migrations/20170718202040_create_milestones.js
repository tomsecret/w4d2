
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.string('description');
      table.date('date_achieved');
      table.integer('id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};

// exports.up = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.table('milestones', function(table){
//       table.integer('famous_people_id');
//       table.foreign('famous_people_id').references('famous_people.id')
//     })
//   ])
// };

// exports.down = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.dropTableIfExists('milestones')
//   ])
// };