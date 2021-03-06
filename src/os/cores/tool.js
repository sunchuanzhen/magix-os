KISSY.add("os/cores/tool",function(S,Magix ,XTmpl ){

return Magix.View.extend({
    tmpl:"{{#each list}}\r\n<div mx-vframe=\"true\" mx-view=\"{{view}}\" class=\"item\" style=\"right:{{right}}px;{{#if top}}top:{{top}}{{else}}bottom:{{bottom}}{{/if}}px;width:{{width}}px;height:{{height}}px\"></div>\r\n{{/each}}",
    render: function() {
        var me = this;
        me.request().all({
            name: 'Tools'
        }, function(e, m) {
            var html = new XTmpl(me.tmpl).render({
                list: m.get('list', [])
            });
            me.setHTML(me.id, html);
        });
    }
});},{requires:['magix','xtemplate']});