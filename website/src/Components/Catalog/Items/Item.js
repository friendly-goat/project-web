import { useState } from 'react'
import './Item.css'
// good production way to  get pics that are on public folder: process.env.PUBLIC_URL + `/Imgs/img${item.id}.jpg`
const Item = () => {
    const [items,setItems] = useState([
        {id:1, name:"Kulich", description:'lorem ipsum...', price:3.99, img:'https://media.istockphoto.com/photos/easter-cake-with-a-white-cap-made-of-icing-and-colored-powder-on-picture-id666675590?k=20&m=666675590&s=612x612&w=0&h=lteAL6fLVdSI8R8iq2PrQxtSiOLRk9HHweIIjxS_Qnc='},
        {id:2, name:"Pasha", description:'lorem ipsum...', price:5.99, img:'https://assets.epicurious.com/photos/560df214f9a84192308a84fa/4:6/w_232,h_348,c_limit/109329.jpg'},
        {id:3, name:"Painted Egg", description:'lorem ipsum...', price:0.99, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Easter_eggs_-_onion_decoration.jpg/1280px-Easter_eggs_-_onion_decoration.jpg'},
        {id:4, name:"Large Basket", description:'lorem ipsum...', price:16.99, img:'https://i.pinimg.com/originals/3c/b6/ee/3cb6eedde5e0904519ffc2e373873e99.jpg'},
        {id:5, name:"Small Basket", description:'lorem ipsum...', price:9.99, img:'https://cdn.pixabay.com/photo/2019/04/25/12/09/happy-easter-4154655_960_720.jpg'}
    ])
    return ( 
        <div id="item-container">
            {items.map((item)=>(
                <div className="item-preview" key={item.id}>
                    <img id="item-pic" src={item.img} alt="..." />
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Item;