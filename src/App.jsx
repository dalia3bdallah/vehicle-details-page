import './App.css'
import PageVehicleDetails from './components/pagevehicledetails/pagevehicledetails.jsx';
import Overview from './components/overveiw/overview.jsx';


import { BrowserRouter, Route, Routes ,Navigate } from "react-router-dom";
import TabLive, { Rides, Contracts, Transactions, History, Updates , TabSchedule } from './components/tabs-test-content/tabs-test-content.jsx';



function App() {
  return (
    <>
     <BrowserRouter basename="/vehicle-details-page">
      <Routes>

        {/* Parent Layout */}
        <Route path="/" element={<PageVehicleDetails />}>

          {/* Redirect default tab */}
          <Route index element={<Navigate to="overview" replace />} />

          {/* Child routes MUST NOT start with "/" */}
          <Route path="overview" element={<Overview />} />
          <Route path="schedule" element={<TabSchedule />} />
          <Route path="live" element={<TabLive />} />
          <Route path="rides" element={<Rides />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="history" element={<History />} />
          <Route path="updates" element={<Updates />} />

        </Route>
      </Routes>
    </BrowserRouter>
  

    
      {/* <BrowserRouter  basename="/vehicle-details-page">
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



           
          </Route>
        </Routes>
      </BrowserRouter> */}


    </>
  )
}

export default App
