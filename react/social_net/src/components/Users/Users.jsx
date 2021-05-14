import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkVwz27GAcDQjKnJW1I6zsc6aKTM5SRkZCeTgDn6uOyic",
        followed: false,
        fullName: "Aigerim T",
        status: "No status",
        location: { city: "Taraz", country: "Kazakhstan" },
      },
      {
        id: 2,
        photoUrl:
          "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkVwz27GAcDQjKnJW1I6zsc6aKTM5SRkZCeTgDn6uOyic",
        followed: true,
        fullName: "Dmitry",
        status: "React teacher",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img alt="" src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
