import { FaQuestionCircle } from "react-icons/fa";

export default function LeaderboardCard (){

    return(
        <div className="leaderboard-card card">
            <div className="card-heading">
                <h2 class="leaderboard-title">Leaderboard
                <a href="#link"><FaQuestionCircle /></a>
                </h2>            
                <div className="text-end">
                    <button className="db-btn btn-primary">View Leaderboard</button>
                </div>
            </div>
            <div className="leaderboard card-content">
                <div className="filters">
                    <div className="row">
                        <div className="col-md-3 pe-0">
                            <p>Organization</p>
                            <div className="form-select">
                                <option selected>All Organizations</option>
                            </div>
                        </div>
                        <div className="col-md-3 pe-0">
                            <p>Lab</p>
                            <div className="form-select">
                                    <option selected>All Labs</option>
                            </div>
                        </div>
                        <div className="col-md-3 pe-0">
                            <p>Challenge</p>
                            <div className="form-select">
                                        <option selected>All Challenges</option>
                                </div>
                        </div>
                        <div className="col-md-2 pe-0">
                            <p>Sort By</p>
                            <div className="form-select">
                                        <option selected>Learning Points</option>
                                </div>
                        </div>
                        <div className="col-md-1 pe-0">
                            <div className="clear-filter "></div>
                            <a href="#link">Clear Filters</a>
                        </div>
                    </div>
                </div>
                <div className="leaderboard-table">
                    <img alt="" src={require("../assets/leaderboard-table.png")}></img>
                </div>
                    
         
            </div>
        </div>

    )

}