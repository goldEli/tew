import React from "react";
import { TabBar } from "antd-mobile";

interface IMenuBarProps {
  show: boolean,
  pathname: string
}

const MenuBar:React.FC<IMenuBarProps> = (props) => {
    return (
      <TabBar hidden={!props.show}>
        <TabBar.Item></TabBar.Item>
      </TabBar>
    )
}

export default MenuBar