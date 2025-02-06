import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {About} from './page/About';
import {Certificates} from './page/Certificates';
import {Contact} from './page/Contact';
import {Education} from './page/Education';
import {Experience} from './page/Experience';
import {Projects} from './page/Projects';
import {Skill} from './page/Skill';
import {Home} from './page/Home';
function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
              <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About name={"hai"}/>}/>
                <Route path="/certificates" element={<Certificates/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/skill" element={<Skill/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
