import './Skills.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { FaAngular, FaBootstrap, FaC, FaCss3, FaHtml5, FaJava, FaJs, FaPython, FaReact } from 'react-icons/fa6'
import { DiMysql } from 'react-icons/di'
import { BiLogoDjango } from 'react-icons/bi'
import { BsGit } from 'react-icons/bs'

function Skills() {
    return (
        <div className='skills-container'>

            <div className="alert alert-primary" role="alert">
                <h2>SKILLS</h2>
            </div>

            <div className='skills'>

                <div className="card">
                    <div className="card-header">
                        <b>Languages</b>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><FaPython /> Python</li>
                        <li className="list-group-item"><FaJs /> JavaScript</li>
                        <li className="list-group-item"><FaHtml5 /> HTML</li>
                        <li className="list-group-item"><FaCss3 /> CSS</li>
                        <li className="list-group-item"><FaJava /> Java</li>
                        <li className="list-group-item"><DiMysql /> SQL</li>
                    </ul>
                </div>

                <div className="card">
                    <div className="card-header">
                        <b>Technologies</b>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><FaReact /> React</li>
                        <li className="list-group-item"><BiLogoDjango /> Django</li>
                        <li className="list-group-item"><FaAngular/> Angular</li>
                        <li className="list-group-item"><FaBootstrap /> Bootstrap</li>
                        <li className="list-group-item"><BsGit /> Git</li>
                        {/* <li className="list-group-item"></li> */}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Skills