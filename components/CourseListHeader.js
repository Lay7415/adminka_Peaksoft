import styles from '../styles/CourseListHeader.module.css'
import deleteIcon from '../public/deleteIcon.svg'

import Image from 'next/image'

const CourseListHeader = () => {
  return (
    <div className={styles.header}>
        <input className={styles.checkbox} type="checkbox"/>
        <div className={styles.icon}>
        <Image
            src={deleteIcon} 
            width={18} 
            height={18} 
            alt={''}
        />
        </div>
        <p>№</p>
        <p>Имя</p>
        <p>Фамилия</p>
        <p>Номер телефона</p>
        <p>Дата рождения</p>
        <p>Почта</p>
        <p>Область</p>
    </div>
  )
}

export default CourseListHeader