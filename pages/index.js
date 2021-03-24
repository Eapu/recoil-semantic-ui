import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Main from '../components/main'
import Sidebar from '../components/sidebar'
import {useState} from 'react'
import myc from 'classnames'

export default function Home() {
  const [toggle, setToggle] = useState(false);

     const classes = myc(
      'pusher',
      'bottom',
      {'dimmed': toggle}
    );


  function toggleMenu() {
    setToggle(!toggle);
    //console.log(" toggle");
  }

  return (
    <div >

      <Header onToggleMenu={toggleMenu}/>
        <div className="ui attached pushable" style={{height: '100vh'}}>
          <Sidebar toggleMenu={toggle}/>
            <div className={classes}>
            <Main />
            </div>
        </div>
      <Main />
    </div>
  );
}
