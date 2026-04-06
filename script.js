window.addEventListener("load", function() {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    // DESKTOP
    mm.add("(min-width:601px)", () => {
        let tl = gsap.timeline();
        tl.from("nav h1, nav h4, nav button", { y:-40, opacity:0, duration:0.8, stagger:0.2 });
        tl.from(".center-part1 h1", { x:-500, opacity:0, duration:0.7 });
        tl.from(".center-part1 p", { x:-400, opacity:0, duration:0.5 });
        tl.from(".center-part1 button", { y:100, opacity:0, duration:0.5 });
        tl.from(".center-part2 img", { x:500, opacity:0, duration:0.8 }, "-=0.5");

        let tl2 = gsap.timeline({
            scrollTrigger: { trigger: ".section2", start:"top 60%", end:"top 10%", scrub:2 }
        });
        tl2.from(".section1boyyom img", { y:50, opacity:0, duration:0.9, stagger:0.15 });
        tl2.from(".services h3", { x:-30, opacity:0, duration:0.4 });
        tl2.from(".services p", { x:30, opacity:0, duration:0.4 });
        tl2.from(".elem.left", { x:-300, opacity:0, duration:1, stagger:0.2 });
        tl2.from(".elem.right", { x:300, opacity:0, duration:1, stagger:0.2 });
        tl2.from(".elem.down", { y:80, opacity:0, duration:1, stagger:0.2 });

        let tl3 = gsap.timeline({
            scrollTrigger: { trigger: ".case", start:"top 80%", end:"bottom 10%", scrub:1.2 }
        });
        tl3.from(".case h3", { x:-30, opacity:0, duration:1, ease:"power2.out" });
        tl3.from(".case p", { x:30, opacity:0, duration:0.8, ease:"power2.out" });
        tl3.from(".section4", { y:300, opacity:0, duration:1, ease:"power2.out" });
        tl3.from(".footer p", { x:-300, opacity:0, duration:0.9, stagger:0.2, ease:"power2.out" });
        tl3.from(".footer h4", { x:300, opacity:0, duration:1, ease:"power2.out" });
    });

    // MOBILE
    mm.add("(max-width:600px)", () => {
        let tl = gsap.timeline();
        tl.from("nav h1, nav h4, nav button", { y:-20, opacity:0, duration:0.5, stagger:0.1 });
        tl.from(".center-part1 h1", { x:-150, opacity:0, duration:0.5 });
        tl.from(".center-part1 p", { x:-100, opacity:0, duration:0.4 });
        tl.from(".center-part1 button", { y:50, opacity:0, duration:0.4 });
        tl.from(".center-part2 img", { x:100, opacity:0, duration:0.5 }, "-=0.3");

        let tl2 = gsap.timeline({
            scrollTrigger: { trigger: ".section2", start:"top 80%", end:"bottom 40%", scrub:0.5 }
        });
        tl2.from(".section1boyyom img", { y:20, opacity:0, duration:0.4 });
        tl2.from(".services h3", { x:-20, opacity:0, duration:0.3 });
        tl2.from(".services p", { x:20, opacity:0, duration:0.3 });
        // Skip heavy elem animations for smoother mobile
        tl2.from(".elem.left", { x:-50, opacity:0, duration:0.5, stagger:0.1 });
        tl2.from(".elem.right", { x:50, opacity:0, duration:0.5, stagger:0.1 });
        tl2.from(".elem.down", { y:50, opacity:0, duration:0.9, stagger:0.1 });

        let tl3 = gsap.timeline({
            scrollTrigger: { trigger: ".case", start:"top 80%", end:"bottom 20%", scrub:0.8 }
        });
        tl3.from(".case h3", { x:-20, opacity:0, duration:0.5 });
        tl3.from(".case p", { x:20, opacity:0, duration:0.4 });
        tl3.from(".section4", { y:150, opacity:0, duration:0.6 });
        tl3.from(".footer p", { x:-150, opacity:0, duration:0.5, stagger:0.1 });
        tl3.from(".footer h4", { x:150, opacity:0, duration:0.5 });
    });
});