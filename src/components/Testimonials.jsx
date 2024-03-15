import React from 'react'
import {FcApproval} from "react-icons/fc"

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='testimonial-text'>
            <h3>Testimonials</h3>
            <h1>What Our Clients Say !</h1>
            <p>See what our members are saying. Trusted by 1200+ world class businesses</p>
            <a href="/">Read all 2,432 reviews</a>
        </div>
        <div className='testimonial-cards'>
            <div className='card'>
                <img src="person1.png" alt="" />
                <p> is the most genuine site I have came accross for purchasing the authentic </p>
                <div className='icons'>
                    <a href="/">@alexborm</a>
                    <FcApproval size={18} className='icon' />
                </div>
            </div>
            <div className='card'>
                <img src="person2.png" alt="" />
                <p> is the most genuine site I have came accross for purchasing the authentic </p>
                <div className='icons'>
                    <a href="/">@chrisjames</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='card'>
                <img src="person3.png" alt="" />
                <p> since long time and I am happy till now also I'll recommend others to explore various products.</p>
                <div className='icons'>
                    <a href="/">@skairubelga</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='card'>
                <img src="person4.jpg" alt="" />
                <p>I am always happy and feel secure that the transaction between me and my client</p>
                <div className='icons'>
                    <a href="/">@mal</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials