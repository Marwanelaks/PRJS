import React, { useState } from 'react';


function FaqPage() {
  // state to store user's inputted question
  const [question, setQuestion] = useState('');

  // handler for when the user submits the question form
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page from refreshing
    console.log(question); // do something with the user's question
    setQuestion(''); // clear the input field
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Frequently Asked Questions</h1>

      <div className='row'>
        <div className='col'>
          <div>
            <h3>Question 1?</h3>
            <p>Answer 1.</p>
          </div>

          <div>
            <h3>Question 2?</h3>
            <p>Answer 2.</p>
          </div>

          <div>
            <h3>Question 3?</h3>
            <p>Answer 3.</p>
          </div>
        </div>
      </div>

      {/* form to submit a new question */}
      <div className=" row mt-2">
        <div className='col'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Ask a question:</label>
              <input className='form-control'
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <button type="submit" className='btn btn-success m-auto my-3'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;





// import React from 'react';
// import './faq.css';

// const Faq = () => {
//   return (
//     <div className="container">
//       <div className="accordion" id="accordionExample">
//         <div className="card">
//           <div className="card-header" id="headingOne">
//             <h5 className="mb-0">
//               <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                 Quels sont les types de menus que vous proposez ?
//               </button>
//             </h5>
//           </div>

//           <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
//             <div className="card-body">
//               Nous proposons différents types de menus pour répondre aux goûts et aux besoins de nos clients. Vous pouvez consulter notre brochure de menus pour plus d'informations.
//             </div>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header" id="headingTwo">
//             <h5 className="mb-0">
//               <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                 Est-ce que vous pouvez personnaliser un menu pour mon événement ?
//               </button>
//             </h5>
//           </div>
//           <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
//             <div className="card-body">
//               Oui, nous pouvons personnaliser un menu pour votre événement en fonction de vos préférences alimentaires, de votre budget et de vos besoins spécifiques. Contactez-nous pour plus d'informations.
//             </div>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header" id="headingThree">
//             <h5 className="mb-0">
//               <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                 Est-ce que vous fournissez également les décorations pour les événements ?
//               </button>
//             </h5>
//           </div>
//           <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
//             <div className="card-body">
//               Oui, nous pouvons également fournir des décorations pour votre événement. Contactez-nous pour plus d'informations sur nos options de décoration.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Faq;
