import { NavLink } from "react-router-dom";
import "./tabs.css";

export default function Tabs() {
    return (
        <div className="tabs-list">
            <div className="tab-item"><NavLink to="/overview">Overview</NavLink></div>
            
            <div className="tab-item"><NavLink to="/live">Live</NavLink></div>
            <div className="tab-item"><NavLink to="/schedule">Schedule</NavLink></div>
            <div className="tab-item"><NavLink to="/rides">Rides</NavLink></div>
            <div className="tab-item"><NavLink to="/contracts">Contracts</NavLink></div>
            <div className="tab-item"><NavLink to="/transactions">Transactions</NavLink></div>
            <div className="tab-item"><NavLink to="/history">Fuel History</NavLink></div>
            <div className="tab-item"><NavLink to="/updates">Updates Logs</NavLink></div>       
        </div>
    )
}