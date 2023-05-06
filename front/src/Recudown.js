import jsPDF from 'jspdf'
import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

export default function Recudown() {

   const printRef = useRef(null)
   const location = useLocation()
   const Prenom = location.state?.P
   const Nom = location.state?.N
   const date = location.state?.D
   const Time = location.state?.T
   const rvid = location.state?.id
   const email = location.state?.E
   const Id = location.state?.ID
  
   const Download = async() =>{
      const fileName = `${Nom}.pdf`;
   try{
      const doc = new jsPDF();
      const pdfref = printRef.current;
      doc.html(pdfref, {
        callback: function (doc) {
            doc.save(fileName);
        },
        html2canvas: { scale: 0.2 }
    });
    toast.success("téléchargement...")
   }catch{
    toast.error("Erreur")
   }
   }
   const Envoyer = () => {
      const formData = new FormData();
      const doc = new jsPDF();
      const pdfref = printRef.current;
      console.log(Id)
      doc.html(pdfref, {
        callback: function (doc) {
         const fileName = `${Nom}.pdf`;
          const pdfBlob = doc.output('blob');
          formData.append('PdfFile', pdfBlob, fileName);
          formData.append('Date', date); 
          formData.append('Temps', Time);
          formData.append('Email', email);
          axios.put(`http://localhost:368/rendez-vous/${Id}`, formData , {
            headers: {
               'x-api-key': process.env.REACT_APP_API_KEY
             }
          })
            .then(() => {
              toast.success('Rendez-Vous bien Modifié');
            })
            .catch((err) => {
               toast.error(err.toString());
             });             
        },
        html2canvas: { scale: 0.2 }
      });
    };
    
  return (
    <div>  <div className='card container center my-4' ref={printRef}>
      <Toaster/>
    <h4 className='text-center my-5'><u>REÇU    DE    RENDEZ-VOUS</u></h4>
    <div className='para'>
    <p>Bonjour Mr <b>{Prenom } {Nom}</b>,</p><br></br>
    Nous vous confirmons par la présente votre rendez-vous en <b>salle abadi </b> 
    le <b>{date}</b> à <b>{Time}</b>.<br></br>

Code de rendez-vous : <b> { rvid } </b>
<p>Veuillez noter que si vous ne pouvez pas assister à votre rendez-vous, 
veuillez nous en informer au moins 24 heures à l'avance 
<br></br>pour que nous  puissions le réorganiser.</p><br></br>
Merci de votre confiance en nos services.<br></br>
<div className='text-center my-3'>Signature : ____________________________</div></div>
  </div>
  <div className='text-center my-2'>
  {
   email ?<div> <button className='btn btn-primary ' onClick={Envoyer}>Envoyer le recu</button> <button className='btn btn-success ' onClick={Download}>Télécharger votre recu</button> </div> :
   <button className='btn btn-success ' onClick={Download}>Télécharger votre recu</button>
  }
  </div>
  </div>
  )
}
