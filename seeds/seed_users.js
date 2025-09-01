exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  // Insert seed entries
  await knex('users').insert([
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' }
  ]);
};
