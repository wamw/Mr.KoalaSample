const resources = require('mr-koala').resources,
      ModelUser = require('../models/user.js');


resources.override('/users/:id', 'get', {
  * response(context) {
    // HACK-ME:10 password を返さないようにする
    const user = yield ModelUser.query()
                                .omit(['password'])
                                .findById(context.params.id)
                                .then(function(result) { return result; });
    return user;
  }
});


resources.override('/users/:id', 'put', {
  * response(context) {
    // HACK-ME:10 password を返さないようにする
    const user = yield ModelUser.query()
                                .omit(['password'])
                                .updateAndFetchById(context.params.id, context.request.body)
                                .then(function(result) { return result; });
    return user;
  }
});


resources.override('/users/:id', 'patch', {
  * response(context) {
    // HACK-ME:10 password を返さないようにする
    const user = yield ModelUser.query()
                                .omit(['password'])
                                .patchAndFetchById(context.params.id, context.request.body)
                                .then(function(result) { return result; });
    return user;
  }
});


resources.override('/users/:id', 'delete', {
  * response(context) {
    const result = yield ModelUser.query()
                                .deleteById(context.params.id)
                                .then(function(result) { return result; });
    return;
  }
});


resources.override('/users', 'get', {
  * response(context) {
    const page = context.params.page || 0;
    const pageSize = context.params.pageSize || 2;
    // HACK-ME:0 password を返さないようにする
    const users = yield ModelUser.query()
                                 .omit(['password'])
                                 .page(page, pageSize)
                                 .then(function(result) { return result; });
    return users.results;
  }
});


resources.override('/users', 'post', {
  * response(context) {
    // HACK-ME:0 password を返さないようにする
    // TODO: insert 時に created_at と updated_at が返らない
    const user = yield ModelUser.query()
                                .omit(['password'])
                                .insert(context.request.body)
                                .then(function(user) { return user; });
    return user;
  }
});
