import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <span class="post-title">Who to Follow</span>
                </a>
                ${
                    who.map(who => {
                        return(WhoToFollowListItem(who));
                    }).join('')
                }

                
            </div>
            
`); }

export default WhoToFollowList;