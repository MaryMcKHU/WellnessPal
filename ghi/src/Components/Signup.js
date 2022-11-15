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
            variant='outline-light' 
            style={{fontSize:18, fontWeight:'bold'}}
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
            <Modal.Header closeButton>Sign Up
            </Modal.Header>
            <Modal.Body style={{width:500}}>
            <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <h2 style={{ fontWeight: "bold", fontSize:25, textAlign:'center' }}>
                    Welcome to Wellness Pal
                    </h2>
                </div>
                <div className="form-outline mb-4">
                    <input
                        // onChange={handleUserName}
                        required type="text"
                        id="username"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        // value={username}
                    />
                </div>
                <div className="form-outline mb-3">
                    <input
                        // onChange={(e) => setPassword(e.target.value)}
                        required type="password"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        // value={password}
                    />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                    <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                        Remember me
                    </label>
                </div>
                </div>
                <div className="text-center text-lg mt-4 pt-2">
                    <button
                    type="button"
                    className="btn btn-primary"
                    style={{fontWeight:'bolder'}}
                    // onClick={() => login(username, password)}
                    >
                    Sign Up
                    </button>
                </div>
                </form>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
  )
}