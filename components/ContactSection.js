import css from '../styles/contact.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '../public/arrow-up-right.svg'
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ContactSection() {
  const title = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    gsap.set(q('.contactInner'), {
      yPercent: 120
    })

    ScrollTrigger.create({
      trigger: title.current,
      start: 'top bottom',
      onEnter: () => {
        gsap.to(q('.contactInner'), {
          yPercent: 0,
          duration: 1.5,
          ease: 'Power3.easeOut',
          stagger: 0.1
        })
      }
    })
  }, [])

  return(
    <>
      <section className={css.contactSectionWrapper} ref={el}>

      <h2 className={css.titleWrapper}>
        <div className={`${css.contactTitle} contactWrapper`}><span className='contactInner' ref={title}>Kontakt</span></div>
      </h2>

      <div className={css.contactInfoWrapper}>
        <div className={`${css.mailWrapper} contactWrapper`}>
          <span className='contactInner'>
          <Link href='mailto:hello@growupstudio.dk'><a className={css.link}>Skriv os en mail</a></Link>
          </span>
        </div>

        <div className={css.sellingPoint}>
          <h3 className='bigPrint'>
            <div className='contactWrapper'><span className='contactInner'>All-in-one webshops og hjemmesider,</span></div>
            <div className='contactWrapper'><span className='contactInner'>med skræddersyet indhold og billeder, </span></div>
            <div className='contactWrapper'><span className='contactInner'>samt organisk indhold til jeres SoMe</span></div>
            <div className='contactWrapper'><span className='contactInner'>profiler.</span></div>
          </h3>
          <div className='contactWrapper'>
            <p className='smallPrint contactInner'>All-in-one webshops og hjemmesider, med skræddersyet indhold og billeder</p>
            <p className='smallPrint contactInner'>samt organisk indhold til jeres SoMe profiler.</p>
          </div>
        </div>

        <div className={css.contactLinks}>
          <div className='contactWrapper'>
            <span className='contactInner'>
              <Link href='/'>
                <a className={css.contactLink}>
                <span>Art Direction</span>
                <Image src={arrow} className={css.arrowUpRight}/>
                </a>
              </Link>
            </span>
          </div>

          <div className='contactWrapper'>
            <span className='contactInner'>
              <Link href='/'>
                <a className={css.contactLink}>
                <span>E-commerce</span>
                <Image src={arrow} className={css.arrowUpRight}/>
                </a>
              </Link>
            </span>
          </div>

          <div className='contactWrapper'>
            <span className='contactInner'>
              <Link href='/'>
                <a className={css.contactLink}>
                <span>SEO</span>
                <Image src={arrow} className={css.arrowUpRight}/>
                </a>
              </Link>
            </span>
          </div>

          <div className='contactWrapper'>
            <span className='contactInner'>
              <Link href='/'>
                <a className={css.contactLink}>
                <span>SoMe</span>
                <Image src={arrow} className={css.arrowUpRight}/>
                </a>
              </Link>
            </span>
          </div>

          <div className='contactWrapper'>
            <span className='contactInner'>
              <Link href='/'>
                <a className={css.contactLink}>
                <span>UX / UI design</span>
                <Image src={arrow} className={css.arrowUpRight}/>
                </a>
              </Link>
            </span>
          </div>

          <div className='contactWrapper'>
            <span className='contactInner'>
              <Link href='/'>
                <a className={css.contactLink}>
                <span>Visuelle identitet</span>
                <Image src={arrow} className={css.arrowUpRight}/>
                </a>
              </Link>
            </span>
          </div>

          <div className='contactWrapper'>
            <span className='contactInner'>
              <Link href='/'>
                <a className={css.contactLink}>
                <span>Webdesign</span>
                <Image src={arrow} className={css.arrowUpRight}/>
                </a>
              </Link>
            </span>
          </div>
        </div>

      </div>

      </section>
    </>
  )
}
