import * as React from 'react';

interface IUnknownBlockProps {}

export const UnknownBlock: React.FunctionComponent<IUnknownBlockProps> = props => {
  return (
    <div>
      UNKNOWN BLOCK!
      {JSON.stringify(props)}
    </div>
  );
};
