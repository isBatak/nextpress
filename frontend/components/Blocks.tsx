import * as React from 'react';
import dynamic from 'next/dynamic';

const blocksDictionary: Record<string, React.ComponentType<{}>> = {
  NexpressUnknownBlock: dynamic(() => import('./UnknownBlock').then(mod => mod.UnknownBlock)),
  NextpressSnapCarouselBlock: dynamic(() => import('@nextpress/common').then(mod => mod.SnapCarousel)),
};

interface IBlocksProps {
  blocks: Array<any>;
}

export const Blocks: React.FunctionComponent<IBlocksProps> = ({ blocks }) =>
  // @ts-ignore
  blocks.map(({ __typename, attributes }, index: number) => {
    const Block = blocksDictionary[__typename] || blocksDictionary.UnknownBlock;

    return <Block key={index} {...attributes} />;
  });
