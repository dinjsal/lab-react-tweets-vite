import React from 'react';

function ProfileImage({image}) {
  return (
    <div>
        <img
      //added the image, username, handle, timestamp
        src={image} 
        className="profile"
        alt="profile"
      />
    </div>
  )
}

export default ProfileImage;