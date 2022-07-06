import React, { useState } from 'react'

const App = () => {

  const[userRegistration, setuserRegistration] = useState({
    username : "",
    email : "",
    phone : "",
    password : ""
  })

  const [records, setRecords] = useState([])

  const handleInput = (event) =>{
    const name = event.target.name
    const value = event.target.value

    setuserRegistration({...userRegistration, [name] : value})

  } 

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newRecord = { ...userRegistration, id : new Date().getTime().toString()}
    setRecords([...records, newRecord])

    setuserRegistration({username:"", email:"", phone:"", password:""})
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Fullname</label>
        <input type="text" autoComplete='off' 
        value= {userRegistration.username}
        onChange={handleInput}
         name='username' id='username'/>
        </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="text" autoComplete='off'
        value= {userRegistration.email}
        onChange={handleInput}
         name='username' id='username'/>
        </div>

      <div>
        <label htmlFor="Phone">Phone</label>
        <input type="text" autoComplete='off'
        value={userRegistration.phone}
        onChange={handleInput}
         name='username' id='username'/>
        </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="passoword" autoComplete='off'
        value={userRegistration.password}
        onChange={handleInput}
         name='username' id='username'/>
        </div>
        <button type='submit'>Registration</button>
      </form>

      <div>
        {
          records.map((curElem) =>{
            return(
              <div className='showDataStyle'>
                <p>{curElem.username}</p>
                <p>{curElem.email}</p>
                <p>{curElem.phone}</p>
                <p>{curElem.password}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App 