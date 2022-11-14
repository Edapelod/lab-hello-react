import logo from './logo.svg';
import './App.css';
import image1 from './images/img1.png'
import image2 from './images/img2.png'
import image3 from './images/img3.png'
import image4 from './images/img4.png'
import image5 from './images/img5.png'
import image6 from './images/img6.png'

function App() {
  return (
    <div className="App"><h1>Hello</h1>
    <img src={image1}/>
    <img src={image2}/>
    <img src={image3}/>
    <img src={image4}/>
    <img src={image5}/>
    <img src={image6}/>

    </div>
  );
}

export default App;
