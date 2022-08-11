import React from 'react'
import {useState, useEffect} from 'react'
import {FaSign} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const {email, password} = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.prevenDefault()
  }

  return (
    <>
      <div>
        <h1>
          <FaSign /> Login
        </h1>
        <p>Login and start</p>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div className='d-flex row'>
            <input
              type='email'
              name='email'
              className='mt-2'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
            <input
              type='password'
              name='password'
              className='mt-2'
              value={password}
              placeholder='Enter your password'
              onChange={onChange}
            />
          </div>
          <div>
            <button className='mt-2'>Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
