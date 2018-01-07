
exports.up = function(knex, Promise) {
  return Promise.all([
    // Create uers tables based on the user model in README
    knex.schema.createTable('users', (table) => {
      table.uuid('id').notNullable().unique().primary();
      table.timestamps();
      table.string('email').notNullable().unique();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('avatar');
      table.integer('age').notNullable().unsigned();
    }),

    // Create categories tables based on the category model in README
    knex.schema.createTable('categories', (table) => {
      table.uuid('id').notNullable().unique().primary();
      table.timestamps();
      table.string('title').notNullable().unique();
    }),

    // Create consequences tables based on the consequence model in README
    knex.schema.createTable('consequences', (table) => {
      table.uuid('id').notNullable().unique().primary();
      table.timestamps();
      table.string('description').notNullable().unique();
      table.uuid('category_id').notNullable()
      table.foreign('category_id').references('categories.id').onDelete('RESTRICT')
      table.uuid('user_id').notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('consequences'),
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('users'),
  ]);
};
