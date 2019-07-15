import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { ImageText } from 'common';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
        ... on CoreHeadingBlock {
          name
          attributes {
            __typename
            ... on CoreHeadingBlockAttributes {
              content
              level
            }
          }
        }
        ... on CoreParagraphBlock {
          name
          attributes {
            __typename
            ... on CoreParagraphBlockAttributes {
              backgroundColor
              content
            }
            ... on CoreParagraphBlockAttributesV3 {
              fontSize
              content
            }
          }
        }
        ... on CoreQuoteBlock {
          name
          attributes {
            __typename
            ... on CoreQuoteBlockAttributes {
              value
              citation
              align
              className
            }
          }
        }
      }
    }
  }
`;

const homeQueryVars = { uri: 'home' };

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Query query={homeQuery} variables={homeQueryVars}>
        {({ loading, error, data }: any) => {
          if (error) return 'Error loading posts.';
          if (loading) return <div>Loading</div>;

          return <div>{JSON.stringify(data)}</div>;
        }}
      </Query>

      <ImageText />
    </Layout>
  );
};

export default IndexPage;
