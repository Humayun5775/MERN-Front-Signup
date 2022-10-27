import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {
  const [error, seterror] = useState("")
  const [data, setdata] = useState({
    userName: "",
    userEmail: "",
    userPass: "",
    userRole: ""
  })
  const handleChange = ({ currentTarget: input }) => {
    setdata({ ...data, [input.name]: input.value })

  }

  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const url = "http://localhost:8080/api/users"
      const { data: res } = await axios.post(url, data)
      navigate("/login")
      console.log(res.message)
    } catch (error) {
      if (error.responce && error.responce.status >= 400
        && error.responce.status <= 500) {
        seterror(error.responce.data.message)
      }
    }
  }


  return (
    <div>
      Register YourSelf
      <form onSubmit={handleSubmit} >
        <label>Name</label><br/>
        <input type="text" name="userName" placeholder="Name" value={data.userName} onChange={handleChange} /><br/>
        <label>Email</label><br/>
        <input type="Email" name="userEmail" placeholder="Email" value={data.userEmail} onChange={handleChange} /><br/>
        <label>Password</label><br/>
        <input type="Password" name="userPass" placeholder="Password" value={data.userPass} onChange={handleChange} /><br/>
        <p>Please select your Role:</p>
        <input type="radio" name="userRole" value="User" onChange={handleChange}/>
        <label>USER</label><br />
        <input type="radio" name="userRole" value="Admin" onChange={handleChange} />
        <label>Admin</label><br />
        <button type="submit">Signup</button>
        {error && <p>{error}</p>}
      <p >Already a member? <Link to="/login"><p>Signin</p></Link>
    </p>
      </form>



    </div>
  )
}

export default Signup