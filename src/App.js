import {useState, React } from 'react';
import Bill from './components/Bill';
import Service from './components/Service';
import People from './components/People';
import Calculate from './components/Calculate';
import './css/App.css';

function App() {
  const [bill, setBill] = useState(0);
    const [people, setPeople] = useState(0);
    const [service, setService] = useState(0.3);
    const [tipAmount, setTipAmount] = useState(0);
    const tipCalculation= ()=> (
   setTipAmount((bill*service)/(people))
    );
     
    return (
        <div className= 'wrapper overflow-auto bg-yellow'>
            <div  className='overflow-auto bg-green'><h1 className='h1'>Tip Calculator</h1></div>
            <div className= 'question'>
    <Bill className= 'overflow-auto'
     bill = {bill}
     setBill= {setBill}/>
    <Service className= 'overflow-auto'
    service= {service} 
             setService= {setService}/>
   <People className= 'overflow-auto'
   people= {people}
   setPeople= {setPeople}/>
   <Calculate className= 'overflow-auto'
   tipCalculation = {tipCalculation}/>
            </div>

            <div className= "result overflow-auto">
         <p>TIP AMOUNT</p>
         <section className= "dollar"><p className= "sign">$</p><p className= "finalamount">{tipAmount}</p></section>
         <p>each</p>
    </div>
        </div>
    );
}

export default App;
