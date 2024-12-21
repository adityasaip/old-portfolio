import './education.css'

function Education(props) {
    return (
        <div className='education'>
            <div className="edu-item">
                <h3>{props.name}</h3>
                <p><i>GPA: {props.gpa}</i></p>
                <p><i>{props.college} - {props.year}</i></p>
            </div>
        </div>
    )
}

export default Education