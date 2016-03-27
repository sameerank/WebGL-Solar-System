var THREE = require('./three.min.js');
require('./jquery-1.12.2.min.js');

var Moon = function (paramsOptions) {
	this.params = paramsOptions
};

Moon.prototype.makeMesh = function () {
	var geometry = new THREE.SphereGeometry( 0.2, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {
    color: 0xffffff
  } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.z = this.params.distanceFromPlanet;

  return mesh;
};

Moon.prototype.makePivot = function () {
	var pivot = new THREE.Object3D();
	pivot.rotation.y = this.params.initialRotation;

	return pivot;
};

Moon.makeAsChildOf = function (paramsOptions) {

	var params = {
				distanceFromPlanet : 1.4,
				initialRotation : 3 * Math.PI / 5
    };
	
  for (var attrName in paramsOptions) {
    params[attrName] = paramsOptions[attrName];
  }

	var moon = new Moon(params);

	var moonPivot = moon.makePivot();
	params.parent.add( moonPivot );

	var moonMesh = moon.makeMesh();
	moonPivot.add( moonMesh );

	return moonPivot;
}

module.exports = Moon;
