import './App.css'
import PageVehicleDetails from './components/pagevehicledetails/pagevehicledetails.jsx';
import Overview from './components/overveiw/overview.jsx';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import TabLive, { Rides, Contracts, Transactions, History, Updates , TabSchedule } from './components/tabs-test-content/tabs-test-content.jsx';



function App() {
  return (
    <>

    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageVehicleDetails />}>
            <Route path="/overview" element={<Overview />} />
            <Route path="/schedule" element={<TabSchedule />} />
            <Route path="/live" element={<TabLive />} />

            <Route path="/rides" element={<Rides />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/history" element={<History />} />
            <Route path="/updates" element={<Updates />} />



            {/* <Route index element={<Overview />} /> التاب الافتراضي */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
