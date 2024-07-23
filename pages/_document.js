import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1721485376950080`}
          crossOrigin="anonymous"
        />
        <Script
          data-ad-client="ca-pub-1721485376950080"
          async
          src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}
        ></Script>




      </body>
    </Html>
  );
}
