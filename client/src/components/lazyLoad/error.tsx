import React from "react";

interface IErrorProps { }

const Error: React.FC<IErrorProps> = (props) => {
  return (
    <div style={{ color: "red" }}>
      组件引入错误！
    </div>
  )
}

export default Error