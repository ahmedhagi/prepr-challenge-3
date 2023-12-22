
export default function ProgressCard (){

    return(
        <div className="progress-card card">
            <div className="card-heading">
                <h2>My Progress</h2>
                <ul className="nav" >
                    <li className="nav-item active"><a className="nav-link active" href="#link">Challenges</a></li>
                    <li className="nav-item"><a className="nav-link"  href="#link">Labs</a></li>
                    <li className="nav-item"><a className="nav-link"  href="#link">Resources</a></li>
                </ul> 
            </div>
            <div className="card-content">
                <p>You joined Preprlabs on Nov 13, 2023, here is your Challenge journey.</p> 
                <div className="challengeSection">
                <div class="circle-outer">
                    <div className="circle-inner">
                        <p>
                            <span>
                            <span>0</span>
                                /21
                            </span>
                            Challenges
                        </p>
                    </div>
                </div>
                <div className="project-list">
                    <img alt="" src={require("../assets/project-list.png")}></img>
                </div>
                
                
              
                </div>
            </div>
        </div>

    )

}