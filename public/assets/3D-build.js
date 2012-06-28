var container, stats;

var holder;
var front, back;

var camera, scene, renderer;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var renderw = 400;
var renderh = 555;
var mousex, mousey, pmousex, pmousey, dx, dy;
var texture;
var canvastexture = false;

console.log("hello 3");



function loadthis(model) {
	var loader = new THREE.OBJLoader();
	//var tex = THREE.ImageUtils.loadTexture(img);
	
	loader.load(model, function(object) {

		for(var i = 0, l = object.children.length; i < l; i++) {

			object.children[i].material.map = texture;
			object.children[i].material.alphaTest = 0.5;
			//console.log(object.children[i].material);
			object.children[i].doubleSided = true;
		}

		object.position.y = 0;
		object.scale.set(5, 5, 5);

		holder.add(object);
		//console.log(object);
	});
}

function loadModel(path) {
	var loader = new THREE.OBJLoader();
	var obj = new THREE.Object3D();
	//var tex = THREE.ImageUtils.loadTexture(img);
	
	loader.load(path, function(object) {

		for(var i = 0, l = object.children.length; i < l; i++) {

			object.children[i].material.map = texture;
			object.children[i].material.alphaTest = 0.5;
			//console.log(object.children[i].material);
			object.children[i].doubleSided = true;
		}

		object.position.y = 0;
		object.scale.set(5, 5, 5);

		obj.add(object);
		//console.log(object);
	});
	return obj;
}



function loadCanvas(canvas){
	canvastexture = true;
	texture = new THREE.Texture(canvas);
	texture.needsUpdate = true;
	
	for(var i = 0, l = holder.children[0].children.length; i < l; i++) {

		holder.children[0].children[i].material.map = texture;
		holder.children[0].children[i].doubleSided = true;
	}
}

function refresh(model, img) {
	var d = document.getElementById('render-container');
	var c = document.getElementById('GL');
	$("#GL").css('z-index',10);
	d.removeChild(c);

	loadthis(model, img);
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
	if (canvastexture== true){
		texture.needsUpdate = true;
	}
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

function init3DBuild(obj1, obj2, img){
	mouseIsOver = false;
	
	container = document.getElementById("render-container");

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45, renderw / renderh, 1, 2000);
	camera.position.z = 100;
	scene.add(camera);

	var ambient = new THREE.AmbientLight(0x0C0C0C);
	scene.add(ambient);

	var directionalLight = new THREE.DirectionalLight(0xD6D6D6);
	directionalLight.position.set(70, 70, 100);
	//.normalize();
	scene.add(directionalLight);

	var directionalLight2 = new THREE.DirectionalLight(0xD6D6D6);
	directionalLight2.position.set(-70, 70, 100);
	//.normalize();
	scene.add(directionalLight2);


	holder = new THREE.Object3D();
	front = new THREE.Object3D();
	back = new THREE.Object3D();
	
	texture = THREE.ImageUtils.loadTexture(img);
	console.log(texture);
	scene.add(front);
	scene.add(back);
	//loadFront(obj1);
	//loadBack(obj2);
	
	console.log(front);
	
	scene.add(holder);
	//loadthis(obj1,img);
	//loadthis(obj2,img);
	
	// RENDERER

	renderer = new THREE.WebGLRenderer( { antialias: true, preserveDrawingBuffer : true } );
	renderer.setSize(renderw, renderh);
	renderer.domElement.id = "GL";
	container.appendChild(renderer.domElement);
	
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
	console.log("hey hey hey");
}

