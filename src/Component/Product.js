import React from 'react'
import img1 from './Assets/p1.jpg'
import img2 from './Assets/p2.jpg'
import img3 from './Assets/p3.jpg'

export default function Product() {
  return (
    <div className='prod'>
        <div className='pr1'>
            <h3>Chocolate Cake</h3>
            <img src={img1} alt='chocolate cake' className='i1'></img>
        </div>
        <div className='pr2'>
            <h3>Strawberry Cake</h3>
            <img src={img2} alt='strawberry cake' className='i2'></img>
        </div>
        <div className='pr3'>
            <h3>Vanilla Cake</h3>
            <img src={img3} alt='vanilla cake' className='i3'></img>
        </div>
    </div>
  )
}
