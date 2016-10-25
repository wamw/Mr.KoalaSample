
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').whereIn('id', [1, 2, 3, 4]).del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'ohtani', password: 'hogehoge'}),
        knex('users').insert({id: 2, username: 'onogawa', password: 'hogehoge'}),
        knex('users').insert({id: 3, username: 'suzuki', password: 'hogehoge'}),
        knex('users').insert({id: 4, username: 'takayama', password: 'hogehoge'})
      ]);
    });
};
