import * as React from 'react';
import dynamic from 'next/dynamic';

const blocksDictionary: Record<string, React.ComponentType<any>> = {
  NextpressSimplePostBlock: dynamic(() => import('@nextpress/common').then(mod => mod.SimplePost)),
};

const NexpressUnknownBlock: React.ComponentType<any> = dynamic(() =>
  import('./UnknownBlock').then(mod => mod.UnknownBlock)
);

interface IBlocksProps {
  blocks: Array<any>;
}

export const Blocks: React.FunctionComponent<IBlocksProps> = ({ blocks }) =>
  // @ts-ignore
  blocks.map(({ __typename, attributes }, index: number) => {
    const Block = blocksDictionary[__typename] || NexpressUnknownBlock;

    return <div style={{ maxWidth: '1024px', margin: '0 auto' }}><Block key={index} {...attributes} /></div>;
  });
