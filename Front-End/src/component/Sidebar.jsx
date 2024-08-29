import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Sidebar.module.css'
import Logo from '../assets/Logo.png'


const Sidebar = () => {
  return (
      <aside className={styles.aside}>
        <button><Link to='./'><img src={Logo} alt="Logo"></img></Link></button>
        <h2>Modules</h2>
        <h4><Link to='/module1'>Module1</Link></h4>
        <h4><Link to='/module2'>Module2</Link></h4>
        <h4><Link to='/module3'>Module3</Link></h4>
      </aside>
  )
}

export default Sidebar;

