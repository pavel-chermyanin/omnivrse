import styles from './App.module.scss'
import { Header } from "./components/header/Header.jsx";
import {Top} from "./components/top/Top.jsx";
import {Profile} from "./components/profile/Profile.jsx";
import {Info} from "./components/info/Info.jsx";
import {EventDetails} from "./components/event-details/EventDetails.jsx";
import omniWorld from './assets/omniverse-world.webp'
import {Footer} from "./components/footer/Footer.jsx";

function App() {

  return (
    <div className={styles.wrapper}>

      <Header/>
      <div className={styles.bg_1}>
        <Top/>
        <Profile/>
        <Info/>
        <img className={styles.omniWorld} src={omniWorld} alt=""/>
        <EventDetails/>
        <Footer/>
      </div>
    </div>
  )
}

export default App