import React, { useContext, useState } from 'react';
import { useThemeContext } from '../context/ThemeContextProvider';
import MyContext from '../context/MyContext';

const PresentScore = () => {
    const [score, setScore] = useState('');
    const { updateUser } = useThemeContext();
    // const {user, theme} = useContext(MyContext);

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.targt.value;
        setScore( value =>({...value, [name]: value}));
    }

    const handleUserUpdate = () => {
        updateUser({ name: 'Bogambo', role: 'Manager' });
    };
  return (
    <div>
        <h1>PresentScore</h1>
        {/* <p>Current theme: {theme}</p> */}
        {/* <p>User: {user.name}</p>
        <p>Role: {user.role}</p> */}
        <label htmlFor="score"></label>
        <input type="text" name="scoreValue" id='score' value={score} onClick={(e)=>{handleChange(e)}} />

        <button onClick={handleUserUpdate}>Update User</button>
    </div>
  )
}

export default PresentScore