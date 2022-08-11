import React from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const {name, email, password, password2} = formData
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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div className='d-flex row'>
            <input
              type='text'
              name='name'
              className='mt-2'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
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
            <input
              type='password'
              name='password2'
              className='mt-2'
              value={password2}
              placeholder='Enter your password2'
              onChange={onChange}
            />
          </div>
          <div>
            <button className='mt-2'>Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
