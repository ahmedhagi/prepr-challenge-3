
import "./dashboard.css"
import ProgressCard from "./progressCard"
import ContinueCard from "./continueCard"
import UpcomingCard from "./upcomingCard"
import LeaderboardCard from "./leaderboardCard"
import AchievementCard from "./achievementCard"
import cardData from "./dashboard.json"
import BottomCard from "./bottomCard"



export default function Dashboard(){

   


    return(
        <div className="dashboard">
            <div className="container-fluid">
                <div className="dashboard-heading d-inline">
                    <p className="dashboard-title">Good morning, Default.</p>
                    <span><a href="#link">Complete profile</a></span>
                </div>
                <div className="dashboard-content">
                    <div className="col-md-12 p-0 pl-xl-3 pr-xl-3">
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                            <div className="row">
                                <div className="col-xl-4 col-md-4">
                                    <ProgressCard></ProgressCard>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <ContinueCard/>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <UpcomingCard/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-0 pl-xl-3 pr-xl-3">
                    <div className="row">
                            <div className="col-xl-12 col-md-12">
                            <div className="row">
                                <div className="col-xl-8 col-md-8">
                                    <LeaderboardCard/>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                   <AchievementCard/>         
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-0 pl-xl-3 pr-xl-3">
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                            <div className="row">
                                <div className="col-xl-4 col-md-4">
                                    <BottomCard cardInfo={cardData[0]}/>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <BottomCard cardInfo={cardData[1]}/>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <BottomCard cardInfo={cardData[2]}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

    

}