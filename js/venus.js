var THREE = require('./three.min.js');

var Venus = function () {

};

Venus.prototype.makeMesh = function () {
	var geometry = new THREE.SphereGeometry( 0.8, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {
    color: 0xffa500
  } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.z = 12.23;

  return mesh;
};

Venus.prototype.makePivot = function () {
	var pivot = new THREE.Object3D();
	pivot.rotation.y = 2 * Math.PI / 3;

	return pivot;
};

Venus.makeAsChildOf = function (parent) {
	var venus = new Venus;

	var venusPivot = venus.makePivot();
	parent.add( venusPivot );

	var venusMesh = venus.makeMesh();
	venusPivot.add( venusMesh );

	return venusPivot;
}


module.exports = Venus;
