function locomotiveJS() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#study-sync"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#study-sync" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#study-sync", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#study-sync").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

locomotiveJS()

// let user = setTimeout(function () {
//     alert("Accept All Cookies")
// }, 10000)

var typed = new Typed('#element', {
    strings: ['Seamless Learning for Your <span class="Green">Brighter Futures</span>', 'Learn to code with StudySync', 'Our innovative platform offers an', 'effortless and seamless approach to learning,', 'empowering students of all ages to achieve brighter futures.', 'Browse courses and find out the best course for you. Its free!', 'StudySync is my attempt to teach basics and those coding', 'techniques to people in short time which took me ages to learn.', '&amp; here I will teach you', 'Basic &amp; Advanced Programming Languages like : ', 'HTML, CSS, JAVASCRIPT, PHP', 'SCALA, RUBY, C++, JAVA, &amp; C Language', '&amp; Some Frameworks Like ;', 'React, Angular &amp; Vue.Js', 'Seamless Learning for Your <span class="Green">Brighter Futures</span>'],
    typeSpeed: 90,
    // delay:7
});

var tl = gsap.timeline()
tl.from("#loader h3", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

tl.to("#loader h3", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.1
})

tl.to("#loader", {
    opacity: 0
})

tl.to("#loader", {
    display: "none"
})

tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5
})