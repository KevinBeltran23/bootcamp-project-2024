import React from 'react';

type IComment = {
	user: string;
	comment: string;
	time: Date;
}

// Define the type for props that will be passed to this component
type CommentProps = {
  comment: IComment;  // This will have the properties: user, comment, date, blogId
};

// Function to parse and format the comment's timestamp
function parseCommentTime(date: Date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Returning a human-readable time difference
  if (diffInDays > 0) {
    return `${diffInDays} day(s) ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour(s) ago`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} minute(s) ago`;
  } else {
    return `${diffInSeconds} second(s) ago`;
  }
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
