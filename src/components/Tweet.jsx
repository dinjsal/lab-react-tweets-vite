//inserted props {tweet} here, iteration 2

import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      {/* // iteration 4 */}
       <ProfileImage image={tweet.user.image} />
       {/* extracted to ProfileImage.jsx */}
      {/* <img
      //added the image, username, handle, timestamp
        src={tweet.user.image} 
        className="profile"
        alt="profile"
      /> */}

      <div className="body">  
        <div className="top">
          {/* // iteration 5 */}
            {/* extracted to User.jsx */}
          <User name={tweet.user.name} handle={tweet.user.handle} />
          {/* <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">{tweet.user.handle}</span>
          </span> */}
          {/* // iteration 6 */}
            {/* extracted to Timestamp.jsx */}
            <Timestamp time={tweet.timestamp} />
          {/* <span className="timestamp">{tweet.timestamp}</span> */}
        </div>
        {/* // iteration 7 */}
        {/* extracted to Message.jsx */}
        {/* <p className="message">
        {tweet.message}
        </p> */}
        <Message message={tweet.message} />
        {/* // iteration 8 */}
        {/* extracted to Actions.jsx */}
        {/* Font Awesome icons */}
        {/* <div className="actions">
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div> */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
