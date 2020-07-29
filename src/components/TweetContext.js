import React from "react";

import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
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
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
