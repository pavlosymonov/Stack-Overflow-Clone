import React from 'react';
import QuestionsList from '../../questions-list';
import SideBar from '../../side-bar';
import { withSofService } from '../../hoc';
import { Link } from 'react-router-dom';
import './home-page.scss';

const RelatedTags = ({ sofService }) => {
  const relatedTags = sofService.getTags();

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

const HomePage = ({ sofService }) => {
  return (
    <section className="questions">
      <div className="container">
        <div className="questions__container">
          <SideBar />
          <div className="questions__content">
            <div>
              <h1>All Questions</h1>
              <QuestionsList />
            </div>
            <RelatedTags sofService={sofService} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default withSofService()(HomePage);