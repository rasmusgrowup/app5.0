import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import { useRouter } from "next/router";
import css from '../styles/nav.module.scss'

export default function Navbar() {
    const router = useRouter();
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
    const [tl] = useState(gsap.timeline({ paused: true }));

    useEffect(() => {

        tl.to('.menu', {
            xPercent: -100,
            delay: 0,
            duration: .8,
            ease: 'Power3.easeInOut'
        })

        tl.to('#menuBtn', {
            backgroundColor: 'white',
            delay: 0,
            duration: .3,
            ease: 'Power3.easeInOut',
            transform: 'scale(1)'
        }, '=-25%')

        tl.reverse();

    }, []);

    const toggleMenu = () => {
        tl.reversed(!tl.reversed());
    }

    const click = () => {
        handleToggle();
        toggleMenu();
    }

    return(
        <>
            <div className={`${css.navbar} navbar`}>
                <ul className={css.navList}>
                    <li className={css.listItem}>
                        <Link href='/'><a className={router.pathname == "/" ? `${css.active}` : ""}>Om os</a></Link>
                    </li>
                    <li className={css.listItem}>
                        <Link href='#'><a className={router.pathname == "/cases" ? `${css.active}` : ""}>Cases</a></Link>
                    </li>
                    <li className={css.listItem}>
                        <Link href='#'><a className={router.pathname == "/ydelser" ? `${css.active}` : ""}>Ydelser</a></Link>
                    </li>
                </ul>
                <div className={css.menuBtn} id='menuBtn' onClick={click}></div>
                <div className={`${css.menuDrawer} menu`}>
                    <div className={css.drawerContent}>
                        <ul className={css.menuList}>
                            <li className={css.menuListItem}><Link href='/'><a className={router.pathname == "/" ? `${css.active}` : ""}>Om os</a></Link></li>
                            <li className={css.menuListItem}><Link href='/'><a className={router.pathname == "/cases" ? `${css.active}` : ""}>Cases</a></Link></li>
                            <li className={css.menuListItem}><Link href='/'><a className={router.pathname == "/ydelser" ? `${css.active}` : ""}>Ydelser</a></Link></li>
                            <li className={css.menuListItem}><Link href='/'><a className={router.pathname == "/kontakt" ? `${css.active}` : ""}>Kontakt</a></Link></li>
                        </ul>
                        <ul className={css.secList}>
                        <li className={css.secListItem}><Link href='/'><a className={router.pathname == "/" ? `${css.active}` : ""}>Bloggen</a></Link></li>
                        <li className={css.secListItem}><Link href='/'><a className={router.pathname == "/" ? `${css.active}` : ""}>Datapolitik</a></Link></li>
                        </ul>
                    </div>
                    <span className={css.copyright}>©2021 Growup Ivs | 39862540</span>
                </div>
            </div>
        </>
    )
}
