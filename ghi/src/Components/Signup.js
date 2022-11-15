import { ModalUnstyled } from '@mui/base';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Signup() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return(
    <div className="signup">
        <div>
        <Button
            className='font-link'
            variant='outline-light' 
            style={{fontSize:18, fontWeight:'bold', border:'none', borderRadius:30}}
            onClick={handleShow}
        >
            Sign Up
        </Button>
        </div>
        <div>
        <Modal 
            show={show} 
            onHide={handleClose} 
            dialogClassName='modal-md'
            style={{textAlign:'center'}}
        >
            <Modal.Header closeButton>Sign up
            </Modal.Header>
            <Modal.Body style={{width:500}}>
            <form>
              <h4>Welcome to Wellness Pal</h4>
              <div className="form-outline mb-2">
                <input
                //   onChange={handleUserName}
                  required
                  type="text"
                  id="username"
                  className="form-control form-control-lg"
                  placeholder="Username"
                //   value={username}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                //   onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                //   value={password}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                //   onChange={(e) => setFirstName(e.target.value)}
                  required
                  type="text"
                  id="first_name"
                  className="form-control form-control-lg"
                  placeholder="First Name"
                //   value={first_name}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                //   onChange={(e) => setLastName(e.target.value)}
                  required
                  type="text"
                  id="last_name"
                  className="form-control form-control-lg"
                  placeholder="Last Name"
                //   value={last_name}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                //   onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                //   value={email}
                />
              </div>
              <div className="text-center pt-2">
                <button
                  type="button"
                  className="btn btn-primary"
                //   onClick={() =>
                //     signup(username, password, email, first_name, last_name)
                //   }
                >
                  Sign Up
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already on Wellness Pal?{" "}
                  <a href="/user/login/" className="link-primary">
                    Log in
                  </a>
                </p>
              </div>
            </form>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
  )
}