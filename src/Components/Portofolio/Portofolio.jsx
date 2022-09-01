import React from 'react'
import './Portofolio.css'
import biRecipe from '../../assets/birecipe-ss.jpg'
import biShop from '../../assets/bi-shoop-ss.jpg'
import biGame from '../../assets/bigame-suit-ss.jpg'
import biMovies from '../../assets/bimovies-ss.jpg'

export default function Portofolio() {

    const portofolioClose = () => {
        document.querySelector('.portofolio').style.display = 'none'
    }
    return (
        <div className='portofolio'>
            <div className='menu-bar'>
                <div className='ctrl-tab'>
                    <div className='red' onClick={() => portofolioClose()} ></div>
                    <div className='yellow' style={{ backgroundColor: 'rgb(255, 234, 0)' }}></div>
                    <div className='green' style={{ backgroundColor: 'green' }}></div>
                </div>
                <div className='title-bar'>Portofolio</div>
            </div>
            <div className='content-porto'>
                <div className='card-porto'>
                    <a href="https://birecipe.netlify.app/" target='_blank'>
                        <img src={biRecipe} alt="" />
                    </a>
                </div>
                <div className='card-porto'>
                    <a href="https://bi-shop.netlify.app/" target='_blank'>
                        <img src={biShop} alt="" />
                    </a>
                </div>
                <div className='card-porto'>
                    <a href="https://bimovies.netlify.app/" target='_blank'>
                        <img src={biMovies} alt="" />
                    </a>
                </div>
                <div className='card-porto'>
                    <a href="https://bigame-suit.netlify.app/" target='_blank'>
                        <img src={biGame} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
