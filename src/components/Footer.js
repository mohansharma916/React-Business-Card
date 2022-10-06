import twitter from "../assets/img/Twitter_Icon.png";
import facebook from "../assets/img/Facebook Icon.png";
import insta from "../assets/img/Instagram Icon.png";
import github from "../assets/img/GitHub Icon.png";



function Footer(){
    return (
        <footer>
        <a href="#"><img src={twitter}/></a>
        <a href="#"><img src={facebook}/></a>
        <a href ="#"><img src={insta}/></a>
        <a href="https://github.com/mohansharma916"><img src={github}/></a>
        
        </footer>
    )
}

export default Footer;