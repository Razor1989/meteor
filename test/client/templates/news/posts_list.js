Template.news.helpers({
    news: function () {
        return News.find();
    }
})

Template.news.events({
    'click [name="delete"]': function (e) {
        e.preventDefault();
        console.log(this._id);
        News.remove(this._id);
    }
})

