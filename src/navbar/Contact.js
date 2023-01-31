import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div id='form-head'>
      <form>
        <label htmlFor="username">UserName</label><br />
        <input className='form-box' type="text" name="username"  /><br />
        <label htmlFor="password">Password</label><br />
        <input className='form-box' type="password" name="password"  /><br />
        <button className='btn' type="button">Log In</button>
      </form>
      </div>
    </div>
  )
}

export default Contact