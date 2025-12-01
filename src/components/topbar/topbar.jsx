import "./topbar.css";
import BackBtn from "./backbtn/backbtn";
import BreadCrumb from "./breadcrumb/breadcrumb";
import Title from "./title/title";
import VTopDetails from "../vtopdetails/vtopdetails";
// import { CubeIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="left-part">
                <BackBtn />
            </div>
            <div className="right-part">
            <div className="top-right-part">
                <div className="top-title">
                    <BreadCrumb />
                    <Title />
                </div>
                <div className="top-actions">
                    <button className="btn btn-print">
                        {/* <span><CubeIcon /></span> */}
                        <span><img src="/src/assets/imgs/Vehicles/printer1.svg" alt="Print Icon" title="Print Icon" /></span>
                        <span> print</span>
                        </button>

                    <button className="btn btn-more-actions">
                        {/* <span><DotsHorizontalIcon /></span> */}
                        <span><img src="/src/assets/imgs/Vehicles/options-horizontal.svg" alt="More Actions Icon" title="More Actions Icon" /></span>
                    </button>
                    
                </div>
            </div>
            <div className="bottom-right-part">
                <VTopDetails />
            </div>
            </div>
        </div>


    )
}