import React from "react";
import { Link } from "umi";
import { cookie } from "@/utils";

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = (props) => {
  return <div className="header">
    <div className="header_title">Homestay</div>
    <div className='header_login'>
      {
        cookie.get("user") ? cookie.get("user") : (
          <>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
          </>
        )
      }
    </div>
  </div>
}

export default React.memo(Header)