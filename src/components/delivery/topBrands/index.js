import React from'react';
import './topBrands.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandList = [
    {
        id: 1,
        name: "Domino's Pizza",
        time: "30 mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp"
    },
    {
        id: 2,
        name: "Leon's Burgers & Wings",
        time: "15 mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7e91871a40c877332641a411e7dea18b_1668319552.png?output-format=webp"
    },
    {
        id: 3,
        name: "McDonald's",
        time: "30 mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp"
    },
    {
        id: 4,
        name: "Burger King",
        time: "24 mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp"
    },
    {
        id: 5,
        name: "KFC",
        time: "22 mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp"
    },
    {
        id: 6,
        name: "Pizza Hut",
        time: "26 mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp"
    },
    {
        id: 7,
        name: "FreshMenu",
        time: "23 mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp"
    },
    {
        id: 8,
        name: "Truffles",
        time: "36 mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png?output-format=webp"
    }
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

function TopBrands() {
    return <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {topBrandList.map((brand) => {
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className="top-brands-img" alt={brand.name} />
                    </div>
                </div>
            })}
        </Slider>
    </div>
}

export default TopBrands;