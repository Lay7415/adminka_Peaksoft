import styles from '../../styles/Course.module.css'
import Card from '../../components/Card'
import Head from 'next/head'
import CourseListHeader from '../../components/CourseListHeader'
import CourseList from '../../components/CourseList'
import { useState } from 'react'
import { sendRequest } from '../../helpers'
import BreadCrumb from '../../components/BreadCrumb'
import Search from '../../components/Search'

const Course = ({request}) => {
  const inintialStudents = request.compositionOfTheGroup
  const [students, setStudents] = useState([...inintialStudents])

  const findToStudentHandler =(fieldValue)=> {
    console.log(fieldValue)
    if(fieldValue !== '') {
      console.log(students)
      const searchedStudents = students.filter(
        (student) => student.name.toLowerCase().includes(fieldValue) 
        || student.name.includes(fieldValue) 
        || student.surname.toLowerCase().includes(fieldValue) 
        || student.surname.includes(fieldValue) 
        || student.phoneNumber.toLowerCase().includes(fieldValue)
        || student.phoneNumber.includes(fieldValue)
      )
      setStudents(searchedStudents)
  
    } else if(fieldValue === ''){
      setStudents(inintialStudents)
    }
  }

  const onDeleteStudentRequest =(id)=> {
    
  }
  return (
    <>
      <Head>
        <title>{request.bannerName}</title>
      </Head>
      <div className={styles.topBlock}>
        <BreadCrumb bannerName={request.bannerName}/>
        <div className={styles.titleContainer}>
          <h2>{request.bannerName}</h2>
          <button className={styles.button}>EXPORT TO EXEL</button>
        </div>
        <Search findToStudentHandler={findToStudentHandler}/>
      </div>
      <Card className={styles.courseContainer}>
        <CourseListHeader/>
        <CourseList students={students}/>
      </Card>
    </>
  )
}

export default Course

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const consfigRequest = {
    url: 'https://peaksoftadmin-default-rtdb.firebaseio.com/banners.json'
  }
  const request = await sendRequest(consfigRequest)

  // Get the paths we want to pre-render based on posts
  const paths = request.map((item) => ({
    params: { courseId: item.id.toString() },
  }))
  return { paths, fallback: false }
}


export async function getStaticProps({params}) {
  const consfigRequest = {
    url: `https://peaksoftadmin-default-rtdb.firebaseio.com/banners/${params.courseId}.json`
  }
  const request = await sendRequest(consfigRequest)
  return {
    props:{
      request
    }
  }
}

  