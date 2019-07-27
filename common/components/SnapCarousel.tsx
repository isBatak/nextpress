import * as React from 'react';
import styled from '@emotion/primitives';

export interface ISnapCarouselProps {}

const Container = styled.View`
  width: 100%;
  padding: 40px;
  background-color: ${(props: any) => props.theme.backgroundColor};
`;

const Box = styled.View`
  background-color: ${(props: any) => props.theme.box.backgroundColor};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
`;

const Image = styled.Image`
  width: 100%;
  height: 150px;
`;

const Title = styled.Text`
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  padding: 16px 16px 8px 16px;
`;

const Description = styled.Text`
  color: grey;
  padding: 0 16px 16px 16px;
  font-style: italic;
`;

const image =
  'https://images.unsplash.com/photo-1561363702-e07252da3399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';

export class SnapCarousel extends React.Component<ISnapCarouselProps> {
  public render() {
    return (
      <Container>
        <Box>
          <Image
            source={{
              uri: image,
            }}
          />
          <Title>Beautiful view</Title>
          <Description>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</Description>
        </Box>
      </Container>
    );
  }
}
