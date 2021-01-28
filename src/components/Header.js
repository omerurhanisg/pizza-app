import React from 'react'
import Navbar from './Navbar'
const Header = () => {
    return (
        <div className='banner'>
            <Navbar />
         <div className='banner__content'>
             <div className='container'>
                <div className='banner__text'>
                 <h3>Pizza Delivery</h3> 
                <h1>MAESTRO PIZZINNI</h1>
                 <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>
                <div className='banner__btn'>
                    <a href='' className='btn btn-smart'>
                        Buy Now
                    </a>
                </div>
                </div>
             </div>
         </div>
        </div>
    )
}

export default Header
