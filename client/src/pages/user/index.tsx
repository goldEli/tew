import React from "react";
import { List } from "antd-mobile"
import { history } from "umi";
import "./index.less"


interface IUserProps { }

const User: React.FC<IUserProps> = (props) => {

    const handleClick = () => {
        history.push({
            pathname: "/user/edit",
            query: {
                id: 10
            }
        })
    }

    return (

        <div className="user-page">
            {/* 用户信息 */}
            <div className="info">
                <div className='set' onClick={handleClick}>设置</div>
                <div className='user'>
                    <img alt='user' src={""} />
                    <div className='tel'>{""}</div>
                    <div className='sign'>{""}</div>
                </div>
            </div>
            <div className="lists">
                <List>
                    <List.Item arrow='horizontal'> 用户协议 </List.Item>
                    <List.Item arrow='horizontal'> 常见问题 </List.Item>
                    <List.Item arrow='horizontal'> 联系客服 </List.Item>
                </List>
            </div>
        </div>
    )
}

export default User