
export default function BottomCard (props){

    return(
        <div className="bottom-card card">
            <div className="card-heading">
            
                <a className="bottom-title" href="#link">
                    <img alt="" src={props.cardInfo.card_pic}></img>&nbsp;
                    {props.cardInfo.tab_num} &nbsp; {props.cardInfo.card_title}
                          
                </a>
                {   props.cardInfo.create_button &&
                    (<div className="bottom-btn text-end">
                        <a href="/create-project">
                        <button className="db-btn btn-primary">Create</button>
                        </a>
                    </div>)
                }
            </div>
            <ul className="bottom-nav nav" >
                    {    props.cardInfo.tabs.length > 0 ? 
                            props.cardInfo.tabs.map( (title,index) => 
                                    { return <li className={index === 0 ? "nav-item active" : "nav-item" }>
                                                    <a className={index === 0 ? "nav-link active" : "nav-link" } href="#link">
                                                        {title} &nbsp; <span className="tab-num">{props.cardInfo.tab_num}</span>
                                                    </a>
                                                    
                                            </li>})
                        : null
                    
                    }
                </ul> 
            <div className="card-content">
                <div className="card-tasks">
                    <img alt="" src={require( "../assets/" + `${props.cardInfo.card_content}` )}></img>
                </div>
                <div className="card-bottom text-center">
                    <a href="#link">
                        <button className="db-btn btn-primary">Explore more</button>
                    </a>
                    
                </div>
               
                    
            </div>
        </div>

    )
}