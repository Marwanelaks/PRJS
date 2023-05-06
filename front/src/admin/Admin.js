import React, { useEffect, useState } from 'react'
import ModifyIcon from "./images/Modify.png"
import DeleteIcon from "./images/Delete.png"
import logout from "./images/logout.png"
import toast,{Toaster} from "react-hot-toast"
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom'
export default function Admin() {
   const [data,setData] = useState([])
   const [filterDate,setfDate] = useState([...data])
   const [idtr,setIdtr] = useState()
   const [newDate,setnewDate] = useState()
   const [newTime,setnewTime] = useState()
   const navigate = useNavigate()
   const location = useLocation()
   let email = location.state?.param1
   let password = location.state?.param2
   useEffect(()=>{
    if(email === undefined && password === undefined){
      navigate("/admin-login")
   }
  else{  
      axios.get("https://abbadi-api.vercel.app/rv-list",{
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY
        }
      })
      .then((res)=>{
         setData(res.data)
         setfDate(res.data)
         
      })
      .catch((err)=>{
         setData(err)
      })
     }
   },[])
   const Filter = (e) => {
    let val = e.target.value
    const current = new Date().toISOString()
    let proch
    if(val === "prochain"){
      proch = data.filter((elem)=>elem.Date > current)
    }
    else if(val === "aujourdhui"){
      proch = data.filter((elem)=>elem.Date.split("T")[0] === current.split("T")[0])
    }
    else{
      proch = data
    }
   setfDate(proch)
   }
   const Disconnect = () =>{
    navigate("/admin-login")
   }
   const Modifiaction = (Id) =>{
    data.map((elem)=>{
      if(elem._id === Id){
          toast.success("success")
          navigate("/télécharger-recu",{state : {N : elem.Nom,P : elem.Prenom,D : newDate?newDate:elem.Date.split("T")[0],T : newTime?newTime:elem.Temps, id : elem.Code,E : elem.Email,ID:Id}})
      }
    })

  }
   const Destroy = (id) => {
    axios.delete(`https://abbadi-api.vercel.app/rendez-vous/${id}`,{
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    })
       .then(() => {
          toast.success("Rendez-Vous Supprimé")
          const newData = data.filter((elem) => elem._id !== id);
          setData(newData);
          setfDate(newData)
       })
       .catch((err) => {
          toast.error("Erreur")
          console.log(err.toString());
       })
 }
 
  return (
   <>
   <Toaster/>
   <div className='container'>
   
   <div className='row my-3'>
   <h2 className='text-left col-2 admin'>Admin</h2>
   <div className='col-8'></div>
   <a onClick={Disconnect} className='a col-2'><b>Disconnect</b>
   <img className='logout' src={logout}></img></a>
   </div>
   </div>
   
   <div className=' container-fluid ctnf '>
   <select className='m-auto form-select ' defaultValue="tous" onChange={(e)=>Filter(e)}>
      <option value="tous">Tous</option>
      <option value="aujourdhui">Aujourd'hui</option>
      <option value="prochain">Prochain</option>
    </select>

<table class=" table text-center my-5">
  <thead>
  
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Email</th>
      <th scope="col">Numéro</th>
      <th scope="col">Date</th>
      <th scope="col">Temps</th>
    </tr>

   
  </thead>
  <tbody>
  {filterDate && filterDate.map((elem, index) => {
    if (elem._id === idtr)  {   
       return (
        <tr key={elem._id}>
      <th  scope="row">{index}</th>
          <td><input type="text" value={elem.Nom} disabled/></td>
          <td><input type="text" value={elem.Prenom} disabled/></td>
          <td><input type="email" value={elem.Email} disabled/></td>
          <td><input type="tel" value={elem.Telephone} disabled/></td>
          <td><input onChange={(e)=>setnewDate(e.target.value)} type="date" value={newDate?newDate:elem.Date.split("T")[0]} required/></td>
          <td><input onChange={(e)=>setnewTime(e.target.value)} type="time" value={newTime?newTime:elem.Temps} required/></td>
          <td><button type='submit' onClick={()=>Modifiaction(elem._id)} className='btn btn-success m'>Confirmer 
          </button>
           <br></br><button onClick={() => setIdtr(null)} className='btn btn-danger m'>Annuler
           
           </button></td>
      
    </tr>
       )
    }else{
  return (
    <tr id={elem._id}>
      <th  scope="row">{index}</th>
          <td>{elem.Nom}</td>
          <td>{elem.Prenom}</td>
          <td>{elem.Email}</td>
          <td>{elem.Telephone}</td>
          <td>{elem.Date.split("T")[0]}</td>
          <td>{elem.Temps}</td>
          <td><button onClick={()=>setIdtr(elem._id)} className='btn btn-success m'>Modifier 
          <img className='modify m-auto' src={ModifyIcon} alt="Modify"></img></button>
           <br></br><button onClick={() => Destroy(elem._id)} className='btn btn-danger'>Supprimer
           <img className='modify m-auto' src={DeleteIcon} alt="Delete"></img>
           </button></td>
    </tr>
    
  )}
      })}
  </tbody>
</table>

   </div></>
    
  )
}





