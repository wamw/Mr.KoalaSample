const dateformat = require('dateformat'),
      Model = require('objection').Model,
      QueryBuilder = require('objection').QueryBuilder;


class User extends Model {

  static get tableName() { return 'users'; }
  static get omitProperties() { return ['password']; }


  $beforeInsert() {
    // サーバーのtimezone を Asia/Tokyo にする必要がある
    this.created_at = dateformat(new Date(), 'yyyy/mm/dd HH:MM:ss');
    this.updated_at = dateformat(new Date(), 'yyyy/mm/dd HH:MM:ss');
  }

  $beforeUpdate() {
    // サーバーのtimezone を Asia/Tokyo にする必要がある
    this.updated_at = dateformat(new Date(), 'yyyy/mm/dd HH:MM:ss');
  }
}


class UserQueryBuilder extends QueryBuilder {
  useOmit() {
    return this.omit(User.omitProperties);
  }
}


User.QueryBuilder = UserQueryBuilder;
User.RelatedQueryBuilder = UserQueryBuilder;

module.exports = User;
