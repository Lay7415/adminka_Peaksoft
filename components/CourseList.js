import styles from '../styles/CourseList.module.css'
import CourseItem from './CourseItem'

const CourseList = ({students}) => {
    return (
        <div className={styles.list}>
            {students.length !== 0 && students.map((student, index)=> {
                return <CourseItem 
                key={index} 
                name={student.name}
                surname={student.surname}
                phoneNumber={student.phoneNumber}
                dateOfBirth ={student.dataOfBirth}
                email={student.email}
                direction={student.direction}
                format={student.format}
                comment={student.comment}
                id={student.id}
                index={index}
                />
            })}

        </div>
    )
}

export default CourseList