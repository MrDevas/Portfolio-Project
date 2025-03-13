import {  Route, BrowserRouter as Router ,Routes} from 'react-router-dom'
import './App.css';
import { Portfolio } from './Components/Portfolio';
import { Submit } from './Components/Submit';
// import {Cert1} from './Components/Cert1';
// import {Cert2} from './Components/Cert2';
// import {Cert3} from './Components/Cert3';
function App() {

  return (

      <div>
           <Router>
      <Routes>
      <Route path='/' element={<Portfolio></Portfolio>}></Route>
      <Route path='/submit' element={<Submit></Submit>}></Route>
      {/* <Route path='/cert1' element={<Cert1></Cert1>}></Route>
      <Route path='/cert2' element={<Cert2></Cert2>}></Route>
      <Route path='/cert3' element={<Cert3></Cert3>}></Route> */}
      </Routes>
    </Router>
      </div>
    
  )
}
export default App;
