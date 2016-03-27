var THREE = require('./three.min.js');
var Moon = require('./moon');

var Earth = function () {

};

Earth.prototype.makeMesh = function () {
	var geometry = new THREE.SphereGeometry( 0.8, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {
    color: 0x0000ff
  } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.z = 12;

  return mesh;
};

Earth.prototype.makePivot = function () {
	var pivot = new THREE.Object3D();
	pivot.rotation.y = 4 * Math.PI / 3;

	return pivot;
}

Earth.makeAsChildOf = function (parent) {
	var earth = new Earth;

	var earthPivot = earth.makePivot();
	parent.add( earthPivot );

	var earthMesh = earth.makeMesh();
	earthPivot.add( earthMesh );
	var earthMoonPivot = Moon.makeAsChildOf({parent : earthMesh});

	return [earthPivot, earthMoonPivot];
}

module.exports = Earth;
