import React from 'react'
import { useState } from 'react'
import styles from '../styles/Checkbox.module.css'

const Checkbox = ({onCheckedRequestHandler, id, checked}) => {
    const initialChecked = checked? true : false
    const [isChecked, setIsChecked] = useState(initialChecked)
    const onCheckedHandler =()=> {
        onCheckedRequestHandler({id, checked: !isChecked})
        setIsChecked((isChecked)=> !isChecked)
    }
    return (
        <input 
        onChange={onCheckedHandler}
        className={styles.checkbox}
        checked={isChecked} 
        type="checkbox"
        />
    )
}

export default Checkbox