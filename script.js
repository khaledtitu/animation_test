var countIcons = 0
var beforeMap = document.getElementById("beforeMap")
var afterMap = document.getElementById("afterMap")
var afterBg = document.getElementById("afterBg")
var beforeBg = document.getElementById("beforeBg")
var textBefore = document.getElementById("textBefore")
var textAfter = document.getElementById("textAfter")
var afterAllEfect = document.getElementById("afterAllEfect")
var icon1 = document.getElementById("icon1")
var icon2 = document.getElementById("icon2")
var icon3 = document.getElementById("icon3")
var icon4 = document.getElementById("icon4")
function init() {
    initialEffects()
    startDragEvent()
}
function initialEffects() {
    gsap.to(textBefore, 0.8, {
        delay: 0.1,
        opacity: 1,
        transform: "matrix(1, 0, 0, 1, 1, 1)",
        ease: Back.easeOut.config(1.5)
    })
    gsap.to(icon1, 0.9, {
        duration: 1,
        epeatDelay: 0.9,
        delay: 0.1,
        transform: "matrix(1, 0, 0, 1, 0, 1)",
        repeat: -1, 
        yoyo: true,
        ease:Linear.easeNone,
        boxShadow: "0px 0px 1px 1px rgba(255,255,255,0.65)"
    })
    gsap.to(icon2, 0.6, {
        duration: 1,
        epeatDelay: 0.9,
        delay: 0.1,
        transform: "matrix(1, 0, 0, 1, 0, 1)",
        repeat: -1, 
        yoyo: true,
        ease:Linear.easeNone,
        boxShadow: "0px 0px 1px 1px rgba(255,255,255,0.65)"
    })
    gsap.to(icon3, 0.6, {
        duration: 1,
        epeatDelay: 0.9,
        delay: 0.1,
        transform: "matrix(1, 0, 0, 1, 0, 1)",
        repeat: -1, 
        yoyo: true,
        ease:Linear.easeNone,
        boxShadow: "0px 0px 1px 1px rgba(255,255,255,0.65)"
    })
    gsap.to(icon4, 0.6, {
        duration: 1,
        epeatDelay: 0.9,
        delay: 0.1,
        transform: "matrix(1, 0, 0, 1, 0, 1)",
        repeat: -1, 
        yoyo: true,
        ease:Linear.easeNone,
        boxShadow: "0px 0px 1px 1px rgba(255,255,255,0.65)"
    })
}
function startDragEvent() {
    Draggable.create('.icons', {
        bounds: {
            top: 0,
            left: 0,
            width: 316,
            height: 280
        },
        onDragEnd: function() {
            if (this.hitTest("#beforeMap")) {
                console.log(this.target.id)
                hideShowIcons(this.target.id)
                countIcons++
                if (countIcons == 4) {
                    hideShowIcons("compleated")
                }
                gsap.to(this.target, 0.5, {
                    duration: 0.6, 
                    opacity:0, 
                    scale:0,
                    svgOrigin:"50% 50%"
                })
            }else{
                gsap.to(this.target, 0.5, {
                    x: "0px",
                    y: "0px",
                    duration: 0.6,
                    ease: Power3.easeOut
                })
            }
        }
    })
}
function hideShowIcons(iconsName) {
    switch (iconsName) {
        case "icon1":
            gsap.to(icon1, 0.6, {
                opacity: 0
            })
            break
        case "icon2":
            gsap.to(icon2, 0.6, {
                opacity: 0
            })
            break
        case "icon3":
            gsap.to(icon3, 0.6, {
                opacity: 0
            })
            break
         case "icon4":
            gsap.to(icon4, 0.6, {
                opacity: 0
            })
            break
        case "compleated":
            setTimeout(openAfterAllEfect, 300)
            break
    }
}
function openAfterAllEfect() {
    afterAllEfect.style.opacity = 1
    gsap.to(textAfter, 0.5, {
        delay: 0.2,
        opacity: 1,
        transform: "matrix(1, 0, 0, 1, 0, 0)",
        ease: Back.easeOut.config(1.7)
    })
    gsap.to(afterMap, 0.6, {
        width: 300,
        ease: Power3.easeInOut
    })
    gsap.to(beforeMap, 0.8, {
        opacity: 0
    })
    gsap.to(afterBg, 0.6, {
        opacity: 1,
        delay: 0.5,
        transform: "matrix(1, 0, 0, 1, 0, 0)",
        ease: Back.easeOut.config(1.7)
    });
    beforeBg.style.opacity = 0
}
init()