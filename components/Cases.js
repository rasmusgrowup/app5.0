import css from '../styles/cases.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import CaseOne from '../public/Case_Twelve_Inch.jpg'
import CaseTwo from '../public/Case_Pral.jpg'
import CaseThree from '../public/Case_Lustrup_Farmhouse.jpg'
import CaseFour from '../public/Case_Organic_Crave.jpg'
import CaseFive from '../public/Case_Stoj.jpg'
import CaseSix from '../public/Case_Tinekhome.jpg'
import CaseSeven from '../public/Case_Dabea.jpg'
import CaseEight from '../public/Case_ChefJen.jpg'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Cases() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    gsap.set('.tInner', {
        yPercent: 120
      })

      ScrollTrigger.create({
        trigger: '.tInner',
        start: 'top bottom',
        onEnter: () => {
          gsap.to('.tInner', {
            yPercent: 0,
            delay: .5,
            duration: 1.5,
            ease: 'Power3.easeOut'
          })
        }
      })

      var scrollIn = gsap.utils.toArray('.imageAnim');
      scrollIn.forEach((scrollIn) => {
        gsap.from(scrollIn, {
        opacity: 0,
        duration: 1.5,
        y: 50,
          scrollTrigger: {
            trigger: scrollIn,
            start: "top bottom"
          }
        });
      });
  }, [])

  return(
    <>
      <section className={css.casesWrapper}>

        <h2 className={css.titleWrapper}>
          <div className={`${css.casesTitle} tWrapper`}><span className='tInner'>Nyeste opgaver</span></div>
        </h2>

        <div className={css.casesContainer}>
          <div className={css.caseWrapper}>
            <div className={`${css.caseOne} imageAnim`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseOne} layout='responsive' quality='100' />
                  <caption></caption>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseTwo} imageAnim`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseTwo} layout='responsive' quality='100' />
                  <caption></caption>
                </a>
              </Link>
            </div>

            <div className={`${css.caseThree} imageAnim`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseThree} layout='responsive' quality='100' />
                  <caption></caption>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseFour} imageAnim`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseFour} layout='responsive' quality='100' />
                  <caption></caption>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseFive} imageAnim`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseFive} layout='responsive' quality='100' />
                  <caption></caption>
                </a>
              </Link>
            </div>

            <div className={`${css.caseSix} imageAnim`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseSix} layout='responsive' quality='100' />
                  <caption></caption>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseSeven} imageAnim`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseSeven} layout='responsive' quality='100' />
                  <caption></caption>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseEight} imageAnim`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseEight} layout='responsive' quality='100' />
                  <caption></caption>
                </a>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
