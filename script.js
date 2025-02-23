let rating = document.querySelectorAll(".rating")
for (let i of rating) {
    if (Number(i.textContent) < 5.00) {
        i.style.background = "#cb3f36"
    } else if (Number(i.textContent) >= 5.00 && Number(i.textContent < 7.00)) {
        i.style.background = "#89cb36"
    } else {
        i.style.background = "#4bcb36"
    }
}

let kartoffilm2 = document.querySelectorAll(".kart")
for (let i of kartoffilm2) {

}

let button = document.getElementById("button")
let nowkinomain = document.querySelector(".now-kino-main")
button.addEventListener("click", function () {
    if (button.textContent == "Все новинки") {
        button.textContent = "Скрыть"
        nowkinomain.classList.add("showallfilms")
        nowkinomain.classList.remove("hideallfilms")
    } else {
        nowkinomain.classList.remove("showallfilms")
        nowkinomain.classList.add("hideallfilms")
        button.textContent = "Все новинки"
        
    }
})

let likes = document.getElementById("likes")
let dislikes = document.getElementById("dislikes")
let likescounter = document.getElementById("likescounter")
let dislikescounter = document.getElementById("dislikescounter")
let likeimg = document.getElementById("likeimg")
let dislikeimg = document.getElementById("dislikeimg")
likes.addEventListener("click", function () {
    likescounter.textContent = Number(likescounter.textContent) + 1
    likeimg.style.filter = "invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)"
})

dislikes.addEventListener("click", function () {
    dislikescounter.textContent = Number(dislikescounter.textContent) + 1
    dislikeimg.style.filter = "brightness(0) saturate(100%) invert(24%) sepia(88%) saturate(7450%) hue-rotate(357deg) brightness(97%) contrast(119%)"
})

let signinbutton = document.querySelector(".header-login")
let body = document.body
let signin = document.querySelector(".signin")
let closebutton = document.querySelector(".signin-close-button")
signinbutton.addEventListener("click", function () {
    signin.style.display = "block"
    signin.classList.toggle("showsignin")
    signin.classList.remove("hidesignin")
    closebutton.addEventListener("click", function () {
        signin.classList.remove("showsignin")
        signin.classList.add("hidesignin")
        let interval = setInterval(function () {
            if (getComputedStyle(signin).opacity == 0) {
                clearInterval(interval)
                signin.style.display = "none"
            }
        }, 100)
        // signin.style.display = test
    })
})
// closebutton
let privacypolicylink = document.querySelector(".other-info button")
let privacypolicywindow = document.querySelector(".privacy-policy-window")
let closebutton2 = document.querySelector(".signin-close-button2")
privacypolicylink.addEventListener("click", function () {
    privacypolicywindow.style.display = "block"
    privacypolicywindow.classList.toggle("showsignin")
    privacypolicywindow.classList.remove("hidesignin")
    closebutton2.addEventListener("click", function () {
        privacypolicywindow.classList.remove("showsignin")
        privacypolicywindow.classList.add("hidesignin")
        let interval = setInterval(function () {
            if (getComputedStyle(privacypolicywindow).opacity == 0) {
                clearInterval(interval)
                privacypolicywindow.style.display = "none"
            }
        }, 100)
    })
})
