import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Header from './components/GalleryHeader';
import Body from './components/GalleryBody';
const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      {/*Adding header component*/}
      <Header/>
      {/*Adding Body Component*/}
      <Body data={imageData}/>
      
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
