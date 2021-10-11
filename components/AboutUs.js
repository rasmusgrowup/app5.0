import css from '../styles/aboutUs.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import imageOne from '../public/_DSF2577.jpg'
import imageTwo from '../public/Organic_Crave_studiemiljoe.jpg'
import arrow from '../public/arrow-down-right.svg'
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function AboutUs() {
  const title = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    gsap.set(q('.aboutUsInner'), {
      yPercent: 120
    })

    ScrollTrigger.create({
      trigger: title.current,
      start: 'top bottom',
      onEnter: () => {
        gsap.to(q('.aboutUsInner'), {
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
      <section className={css.aboutUsWrapper} ref={el}>

      <h2 className={css.titleWrapper}>
        <div className={`${css.aboutUsTitle} aboutUsWrapper`}><span className='aboutUsInner' ref={title}>Om os</span></div>
      </h2>

      <div className={css.aboutWrapper}>
        <p className={css.preTitle}><span className='aboutUsInner'>Hvordan er Growup anderledes end andre bureauer?</span></p>
        <div className={css.sellingPoint}>
          <h3 className='bigPrint'>
            <div className='aboutUsWrapper'><span className='aboutUsInner'>Vi hjælper selvstændige,</span></div>
            <div className='aboutUsWrapper'><span className='aboutUsInner'>start-ups og etablerede</span></div>
            <div className='aboutUsWrapper'><span className='aboutUsInner'>virksomheder med deres</span></div>
            <div className='aboutUsWrapper'><span className='aboutUsInner'>hjemmesider og social</span></div>
            <div className='aboutUsWrapper'><span className='aboutUsInner'>medier.</span></div>
          </h3>
        </div>
        <div className={css.bodyText}>
          <p className='aboutUsWrapper'>
          Growup eksisterer for at hjælpe små og mellemstore virksomheder med at nå ud til nye kunder gennem smukke og funktionelle hjemmesider og god historiefortælling på de sociale medier. Vi tager jeres udfordringer og bekymringer seriøst, og guider jer gennem de mange muligheder, der eksisterer i den digitaliserede verden.
          </p>
        </div>
      </div>

      </section>
    </>
  )
}
