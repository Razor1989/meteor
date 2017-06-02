Template.mitarbeiterVorlageErstellen.events({
    'submit form': function (e) {
        e.preventDefault();
        var post = {
            username: $(e.target).find('[name=login]').val(),
            password: $(e.target).find('[name=pass]').val(),
            vorname: $(e.target).find('[name=vorname]').val(),
            nachname: $(e.target).find('[name=nachname]').val(),
            plz: $(e.target).find('[name=plz]').val(),
            ort: $(e.target).find('[name=ort]').val(),
            strasse: $(e.target).find('[name=strasse]').val(),
            nummer: $(e.target).find('[name=nummer]').val(),
            email: $(e.target).find('[name=email]').val(),
            user_id: ''
        }
        console.log(post);
        Vorlagen.insert(post);



    }
})