import React from 'react';
import styles from './index.css';
import { MenuBar } from "../components";
import { useLocation } from "umi";

const BasicLayout: React.FC = props => {
  const location = useLocation()
  const paths = ['/', '/user', '/order']
  console.log(paths, location.pathname, props.children)
  return (
    <>
      <MenuBar show={true} pathname={location.pathname} >
      </MenuBar>
      {props.children}
    </>
  );
};

export default BasicLayout;
