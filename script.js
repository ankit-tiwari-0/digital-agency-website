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
    duration:0.5
}, "-=0.2" )
tl.from(".section1boyyom img",{
    y:50,
    opacity:0,
    duration:0.6,
    stagger:0.15
} )