import "./Portfolio.css";
import Success from "../assets/Images/submit.png";
import { useNavigate } from 'react-router-dom';
export function Submit(){

    const Navigate = useNavigate();
    const Submit = () =>{
        Navigate('/');
    }
    return(
        <>
        <div className="submit">
        <div className="submit-img">
        <img src={Success}></img>
        </div>
        <h1>Form submitted successfully!</h1>
        <p>Thank you! The form has been submitted successfully.<br></br>We will reply to you soon!</p>
        <span onClick={() => Submit()}>Go back</span>
        </div>
        </>
    )
}