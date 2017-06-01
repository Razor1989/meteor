Router.configure({
    layoutTemplate: 'layout'
})

Router.map(function(){
    this.route('ueberblick', {path: "/"});
    this.route('mitarbeiter', {path: "/mit"})
    this.route('mitarbeiterErstellen', {path: "/mit_erstellen"})
})