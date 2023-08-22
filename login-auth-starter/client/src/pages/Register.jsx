import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

let emptyForm = { 
    username: '',
    password: '',
    email: ''
}

function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)
    // let [token,setToken]=useState("")
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
         console.log(form)
       const response= await axios.post(`/auth/register`, form)
       console.log(response.data.token)
    //    setToken(response.data.token)

       localStorage.setItem("token",response.data.token)
       const currentUser=await axios.get("/api/users",{headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
       
       }})
       console.log(currentUser.data)
       setUser(currentUser.data)
      navigate("/profile")

        }catch(err){
     console.log(err.message)
     console.log(err)
        }
    }

    return ( 
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input 
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <br />
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </>
     );
}

export default Register;
