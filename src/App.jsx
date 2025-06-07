import styles from './App.module.scss'
import { Header } from "./components/header/Header.jsx";
import {Top} from "./components/top/Top.jsx";
import {Profile} from "./components/profile/Profile.jsx";

function App() {

  return (
    <div className={styles.wrapper}>

      <Header/>
      <div className={styles.bg_1}>
        <Top/>
        <Profile/>
      </div>
    </div>
  )
}

export default App