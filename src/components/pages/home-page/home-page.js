import React from 'react';
import { QuestionsListContainer } from '../../../containers';
import SideBar from '../../side-bar';
import RelatedTagsContainer from '../../../containers/related-tags-container';

import './home-page.scss';

const HomePage = () => {
  return (
    <section className="questions">
      <div className="container">
        <div className="questions__container">
          <SideBar />
          <div className="questions__content">
            <div>
              <h1>All Questions</h1>
              <QuestionsListContainer />
            </div>
            <RelatedTagsContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;