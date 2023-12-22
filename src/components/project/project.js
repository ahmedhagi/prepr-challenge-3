import "./project.css"
import { useState } from "react"
import MainForm from "./mainForm";
import CoverForm from "./coverForm";
import TeamForm from "./teamForm";
import { useNavigate } from "react-router-dom";

export  default function Project(){

    const [con, setCon] = useState(false);
    const toggleCon = () => {
        setCon(!con);
    }

    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = "/"; 
        navigate(path);
      }

    return(
        <div className="project-page">
            <div className="create-project">
                <div className="row">
                    <div className="col-md-12">
                        <div className="project-card">
                            <div className="project-title">
                                <div className="row">
                                    <div className="col-md-6">
                                        CREATE PROJECT
                                    </div>
                                </div>
                            </div>
                                <div className="project-content">
                                    <ul className="project-bar">
                                        <li className="active">
                                            <span>1</span>
                                            Details
                                        </li>
                                        <li>
                                        <span> 2</span>
                                        Team Building
                                        </li>
                                    </ul>
                                    <div className="project-header">
                                        <div className="title d-inline">
                                            <p>
                                                <span className="chal-title" >Challenge</span>
                                                :
                                                <span className="chal">No active challenge selected</span>
                                            </p>
                                        </div>
                                        <div className="warning d-inline">
                                            <p>To browse challenge requirements here, you need to select an active challenge below.</p>       
                                        </div>
                                    </div>
                                    {
                                        !con ? (
                                            <>
                                            <MainForm/>
                                            <CoverForm/>
                                            <div className="bottom-btns">
                                                <button className="c-btn first-btn btn-primary" onClick={routeChange}>Cancel</button>
                                                <button className="n-btn second-btn btn-primary" onClick={toggleCon}>Continue</button>
                                            </div>
                                            </>
                                        )
                                         : (
                                            <>
                                            <TeamForm/>
                                            <div className="bottom-btns">
                                                <button className="b-btn first-btn btn-primary" onClick={toggleCon}>Back</button>
                                                <button className="done-btn second-btn btn-primary" onClick={routeChange}>Create Project</button>
                                            </div>
                                            </>
                                         )


                                    }      
                                </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}