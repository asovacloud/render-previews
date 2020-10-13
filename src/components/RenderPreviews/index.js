import React from 'react';
import Microlink from '@microlink/react';
import valid from 'valid-url';

const RenderPeviews = ({ links }) => {
  return (
    <div className="row render-previews">
      <div className=" col s12">
        <ul className="collection">
          { links.map((item) => {
            if (valid.isUri(item)){
              return (
                <li className="collection-item" style={{ margin: '0 auto'}} key={item}>
                    <Microlink url={item} size='large' />
                </li>
              );
            } else {
              return (
                <li className="collection-item">{`The url "${item}" is wrong. Check the spelling, pls.`}</li>
              );
            }
          }) }
        </ul>
      </div>
    </div>
  );
};

export default RenderPeviews;