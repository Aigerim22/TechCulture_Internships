import MyPostsContainer from "./MyPosts/MyPostscontainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
