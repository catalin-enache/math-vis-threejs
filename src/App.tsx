import { useState, useEffect } from 'react';
import ThreeScene from './components/three-scene';

import { Provider } from 'react-redux';
import { store } from './store';

// import './App.css';

function App() {
  const [cameraOn, setCameraOn] = useState(false);
  // const handleCameraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCameraOn(event.target.checked);
  // };
  //
  // useEffect(() => {
  //   if (cameraOn) {
  //     window.config.switchCamera();
  //   } else {
  //     window.config.switchCamera();
  //   }
  // });

  return (
    <Provider store={store}>
      <div>
        {/*<label>*/}
        {/*  Switch Camera*/}
        {/*  <input type="checkbox" onChange={handleCameraChange} />*/}
        {/*</label>*/}
      </div>
      <ThreeScene />
    </Provider>
  );
}

export default App;
