function init() {
  gsap.registerPlugin(ScrollTrigger);
}

init();


console.log("Text");

gsap.fromTo(
  ".hero .hero-name , .hero .hero-role",
  {
    opacity: 0,
    scale: 0.7,
    x: -100,
    delay: 0.3,
    duration: 1.5,
    ease: "power4.out",
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    delay: 0.3,
    duration: 1.5,
    ease: "power4.out",
  }
);


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section .hero-role",
    start: "top 50%",
    end: "top 70%",
    scrub: 3,
    toggleActions: "play reverse play reverse",
    // markers: true, // Uncomment for debugging
    
  },
});

tl.to(
  ".hero-section .hero-name",
  {
    x: "-10%",
  },
  "anim"
);

tl.to(
  ".hero-section .hero-role",
  {
    x: "10%",
  },
  "anim"
);

document.querySelectorAll(".fade-in").forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%", // Adjust start position
      end: "top 60%",
      scrub: true,
    },
  });
});

// Projects Section Start
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 50%",
    end: "top 30%",
    scrub: 5,
    // markers: true, // Uncomment for debugging
  },
});
tl2
  .fromTo(
    ".sm-title",
    {
      x: "-10%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
    }
  )
  .to(
    ".box",
    {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5"
  );

function getCursorSize() {
  if (window.innerWidth <= 768) {
    // Example breakpoint for mobile
    return { width: "210px", height: "140px" };
  } else {
    return { width: "540px", height: "370px" };
  }
}
var crsr = document.querySelector(".cursor");
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    var size = getCursorSize();
    crsr.style.width = size.width;
    crsr.style.height = size.height;
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});

// Projects Section End


// Skills Section End
gsap.utils.toArray('.single-data').forEach((element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 80%", // Adjust based on when you want the animation to start
      end: "top 60%",
      scrub: 2, // Add slight scroll scrubbing for smoother effect
      toggleActions: "play reverse play reverse",
    },
  });

  tl.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }
  )
  .fromTo(
    element.querySelector('.left-block'),
    {
      left: '-10%',
    },
    {
      left: '0%',
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.6' // Overlap with the previous animation
  ).fromTo(
    element.querySelector('.right-block'),
    {
      left: '10%',
    },
    {
      left: '0%',
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.6' // Overlap with the previous animation
  ).fromTo(
    element.querySelectorAll('.skills-list li'),
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2, // Animate each <li> with a delay
      ease: "power3.out",
    },
    '-=0.4' // Slight overlap with the previous animation
  );
  
});
