import { useState } from "react"
import "./index.css"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const onClickRegister = async(e) =>{
        e.preventDefault()
        // console.log("clicked")
        // console.log(userName,email,password,phoneNumber)
        const url = "https://syoft.dev/Api/user_registeration/api/user_registeration" 
        const data = {
            "user_firstname":userName,
            "user_email":email,
            "user_phone":phoneNumber,
            "user_password":password,
            "user_lastname":"ni",  
            "user_city":"Hyderabad",
            "user_zipcode": "500072"        
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(data)
            }
        const response = await fetch(url,options)
        const result = await response.json()
        console.log(result)
        if (result.status === true ){
            alert("Registration Successfull")
                navigate("/")
        }else{
            setErrorMsg(result.msg)
        }

    }

    return(
        <div className="register-main-container">
            <div className="register-bg-container">
            <img src ="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1722405824/jhqu3u564l2bxx1vh0qz.png" alt="img"  className="img" draggable = {false }/>
            <form className="register-container" onSubmit={onClickRegister}>
            <div>
            <h1 className="register-header">Sign Up</h1>
            <p className="sign-in-link">Already have an Account? <a href="./">Login</a></p>
            </div>
            
            <div className="register-email-container">
                <label>
                    FullName
                </label>
                <input type = "text" className="register-email" placeholder="Please enter your Firstname" required value = {userName} onChange={(e)=> setUserName(e.target.value)}/>
            </div>
            <div className="register-email-container">
                <label>
                    E-mail
                </label>
                <input type = "email" className="register-email" placeholder="Please enter your email" value={email} required onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className="register-email-container" >
                <label>
                    Password
                </label>
                <input type = "password" className="register-email" placeholder="Please enter your password" value={password} required onChange={(e)=> {
                    console.log(password)
                    setPassword(e.target.value)}} />
            </div>

            <div className="register-email-container">
                <label>
                    Phone Number
                </label>
                <input type = "text" className="register-email" placeholder="Please enter your Phone number" value={phoneNumber} required onChange={(e)=> setPhoneNumber(e.target.value)}/>
            </div>
            <button className="register-button" type="submit">Register</button>

            <p className="error-msg">{errorMsg}</p>
        </form>
            </div>
        </div>
    )
}

export default Register