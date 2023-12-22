import { IoMdShare } from "react-icons/io";

export default function AchievementCard (){

    return(
        <div className="achievement-card card">
            <div className="card-heading">
                <h2 class="achievement-title">
                    <img alt="" src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Achievements.svg"></img>
                    Latest Achievement</h2>
            </div>
            <div className="card-content">
                    <div className="achievement">
                        <img alt="" src="https://preprlabs.org/assets/images/dashboard/achievement-icon.svg"></img>
                        <div className="d-inline">
                        <h3>Innovator & Dirsuptor</h3>
                        <div className="ach-buttons">
                            <button className="db-btn btn-primary">View Detail</button>

                            <button className="db-btn share btn-primary">
                                <i><IoMdShare/></i>
                                Share
                            </button>
                        </div>
                        

                        </div>
                    </div>
         
            </div>
        </div>

    )

}