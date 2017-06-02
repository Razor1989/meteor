Template.mitarbeiterErstellen.events({
    'submit form': function (e) {
        e.preventDefault();
        var post = {
            username: $(e.target).find('[name=login]').val(),
            password: $(e.target).find('[name=pass]').val(),
            vorname: $(e.target).find('[name=vorname]').val(),
            nachname: $(e.target).find('[name=nachname]').val(),
            email: $(e.target).find('[name=email]').val()
        }
        console.log(post);
        Vorlagen.insert(post);
        Router.go('mitarbeiter');


    }
})