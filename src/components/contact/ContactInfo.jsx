import SocialIcons from "../SocialIcons";
import Map from "./Map";
import whiteLogo from "../../assets/images/logo-white.png";
import { FaHeadphonesAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { useGlobalState } from "../../Context";
const ContactInfo = () => {
  const { seeting} = useGlobalState();
  return (
    <div className="ContactInfo">
      <div className="container ">
        <div className="row w-100">
          <div className="col-12  d-flex flex-wrap justify-content-between align-items-center mb-4">
            <div className="d-flex flex-wrap gap-4 align-items-center">
              <img width={"150px"} height={"150px"} src={whiteLogo} alt="" />
              <h4>
               <span className="d-block">
                 Higher Institute</span> 
                 for Management and Information Technology 
               <span className="d-block">Kafr Elsheikh</span>  
              </h4>
            </div>
            <div >
                <Link className="text-decoration-none text-white d-flex align-items-center gap-2" to=''><FaHeadphonesAlt /> 010 987 554 65 </Link>
                <Link className="text-decoration-none text-white d-flex align-items-center gap-2 mt-3" to=''><CgMail />contact@gmail.com</Link>
            </div>
          </div>
          <div className="col-12 d-flex flex-column">
            <div className="mb-3">
            <SocialIcons tel1={seeting?.tel1} twitter={seeting?.twitter} linkedin={seeting?.linkedin} youtube={seeting?.youtube} instagram={seeting?.instagram}  />

            </div>
            <h3 className="text-center mb-4"><CiLocationOn /> Al Molhakat, Kafr Al Sheikh First, Kafr El-Sheikh Governorate
            </h3>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
