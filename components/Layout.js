import Meta from './Meta'
import Title from './Title'
import Navbar from './Navbar'
import { isDesktop, isTablet, isMobile, CustomView } from 'react-device-detect'
import css from '../styles/main.module.scss'

export default function Layout({ children }) {
  return (
    <>
        <Meta />
        <Navbar />
        <CustomView condition={!isMobile}>
        </CustomView>
        <main className={css.mainLayout}>{children}</main>
    </>
  )
}
