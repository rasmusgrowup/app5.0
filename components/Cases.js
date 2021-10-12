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
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Cases() {

  const title = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    gsap.set(title.current, {
        yPercent: 120
      })

      ScrollTrigger.create({
        trigger: title.current,
        start: 'top bottom',
        onEnter: () => {
          gsap.to(title.current, {
            yPercent: 0,
            duration: 1.5,
            ease: 'Power3.easeOut'
          })
        }
      })

      var scrollIn = gsap.utils.toArray('.imageAnim');
      scrollIn.forEach((scrollIn) => {
        gsap.from(scrollIn, {
        opacity: 0,
        duration: 1,
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
          <div className={`${css.casesTitle} tWrapper`}><span className='tInner' ref={title}>Udvalgte opgaver</span></div>
        </h2>

        <div className={css.casesContainer}>
          <div className={css.caseWrapper}>
            <div className={`${css.caseOne} imageAnim linkHover`}>
              <Link href='/'>
                <a className={`${css.caseLink} ${css.caseLinkRight}`}>
                  <Image src={CaseOne} layout='responsive' quality='100' />
                  <caption className={css.caseCaption}>
                    <p className={css.caseCaptionInner}>
                      <strong>Twelve Inch</strong>
                      <span>I</span>
                      <span>Ecommerce</span>
                      <span>I</span>
                      <span>Visuel identitet</span>
                      <span>I</span>
                      <span>Shopify</span>
                    </p>
                  </caption>
                  <div className={css.readMore}><span className={css.readMoreInner}>Se casen</span></div>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseTwo} imageAnim linkHover`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseTwo} layout='responsive' quality='100' />
                  <caption className={css.caseCaption}>
                    <p className={css.caseCaptionInner}>
                      <strong>Pral</strong>
                      <span>I</span>
                      <span>Ecommerce</span>
                      <span>I</span>
                      <span>Shopify</span>
                    </p>
                  </caption>
                  <div className={css.readMore}><span className={css.readMoreInner}>Kommer snart</span></div>
                </a>
              </Link>
            </div>

            <div className={`${css.caseThree} imageAnim linkHover`}>
              <Link href='/'>
                <a className={`${css.caseLink} ${css.caseLinkRight}`}>
                  <Image src={CaseThree} layout='responsive' quality='100' />
                  <caption className={css.caseCaption}>
                    <p className={css.caseCaptionInner}>
                      <strong>Lustrup Farmhouse</strong>
                      <span>I</span>
                      <span>Webudvikling</span>
                      <span>I</span>
                      <span>NEOS</span>
                    </p>
                  </caption>
                  <div className={css.readMore}><span className={css.readMoreInner}>Se casen</span></div>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseFour} imageAnim linkHover`}>
              <Link href='/'>
                <a className={`${css.caseLink} ${css.caseLinkRight}`}>
                  <Image src={CaseFour} layout='responsive' quality='100' />
                  <caption className={css.caseCaption}>
                    <p className={css.caseCaptionInner}>
                      <strong>The Organic Crave</strong>
                      <span>I</span>
                      <span>Ecommerce</span>
                      <span>I</span>
                      <span>Shopify</span>
                      <span>I</span>
                      <span>SoMe</span>
                    </p>
                  </caption>
                  <div className={css.readMore}><span className={css.readMoreInner}>Se casen</span></div>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseFive} imageAnim linkHover`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseFive} layout='responsive' quality='100' />
                  <caption className={css.caseCaption}>
                    <p className={css.caseCaptionInner}>
                      <strong>Stöj</strong>
                      <span>I</span>
                      <span>Webdesign</span>
                      <span>I</span>
                      <span>Nextjs</span>
                    </p>
                  </caption>
                  <div className={css.readMore}><span className={css.readMoreInner}>Kommer snart</span></div>
                </a>
              </Link>
            </div>

            <div className={`${css.caseSix} imageAnim linkHover`}>
              <Link href='/'>
                <a className={`${css.caseLink} ${css.caseLinkRight}`}>
                  <Image src={CaseSix} layout='responsive' quality='100' />
                  <caption className={css.caseCaption}>
                    <p className={css.caseCaptionInner}>
                      <strong>Tinekhome</strong>
                      <span>I</span>
                      <span>Webdesign</span>
                    </p>
                  </caption>
                  <div className={css.readMore}><span className={css.readMoreInner}>Se casen</span></div>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseSeven} imageAnim linkHover`}>
              <Link href='/'>
                <a className={css.caseLink}>
                  <Image src={CaseSeven} layout='responsive' quality='100' />
                  <caption className={css.caseCaption}>
                    <p className={css.caseCaptionInner}>
                      <strong>Dabea</strong>
                      <span>I</span>
                      <span>Visuel identitet</span>
                      <span>I</span>
                      <span>Webudvikling</span>
                    </p>
                  </caption>
                  <div className={css.readMore}><span className={css.readMoreInner}>Kommer snart</span></div>
                </a>
              </Link>
            </div>
          </div>

          <div className={css.caseWrapper}>
            <div className={`${css.caseEight} imageAnim linkHover`}>
              <Link href='/'>
                <a className={`${css.caseLink} ${css.caseLinkRight}`}>
                  <Image src={CaseEight} layout='responsive' quality='100' />
                  <caption className={css.caseCaption}>
                    <p className={css.caseCaptionInner}>
                      <strong>Chef Jen</strong>
                      <span>I</span>
                      <span>Visuel identitet</span>
                      <span>I</span>
                      <span>Webudvikling</span>
                    </p>
                  </caption>
                  <div className={css.readMore}><span className={css.readMoreInner}>Kommer snart</span></div>
                </a>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
