/** 
 * Set up
 **/
var NUMBER_OF_OBJECTS = 100000;
var count = Math.cbrt(NUMBER_OF_OBJECTS);
var BOX_SIZE = .01;
var SPACE_BETWEEN_OBJECTS = 1.5; //larger = smaller SPACE_BETWEEN_OBJECTS
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(count * BOX_SIZE*40, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//var geometry = new THREE.BoxGeometry(1,1,1);
//var material = new THREE.MeshBasicMaterial({color: "blue"});
var materials = [
    new THREE.MeshBasicMaterial({color: "red"}),
    new THREE.MeshBasicMaterial({color: "blue"}),
    new THREE.MeshBasicMaterial({color: "green"}),
    new THREE.MeshBasicMaterial({color: "yellow"}),
    new THREE.MeshBasicMaterial({color: "purple"}),
    new THREE.MeshBasicMaterial({color: "orange"})
];
var counter = 0;
for(i = 0; i < count; i++){
    for(j = 0; j < count; j++){
        for(k = 0; k < count; k++){
            var cube = new THREE.Mesh(new THREE.BoxGeometry(BOX_SIZE, BOX_SIZE, BOX_SIZE), new THREE.MeshFaceMaterial(materials));
            cube.position.x = i * BOX_SIZE + (i/SPACE_BETWEEN_OBJECTS) * BOX_SIZE;
            cube.position.y = j * BOX_SIZE + (j/SPACE_BETWEEN_OBJECTS) * BOX_SIZE;
            cube.position.z = k  + (k/SPACE_BETWEEN_OBJECTS) * BOX_SIZE;
            cube.rotation.x += 1.10;
            cube.rotation.y += 1.10;
            cube.rotation.z += 1.10;
            scene.add(cube);
            counter++;  
        }
    }  
}

console.log(counter + " objects. count = " + count);
//camera.position.x = 1;
//camera.position.y = 1;
camera.position.z = 7;

function render(){
    requestAnimationFrame(render);

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

render();