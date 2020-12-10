import React from 'react';
import styles from './index.css';
import { MenuBar } from "../components";
import { useLocation } from "umi";

const BasicLayout: React.FC = props => {
  const location = useLocation()
  const paths = ['/', '/user', '/order']
  return (
    <>
      {props.children}
      <MenuBar show={paths.includes(location.pathname)} pathname={location.pathname} />
    </>
  );
};

export default BasicLayout;
