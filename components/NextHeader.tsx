import React from 'react';
import Head from 'next/head';

interface IProps {}

const Header = (props: IProps): React.ReactElement => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="apple-touch-icon" href="/icon.png" />
            <meta name="theme-color" content="#fff" />
            {/*
                <meta name="og:type" content="website"/>
                <meta name="description" content={description}/>
                <meta name="og:title" content={title}/>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keyword}/>
                <meta name="og:url" content={url}/>
                <meta name="og:description" content={description}/>
                <meta name="og:image" content={image}/>
                */
            }
        </Head>
    );
}
export default Header;