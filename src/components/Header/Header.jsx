import { FaHome } from "react-icons/fa";
import './Header.css'
import { IoMdPerson } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";

export default function Header () {
    return(
        <div className='Header'>
            <h1 className="titulo">Guia Brasil</h1>


            <div className="icones">
                <FaHome className="icone"/>
                <IoAirplane className="icone"/>
                <IoMdPerson className="icone"/>
            </div>
        </div>
    )
}