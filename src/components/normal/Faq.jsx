import React, { useState } from 'react'

const Faq = () => {
    const [sawal , setSawal] = useState('');
    console.log(sawal, 'yyyyyyyyyyyyyyy');
    const handleClick = () =>{
        setSawal(''); 
        alert('Yow will get your answer in yuor e-mail');
       
    }
    
  return (
    <div>
        <span>Ask me if you have any question !!</span>
        <input type="text" name="query" value={sawal} onChange={(e)=>setSawal(e.target.value)}/>
        <button onClick={()=>{handleClick()}}>Click here</button>
    </div>
  )
}

export default Faq