import React from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'
const Header = () => {
    return (
        <>
            <div className='header w-100'>
                <div className='d-flex mobile-menu justify-content-between '>
                    <Link to="/" ><img src={logo} alt="" srcSet="" /></Link>
                    <div className='d-md-none'><ImSearch /></div>
                </div>
                <div className='navigate-link'>
                    <Link to="/tvshows" >Tv Show</Link>
                    <Link to="/popularmovies" >Popular Movies</Link>
                    <Link to="/recentlyadded" >Recently Added</Link>
                </div>
                <div className=' d-none d-md-block'><ImSearch /></div>

            </div>
        </>
    )
}

export default Header
