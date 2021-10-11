import Meta from './Meta'
import Title from './Title'
import Navbar from './Navbar'
import Footer from './Footer'
import { isDesktop, isTablet, isMobile, CustomView } from 'react-device-detect'
import Cursor from '../components/Cursor'
import css from '../styles/main.module.scss'

export default function Layout({ children }) {
  return (
    <>
        <Meta />
        <Navbar />
        <main className={css.mainLayout}>{children}</main>
        <Footer />
    </>
  )
}
