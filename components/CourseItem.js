import styles from '../styles/CourseItem.module.css'
import deleteIcon from '../public/deleteIcon.svg'
import arrowIcon from '../public/arrow.svg'
import Image from 'next/Image'
import { useState } from 'react'

const CourseItem = (props) => {
    const {name, 
        surname, 
        phoneNumber, 
        dateOfBirth, 
        email, 
        direction, 
        format, 
        comment,
        id,
        index
    } = props

    const [isShow, setIsShow] = useState(false)
    
    const showToHiddenInformation =()=> {
        setIsShow((isShow)=> !isShow)
    }
    return (
        <div className={styles.listItem}>
            <div className={styles.listItemInformation}>
                <input className={styles.checkbox} type="checkbox"/>
            <div 
             onClick={()=> showToHiddenInformation(id)} 
             className={!isShow? styles.arrowTop : styles.arrowBottom}
            >
                <Image src={arrowIcon} width={16} height={16} alt={""}/>
            </div>
            <p>{index}</p>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{phoneNumber}</p>
            <p>{dateOfBirth}</p>
            <p>{email}</p>
            <p>{direction}</p>
            <div className={styles.icon}>
                <Image
                    src={deleteIcon} 
                    width={18} 
                    height={18} 
                    alt={''}
                />
            </div>
        </div>
        <div className={!isShow? styles.hiddenInformationIsHidden : styles.hiddenInformationIsShow}>
            <div>
                <p>Формат</p>
                <p>Комментарий</p>
            </div>
            <div>
                <p>{format}</p>
                <p>{comment}</p>
            </div>
        </div>
    </div>
  )
}

export default CourseItem