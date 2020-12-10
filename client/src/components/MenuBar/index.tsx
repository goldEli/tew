import React from "react";
import "./index.less"
import { TabBar } from "antd-mobile";
import { BsHouseDoorFill, BsHouseDoor, BsBagFill, BsBag, BsPersonFill, BsPerson } from "react-icons/bs";
import { history } from "umi"
interface IMenuBarProps {
  show: boolean,
  pathname: string
}

const MenuBar: React.FC<IMenuBarProps> = (props) => {
  const [items, setItems] = React.useState([
    {
      title: "Home",
      selectedIcon: <BsHouseDoorFill style={{ fontSize: '1.5rem' }} />,
      icon: <BsHouseDoor style={{ fontSize: '1.5rem' }} />,
      link: "/"
    },
    {
      title: "Order",
      selectedIcon: <BsBagFill style={{ fontSize: '1.5rem' }} />,
      icon: <BsBag style={{ fontSize: '1.5rem' }} />,
      link: "/order"
    },
    {
      title: "User",
      selectedIcon: <BsPersonFill style={{ fontSize: '1.5rem' }} />,
      icon: <BsPerson style={{ fontSize: '1.5rem' }} />,
      link: "/user"
    },
  ])
  return (
    <TabBar hidden={!props.show}>
      {
        items.map(item => {
          return <TabBar.Item
            key={item.link}
            title={item.title}
            icon={item.icon}
            selectedIcon={item.selectedIcon}
            selected={props.pathname === item.link}
            onPress={() => history.push(item.link)}
          />
        })
      }
    </TabBar>
  )
}

export default MenuBar