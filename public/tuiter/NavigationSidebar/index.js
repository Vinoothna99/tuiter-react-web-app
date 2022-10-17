const NavigationSidebar = (active) => {
    return(`
  <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-brands fa-twitter col-xs-12"></i>
                </a>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active=='home' ? 'active' : ''} ">
                    <i class="fa fa-solid fa-house-chimney col-xs-12 col-xl-2"></i>
                    <span class="sm-hide">Home</span>
                </a>
                <a href="../explore/index.html" class="list-group-item list-group-item-action ${active=='explore' ? 'active' : ''}">
                    <i class="fa fa-solid fa-hashtag col-xs-12 col-xl-2"></i>
                    <span class="sm-hide">Explore</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active=='notifications' ? 'active' : ''}">
                    <i class="fa fa-sharp fa-solid fa-bell col-xs-12 col-xl-2"></i>
                    <span class="sm-hide">Notifications</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active=='messages' ? 'active' : ''}">
                    <i class="fa fa-solid fa-envelope col-xs-12 col-xl-2"></i>
                    <span class="sm-hide">Messages</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active=='bookmarks' ? 'active' : ''}">
                    <i class="fa fa-solid fa-bookmark col-xs-12 col-xl-2"></i>
                    <span class="sm-hide">Bookmarks</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active=='lists' ? 'active' : ''}">
                    <i class="fa fa-solid fa-list col-xs-12 col-xl-2"></i>
                    <span class="sm-hide">Lists</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${active=='profile' ? 'active' : ''}">
                    <i class="fa fa-solid fa-user col-xs-12 col-xl-2"></i>
                    <span class="sm-hide">Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ">
                    <i class="fa fa-solid fa-ellipsis col-xs-12 col-xl-2"></i>
                    <span class="sm-hide">More</span>
                </a>

            </div>
            <button class="btn btn-primary tweet">Tweet</button>
 `);
}
export default NavigationSidebar;

