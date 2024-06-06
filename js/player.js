class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album);
        this.createDropdown();
    }
    createDropdown = function() {
        let _select = document.querySelector('#albums');
        let _options = "";
        this.albums.forEach(album => {
            let albumID = album.title.toLowerCase().split(" ").join("_");
            _options += `<option id="${ albumID }" >${ album.title }</option>`;
        });

        console.log(_options);
        _select.innerHTML = _options;
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

let albumsArr = [
    {
        artist: 'Operation Ivy',
        album: 'Energy'
    },
    {
        artist: 'Blink 182',
        album: 'Dude Ranch'
    },
    {
        artist: 'New Found Glory',
        album: 'Sticks and Stones'
    }
];

let albums = []
var jbox = new Jukebox();

for(let i = 0; i < albumsArr.length; i++) {
    albums[i] = new Album(albumsArr[i]['artist'], albumsArr[i]['album']);
    jbox.addAlbum(albums[i]);
}

// const album1 = new Album('Operation Ivy', 'Energy')
// const album2 = new Album('Blink 182', 'Dude Ranch')
// const album3 = new Album('New Found Glory', 'Sticks and Stones')

// jbox.addAlbum(album1)
// jbox.addAlbum(album2)
// jbox.addAlbum(album3)

document.querySelector("#play").addEventListener('click', function(e){
    let albumIndex = document.querySelector('#albums').selectedIndex;
    albums[albumIndex].play();
    document.querySelector('#favoriteAlbum').innerText = `Your favorite album is: ${jbox.favoriteAlbum()}`
});

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()

document.querySelector('#favoriteAlbum').innerText = `Your favorite album is: ${jbox.favoriteAlbum()}`