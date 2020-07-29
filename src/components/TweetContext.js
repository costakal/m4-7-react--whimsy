import React, { useState } from "react";

import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  let isRetweetedByCurrentUser = false;
  let isLikedByCurrentUser = false;

  const date = moment().format("h:mm A  - MMMM Do, YYYY");

  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets,
        isLiked,
        isRetweeted,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
