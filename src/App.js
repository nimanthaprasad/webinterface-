
import './App.css';
import Loginpage from './components/loginpage';
import Fpassword from './page/fpassword';
import Cheakpassword from './page/cheakpassword';
import profile from "./image/image2.png"
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
<div>
  <Routes>
    
  <Route path="/" element={<Loginpage />}> </Route>
  </Routes>
  <Routes>
  <Route path="/fpassword" element={<Fpassword />}> </Route>
  </Routes>
  <Routes>
  <Route path="/cheak" element={<Cheakpassword />}> </Route>
  </Routes>
</div>
</Router>
    
  );
}

export default App;
