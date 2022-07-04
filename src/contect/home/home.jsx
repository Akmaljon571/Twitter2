import { useState, useEffect } from 'react'

import Container from '../container/container'
import yulduzcha from '../img/home_header_yulduzcha.png'
import imgage from '../img/home_header_img.png'
import gif from '../img/home_header_gif.png'
import more from '../img/home_header_more.png'
import small from '../img/home_header_small.png'
import kalendar from '../img/home_header_kalendar.png'
import './home.scss'

const Home = () =>{
    var emojiCompact = require('emoji.json/emoji-compact.json')
    let emoji = emojiCompact.slice(1,200)
    console.log(emoji);
    let smal = () =>{
          
    }

    let smallcha = () =>{
        
    }

    return (
        <Container>
            <div className="home">
                <div className="home_left">
                    <div className="home_navbar">
                        <h1 className='home_nav'>Home</h1>
                        <img src={yulduzcha} alt="Yulduzcha" />
                    </div>
                    <div className="home_header">
                        <img src={gif} alt="" className="home_user_image" />
                        <div className="home_header_div">
                            <input type="text" className="home_header_input" />
                            <span className="uzun_chiziq"></span>
                            <div className="home_header_svg">
                                <div className="home_header_img">
                                    <label htmlFor="image">
                                        <img className='home_header_svg_img1'  src={imgage} alt="rasm" />
                                        <input type="file" className='none' id='image' />
                                    </label>
                                    <label htmlFor="gif">
                                        <img className='home_header_svg_img2'  src={gif} alt="gif" />
                                        <input type="file" className='none' accept="image/gif" id='gif' />
                                    </label>
                                    <img src={more} alt="more" />
                                    
                                    <label onClick={smal} htmlFor="Emoji">
                                        <img className='home_header_svg_img3'  src={small} alt="smilek" />
                                        <input type="submit" className='none' id="Emoji" />
                                    </label>
                                    <label onClick={smal} htmlFor="kalendar">
                                        <img  className='home_header_svg_img4' src={kalendar} alt="kalendar" />
                                        <input type="date" className='none' id="kalendar" />
                                    </label>

                                </div>
                                <button className='home_header_button'>Tweet</button>
                            </div>
                        </div>
                    </div>
                    <span className="home_header_span"></span>
                </div>

            </div>




            <ul className="home_small">
              {emoji.map((key)=>(
                <li className="home_item">{key}</li>
              ))}
            </ul>
        </Container>
    )
}

export default Home