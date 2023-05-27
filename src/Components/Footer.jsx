
import "./Footer.css";
import { FaPhoneAlt ,FaBuilding,FaMailBulk} from "react-icons/fa";

function Footer() {
    return ( 
      <div className="backgroundfooter">
        <center>
            <h5>Chamber Music</h5>
            <p><FaBuilding /> ABC Street, Malwaththa Road,Colombo 07</p>

             <p><FaMailBulk /> chambermusic@gmail.com</p>
             <p><FaPhoneAlt /> 0719872823</p>
        </center>
      </div>
  

     );
}

export default Footer;