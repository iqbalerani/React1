import icon from './icon.png'

function Header() {
  return (
  <header>
      <nav className="nav">
          <img src={icon} alt="React-icon" className="nav-logo"></img>
          <ul className="nav-items">
              <a href="Pricing" className="active">Pricing</a>
              <a href="About">About</a>
              <a href="Contact">Contact</a>
          </ul>
      </nav>
  </header>
)}


export default Header