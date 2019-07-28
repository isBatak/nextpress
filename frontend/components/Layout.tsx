import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { withTheme } from 'emotion-theming';

interface ILayoutProps {
  title?: string;
}

const Layout: React.FunctionComponent<ILayoutProps> = withTheme(({ children, title = 'This is the default title', theme }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    <Global
      styles={css`
        ${emotionNormalize}
        html,
        body {
          padding: 0;
          margin: 0;
          background: ${theme.colors.wildSand};
          min-height: 100%;
          font-family: Helvetica, Arial, sans-serif;
        }
      `}
    />
  </div>
));

export default Layout;
