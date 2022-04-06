import { useState } from 'react'

const Item = () => {
    const [item, setItem] = useState([
        {id:1, description:'lorem ipsum...', price:4.99, img:'img'},
        {id:2, description:'lorem ipsum...', price:2.99, img:'img'},
        {id:3, description:'lorem ipsum...', price:0.99, img:'img'}
    ])
    return ( 
        <div id="item-container">

        </div>
     );
}
 
export default Item;