let scene, camera, renderer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Set up Three.js scene
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  // Create 3D text
  const loader = new THREE.FontLoader();
  loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('Hello, 3D!', {
      font: font,
      size: 20,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.5,
      bevelOffset: 0,
      bevelSegments: 5
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    scene.add(textMesh);
  });

  // Set up camera position
  camera.position.z = 50;
}

function draw() {
  // Render the Three.js scene onto a p5.js canvas
  background(200);
  texture(renderer.domElement);
  plane(width, height);
  renderer.render(scene, camera);
}
