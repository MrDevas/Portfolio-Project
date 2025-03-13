import { useNavigate } from 'react-router-dom';
import Cert from '../assets/Images/cert.jpg';
import "../Components/Portfolio.css";
export function Cert3(){
    const Navigate = useNavigate();
    const Back = () =>{
        Navigate('/');
    }
    return(
        <>
        <div className="certification">
        <img src= {Cert}></img>
        <span onClick={() => Back()}>Go back</span>
        </div>
        </>
    )
}