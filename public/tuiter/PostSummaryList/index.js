import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
    return (`
           
            <div>

                <input type="text" class="wd-search" id="SearchBar"  placeholder="    Search  Twitter"/>
                <a class="wd-gear" href="./explore-settings.html"><i class="fa fa-solid fa-gear"></i></a>

            </div>
            <i class="fa fa-solid fa-magnifying-glass search-icon"></i>
            <br>

            <ul class="nav nav-tabs">
                <div>
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                </div>
                <div>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                </div>

                <div>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                </div>
                <div>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                </div>

                <div class="entertainment">
                    <li class="nav-item">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </div>

            </ul>
            <div>
                <img class="spacex"   src="../../images/spacex.jfif"/>
                <span class="postHeading">SpaceX's Starship</span>
                <div  class="posts">
                ${
        posts.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }

                
                </div>
            </div>
    
`); }

export default PostSummaryList;