import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { ImageText } from 'common';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ImageText />
    </Layout>
  );
};

export default IndexPage;
