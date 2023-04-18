
import { useState } from 'react';
import './App.css';
import { Details } from './descriptions';
import image1 from "./imgs/1.jpg"
import image2 from "./imgs/2.jpg"
import image3 from "./imgs/3.jpg"
import Animation from './secondnavImgs/Animation.jpg'
import Autres from './secondnavImgs/Autres.jpg'
import Décoration from './secondnavImgs/Décoration.jpg'
import Events from './secondnavImgs/Events.jpg'
import Mariages from './secondnavImgs/Mariages.jpg'
import Restauration from './secondnavImgs/Restauration.jpg'
import SliderComponent from './SliderComponent';
function App() {
  const images = [image1, image2, image3]
  const images1 = [image1, image2, image3]
  const images2 = [image1, image2, image3]
  const images3 = [image1, image2, image3]
  const images4 = [image1, image2, image3]
  const images5 = [image1, image2, image3]
  const images6 = [image1, image2, image3]
  const images7 = [image1, image2, image3]
  const [currlang,setcurrLang] = useState(true)
  const [prevLang,setPrevLang] = useState()
  const handleLang = () =>{
      setcurrLang(!currlang)
  }
  return (
    <div className="App text-center">
      <select onChange={handleLang} >
        <option value="fr">Francais</option>
        <option value="ar">العربية</option>
      </select>
    <div className='container-fluid'>
      <div className='row'>
      <h1 className='text-danger text-center'>Traiteur</h1>
      </div>
      <div className='row m-auto'>
      <div className='col-md-6 my-5 description'>
        
       {currlang ? <div className='txt'>{Details.Traiteur.fr}</div> : <div className='arabic'>{Details.Traiteur.ar}</div>}
   
      </div>
      <div className="slider col-md-5">
<SliderComponent imgs={images}/>
</div>
</div>
<div className='row'>
<h1 className='text-danger center'>Team</h1>
</div>
<div className='row'>
<div className="slider col-md-5">
<SliderComponent imgs={images1}/>
</div>
      <div className='col-md-6 my-5 description'>
      {currlang ? <div className='txt'>{Details.Team.fr}</div> : <div className='arabic'>{Details.Team.ar}</div>}
      </div>

</div>

</div>
<div className='container'>
<div className='row bg-danger secondnav'>
<div className=' col-md-2 text-center m-auto'>
  <div className='transit'>
  <a href='#Resto'><img className='navimgs' src={Restauration} alt="R"></img></a>
  </div>
  <b className='title'>Restauration</b>
</div>
<div className=' col-md-2 text-center m-auto'>
<div className='transit'>
<a href='#Deco'><img className='navimgs' src={Décoration} alt="D"></img></a>
</div>
  <b className='title text-center m-auto'>Décoration</b>
</div>
<div className=' col-md-2 text-center m-auto'>
<div className='transit'>
<a href='#Anim'>
<img className='navimgs' src={Animation} alt="A"></img></a>
</div>
  <b className='title'>Animation</b>
</div>
<div className=' col-md-2 text-center m-auto'>
<div className='transit'>
<a href='#Events'><img className='navimgs' src={Events} alt="E"></img></a>
</div>
  <b className='title'>Événement</b>
</div>
<div className=' col-md-2 text-center m-auto'>
<div className='transit'>
<a href='#Mari'><img className='navimgs' src={Mariages} alt="M"></img></a>
</div>
  <b className='title'>Mariages</b>
</div>
<div className=' col-md-2 text-center m-auto'>
<div className='transit'>
<a href='#Autre'><img className='navimgs' src={Autres} alt="A"></img></a>
</div>
  <b className='title '>Autre...</b>
</div>
</div>
</div>
<div className='container-fluid'>
<div className='row'id='Resto'>
<h1 className='text-danger center'>Restauration</h1>
</div>
<div className='row' >
<div className="slider col-md-5">
<SliderComponent imgs={images2}/>
</div>
      <div className='col-md-6 my-5 description'>
        <div className='txt'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div className='arabic'>
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم 
        </div>
      </div>

</div>
      <div className='row'id='Deco'>
      <h1 className='text-danger text-center'>Décoration</h1>
      </div>
      <div className='row m-auto' >
      <div className='col-md-6 my-5 description'>
        <div className='txt'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div className='arabic'>
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم 
        </div>
      </div>
      <div className="slider col-md-5">
      <SliderComponent imgs={images3}/>
</div>
</div>

<div className='row' id='Anim'>
<h1 className='text-danger center'>Animation</h1>
</div>
<div className='row'>
<div className="slider col-md-5">
<SliderComponent imgs={images4}/>
</div>
      <div className='col-md-6 my-5 description'>
        <div className='txt'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div className='arabic'>
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم 
        </div>
      </div>

</div>
<div className='row' id='Events'>
      <h1 className='text-danger text-center'>Événement</h1>
      </div>
      <div className='row m-auto'>
      <div className='col-md-6 my-5 description'>
        <div className='txt'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div className='arabic'>
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم 
        </div>
      </div>
      <div className="slider col-md-5">
      <SliderComponent imgs={images5}/>
</div>
</div>

<div className='row' id='Mari'>
<h1 className='text-danger center'>Mariages</h1>
</div>
<div className='row'>
<div className="slider col-md-5">
<SliderComponent imgs={images6}/>
</div>
      <div className='col-md-6 my-5 description'>
        <div className='txt'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div className='arabic'>
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم 
        </div>
      </div>

</div>
<div className='row' id='Autre'>
      <h1 className='text-danger text-center'>Autres</h1>
      </div>
      <div className='row m-auto'>
      <div className='col-md-6 my-5 description'>
        <div className='txt'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div className='arabic'>
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم 
        </div>
      </div>
      <div className="slider col-md-5">
      <SliderComponent imgs={images7}/>
</div>
</div>


</div>
</div>
  );
}

export default App;
