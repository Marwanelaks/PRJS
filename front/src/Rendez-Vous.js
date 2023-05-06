import React, { useState } from 'react'
import { v4 } from 'uuid';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Recudown } from './Recudown';

export default function RendezVous() {
  const currentDate = new Date().toISOString().split('T')[0];
  const navg = useNavigate()
  const [Nom,setNom] = useState()
  const [Prenom,setPrenom] = useState()
  const [Email,setEmail] = useState()
  const [Num,setNum] = useState()
  const [date,setDate] = useState()
  const [Time,setTime] = useState()
  
  const Send = async(e) =>{
    e.preventDefault()
  try{
    const uuid = v4().split("-")[0]
axios.post("https://abbadi-api.vercel.app/rendez-vous",{
      Nom : Nom, 
      Prenom : Prenom,
      Email : Email,
      Telephone : Num,
      Date : date,
      Time : Time,
      Code : uuid
      },{
        headers : {
          'x-api-key' : process.env.REACT_APP_API_KEY
        }
      })
        toast.success("Votre rendez-vous a été créé avec succès")
        navg("/télécharger-recu",{state : {N : Nom,P : Prenom,D : date,T : Time, id : uuid}})
  }catch{
     toast.error("Erreur")
  }
  }
  return (
    <>
     <Toaster/>
  <div className='container containerForm'>
  
  <form action="#" className="form col-md-6" id="form1" onSubmit={Send}>
  <h2 className="form__title">Rendez-Vous</h2>
			<input onChange={(e)=>setNom(e.target.value)} type="text" placeholder="Nom" className="input" required />
      <input onChange={(e)=>setPrenom(e.target.value)} type="text" placeholder="Prénom" className="input" required />
			<input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input" required />
			<input type="tel" onChange={(e)=>setNum(e.target.value)} placeholder="Telephone" className="input" required />
      <input
        onChange={(e)=>setDate(e.target.value)}
        type="date"
        min={currentDate}
        className="input" 
        required
      />
      <input value={Time} min="10:00" max="00:00" onChange={(e)=>setTime(e.target.value)} type="time" placeholder="11:55" className="input" required />

			<button className="btn btn-success">Télécharger Reçu 👋</button>
     
</form>
<div className="container__overlay col-md-6">
		<div className="overlay">
    
		</div>
	</div>
  </div>

    </>
  )
}

