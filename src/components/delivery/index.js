import React from 'react'
import './delivery.css'
import Filter from '../common/filters/index';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';

const deliveryFilters = [
  {
    id: 1,
    icon: <i class="fa-solid fa-filter absolute-center"></i>,
    title: "Filters"
  },
  {
    id: 2,
    title: "Rating: 4.0+"
  },
  {
    id: 3,
    title: "Safe and Hygienic"
  },
  {
    id: 4,
    title: "Pure Veg"
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fa-solid fa-clock-o"></i>
  },
  {
    id: 6,
    title: "Get Offers"
  },
];

function Delivery() {
  return (
    <div>
      <div className='max-width'>
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
    </div>
  )
}

export default Delivery