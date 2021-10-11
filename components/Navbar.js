import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { useRouter} from "next/router";
import css from '../styles/nav.module.scss'
import arrow from '../public/arrow-up-right-red.svg'
import useScrollListener from '../lib/hooks/useScroll'

export default function Navbar() {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();
  const menuLinks = useRef();
  const q = gsap.utils.selector(menuLinks);

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("hide-link")
    else (
      _classList.push("show-link")
    );

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const router = useRouter();
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
      setActive(!isActive);
  };
  const [tl] = useState(gsap.timeline({ paused: true }));
  const toggleMenu = () => {
    tl.reversed(!tl.reversed());
  }
  const click = () => {
    handleToggle();
    toggleMenu();
  }

  useEffect(() => {
    gsap.set('.menu', {clipPath: 'circle(0% at 100% 0%)', visibility: 'hidden'})
    tl.to('.menu', {
      visibility: 'visible',
      clipPath: 'circle(150% at 100% 0%)',
      delay: 0,
      duration: 1.5,
      ease: 'Power3.easeInOut'
    })

    tl.from(q('a'), {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: 0.05
    }, '-=50%')

    tl.to('#menuBtn', {
      delay: 0,
      duration: .3,
      ease: 'Power3.easeInOut',
      transform: 'scale(1)'
    }, '-=50%')

    tl.reverse();
  }, []);

  return(
    <>
      <div className={`${css.navbar} navbar`}>

        <ul className={css.navList}>
          <li className={`${css.listItem} ${router.pathname == "/" ? `${css.active}` : ""}`}>
            <Link href='/'><a className={`${css.listItemLink} ${navClassList.join(" ")}`}>Om os</a></Link>
          </li>
          <li className={`${css.listItem} ${router.pathname == "/cases" ? `${css.active}` : ""}`}>
            <Link href='#'><a className={`${css.listItemLink} ${navClassList.join(" ")}`}>Cases</a></Link>
          </li>
          <li className={`${css.listItem} ${router.pathname == "/ydelser" ? `${css.active}` : ""}`}>
            <Link href='#'><a className={`${css.listItemLink} ${navClassList.join(" ")}`}>Ydelser</a></Link>
          </li>
      </ul>

      <div className={css.menuBtn} id='menuBtn' onClick={click}></div>

      <div className={`${css.menuDrawer} menu`}>

          <div className={css.drawerContent} ref={menuLinks}>
            <div className={css.drawerContentLeft}>
              <ul className={css.menuList}>
                <li className={css.menuListItem}><Link href='/'><a className={router.pathname == "/" ? `${css.active}` : ""}>Om os</a></Link></li>
                <li className={css.menuListItem}><Link href='/'><a className={router.pathname == "/cases" ? `${css.active}` : ""}>Cases</a></Link></li>
                <li className={css.menuListItem}><Link href='/'><a className={router.pathname == "/ydelser" ? `${css.active}` : ""}>Ydelser</a></Link></li>
                <li className={css.menuListItem}><Link href='/'><a className={router.pathname == "/blog" ? `${css.active}` : ""}>Blog</a></Link></li>
              </ul>
              <div className={css.contactLinks}>
                <Link href='tel:+4531623733'><a className={css.contactLink}>(45) 31 62 37 33</a></Link>
                <a className={css.contactLink}><span className={css.lineSpacer}>I</span></a>
                <Link href='mailto:hello@growupstudio.dk'><a className={css.contactLink}>Skriv til os</a></Link>
              </div>
            </div>

            <div className={css.drawerContentRight}>
              <ul className={css.secList}>
                <li className={css.secListItem}><Link href='/'><a className={router.pathname == "/art-direction" ? `${css.active}` : ""}>Art Direction</a></Link></li>
                <li className={css.secListItem}><Link href='/'><a className={router.pathname == "/ecommerce" ? `${css.active}` : ""}>E-commerce</a></Link></li>
                <li className={css.secListItem}><Link href='/'><a className={router.pathname == "/seo" ? `${css.active}` : ""}>SEO</a></Link></li>
                <li className={css.secListItem}><Link href='/'><a className={router.pathname == "/some" ? `${css.active}` : ""}>SoMe</a></Link></li>
                <li className={css.secListItem}><Link href='/'><a className={router.pathname == "/ux-ui-design" ? `${css.active}` : ""}>UX / UI Design</a></Link></li>
                <li className={css.secListItem}><Link href='/'><a className={router.pathname == "/visuelt-design" ? `${css.active}` : ""}>Visuelt Design</a></Link></li>
                <li className={css.secListItem}><Link href='/'><a className={router.pathname == "/webdesign" ? `${css.active}` : ""}>Webdesign</a></Link></li>
              </ul>

              <div className={css.SoMeLinks}>
                <div className='animWrapper'>
                  <span className='animInner'>
                    <Link href='#'>
                      <a className={css.SoMeLink}>
                        <span>Instagram</span>
                        <Image src={arrow} className={css.arrowUpRight}/>
                      </a>
                    </Link>
                  </span>
                </div>
                <div className='animWrapper'>
                  <span className='animInner'>
                    <Link href='#'>
                      <a className={css.SoMeLink}>
                        <span>LinkedIn</span>
                        <Image src={arrow} className={css.arrowUpRight}/>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
    )
}
