import { useEffect, useRef } from 'react';
import './App.css';
import { tns } from "tiny-slider/src/tiny-slider";
import 'tiny-slider/dist/tiny-slider.css'; // Make sure this line is present

function App() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      tns({
        container: sliderRef.current,
        items: 1,
        slideBy: 'page',
        autoplay: true,
        controls: true,
        nav: true,
        autoplayButtonOutput: false
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Slider Demo</h1>
      </header>
      <div ref={sliderRef}>
        <div>
          <img src="https://picsum.photos/800/400?random=1" alt="Slide 1" />
        </div>
        <div>
          <img src="https://picsum.photos/800/400?random=2" alt="Slide 2" />
        </div>
        <div>
          <img src="https://picsum.photos/800/400?random=3" alt="Slide 3" />
        </div>
        <div>
          <img src="https://picsum.photos/800/400?random=4" alt="Slide 4" />
        </div>
      </div>
    </div>
  );
}

export default App;