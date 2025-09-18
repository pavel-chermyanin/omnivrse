import styles from './App.module.scss'
import { Header } from "./components/header/Header.jsx";
import { Top } from "./components/winter-2025/top/Top.tsx";
// import { Profile } from "./components/profile/Profile.jsx";
// import { Info } from "./components/info/Info.jsx";
// import { EventDetails } from "./components/event-details/EventDetails.jsx";
// import omniWorld from './assets/omniverse-world.webp'
// import { Footer } from "./components/footer/Footer.jsx";
import { Description } from './components/winter-2025/description/Description.tsx';
import { BuyTickets } from './components/winter-2025/buy-tickets/BuyTickets.tsx';
import { Partners } from './components/winter-2025/partners/Partners.tsx';
import { Footer } from './components/winter-2025/footer/Footer.tsx';

export const buyTicketUrl = 'https://digitalelka2025.ticketscloud.org/'
export const telegramUrl = 'https://t.me/izmenisoznanieagency'
export const vkUrl = 'https://vk.com/izmenisoznanie'
export const geoUrl = "https://yandex.ru/maps/org/supermetall/228997623782/?ll=37.682489%2C55.764264&mode=search&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJBkoKLIDJAEARoKnXLQJj5T8iBgABAgMEBSgKOABAypIHSABiC2ZyZXNobmVzcz0wYh1zb3VyY2U9YnVzaW5lc3M6c3ByYXZfZXhwX3JlZmoCcnWdAc3MzD2gAQCoAQC9AQvYR%2BXCAQbm38mK1QaCAhbRgdGD0L%2FQtdGA0LzQtdGC0LDQu9C7igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=37.682489%2C55.764264&sspn=0.001352%2C0.000431&text=%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%B5%D0%BB%D0%BB&z=20.6"
export const mainSiteUrl = 'https://izmenisoznanie.com/'
export const sostavSiteUrl = 'https://www.sostav.ru/'

function App() {

  return (
    <div className={styles.wrapper}>

      <Header />
      <main className={styles.main}>
        <Top />
        <Description/>
        <BuyTickets/>
        <Partners/>
        <Footer/>
      </main>
      {/* <div className={styles.bg_1}>
        <Top/>
        <Profile/>

        <Info/>
        <img className={styles.omniWorld} src={omniWorld} alt=""/>
        <div className={styles.bg_2}>
          <EventDetails/>
          <Footer/>
        </div>

      </div> */}
    </div>
  )
}

export default App