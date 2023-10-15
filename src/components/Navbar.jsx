import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { User, useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated,logout,user } = useAuth0();
  const rdivStyle = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10 mobile:h-auto">
      {/*left div*/}
      <div className="wrapper px-[20px] py-[10px] flex justify-between items-center mobile:pl-0 pr-0">
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px] mobile:hidden">
            En
          </div>
          <div className="serchInput flex ml-[10px] border-2 border-solid border-[8a4af3]">
            <input className="input outline-none mobile:w-[50px]" type="text" />
            <Search />
          </div>
        </div>
        {/*logo*/}
        <div className="logo flex-1 text-center mobile:ml-6">
          <div className="font-bold text-lg flex justify-between mobile:text-sm mobile:flex-col p-0"> 
            <Link to='/'>Home</Link>
            <Link to='/category'>Category</Link>
            <Link to='/products'>Products</Link>
          </div>
        </div>
        {/*rightdiv*/}
        <div className="rightdiv flex flex-1 justify-end mobile:justify-center mobile:flex-col">
          {isAuthenticated && <div className={rdivStyle}>
              Welcome: <p>{user.name}</p>
          </div>
          }
          <div className={rdivStyle}>
            <Badge badgeContent={2} color="primary">
              
                <Link to='/cart'><ShoppingCartIcon/></Link>
    
            </Badge>
          </div>
          {isAuthenticated? <div className={rdivStyle}>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          </div>
          :<div className={rdivStyle}><button onClick={() => loginWithRedirect()}>Log In</button></div>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
