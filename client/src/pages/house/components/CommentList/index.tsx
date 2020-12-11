import React from "react";
import { ShowLoading } from '@/components';
import { timer } from '@/utils';

interface ICommentListProps {
  lists?: {
    id?: string,
    avatar?: string,
    username?: string,
    createTime?: number,
    info?: string,
  }[];
  showLoading: boolean;
}

const CommentList: React.FC<ICommentListProps> = (props) => {

  return (
    <div className='comment'>
      <h1 className='comment-title'>评论</h1>
      <div className='comment-lists'>
        {props?.lists?.map(item => (
          <div className='comment-lists_item' key={item?.id}>
            <img alt='user' className='avatar' src={item?.avatar} />
            <div className='right'>
              <div className='right-top'>
                <p>{item?.username}</p>
                <p>{timer(item?.createTime)}</p>
              </div>
              <div className='right-bottom'>
                {item?.info}
              </div>
            </div>
          </div>
        ))}
        <ShowLoading loading={props.showLoading} />
      </div>
    </div>
  )
}

CommentList.defaultProps = {
  showLoading: true
}

export default CommentList