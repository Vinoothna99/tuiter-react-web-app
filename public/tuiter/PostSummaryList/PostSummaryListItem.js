const PostSummaryListItem = (post) => {
    return(`
    <div class="post">
        <img class="post-image"   src="${post.image}"/>

        <div class="post-content">
            <div class="post-topic">
                ${post.topic}
            </div>

            <div><span  class="post-title">${post.userName} <i class="fa fa-solid fa-circle-check"></i></span><span class="post-topic"> - ${post.time}</span> </div>

            <div class="post-title">${post.title}</div>
            <div class="post-topic">${post.tweets}</div>
        </div>
    </div>
    `);
}
export default PostSummaryListItem;