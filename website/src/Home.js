import { useState } from 'react';
const Home = () => {
    // let name = 'Alex'
    const [name,setName] = useState('Alex')
    const [age,setAge] = useState(25)
    const handleClick = () => {
        setName("Aleks")
        setAge(30)
    }
    // const handleClick2 = (name) => {
    //     alert(`Hello ${name}`)
    // }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClick2('Aleks')}>Click me again</button> */}
        </div>
    );
}
 
export default Home;