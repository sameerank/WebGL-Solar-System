var THREE = require('./three.min.js');

var Mercury = function () {

};

Mercury.prototype.makeMesh = function () {
	var geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {
    color: 0xf4a460
  } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.z = 7;

  return mesh;
};

Mercury.prototype.makePivot = function () {
	var pivot = new THREE.Object3D();
	pivot.rotation.y = 0;

	return pivot;
};

Mercury.makeAsChildOf = function (parent) {
	var mercury = new Mercury;

	var mercuryPivot = mercury.makePivot();
	parent.add( mercuryPivot );

	var mercuryMesh = mercury.makeMesh();
	mercuryPivot.add( mercuryMesh );

	return mercuryPivot;
}

module.exports = Mercury;
