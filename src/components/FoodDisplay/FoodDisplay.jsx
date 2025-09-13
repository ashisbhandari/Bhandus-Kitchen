import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/storeContext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)
    return (
        <div className='fooddisplay' id='fooddisplay'>
            <h2>Top dishes available here</h2>
            <div className="fooddisplay-list">
                {food_list.map((item,index)=>{
                    if(category==="All" || category===item.category){
                        return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>

        </div>
    )
}

export default FoodDisplay
