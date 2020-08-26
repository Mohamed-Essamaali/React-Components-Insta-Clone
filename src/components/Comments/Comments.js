import React from 'react';
import Comment from './Comment';
import './Comments.css';
import { faComments } from '@fortawesome/free-regular-svg-icons';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log('props in comments',props)



  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment=>{
        return (<Comment comment={comment} />)
      })}
      <div className='submitComment'>
       <input type='text' name='comment'  />
      <button >Submit Comment</button>
      </div>
    </div>
  );
};

export default Comments;
