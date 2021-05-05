import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://d17mj1ha1c2g57.cloudfront.net/v1/WD7IPJkYnwO0fdjE24KA3bxeEZY/1280x/80/shotsmag/production/news/1576172975646/babyy.jpeg?v=1&quality=70&format=jpeg" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
