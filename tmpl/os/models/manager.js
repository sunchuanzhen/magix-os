var Magix = require('magix');
var Model = require('os/models/model');
var M = Magix.Manager.create(Model);
var Module = this;
M.add([{
    name: 'Apps',
    url: Magix.modulePath(Module, '@/apis/apps.json'),
    after: function(m) {
        var list = m.get('list', []);
        m.set('map', Magix.toMap(list, 'id'));
    }
}, {
    name: 'Tools',
    url: Magix.modulePath(Module, '@/apis/tools.json')
}]);
console.log(M);
Magix.View.merge({
    request: function() {
        var r = M.request();
        return this.capture(S.guid('r'), r);
    }
});
module.exports = M;