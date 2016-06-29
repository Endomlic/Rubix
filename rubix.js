/** 
 * Set up
 **/
var NUMBER_OF_OBJECTS = 10000;
var count = Math.cbrt(NUMBER_OF_OBJECTS);
var BOX_SIZE = .0007;
var SPACE_BETWEEN_OBJECTS = 11.5;//1.5; //larger = smaller SPACE_BETWEEN_OBJECTS
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(count * BOX_SIZE*100, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

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
var combined = new THREE.Geometry();
var faceMaterial = new THREE.MeshFaceMaterial(materials);
var boxGeometry = new THREE.BoxGeometry(BOX_SIZE, BOX_SIZE, BOX_SIZE);
var startTime = new Date();
//var combined = new THREE.Mesh();
for(i = 0; i < count; i++){
    for(j = 0; j < count; j++){
        for(k = 0; k < count; k++){
            var cube = new THREE.Mesh(boxGeometry, faceMaterial);
            cube.position.x = i * BOX_SIZE + (i/SPACE_BETWEEN_OBJECTS) * BOX_SIZE;
            cube.position.y = j * BOX_SIZE + (j/SPACE_BETWEEN_OBJECTS) * BOX_SIZE;
            cube.position.z = k * BOX_SIZE + (k/SPACE_BETWEEN_OBJECTS) * BOX_SIZE;//k  + (k/SPACE_BETWEEN_OBJECTS) * BOX_SIZE;
            //cube.rotation.x += 1.10;
            //cube.rotation.y += 1.10;
            //cube.rotation.z += 1.10;

            //addObjectToGeometry(geometry, cube);

            //scene.add(cube);
            cube.updateMatrix();
            combined.merge(cube.geometry, cube.matrix);
            //THREE.GeometryUtils.merge(geometry, cube);
            counter++;
            console.log("Object creation complete");  
        }
    }  
}

var currentTime = new Date();
var completionTime = currentTime - startTime;
console.log("Calculation time: " + completionTime + "ms. " + completionTime / 1000 + " seconds.");

mesh = new THREE.Mesh(combined, faceMaterial);
scene.add(mesh);


console.log(counter + " objects. count = " + count);
//camera.position.x = 1;
//camera.position.y = 1;
camera.position.z = 2;

renderer.sortObjects = false;

function render(){
    requestAnimationFrame(render);

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

render();