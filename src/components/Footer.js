import { React } from "react";
import "../styles/footer.css";
import appStore from "../images/AppStore.png";
import googlePlay from "../images/GooglePlay.png";

function Footer() {
  return (
    <div id="footer">
      <div>
        <ul id="wordLinks">
          <li className="pageLinks">About</li>
          <li className="pageLinks">Contact</li>
          <li className="pageLinks">Help</li>
        </ul>
      </div>
      <div id="socialLinks">
        <img id="appStore" src={appStore} alt="Download on the App Store" />
        <img id="googlePlay" src={googlePlay} alt="Get it on Google Play" />
      </div>
    </div>
  );
}

export default Footer;
