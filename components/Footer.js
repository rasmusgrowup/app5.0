import css from '../styles/footer.module.scss'
import Copyright from '../public/copyright.svg'
import Image from 'next/image'
import React from 'react'

export default function Footer() {

  return(
    <>
      <footer className={css.footerWrapper}>

        <div className={css.bottomPart}>
          <p>
            Alle rettigheder haves <Image src={Copyright} width='9' height='9'/> {new Date().getFullYear()}
          </p>
          <p>Growup Ivs</p>
          <p className={css.cvr}>CVR 39852640</p>
        </div>
      </footer>
    </>
  )
}
