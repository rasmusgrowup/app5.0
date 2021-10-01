import css from '../styles/contact.module.scss'
import Link from 'next/link'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ContactSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    gsap.set('.contactInner', {
      yPercent: 120
    })

    var contactScrollIn = gsap.utils.toArray('.contactInner');
    contactScrollIn.forEach((contactScrollIn) => {
      gsap.to(contactScrollIn, {
      duration: 1.5,
      yPercent: 0,
        scrollTrigger: {
          trigger: contactScrollIn,
          start: "top bottom",
        }
      });
    });
  }, [])

  return(
    <>
      <section className={css.contactSectionWrapper}>

      <h2 className={css.titleWrapper}>
        <div className={`${css.contactTitle} contactWrapper`}><span className='contactInner'>Kontakt os</span></div>
      </h2>

      <div className={css.contactInfoWrapper}>
        <div className={`${css.mailWrapper} contactWrapper`}>
          <span className='contactInner'>
          <Link href='mailto:hello@growupstudio.dk'><a className={css.link}>Kontakt os her</a></Link>
          </span>
        </div>

        <div className={css.sellingPoint}>
          <h3 className='bigPrint'>
            <div className='contactWrapper'><span className='contactInner'>All-in-one webshops og hjemmesider,</span></div>
            <div className='contactWrapper'><span className='contactInner'>med skræddersyet indhold og billeder, </span></div>
            <div className='contactWrapper'><span className='contactInner'>samt organisk indhold til jeres SoMe profiler.</span></div>
          </h3>
          <div className='contactWrapper'>
          <p className='smallPrint contactInner'>All-in-one webshops og hjemmesider, med skræddersyet indhold og billeder, samt organisk indhold til jeres SoMe profiler.</p>
          </div>
        </div>
      </div>

      </section>
    </>
  )
}
