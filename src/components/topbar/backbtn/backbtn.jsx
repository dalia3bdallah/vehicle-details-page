import "./backbtn.css";
import { ChevronLeftIcon} from '@radix-ui/react-icons';
export default function BackBtn() {
    return (

        <button className="btn btn-back">
            {/* <span><ChevronLeftIcon /></span>     */}
            <span><img src="/src/assets/imgs/Vehicles/chevron-left2.svg" alt="go back"  title="Go Back" /></span>    
        </button>
    )
}