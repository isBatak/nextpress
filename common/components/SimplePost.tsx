import * as React from 'react';
import styled from '@emotion/primitives';

const Box = styled.View`
  background-color: ${(props: any) => props.theme.box.backgroundColor};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
`;

const Image = styled.Image`
  width: 100%;
  height: 150px;
  background-color: '#F3F4F5';
`;

const Title = styled.Text`
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  padding: 16px 16px 8px 16px;
`;

const Description = styled.Text`
  color: grey;
  padding: 0 16px 16px 16px;
  font-style: italic;
  text-align: left;
`;

export interface ISimplePostProps {
  imageUrl: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export const SimplePost: React.FunctionComponent<ISimplePostProps> = ({
  imageUrl = '',
  title,
  description,
}) => (
  <Box>
    <Image
      source={{
        uri: imageUrl,
      }}
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Box>
);
