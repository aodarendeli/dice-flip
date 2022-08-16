import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {FaUser} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'
import {TbDeviceGamepad2} from 'react-icons/tb'
import {BsCurrencyBitcoin,BsDice6} from 'react-icons/bs'
import { NavDropdown } from 'react-bootstrap'
import './header.css'
import { useDispatch } from 'react-redux'
import { setDefaultModal } from '../../Redux/Actions/element'

function Header() {
 const dispatch = useDispatch() 

  return (
    // <header className="d-flex col justify-content-end">
    //     <ul style={{listStyle: "none"}}>
    //         <li>
    //             <Link to = "/login">Login</Link>
    //         </li>
    //         <li>
    //             <Link to = "/register">Register</Link>
    //         </li>
    //     </ul>
    // </header>
    <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand>
          <svg
            width='43'
            height='44'
            viewBox='0 0 43 44'
            fill='white'
            xmlns='http://www.w3.org/2000/svg'
            id='PolyflipLogo'
            className='polyflipLogo'
          >
            <path
              id='PolyflipLogoExt'
              d='M28.2432 1.83574L35.5598 5.98466C39.8763 8.43232 42.5353 12.9558 42.5353 17.8511L42.5353 26.1489C42.5353 31.0442 39.8763 35.5677 35.5598 38.0153L28.2432 42.1643C23.9267 44.6119 18.6086 44.6119 14.2922 42.1643L6.9755 38.0153C2.65904 35.5677 2.14892e-07 31.0442 1.81006e-07 26.1489L1.23567e-07 17.8511C8.96814e-08 12.9558 2.65905 8.43232 6.9755 5.98466L14.2922 1.83574C18.6086 -0.611915 23.9267 -0.611912 28.2432 1.83574ZM25.7519 6.07375C22.977 4.50025 19.5583 4.50025 16.7834 6.07375L9.46675 10.2227C6.69189 11.7962 4.9825 14.7041 4.9825 17.8511L4.9825 26.1489C4.9825 29.2959 6.69189 32.2038 9.46675 33.7773L16.7834 37.9263C19.5583 39.4997 22.977 39.4997 25.7519 37.9263L33.0686 33.7773C35.8434 32.2038 37.5528 29.2959 37.5528 26.1489L37.5528 17.8511C37.5528 14.7041 35.8434 11.7962 33.0686 10.2227L25.7519 6.07375Z'
            ></path>
            <path
              id='PolyflipLogoInt'
              d='M19.3172 13.856C20.5504 13.1567 22.0699 13.1567 23.3032 13.856L27.4477 16.2062C28.6809 16.9055 29.4407 18.1979 29.4407 19.5966L29.4407 24.2969C29.4407 25.6955 28.6809 26.9879 27.4477 27.6873L23.3032 30.0374C22.0699 30.7367 20.5504 30.7367 19.3172 30.0374L15.1727 27.6873C13.9394 26.9879 13.1797 25.6955 13.1797 24.2969L13.1797 19.5966C13.1797 18.1979 13.9394 16.9055 15.1727 16.2062L19.3172 13.856Z'
            ></path>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='mx-auto my-2 my-lg-0'
            style={{maxHeight: '100px'}}
            navbarScroll
          >
            <div className='d-flex align-items-center nav-link'>
              <Link to='/' className='d-flex align-items-center'>
                <AiOutlineHome className='mx-1' />
                <span className='theme__nav'>HomePage</span>
              </Link>
            </div>

            <div className='d-flex align-items-center nav-link'>
                <TbDeviceGamepad2 className='mx-1' />
                <NavDropdown title="Games" id="basic-nav-dropdown">
                    <div className='d-flex align-items-center nav-link'>
                      <Link to='/coin' className='d-flex align-items-center'>
                        <BsCurrencyBitcoin className='mx-1' />
                        <span className='theme__nav'>Coin</span>
                      </Link>
                    </div>
                    <div className='d-flex align-items-center nav-link'>
                      <Link to='/dice' className='d-flex align-items-center'>
                        <BsDice6 className='mx-1' />
                        <span className='theme__nav'>Dice</span>
                      </Link>
                    </div>
                </NavDropdown>
            </div>

            <div className='d-flex align-items-center nav-link'>
              <div onClick={()=> dispatch(setDefaultModal({type: 'profile'}))} className='d-flex align-items-center'>
                <FaUser className='mx-1' />
                <span  className='theme__nav'>Profile</span>
              </div>
            </div>

            <div className='d-flex align-items-center nav-link'>
              <div onClick={()=> dispatch(setDefaultModal({type: 'settings'}))} className='d-flex align-items-center'>
                <FiSettings className='mx-1' />
                <span className='theme__nav'>Settings</span>
              </div>
            </div>
            
          </Nav> 
          <Button className='btn' variant='outline-success'>
            Connect Wallet
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
