import React from 'react';

const AR = () => {
  return (
    <div id="ar-container">
      <a-scene embedded arjs>
        <a-marker preset="hiro">
          <a-entity
            position="0 0 0"
            scale="1 1 1"
            gltf-model="url(/models/product_model.glb)"
            rotation="0 0 0"
          ></a-entity>
        </a-marker>
        <a-camera></a-camera>
      </a-scene>
    </div>
  );
};

export default AR;
