import './Navbar.scss'

const Navbar = () => (
  <div className='navbar' data-testid='navbar'>
    <div className='navContainer'>
      <span className='logo'>CheapyBookingApp</span>
      <div className='navItems'>
        <button className='navButton'>Register</button>
        <button className='navButton'>Login</button>
      </div>
    </div>
  </div>
)

export default Navbar
