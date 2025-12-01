import { NavLink } from "react-router-dom";
import "./tabs.css";

export default function Tabs() {
    return (
        <div className="tabs-list">
            <div className="tab-item"><NavLink to="/overview">Overview</NavLink></div>
            
            <div className="tab-item"><NavLink  className={({ isActive }) =>isActive ? "tab active-tab": "tab"} to="/live">Live</NavLink></div>
            <div className="tab-item"><NavLink  className={({ isActive }) =>isActive ? "tab active-tab": "tab"} to="/schedule">Schedule</NavLink></div>
            <div className="tab-item"><NavLink  className={({ isActive }) =>isActive ? "tab active-tab": "tab"} to="/rides">Rides</NavLink></div>
            <div className="tab-item"><NavLink  className={({ isActive }) =>isActive ? "tab active-tab": "tab"} to="/contracts">Contracts</NavLink></div>
            <div className="tab-item"><NavLink  className={({ isActive }) =>isActive ? "tab active-tab": "tab"} to="/transactions">Transactions</NavLink></div>
            <div className="tab-item"><NavLink  className={({ isActive }) =>isActive ? "tab active-tab": "tab"} to="/history">Fuel History</NavLink></div>
            <div className="tab-item"><NavLink  className={({ isActive }) =>isActive ? "tab active-tab": "tab"} to="/updates">Updates Logs</NavLink></div>       
        </div>
    )
}

