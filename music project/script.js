let sidenav = document.getElementById("sidenav")
let myimage = document.getElementById("menu")

function right() {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0px"
        myimage.src = "close.png"


    } else {
        sidenav.style.right = "-250px"
        myimage.src = "menu.png"
    }
}
let a = document.getElementById("mymusic")
let menu = document.getElementById("mysong")
function arjit() {
    if (a.paused) {
        a.play()
        menu.src = "pause.png"
    } else {
        a.pause()
        menu.src = "play.png"
    }
}

let b = document.getElementById("jb")
let jb = document.getElementById("song1")
function justin() {
    if (b.paused) {
        b.play()
        jb.src = "pause.png"
    } else {
        b.pause()
        jb.src = "play.png"
    }

}
let c = document.getElementById("zayn")
let zayn = document.getElementById("song2")
function zaynmalik() {
    if (c.paused) {
        c.play()
        zayn.src = "pause.png"
    } else {
        c.pause()
        zayn.src = "play.png"
    }

}
let d = document.getElementById("arman")
let arman = document.getElementById("song3")
function am() {
    if (d.paused) {
        d.play()
        arman.src = "pause.png"
    } else {
        d.pause()
        arman.src = "play.png"
    }

}

let f = document.getElementById("artist-of")

let artist = document.getElementById("artist")
function bgcolor(color) {
    artist.style.backgroundColor = color;
    if (color == "black") {
        f.style.color = "white";


    } else {
        f.style.color = "black";

    }

}