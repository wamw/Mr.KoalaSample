const auth = require('mr-koala').auth,
      resources = require('mr-koala').resources,
      ModelUser = require('../models/user.js'),
      config = require('../config.js');


resources.override('/token', 'post', {
  * response(context) {
    const user = yield ModelUser.query()
                                .where('username', context.request.body.username)
                                .where('password', context.request.body.password)
    if (!user.length) {
      context.throw('Forbidden', 403);
    }
    context.status = 200;
    token = auth.jwtSign({ id: user[0].id });
    return { token: token };
  }
});


resources.override('/users', 'get', {
  * response(context) {
    context.status = 200;
    const page = context.params.page || 0;
    const pageSize = context.params.pageSize || 2;
    const users = yield ModelUser.query()
                                 .useOmit()
                                 .page(page, pageSize);
    return users.results;
  }
});


resources.override('/users', 'post', {
  * response(context) {
    context.status = 201;
    const user = yield ModelUser.query()
                                .useOmit()
                                .insert(context.request.body);
    return user;
  }
});


resources.override('/users/:id', 'get', {
  * response(context) {
    context.status = 200;
    const user = yield ModelUser.query()
                                .useOmit()
                                .findById(context.params.id);
    return user;
  }
});


resources.override('/users/:id', 'put', {
  * response(context) {
    context.status = 200;
    const user = yield ModelUser.query()
                                .useOmit()
                                .updateAndFetchById(context.params.id, context.request.body);
    return user;
  }
});


resources.override('/users/:id', 'patch', {
  * response(context) {
    context.status = 200;
    const user = yield ModelUser.query()
                                .useOmit()
                                .patchAndFetchById(context.params.id, context.request.body);
    return user;
  }
});


resources.override('/users/:id', 'delete', {
  * response(context) {
    context.status = 204;
    const result = yield ModelUser.query()
                                  .deleteById(context.params.id);
    return;
  }
});
