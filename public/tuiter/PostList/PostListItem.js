const PostListItem = (post) => {
    return(`
    <div class="wd-BookmarkedPost">
            <img class="wd-ProfileImage col-xs-2" height="48px" width="48px" src="${post.profileImage}"/>
            <div class="wd-divContent col-xs-9">
                <div class="wd-userDetails">
                    <span class="wd-author">
                        ${post.userName}
                    </span>
                    <span class="wd-AuthorHandle" >
                        &nbsp @${post.userHandle} &#8901 ${post.time}
                    </span>
                    <span class="wd-SmallDots">&#8943</span>

                </div>


                <div class="wd-BookmarkContent">
                    ${post.topic}
                </div>


                <img class="wd-PostImage" src="${post.postImage}"/>
                <div class="wd-ImageContent">
                    <div class="wd-author">${post.title}</div><br>
                    <div class="wd-AuthorHandle">${post.description}<br>
                        <i class="fa-solid fa-link"></i>&nbsp ${post.link}
                    </div>
                </div>


                <div class="wd-ActionItems">
                    <a class="wd-actionLink comment" href="#">
                        <i class="fa-regular fa-comment"></i>
                        <span class="wd-actionNumber">${post.comments}</span>
                    </a>
                    <a class="wd-actionLink cycle" href="#">
                        <i class="fa-solid fa-retweet"></i>
                        <span class="wd-actionNumber">${post.views}</span>
                    </a>
                    <a class="wd-actionLink cycle" href="#">
                        <i class="fa-regular fa-heart"></i>
                        <span class="wd-actionNumber">${post.likes}</span>
                    </a>
                    <a class="wd-actionLink share" href="#">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>

                    </a>



                </div>
            </div>

        </div>

    `);
}
export default PostListItem;