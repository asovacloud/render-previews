import React from 'react';
import LinkPreview from '@ashwamegh/react-link-preview'
import valid from 'valid-url';

import './RenderPreviews.css';

const RenderPeviews = ({ links }) => {
  return (
    <div className="row render-previews">
      <div className=" col s12">
        <ul className="collection">
          { links.map((item) => {
            if (valid.isUri(item)){
              return (
                <li
                  className="collection-item"
                  style={{ margin: '0 auto'}}
                  key={item}
                >
                  <a rel="noopener noreferrer" href={item} target="_blank">
                    <LinkPreview url={item} />
                  </a>
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