import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr/>
        <div className="collections">
            {
                new_collections.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} 
                    image={item.image}/>
                })
            }
        </div>
    </div>
  )
}

export default NewCollections