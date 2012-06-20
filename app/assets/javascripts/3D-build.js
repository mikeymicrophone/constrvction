var container, stats;

var holder;

var camera, scene, renderer;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var renderw = 400;
var renderh = 555;
var mousex, mousey, pmousex, pmousey, dx, dy;


function load(model, img) {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45, renderw / renderh, 1, 2000);
	camera.position.z = 100;
	scene.add(camera);

	var ambient = new THREE.AmbientLight(0x101030);
	scene.add(ambient);

	var directionalLight = new THREE.DirectionalLight(0xffeedd);
	directionalLight.position.set(70, 70, 100);
	//.normalize();
	scene.add(directionalLight);

	var directionalLight2 = new THREE.DirectionalLight(0xDDDEFF);
	directionalLight2.position.set(-70, 70, 100);
	//.normalize();
	scene.add(directionalLight2);

	var texture = THREE.ImageUtils.loadTexture(img);

	holder = new THREE.Object3D();
	scene.add(holder);

	var loader = new THREE.OBJLoader();
	loader.load(model, function(object) {

		for(var i = 0, l = object.children.length; i < l; i++) {

			object.children[i].material.map = texture;
			object.children[i].doubleSided = true;
		}

		object.position.y = 0;
		object.scale.set(5, 5, 5);

		holder.add(object);

	});

	// RENDERER

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(renderw, renderh);
	renderer.domElement.id = "GL";
	container.appendChild(renderer.domElement);

}

function refresh(model, img) {
	var d = document.getElementById('render-container');
	var c = document.getElementById('GL');
	$("#GL").css('z-index',10);
	d.removeChild(c);

	load(model, img);
}

function getPositionLeft(This) {
	var el = This;
	var pL = 0;
	while(el) {
		pL += el.offsetLeft;
		el = el.offsetParent;
	}
	return pL
}

function getPositionTop(This) {
	var el = This;
	var pT = 0;
	while(el) {
		pT += el.offsetTop;
		el = el.offsetParent;
	}
	return pT
}

function animate() {

	requestAnimationFrame(animate);
	render();
}

function render() {
	if (mouseIsOver == false) {
		xang = holder.rotation.x*0.99;
		yang = holder.rotation.y*0.99;

		holder.rotation.x = xang;
		holder.rotation.y = yang;
	}
	
	camera.lookAt(scene.position);

	renderer.render(scene, camera);

}

function init3DBuild(obj, img){
	mouseIsOver = false;
	
	container = document.getElementById("render-container");
	console.log(container);

	load(obj,img);
	animate();

	container.onmousemove = function(event) {
		
		dx = getPositionLeft(document.getElementById("render-container")) - 5;
		dy = getPositionTop(document.getElementById("render-container")) - 5;

		pmousex = mousex;
		pmousey = mousey;

		mousex = event.pageX - dx;
		mousey = event.pageY - dy;
		ease = 0.9;
		yang = ((mousex / (renderw * 1.0) - 0.5) * Math.PI * 2.0)*(1.0-ease)+holder.rotation.y*ease;
		xang = ((mousey / (renderh * 1.0) - 0.5) * Math.PI * 0.3)*(1.0-ease)+holder.rotation.x*ease;

		holder.rotation.x = xang;
		holder.rotation.y = yang;

		//console.log(mousex-pmousex);
		$("#GL").css('z-index',10);

	}
	
	container.onmouseover = function(event) {
		mouseIsOver = true;
	}
	
	container.onmouseout = function(event) {
		mouseIsOver = false;
	}
}
$(document).ready(function() {
	
});
