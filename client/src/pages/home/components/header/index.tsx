import React from "react";
import { Link } from "umi";
import { cookie } from "@/utils";

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = (props) => {
  const username = localStorage.getItem('username')
  return <div className="header">
    <div className="header_title">Homestay</div>
    <div className='header_login'>
      {
        username ? username : (
          <>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
          </>
        )
      }
    </div>
  </div>
}

export default React.memo(Header)