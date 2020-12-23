import React from "react";
import { List, Button } from "antd-mobile"
import { history } from "umi";
import { useHttpHook } from "@/hooks";
import "./index.less"
import { IUserDetail } from "@/type"
import { http } from "@/utils";
import { ErrorBoundary } from "@/components";


interface IUserProps { }

const User: React.FC<IUserProps> = (props) => {
    const [userDetail] = useHttpHook<IUserDetail>({ url: "/user/detail", body: { id: "123" } })

    const handleClick = () => {
        history.push({
            pathname: "/user/edit",
            query: {
                id: 10
            }
        })
    }

    const handleLogout = async () => {
        await http({
            url: "/user/logout"
        })
        localStorage.clear()
        location.href = "/login?from=" + location.pathname
    }

    return (
        <ErrorBoundary>
            <div className="user-page">
                {/* 用户信息 */}
                <div className="info">
                    <div className='set' onClick={handleClick}>设置</div>
                    <div className='user'>
                        <img alt='user' src={userDetail?.avatar || require("../../assets/blank.png")} />
                        <div className='tel'>{userDetail?.phone}</div>
                        <div className='sign'>{userDetail?.sign}</div>
                    </div>
                </div>
                <div className="lists">
                    <List>
                        <List.Item arrow='horizontal'> 用户协议 </List.Item>
                        <List.Item arrow='horizontal'> 常见问题 </List.Item>
                        <List.Item arrow='horizontal'> 联系客服 </List.Item>
                    </List>
                </div>
                <Button onClick={handleLogout} type="warning">Log out</Button>
            </div>

        </ErrorBoundary>
    )
}

export default User