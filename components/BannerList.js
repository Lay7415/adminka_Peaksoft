import styles from '../styles/BannerList.module.css'
import deleteIcon from '../public/deleteIcon.svg'
import editIcon from '../public/editIcon.svg'
import Image from 'next/image'
import SwitchButton from './SwitchButton'
import Checkbox from './Checkbox'
import Link from 'next/link'

const BannerList =(props)=> {
  const {banners, onDeleteHandler, onEditHandler, onCheckedRequestHandler, onSwitchedRequestHandler} = props

  return <div className={styles.list}>
    {
      banners.length !==0 && banners.map((item, index)=> {
        return <div key={index} className={styles.listItem}>
          <Checkbox id={item.id} checked={item.checked} onCheckedRequestHandler={onCheckedRequestHandler}/>
          <p>{index+1}</p>
          <Link href={`/course/${item.id}`}>{item.bannerName}</Link>
          <p>{item.course}</p>
          <p>{item.dataCreating}</p>
          <p>{item.dataFinishing}</p>
          <div>
            <Image 
            onClick={()=> onEditHandler(item.id)} 
            className={styles.icon} 
            src={editIcon} 
            width={20} 
            height={20} 
            alt={''}
            />
            <Image
            onClick={()=> onDeleteHandler(item.id)}
            className={styles.icon} 
            src={deleteIcon} 
            width={20} 
            height={20} 
            alt={''}
            />
            <SwitchButton onSwitchedRequestHandler={onSwitchedRequestHandler} id={item.id} view={item.view}/>
          </div>
        </div>
      })
    }
  </div>
}

export default BannerList