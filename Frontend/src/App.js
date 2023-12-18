
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nbar from './Pages/Nbar';
import HomeWebPage from './Pages/HomeWebPage';
import Flooring from './LinkToAllJobs/Flooring';
import HomeSecurity from './LinkToAllJobs/HomeSecurity';
import HouseKeeping from './LinkToAllJobs/HouseKeeping';
import InteriorDesign from './LinkToAllJobs/InteriorDesign';
import LandScaping from './LinkToAllJobs/Landscaping';
import Mounting from './LinkToAllJobs/Mounting';
import Plumbing from './LinkToAllJobs/Plumbing';
import PoolMaint from './LinkToAllJobs/PoolMaint';
import AddJob from './Forms/AddJob';
import Consult from './Forms/Consult';
import CreateAccount from './Forms/CreateAccount';
import Login from './Forms/Login';
import MyJobs from './Pages/MyJobs';
import AllJobs from './Pages/AllJobs';





import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

 
  
   <BrowserRouter>
      <div className="App">
         <div id="page-body">
            <Routes>
               <Route path="/" element={<HomeWebPage />}/>
               <Route path="/flooring" element={<Flooring />}/>
               <Route path="/security" element={<HomeSecurity />}/>
               <Route path="/house" element={<HouseKeeping />}/>
               <Route path="/interior" element={<InteriorDesign />}/>
               <Route path="/land" element={<LandScaping />}/>
               <Route path="/Mounting" element={<Mounting />}/>
               <Route path="/Plumbing" element={<Plumbing />}/>
               <Route path="/Pool" element={<PoolMaint />}/>
               <Route path="/addJob" element={<AddJob />}/>
               <Route path="/Consult" element={<Consult />}/>
               <Route path="/create" element={<CreateAccount />}/>
               <Route path="/login" element={<Login />}/>
               <Route path="/myjobs" element={<MyJobs />}/>
               <Route path="/alljobs" element={<AllJobs />}/>
            </Routes>
         </div>
      </div>
  </BrowserRouter> 
  )
}

export default App;
