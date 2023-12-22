export default function MainForm(){

    return (
        <div className="main-form">
        <div className="form-title">Project overview</div>
            <div className="row">
                <div className="col-sm-6">
                    
                    <div class="form-group">
                        <label for="formGroupExampleInput">Title <sup>*</sup></label>
                        <input type="text" class="form-control mb-4" placeholder="Max. 150 Characters"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Description <sup>*</sup></label>
                        <textarea type="text" rows="13" class="form-control mb-4" placeholder="Max. 300 Characters"/>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                        <label class="form-check-label" for="flexCheckDefault">
                        Allow users outside your team to view your project
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                        <label class="form-check-label" for="flexCheckDefault">
                        Allow users outside your team to download your project files
                        </label>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-group">
                        <label for="formGroupExampleInput">Project slug <sup>*</sup></label>
                        <input type="text" class="form-control mb-4" placeholder="Max. 150 Characters"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Active Challenge <sup>*</sup></label>
                        <input type="text" class="form-control mb-4" placeholder="Max. 150 Characters"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Assoicate Lab</label>
                        <input type="text" class="form-control mb-4" placeholder="Max. 150 Characters"/>
                    </div>

                </div>
            </div>
        </div>
    )
}