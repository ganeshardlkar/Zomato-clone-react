import React from'react';
import './header.css';

function Header() {
    return (
        <div className='max-width header'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" className='header-logo' />
            <div className='header-right'>
                <div className='header-location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                            <i className="fa-solid fa-location-dot absolute-center location-icon"></i>
                            <div>Bangalore</div>
                        </div>
                        <i className="fa-solid fa-sort-down absolute-center"></i>
                    </div>
                    <div className='location-search-separator'></div>
                    <div className='header-searchbar'>
                        <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
                        <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='search-input' />
                    </div>
                </div>
                <div className='profile-wrapper'>
                    <img src="https://b.zmtcdn.com/data/user_profile_pictures/f42/0b56fa0c051cbea45270f3a871d7af42.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Profile-photo" className='header-profile-image' />
                    <span className='header-username'>Ganesh</span>
                    <i className="fa-solid fa-sort-down absolute-center"></i>
                </div>
            </div>
        </div>
    )
}

export default Header