
export default function ContinueCard (){

    return(
        <div className="continue-card card">
            <div className="card-heading">
                <h2>Continue Where You Left Off</h2>
            </div>
            <div className="card-content">
                <p>We found that you were working on this Challenge last time, do you want to continue working on it?</p> 
                <div className="challengeSection">
                <div class="circle-outer">
                    <div className="circle-inner">
                        <p>   
                            Not started
                        </p>
                    </div>
                </div>
                <div className="continue-section d-inline">
                <h3 className="continue-title">Frontend Developer Challenge 3: Dashboard and Project Creation</h3>
                <p>
                Frontend Developer Challenge 3: Dashboard and Project Creation
                </p>
                <div className="text-start">
                    <button className="db-btn btn-primary">Continue</button>
                </div>
                </div>
                
              
                </div>
            </div>
        </div>

    )

}