import React from "react";
import { Link } from "umi";

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = (props) => {
  return <div className="header">
    <div className="header_title">homestay</div>
    <div className='header_login'>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  </div>
}

export default Header