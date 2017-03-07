$(document).ready(() =>{


// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene();


var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

  // build scenes
new ScrollMagic.Scene({triggerElement: ".name"})
          .setTween(".name > div", {y: "80%", ease: Linear.easeNone})
          .addIndicators()
          .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".about"})
          .setTween(".about > div", {y: "80%", ease: Linear.easeNone})
          .addIndicators()
          .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".projects"})
          .setTween(".projects > div", {y: "80%", ease: Linear.easeNone})
          .addIndicators()
          .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".skills"})
          .setTween(".skills > div", {y: "80%", ease: Linear.easeNone})
          .addIndicators()
          .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".contact"})
          .setTween(".contact > div", {y: "80%", ease: Linear.easeNone})
          .addIndicators()
          .addTo(controller);


















});
