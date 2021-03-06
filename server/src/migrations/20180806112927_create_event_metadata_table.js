/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('event_metadata', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull();
    table.string('client_id');
    table.string('browser');
    table.string('os');
    table.string('user_id');
    table.string('user_name');
    table.string('user_email');
    table.string('user_info', 1000);
    table.string('ip_address');
    table.string('page_path');
    table.string('device');
    table.json('location').nullable(); // have longitude and lattitude as serialized data
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('event_metadata');
}
