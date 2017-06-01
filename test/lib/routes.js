Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    this.route('news', {path: "/"});
    this.route('newsWrite', {path: "/news_write"});
});

var requireLogin = function () {
    if (! Meteor.user()) {
        this.render('AccessDenied');
        this.stop();
    }
}

Router.before(requireLogin, {only: 'newsWrite'});