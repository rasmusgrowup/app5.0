import Head from 'next/head'

function Meta({title, keywords, description}) {
    return (
        <Head>
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="og:title" content={title} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Growup | Odenseansk Design, Web og SoMe bureau',
    keywords: 'Webdesign, SoMe, Social Content, Visuelt design, UX, UI, hjemmeside, netbutik, webshop, ecommerce, react, nextjs, wordpress, shopify',
    description: 'Vi hjælper start-ups og mellemstore virksomheder med at udvikle deres forretninger. Vores Design, Web og SoMe løsninger skræddersyes til den enkelte kunde, hvilket sikrer en positiv udvikling af brandet og at alle behov opfyldes.'
}

export default Meta
