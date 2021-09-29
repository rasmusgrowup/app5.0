import Link from 'next/link'
import css from '../styles/nav.module.scss'

export default function Title() {
    return(
        <>
            <div className={css.titleWrapper}>
                <Link href='/'><a className={css.link}>Growup</a></Link><span>~ Design, Web og SoMe</span>
            </div>
        </>
    )
}
