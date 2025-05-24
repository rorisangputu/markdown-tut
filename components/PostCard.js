import Link from "next/link"


const PostCard = ({post}) => {
  return (
      <Link href={''}>
        <h1>{post.title}</h1>
        <p>{post.bio}</p>
        <p>Prep: {post.prep_time}</p>
        <p>Cook Time: {post.cook_time}</p>
      </Link>
  )
}

export default PostCard