import React from 'react'

const About = () => {
    return (
        <div className='about'>
           <div className='container'>
             <div className="row">
                 <div className="col-6 p-25">
                 <h3>About Us</h3>
               <h1>WELCOME TO MAESTRO PIZZINI</h1>
               <p>Adipisicing officia ex eu aliqua adipisicing sint exercitation amet anim voluptate ex elit Lorem et. Ipsum tempor do veniam non ipsum sit aliquip irure sint non magna in. Minim cillum ad sint cupidatat do velit cillum non.</p>
               <div className='about__btn'>
                   <a href="" className="btn btn-smart2">
                       READ MORE
                    </a>
               </div>   
                 </div>
                 <div className="col-6">
                    <div className="about__img">
                        <img src="./img/pizza.jpg" alt="pizza" />
                    </div>
                 </div>
             </div>
           </div>
        </div>
    )
}

export default About
