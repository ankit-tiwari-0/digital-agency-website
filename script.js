function app(){
    var tl =gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-40,
    duration:0.8,
    delay:1,
    opacity:0,
    stagger:0.2
})

tl.from(".center-part1 h1",{
    x:-500,
    opacity:0,
    duration:0.7
})
tl.from(".center-part1 p",{
    x:-400,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 button",{
    y: 100,
    opacity:0,
    duration:0.5
})
tl.from(".center-part2 img",{
    x:500,
    opacity:0,
    duration:0.8
}, "-=0.5" )}


app()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
       start: "top 60%", 
        end: "top 10%",
        scrub: 2,
    
    
    }
})
tl2.from(".section1boyyom img",{
    y:50,
    opacity:0,
    duration:0.9,
    stagger:0.15
} )

tl2.from(".services h3",{
    x:-30,
    opacity:0,
    duration:0.4
    
})
tl2.from(".services p",{
    x:30,
    opacity:0,
    duration:0.4
   
})
tl2.from(".elem.left",{
    x:-300,
    opacity:0,
    duration:1,
     stagger: 0.2
   
})
tl2.from(".elem.right",{
    x:300,
    opacity:0,
    duration:1,
     stagger: 0.2
   
})
tl2.from(".elem.down",{
    y:80,
    opacity:0,
    duration:1,
     stagger: 0.2
   
})

// =======================
// Section 3 & 4 + Footer Animation
// =======================
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".case",      // Section 3 trigger
        start: "top 80%",      // Animation starts when top of .case hits 80% of viewport
        end: "bottom 10%",     // End at bottom of section
        scrub: 1.2,            // Smooth scrolling
    }
});

// Section 3 - .case
tl3.from(".case h3", { 
    x: -30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});
tl3.from(".case p", {
    x: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});

// Section 4
tl3.from(".section4", {
    y: 300,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

// Footer
tl3.from(".footer p", {
    x: -300,
    opacity: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: "power2.out"
});
tl3.from(".footer h3", {
    x: 300,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});