import React, { useContext } from 'react'
import MyContext from './context/MyContext'

const SecondApp = () => {
    const theme = useContext(MyContext)
  return (
    <div className={theme? 'safed' : 'kariya'}>SecondApp</div>
  )
}

export default SecondApp