Template.newsWrite.events({
    'submit form': function (e) {
        e.preventDefault();
        console.log('News speichert');
        var post = {
            title: $(e.target).find('[name=titel]').val(),
            text: $(e.target).find('[name=nachricht]').val()
        }
        post._id = News.insert(post);
        Router.go('news');
    }
})