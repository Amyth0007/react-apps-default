
import './App.css';
import cont from './Emojipedia'
import React from "react";
import Card from './Card';
// import ContactArray from './ContactArray';
function Createemoji(contact){
  return<Card
    key={contact.id}
   ename={contact.ename}
        emoji= {contact.emoji}
        eMeaning={contact.eMeaning}
        eHistory={contact.ehistory}

     
     />
}
function App() {
  return (

  <>        <div className='bg'>
           <h1 >Emojipedia</h1>
        </div>
         {cont.map(Createemoji)}
            {/* <Card name = {cont[0].name} img = {cont[0].imgurl} tele={cont[0].tele} email= {cont[0].email} />
            <Card name = {cont[1].name} img = {cont[1].imgurl} tele={cont[1].tele} email= {cont[1].email} />
            <Card name = {cont[2].name} img = {cont[2].imgurl} tele={cont[2].tele} email= {cont[2].email} /> */}
    
            </>

  );
}

export default App;
