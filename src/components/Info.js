import user from "../assets/img/user.png"
import check from "../assets/img/tr.png"
import mail from "../assets/img/Mail.png"
import linkdin from "../assets/img/linkedin.png"
function Info(){
    return (
         <>
         <div className="title_position">
        <img src={check}/>
        <h2>Mohan Sharma</h2>
        <h4>Frontend Develoepr</h4>
        <p>mohan.website</p>
        </div>
        <div className="buttons">
     
        <a href="mailto:mohan.ssharma2017@gmail.com" className="email"><img src={mail}/>Email</a>
        <a href="https://www.linkedin.com/in/mohansharma916/" className="linkdin"><img src={linkdin}/>Linkdin</a>
        </div>
     </>
        
    )
}

export default Info;