import React,{useState} from 'react';
import './Navbar.css';
import Logo from './assets/image/mcb2 logo.png';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import { CiUser } from "react-icons/ci";
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import { CiShoppingCart } from "react-icons/ci";
import { SearchBar } from './Components/SearchBar';
import { SearchResultsList } from './Components/SearchResultsList';
const theme = createTheme({
  palette: {
    primary: {
      main: '#66bb6a',
    },
  },
});
const buttons = [
  <Button key="one" variant='outlined' style={{cursor:'pointer',"& :hover":{TextDecoration:'underline'}}}>One</Button>,
  <Button key="two" variant='outlined'>Two</Button>,
  <Button key="three" variant='outlined'>Three</Button>,
];

function Navbar() {
  const [results, setResults] = useState([]);
  return (
    <nav className="navbar">
<div><img className='logo' src={Logo} ></img></div>
<div className='content1'>
{/* <ButtonGroup
        orientation=""
        aria-label="Vertical button group"
        variant="text"
      >
       {buttons}
      </ButtonGroup> */}
<span>Shop</span>
  <span>Combos</span>
  <span>About Us</span>
  <span>Sign In</span>
  <CiShoppingCart />
  
  <SearchBar setResults={setResults}/>
      {results && results.length > 0 && <SearchResultsList results={results} />}
      {/* <div className="signIn">Sign In</div> */}
      </div>
{/* <Button className="signIn" >Sign In</Button> */}
    </nav>
  );
}

export default Navbar;