var THREE = require('./three.min.js');

var Sun = function () {

};

Sun.prototype.makeMesh = function () {
	var geometry = new THREE.SphereGeometry( 5, 32, 32 );;
  var material = new THREE.MeshBasicMaterial( {
    color: 0xffff00
  } );

  return new THREE.Mesh( geometry, material );
};

Sun.makeAsChildOf = function (parent) {
	var sun = new Sun;

	var sunMesh = sun.makeMesh();
	parent.add( sunMesh );
}


module.exports = Sun;
