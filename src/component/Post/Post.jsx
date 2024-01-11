import './post.css'
function Post({ post }) {
  const { id, title, body, tags, reactions } = post;
  console.log(post);

  return (
    <>
      <div class="post-card">
        <div class="post-header">
          <img src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          {/* <h1>Post</h1> */}
          <div class="post-id">ID: #{id}</div>
        </div>

        <div class="post-content">
          <div class="post-title">{title}</div>
          <div class="post-body">
            <p>
             {body}
            </p>
          </div>

          <div class="post-tags">
            <div class="tag">{tags}</div>
            <div class="tag">Tag2</div>
            <div class="tag">Tag3</div>
          </div>

          <div class="post-reactions">
            <div class="reaction">
              <div class="reaction-icon">👍</div>
              <div>{reactions}</div>
            </div>
            <button class="like-button">Like</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
