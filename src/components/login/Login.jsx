import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [error, seterror] = useState("")
    const [data, setdata] = useState({
        userEmail: "",
        userPass: ""
    })
    const handleChange = ({ currentTarget: input }) => {
        setdata({ ...data, [input.name]: input.value })

    }


    const handleSubmit = async(event) =>{
        event.preventDefault()
        try {
          const url = "http://localhost:8080/api/auth"
          const {data: res} = await axios.post(url,data)
          localStorage.setItem("token",res.data)
          window.location = "/"
          console.log(res.message)
        } catch (error) {
          if (error.responce && error.responce.status>=400
            && error.responce.status<=500){
              seterror(error.responce.data.message)
            }
        }
        }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label for="Username">Username</label><br/>
                <input type="text" id="login" placeholder="Email Address" name='userEmail' value={data.userEmail} required onChange={handleChange} />
                <br />
                <label for="Password">Password</label><br/>
                <input type="text" id="password" placeholder='Password' name='userPass' value={data.userPass} required onChange={handleChange} />
                <br/><button type="submit">Login</button>
                {error && <p>{error}</p>}
                <p>No Account? <Link to="/signup"><p>Signup</p></Link>
                </p>
                </form>
        </React.Fragment>
    )
}

export default Login