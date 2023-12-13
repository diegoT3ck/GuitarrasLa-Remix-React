import Post from './post'
const ListadoPosts = ({posts}) => {
  return (
    <>
    <h2 className="heading">Blog</h2>
      <div className="blog">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        {posts.map( post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </>
  )
}

export default ListadoPosts