import React from 'react';
import SharedLayout from '../components/SharedLayout';
//import { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
//import emailjs from '@emailjs/browser';

const Contact = () => {
{/*
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
            // service id, template id and your public key, get these by registering on EmailJs
          .sendForm('service_k0yf07i', 'template_d3i9txs', form.current, 'Dm939mnlPcJjrKRMC')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
*/}
  return (
    <>
    <SharedLayout></SharedLayout>
    <div className="container-fluid p-5">
      <div className="d-sm-flex align-items-center justify-content-center">
        <div>
          {/* ref={form} onSubmit={sendEmail} mdyeasinarafathofficial@gmail.com*/}
            <form action="https://formsubmit.co/70a28095b1ecacc23be1dad7b8dfdb06" method="POST" >
                <ul style={{listStyle: 'none'}} className='p-4'>
                    <li className="m-3 shadow-sm">
                    <input className='form-control form-class' placeholder="Name" type="text" name="Name" required />
                    </li>
                    <li className="m-3 shadow-sm">
                    <input
                        className='form-control form-class'
                        placeholder="Email"
                        type="email"
                        name="E-mail"
                        required
                    />
                    </li>
                    <li className='m-3 shadow-sm'>
                    <input
                        placeholder="Subject"
                        className='form-control form-class'
                        type="text"
                        name="Subject"
                        required
                    />
                    </li>
                    <li className='m-3 shadow-sm'>
                    <textarea
                        placeholder="Message"
                        name="Message"
                        required
                        className='form-control form-class'
                        style={{height: '200px'}}
                    ></textarea>
                    </li>
                    <li>
                      {/*value="SEND"*/}
                    <input type="submit" className="btn btn-primary custom-btn fw-bold m-3 px-5"  />
                    </li>
                </ul>
            </form>
        </div>  
        <div>
            <Player
              src='https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json'
              className="player d-md-none d-lg-block"
              loop
              autoplay
              style={{ maxHeight: '500px', maxWidth: '500px' }}
            />
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact;