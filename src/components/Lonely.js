import React from "react";
import LikedPerson from "./LikePerson";

const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => (
  <div className="lonely">
    <p>There's no new around you.</p>

    <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="You..." />
    </span>

    <div id="liked-people">
      <p>
        {likedUsers.length > 0 ?
          "People you like... Let's hope they like you too!"
          : ''}
      </p>

      {likedUsers.map((item) => (
          <LikedPerson key={item.id} person={item} />
      ))}

      <p>{superLikedUsers.length && `People you super liked!`}</p>

      {superLikedUsers.map((item) => (
          <LikedPerson key={item.id} person={item} />
      ))}
    </div>
  </div>
);

export default Lonely;
