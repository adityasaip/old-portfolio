import './achievements.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function Achievements() {
    return (
        <div className='achievements'>
            <div className="content">
                
                <div className="alert alert-info content-list" role="alert">
                <p>● Insta Rise & Gracias awards at Infosys for being the best performer of the team and great focus on technical aspects.
                <button type="button" className="btn btn-success">View</button></p>
                <p>● Appreciations from Senior Managers because of my keen observations, attention to detail and exploration.</p>
                <p>● Appreciations from Leads because of my independent work style.</p>
                </div> 
                
                {/* <p> ● Appreciations from Senior Managers because of my keen observations, attention to detail and exploration.</p>
                <p> ● Appreciations from Leads because of my independent work style.</p> */}
            </div>
            <div className="title">
                <h2>Achievements</h2>
            </div>
        </div>
    )
}

export default Achievements