import Link from 'next/link'
import Image from 'next/image'
import imageOne from '../public/_DSF2740.jpg'
import imageTwo from '../public/_DSF2770.jpg'
import imageThree from '../public/_DSF2852.jpg'
import imageFour from '../public/_DSF2761.jpg'
import imageFive from '../public/_DSF2715.jpg'
import css from '../styles/hero.module.scss'
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Title() {
  useEffect (() => {
    gsap.set('.imageInner', {
      xPercent: 100,
      opacity: 0,
    })

    gsap.to('.imageInner', {
      xPercent: 0,
      opacity: 1,
      delay: 1,
      duration: 2,
      ease: 'Power3.easeOut',
    })

    const STAGGER = .14
    const DURATION = 1
    const OFFSET = 1 * STAGGER
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
      duration: 75,
      ease: 'none',
      repeat: -1,
      delay: 2
    })
  }, [])

  return(
    <>
      <div className={css.heroWrapper}>

        <div className={css.carouselWrapper}>
          <div className={`${css.image} image`}><Image src={imageOne} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageTwo} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageThree} className='imageInner' quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageFour} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageFive} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageOne} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageTwo} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageThree} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageFour} className='imageInner'  quality='100' layout='responsive'/></div>
          <div className={`${css.image} image`}><Image src={imageFive} className='imageInner'  quality='100' layout='responsive'/></div>
        </div>

        <div className={css.textWrapper}>
          <div className={css.headingWrapper}><h1>Odenseansk design, web & social content bureau.</h1></div>
          <div className={css.descriptionWrapper}>
            <p>All-in-one webshops og hjemmesider, med skræddersyet indhold og billeder, samt organisk indhold til jeres SoMe profiler.</p>
            <Link href='tel:+453073048'><a className={css.link}>(+45) 30 70 30 48</a></Link>
            <span className={css.linkSpacer}>|</span>
            <Link href='mailto:hello@growupstudio.dk'><a className={css.link}>Skriv til os</a></Link>
          </div>
        </div>

      </div>
    </>
  )
}
