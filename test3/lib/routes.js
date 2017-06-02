Router.configure({
    layoutTemplate: 'layout'
})

Router.map(function(){
    this.route('ueberblick', {path: "/"});
    this.route('mitarbeiter', {path: "/mit"})
    this.route('mitarbeiterErstellen', {path: "/mit_erstellen"})
    this.route('mitarbeiterVorlageErstellen', {path: "/mit_vorlagen"})
    this.route('BenutzerVorlagenAnzeigen', {path: "/vorlagen"})
})