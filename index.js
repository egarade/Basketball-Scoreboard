let home = 0;
let guest = 0;

let homeSc = document.getElementById("home-score")

function firstbtn() {
    home +=1
    homeSc.innerText = home
}

function secondbtn() {
    home +=2
    homeSc.innerText = home
}

function thirdbtn() {
    home +=3
    homeSc.innerText = home
}

let guestSc = document.getElementById("guest-score")

function guestfirstbtn() {
    guest +=1
    guestSc.innerText = guest
}

function guestsecondbtn() {
    guest +=2
    guestSc.innerText = guest
}

function guestthirdbtn() {
    guest +=3
    guestSc.innerText = guest
}