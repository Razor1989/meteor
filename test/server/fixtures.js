if (News.find().count() == 0) {
    News.insert({
        title: 'Erste Test Nachricht',
        text: 'Deies ist eine Test Nachricht'
    })
    News.insert({
        title: 'Zweite Test Nachricht',
        text: 'Deies ist eine Test Nachricht'
    })
    News.insert({
        title: 'Dritte Test Nachricht',
        text: 'Deies ist eine Test Nachricht'
    })
}
