const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function circle(Xscale,Yscale){
    window.addEventListener("mousemove", function(e){
        document.querySelector("#minicircle").style.transform=`translate(${e.clientX}px,${e.clientY}px) scale(${Xscale},${Yscale})`
    })
}
circle(1,1)

function firstpageanimation(){
    var t1 = gsap.timeline();
    t1.from("#nav",{
            y:-10,
            opacity:0,
            duration:1.5,
            ease: Expo.easeInOut,
    }).to(".subtext",{
        y:-1,
        ease:Expo.easeInOut,
        duration:2,
        stagger:0.2,
        delay:-1,
    }).from("#footer",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        delay:-1,
    });

}
firstpageanimation()

var timeout;

function bounce(){
    var xscale = 1;
    var yscale = 1;

    var xprev =0;
    var yprev =0;

    window.addEventListener("mousemove", function(dets) {
        this.clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circle(xscale, yscale);

        timeout =this.setTimeout(function () {
            document.querySelector("#minicircle").style.transform= `translate(${dets.clientX}px, ${dets.clientY}px), scale(1,1)`
        }, 100);
    })
}
bounce()
circle()

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate =0;
    var diffrot=0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity:0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function(dets){
        var diff= dets.clientY - elem.getBoundingClientRect().top;
        rotate = dets.clientX;
        diffrot = dets.clientX - rotate;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20,diffrot * 0.5),
        })
    })
})