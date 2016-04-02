var THREE = require('./three.min.js');
var Moon = require('./moon');

var Mars = function () {

};

Mars.prototype.makeMesh = function () {
	var geometry = new THREE.SphereGeometry( 0.6, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {
    color: 0xff0000
  } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.z = 20.24;

  return mesh;
};

Mars.prototype.makePivot = function () {
	var pivot = new THREE.Object3D();
	pivot.rotation.y = 0;

	return pivot;
}

Mars.makeAsChildOf = function (parent) {
	var mars = new Mars;

	var marsPivot = mars.makePivot();
	parent.add( marsPivot );

	var marsMesh = mars.makeMesh();
	marsPivot.add( marsMesh );
	var marsMoonPivots = []
	marsMoonPivots.push(Moon.makeAsChildOf({parent : marsMesh}));
	marsMoonPivots.push(Moon.makeAsChildOf({
		parent : marsMesh,
		initialRotation : 1 * Math.PI / 5
	}));

	return [marsPivot, marsMoonPivots];
}

module.exports = Mars;
