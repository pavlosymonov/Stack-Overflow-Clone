import React from 'react';
import { Link } from 'react-router-dom';

const RelatedTags = ({ relatedTags }) => {
  return (
    <div className="related-tags">
      <h4>Related Tags</h4>
      <ul>
        {
          relatedTags.map(tag => {
            return (
              <li key={tag.name}>
                <Link to={`/tags/${tag.name}`} className="post-tag" rel="tag">
                  {tag.name}
                </Link>
                <span className="multiplier">
                  <span>×</span>
                  &nbsp;
                  <span>{tag.count}</span>
                </span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default RelatedTags;