export default function TeamForm(){

    return (
        <div className="main-form">
        <div className="form-title">Building your team
        <p>Building a team is important for your project.</p>
        </div>
        
            <div className="row">
                <div className="col-sm-6">
                    
                    <div class="form-group">
                        <label for="formGroupExampleInput">Recruiting status </label>
                        <input type="text" class="form-control mb-4" placeholder="Select recruiting status for your Project"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <label for="formGroupExampleInput">Required skills </label>
                        <input type="text" class="form-control mb-4" placeholder="Find teammates with these skills"/>
                    </div>
                </div>
            </div>
        </div>
    )
}