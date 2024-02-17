// JavaScript Document
var container = document.getElementById('animmasc');
      // Set up our animation 

      var animData = {
          container: container,
          renderer: 'svg',
          autoplay: true,
          loop: true,
          path : 'animacionmascota.json'
      };
      var anim = bodymovin.loadAnimation(animData);