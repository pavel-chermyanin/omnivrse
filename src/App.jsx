import styles from './App.module.scss'
import { Header } from "./components/header/Header.jsx";
import {Top} from "./components/top/Top.jsx";
import {Profile} from "./components/profile/Profile.jsx";
import {Info} from "./components/info/Info.jsx";
import {DressCode} from "./components/dress-code/DressCode.jsx";
import omniWorld from './assets/omniverse-world.webp'

function App() {

  return (
    <div className={styles.wrapper}>

      <Header/>
      <div className={styles.bg_1}>
        <Top/>
        <Profile/>
        <Info/>
        {/*<div className={styles.omniWorld}/>*/}
        <img className={styles.omniWorld} src={omniWorld} alt=""/>
        <DressCode/>
      </div>
    </div>
  )
}

export default App