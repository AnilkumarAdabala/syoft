import { useState } from "react"
import "./index.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [loginError, setLoginError] = useState("")
    const onClickLogin = async (e) => {
        e.preventDefault()
        console.log(userEmail,userPassword)
        const url = "https://syoft.dev/Api/userlogin/api/userlogin" 
        const data = {
            "user_email":userEmail,
            "user_password":userPassword
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
            const userName = JSON.stringify(result.user_data[0])
            localStorage.setItem("userDetails",userName)
           
               
                navigate("/dashboard")
        }else{
            setLoginError(result.msg)
        }
       
    }

    return(
        <div className="login-bg-container">
            <form className="login-container" onSubmit={onClickLogin }>
            <h1 className="login-header">Login</h1>
            <div className="email-container">
                <label>
                    E-mail
                </label>
                <input type = "text" className="email" placeholder="Please enter your email" required  onChange={(e) => {setUserEmail(e.target.value)}} />
            </div>

            <div className="email-container" >
                <label>
                    Password
                </label>
                <input type = "password" className="email" placeholder="Please enter your password" required value ={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
            </div>
            
            <button className="login-button" type="submit">Login</button>

            <p className="sign-up-link">You Dont Have Account? <a href="./register" className="register">Sign up</a></p>
            <p className="login-error">{loginError}</p>
        </form>
        </div>
    )
}

export default Login