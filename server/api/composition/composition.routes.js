var composition = require('./composition.controller');

module.exports = function (router) {
  router.post('/comps', composition.create);
  router.get('/comps', composition.list);
  router.get('/comps/:id', composition.unique);
  router.put('/comps/:id', composition.update);
  router.delete('/comps/:id', composition.remove);
}