import React from 'react'
import MyContext from './context/MyContext'
import { useContext } from 'react'

const FirstApp = () => {
    const theme = useContext(MyContext);
    console.log(theme, 'ppppppppppp');
  return (
    <div className={theme ? 'kariya' : 'safed'}>FirstApp</div>
  )
}

export default FirstApp