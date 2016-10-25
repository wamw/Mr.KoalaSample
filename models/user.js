const Model = require('objection').Model;

// TODO: insert時に created_at を入れる
// TODO: update時に updated_at を更新する


class User extends Model {
  static get tableName() { return 'users'; }
  static get virtualAttributes() { return ['id', 'username', 'created_at', 'updated_at']; }
}

module.exports = User;
