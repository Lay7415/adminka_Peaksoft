import styles from '../styles/Search.module.css'
import searchIcon from '../public/searchIcon.svg'
import Image from 'next/Image'
import Card from './Card'

const Search = ({findToStudentHandler}) => {
    return (
        <Card className={styles.searchContainer}>
            <input className={styles.inputField} onChange={(event) => findToStudentHandler(event.target.value)} type="text" placeholder='Введите имя, фамилию или номер телефона'/>
            <Image className={styles.icon} src={searchIcon} width={20} height={20} alt={""}/>
        </Card>
    )
}

export default Search