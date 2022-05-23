import { useState } from 'react'
import styles from '../styles/switchButton.module.css'

const SwitchButton = ({onSwitchedRequestHandler, id, view}) => {
  const initialSwitch = view? "checked" : ''
  const [switched,setSwitched] = useState(initialSwitch)
  const onSwitchHandler =()=> {
    onSwitchedRequestHandler({id, view: !switched})
    setSwitched((switched)=> !switched)
  }
  return (
    <div>
      <label className={styles.switch}>
        <input onChange={onSwitchHandler} checked={switched} type="checkbox"/>
        <span className={styles.slider}></span>
      </label>
    </div>
  )
} 

export default SwitchButton