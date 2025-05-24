import Link from "next/link"


const PostCard = (props) => {
    const {post} = props;
  return (
      <Link className="unstyled" href={''}>
        <div className="postCard">
            <h3>{post.title}</h3>
            <p>{post.bio}</p>
            <div className="statsContainer">
                <div>
                    <h5>Prep Time</h5>
                    <p>{post.prep_time}</p>
                </div>
            </div>
        </div>
      </Link>
  )
}

export default PostCard