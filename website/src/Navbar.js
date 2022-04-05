const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Store</h1>
            <div className="links">
                <a href="/" style={{
                    color: "white",
                    backgroundColor: '#5296A5',
                    borderRadius: '8px'
                }}>Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#5296A5',
                    borderRadius: '8px'
                }}>Cart</a>
            </div>
        </nav>
    );
}
 
export default Navbar;