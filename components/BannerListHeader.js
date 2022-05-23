import styles from '../styles/BannerListHeader.module.css'

const BannerListHeader =()=> {
    return <div className={styles.header}>
        <p>№</p>
        <p>Название</p>
        <p>Курс</p>
        <p>Дата создания</p>
        <p>Дата окончания</p>
        <p>Действия</p>
    </div>
}

export default BannerListHeader