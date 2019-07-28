import * as React from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import dynamic from 'next/dynamic';

import Layout from '../components/Layout';

const homeQuery = gql`
  query GET_PAGE_BY_URI($uri: String) {
    pageBy(uri: $uri) {
      id
      pageId
      title
      date
      uri
      blocks {
        __typename
        name
        ... on NextpressSnapCarouselBlock {
          name
          innerBlocks {
            name
          }
          isValid
          originalContent
          attributes {
            __typename
            className
          }
        }
      }
    }
  }
`;

// @ts-ignore
const NextpressSnapCarouselBlock = dynamic(() => import('@nextpress/common').then(mod => mod.SnapCarousel));

const homeQueryVars = { uri: 'home' };

const IndexPage: NextPage = () => {
  const { loading, data } = useQuery(homeQuery, { variables: homeQueryVars });

  return (
    <Layout title="Home | NextPress">
      {loading
        ? 'Loading'
        : data.pageBy.blocks.map(
            (block: any, index: number) => block.__typename === 'NextpressSnapCarouselBlock' && <NextpressSnapCarouselBlock key={index} />
          )}
    </Layout>
  );
};

export default IndexPage;
