import * as THREE from 'three';import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';window.initModel = function(container, modelUrl, rotation) {    if (!container) {        console.error('Container not found');        return;    }    const scene = new THREE.Scene();    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);    const renderer = new THREE.WebGLRenderer({         alpha: true,        antialias: true     });        container.innerHTML = '';    renderer.setSize(container.clientWidth, container.clientHeight);    container.appendChild(renderer.domElement);    const controls = new OrbitControls(camera, renderer.domElement);    controls.enableDamping = true;    controls.dampingFactor = 0.05;    controls.screenSpacePanning = false;    controls.minDistance = 1;    controls.maxDistance = 5;    controls.maxPolarAngle = Math.PI / 2;    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);    scene.add(ambientLight);        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);    directionalLight.position.set(1, 1, 1);    scene.add(directionalLight);    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-1, 1, -1);
    scene.add(backLight);

    const loader = new GLTFLoader();
    try {
        loader.load(
            modelUrl,
            (gltf) => {
                const model = gltf.scene;
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 1.5 / maxDim;
                
                model.scale.setScalar(scale);
                model.position.sub(center.multiplyScalar(scale));
                scene.add(model);
            },
            (progress) => {
                console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );
    } catch (error) {
        console.error('Error in model loading setup:', error);
    }

    camera.position.z = 2;
    camera.position.y = 0.5;

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
};