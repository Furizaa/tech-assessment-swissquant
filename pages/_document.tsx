import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import { ReactElement } from 'react';

export default class MyDocument extends Document<{
  styleTags: ReactElement<{}>[];
}> {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/ktd5kgo.css" />
          <style>
            {`html, body, #__next {
              height: 100%
            }`}
          </style>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
