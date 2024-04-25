import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava01.jpg';
import ava02 from '../../assets/images/ava02.jpg';
import ava03 from '../../assets/images/ava03.jpg';

const Testimonials = () => {
    const settings={
      dots:true,
      isFinite:true,
      autoplay:true,
      speed:1000,
      swipToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,



      responsive:[
        {
          breakpoint:992,
          settings:{
            slidesToShow: 2,
            slideToScroll:1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint:576,
          settings:{
            slidesToShow: 1,
            slideToScroll:1,
          },
        },

      ]
    }
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur omnis, magni corporis unde doloribus cumque rem
        illo necessitatibus possimus placeat, dignissimos accusamus!
         Perferendis natus cum debitis incidunt atque quas vitae.</p>

         <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Stive Hughes</h6>
            <p>Customer</p>
          </div>
         </div>
    </div>
    <div className="testimonial py-4 px-3">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur omnis, magni corporis unde doloribus cumque rem
        illo necessitatibus possimus placeat, dignissimos accusamus!
         Perferendis natus cum debitis incidunt atque quas vitae.</p>

         <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'> Agnes Stive</h6>
            <p>Customer</p>
          </div>
         </div>
    </div>
    <div className="testimonial py-4 px-3">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur omnis, magni corporis unde doloribus cumque rem
        illo necessitatibus possimus placeat, dignissimos accusamus!
         Perferendis natus cum debitis incidunt atque quas vitae.</p>

         <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Stive Rio</h6>
            <p>Customer</p>
          </div>
         </div>
    </div>
    <div className="testimonial py-4 px-3">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur omnis, magni corporis unde doloribus cumque rem
        illo necessitatibus possimus placeat, dignissimos accusamus!
         Perferendis natus cum debitis incidunt atque quas vitae.</p>

         <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Agens Hughes</h6>
            <p>Customer</p>
          </div>
         </div>
    </div>
    <div className="testimonial py-4 px-3">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur omnis, magni corporis unde doloribus cumque rem
        illo necessitatibus possimus placeat, dignissimos accusamus!
         Perferendis natus cum debitis incidunt atque quas vitae.</p>

         <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Stive Hughes</h6>
            <p>Customer</p>
          </div>
         </div>
    </div>

  </Slider>
}

export default Testimonials;