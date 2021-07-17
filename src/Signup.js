import React from 'react'

export const Signup = () => {
    return (
<div className="container mt-5 mb-5">
  <h1>Sign Up</h1>
<form>
  <div className="mb-3">
    <label htmlFor="signupname" className="form-label">Name:</label>
    <input type="email" className="form-control" id="signupname" name="signupname" />
  </div>
  <div className="mb-3">
    <label htmlFor="signupemail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="signupemail" name="signupemail"  />
  </div>
  <div className="mb-3">
    <label htmlFor="loginemail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="loginemail" />
  </div>

  <div className="mb-3">
    <label htmlFor="loginpassword" className="form-label">Password</label>
    <input type="password" className="form-control" name="loginpassword" id="loginpassword"/>
  </div>
  <div className="mb-3">
    <label htmlFor="loginemail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="loginemail" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    )
}
