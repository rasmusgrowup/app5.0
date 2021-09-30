import arrow from '../public/arrow-up-right.svg'
import css from '../styles/hero.module.scss'
import anim from '../styles/anim.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import imageOne from '../public/_DSF2740.jpg'
import imageTwo from '../public/_DSF2770.jpg'
import imageThree from '../public/_DSF2852.jpg'
import imageFour from '../public/_DSF2761.jpg'
import imageFive from '../public/_DSF2715.jpg'
import imageSix from '../public/_DSF2746.jpg'
import imageSeven from '../public/_DSF2772.jpg'
import imageEight from '../public/_DSF2999.jpg'
import imageNine from '../public/_DSF2998.jpg'
import imageTen from '../public/_DSF2845.jpg'
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Title() {
  useEffect (() => {
    gsap.set('.animInner', {
      yPercent: 110,
    })

    gsap.to('.animInner', {
      yPercent: 0,
      delay: 1,
      duration: 2,
      ease: 'Power3.easeOut',
      stagger: 0.1,
    })

    gsap.set('.imageInner', {
      xPercent: 100,
      opacity: 0,
    })

    gsap.to('.imageInner', {
      xPercent: 0,
      opacity: 1,
      delay: 4,
      duration: 3,
      ease: 'Power3.easeOut',
    })

    const STAGGER = .14
    const DURATION = 1
    const OFFSET = 0 * STAGGER
    const BOXES = gsap.utils.toArray('.image')

    const LOOP = gsap.timeline({
      paused: true,
      repeat: -1
    })

    const SHIFTS = [...BOXES, ...BOXES, ...BOXES]

    SHIFTS.forEach((BOX, index) => {
      const BOX_TL = gsap
        .timeline()
        .fromTo(
          BOX,
          {
            xPercent: 300,
          },
          {
            xPercent: -600,
            duration: 1,
            ease: 'none',
            immediateRender: false,
          }, 0
        )
      LOOP.add(BOX_TL, index * STAGGER)
    })

    const CYCLE_DURATION = STAGGER * BOXES.length
    const START_TIME = CYCLE_DURATION + (DURATION * 0.5) + OFFSET
    const END_TIME = START_TIME + CYCLE_DURATION
    gsap.fromTo(LOOP, {
      totalTime: START_TIME,
    },
    {
      totalTime: END_TIME,
      duration: 50,
      ease: 'none',
      delay: 4,
      repeat: -1
    })
  }, [])

  return(
    <>
      <div className={css.heroWrapper}>

        <div className={css.carouselWrapper}>
          <div className={`${css.image} image`}><Image src={imageOne} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageThree} className='imageInner' quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageTwo} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageFour} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageFive} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageSix} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageSeven} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageEight} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageNine} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageTen} className='imageInner'  quality='100' layout='responsive'/></div>
        </div>

        <div className={css.textWrapper}>
          <div className={css.headingWrapper}>
            <h1>
              <div className='animWrapper'><span className='animInner'>Odenseansk</span></div>
              <div className='animWrapper'><span className='animInner'>design, web &</span></div>
              <div className='animWrapper'><span className='animInner'>social media</span></div>
              <div className='animWrapper'><span className='animInner'>bureau.</span></div>
            </h1>
          </div>
          <div className={css.descriptionWrapper}>
            <div className='animWrapper'>
              <span className='animInner'>
              <Link href='mailto:hello@growupstudio.dk'><a className={css.link}>hello@growupstudio.dk</a></Link>
              </span>
            </div>
            <p>
              <div className='animWrapper'><span className='animInner'>All-in-one webshops og hjemmesider, med</span></div>
              <div className='animWrapper'><span className='animInner'>skræddersyet indhold og billeder, samt organisk</span></div>
              <div className='animWrapper'><span className='animInner'>indhold til jeres SoMe profiler.</span></div>
            </p>
          </div>
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
    </>
  )
}
