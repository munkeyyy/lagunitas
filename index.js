window.onload = function () {
  var tl = gsap.timeline({
    trigger: ".cont-1",
    start: "100% 90%",
    end: "50% 50%",
      delay: "0.5",

    scrub: true,
  });

  tl.from(
    "#title",
    {
      opacity: "0",
      y: "-100px",
    },
    "sa"
  );
  tl.from(
    "#bottle",
    {
      rotate: "25deg",
      opacity: "0",
      duration: "1",
      // delay:"0.05"
    },
    "sa"
  );
};

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cont-2",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
  },
});

tl1.to("#bottle", {
  top: "88%",
  rotate: "0deg",
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cont-3",
    start: "7% 90%",
    end: "50% 50%",
    scrub: true,
  },
});

tl2.to("#bottle", {
  top: "228%",
  right: "8%",
  width: "20%",
});
