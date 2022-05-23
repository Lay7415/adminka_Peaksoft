import { useRouter } from 'next/router'
import styles from '../styles/BreadCrumb.module.css'
const BreadCrumb = ({bannerName}) => {

  const router = useRouter()
  console.log(router)
  const goBackHandler =()=> {
    router.back()
  }
  return (
    <div>
        <p>
            <span onClick={goBackHandler} className={styles.bannerWord}>Баннер / </span>
            <span className={styles.bannerName}>{bannerName}</span>
        </p>
    </div>
  )
}

export default BreadCrumb