import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import Admin from './Admin';
export default function AdminLogin() {
  const [Pass,setPass] = useState()
  const [Email,setEmail] = useState()
  const [data,setData] = useState()
  const [errmail,seterrm] = useState()
  const [errpass,seterrp] = useState()
  const [user,setUser] = useState()
  const navigate = useNavigate()
  const admin = Admin()
  useEffect(() => {
   axios.get("https://abbadi-api.vercel.app/admin-infos",{
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY
    }
   })
     .then((res) => {
       setData(res.data);
     })
     .catch((err) => {
       console.log(err);
     });
     if(admin.Disconnect){
      setEmail(undefined)
      setPass(undefined)
     }
 }, []);
  const Login = (e) =>{
    e.preventDefault()
    const mailExists = data.some((res) => res.email === Email );
    const passExists = data.some((res) => res.password === Pass );

  if (mailExists && passExists) {
      navigate("/admin",{state :{param1 : Email , param2 : Pass} }) 
      toast.success("Welcome !") 
      setUser("admin connected") 
    } else {
         toast.error("Erreur")
         if(mailExists === false){
          seterrm("Email Invalide")
         }
         if(passExists === false){
          seterrp("Mot de Passe Invalide")
         }

    }  
    console.log(mailExists , passExists)
  }
  return (
    <>
     <Toaster/>
  <div className='container adminform'>
  
  <form action="#" className="form col-md-6" id="form1" onSubmit={Login}>
  <h2 className="form__title">Admin</h2>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input" required />
      <p className='text-danger'>{errmail}</p>
      <input onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password" className="input" required />
			<p className='text-danger'>{errpass}</p>
      <button className="btn btn-success">Login 👋</button>
     
</form>
<div className="container__overlay col-md-6">
		<div className="overlay">
    
		</div>
	</div>
  </div>
    </>
  )
}

