News = new Meteor.Collection('news');

News.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
        return !! userId;
    },
    remove: function(userId, doc) {
        // only allow posting if you are logged in
        return !! userId;
    }
});