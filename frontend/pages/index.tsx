import * as React from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from '../components/Layout';
import { Blocks } from '../components/Blocks';

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
        ... on NextpressSimplePostBlock {
          name
          innerBlocks {
            name
          }
          isValid
          originalContent
          attributes {
            __typename
            className
            imageUrl
            title
            description
          }
        }
      }
    }
  }
`;

const homeQueryVars = { uri: 'home' };

const IndexPage: NextPage = () => {
  const { loading, data } = useQuery(homeQuery, { variables: homeQueryVars }); // pollInterval: 3000

  return (
    <Layout title="Home | NextPress">
      {loading ? 'Loading' : <Blocks blocks={data.pageBy.blocks} />}
    </Layout>
  );
};

export default IndexPage;
