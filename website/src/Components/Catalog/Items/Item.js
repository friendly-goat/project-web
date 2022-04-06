import { useState } from 'react'
import './Item.css'
const Item = () => {
    const [items,setItems] = useState([
        {id:1, name:"example1", description:'lorem ipsum...', price:4.99, img:'img'},
        {id:2, name:"example2", description:'lorem ipsum...', price:2.99, img:'img'},
        {id:3, name:"example3", description:'lorem ipsum...', price:0.99, img:'img'},
        {id:4, name:"example3", description:'lorem ipsum...', price:0.99, img:'img'}
    ])
    return ( 
        <div id="item-container">
            {items.map((item)=>(
                <div className="item-preview" key={item.id}>
                    <img id="item-pic" src={process.env.PUBLIC_URL + `/Imgs/img${item.id}.jpg`} alt="..." />
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Item;