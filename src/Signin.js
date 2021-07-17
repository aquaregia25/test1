import React from 'react'

export const Signin = () => {
    return (
        <div className="container mt-5 mb-5">
          
          <h1>Sign In</h1>

<form >
  <div className="mb-3">
    <label htmlFor="loginemail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="loginemail" />
  </div>
  <div className="mb-3">
    <label htmlFor="loginpassword" className="form-label">Password</label>
    <input type="password" className="form-control" name="loginpassword" id="loginpassword"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
    )
}
