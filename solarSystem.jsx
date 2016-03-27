var React = require('react');
var THREE = require('./js/OrbitControls');

var Sun = require('./js/sun');
var Mercury = require('./js/mercury');
var Venus = require('./js/venus');
var Earth = require('./js/earth');
var Mars = require('./js/mars');


var SolarSystem = React.createClass({
  componentDidMount: function() {

    var parent, renderer, scene, camera, controls;

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById('container').appendChild( renderer.domElement );

  	scene.add( new THREE.AxisHelper( 20 ) );

    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 200 );
    camera.position.set( 20, 20, 20 );
    camera.lookAt(new THREE.Vector3(0,0,0));

  	parent = new THREE.Object3D();
  	scene.add( parent );

    Sun.makeAsChildOf(parent);
    var mercuryPivot = Mercury.makeAsChildOf(parent);
    var venusPivot = Venus.makeAsChildOf(parent);
    var earthPivots = Earth.makeAsChildOf(parent);
    var earthPivot = earthPivots[0], earthMoonPivot = earthPivots[1];
    var marsPivots = Mars.makeAsChildOf(parent);
    var marsPivot = marsPivots[0], marsMoonPivots = marsPivots[1];

    //venusPivot.add(camera);

    controls = new THREE.OrbitControls( camera );
    controls.minDistance = 10;
    controls.maxDistance = 50;

    function animate() {

      requestAnimationFrame( animate );
      parent.rotation.y += 0.01;
      mercuryPivot.rotation.y += 0.02;
      marsPivot.rotation.y += 0.01;
      earthMoonPivot.rotation.y += 0.05;
      marsMoonPivots.forEach( function (pivot) { pivot.rotation.y += 0.05; } )
      controls.update();
      renderer.render( scene, camera );

    }
    animate();
  },

  render: function () {
    return <div id='container'></div>;
  }
});

module.exports = SolarSystem;
