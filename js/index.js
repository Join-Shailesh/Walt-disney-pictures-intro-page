$(window).load(function() {
  

  var speed = 2;
  var particles = [];
  var body = $('body');
  var w = body.width();
  var h = body.height();
  
  var camera = new THREE.PerspectiveCamera(85, w / h, 1, 4000);
  var scene = new THREE.Scene();
  camera.position.z = 1000;
  scene.add(camera);
  var renderer = new THREE.CanvasRenderer({ alpha: true });
  renderer.setClearColorHex( '#ffffff', 0 );
  renderer.setSize(w, h);
    var sad;
    sad = $('#starbg');
  sad.append(renderer.domElement);
  
  createParticles();
  update();

  function createParticles() {
    var particle, material;
    for (var zpos = -1000; zpos < 1000; zpos += 5) {
      material = new THREE.ParticleCanvasMaterial({
        color: 0xF7E4BE,
        program: function(c){
          c.beginPath();
          c.arc(0, 0, .8, 0, Math.PI * 2, true);
          c.fill();
        }
      });
      particle = new THREE.Particle(material);
      particle.position.x = Math.random() * 1000 - 500;
      particle.position.y = Math.random() * 1000 - 500;
      particle.position.z = zpos;
      particle.scale.x = particle.scale.y = 1;
      scene.add(particle);
      particles.push(particle);
    }
  }
  
  function update() {
    requestAnimationFrame( update);  
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      particle.position.z += speed;
      if (particle.position.z > 1000) particle.position.z -= 2000;
        }
    renderer.render(scene, camera);
  }
   $('#FireworkClincs').fireworks();
});
