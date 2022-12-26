const WhoToFollowListItem = (who) => {
    return(`
    <a href="#" class="list-group-item list-group-item-action">
                    <img class="profile-image"   src="${who.avatarIcon}"/>

                    <div class="profile-content">
                        <div><span class="post-title">${who.userName} </span><i class="fa fa-solid fa-circle-check"></i></div>
                        <div class="profile-handle">@${who.userHandle}</div>
                    </div>
                    <button class="btn btn-primary profile-follow">Follow</button>

                </a>`
    );
}
export default WhoToFollowListItem;

