import React from 'react';
import { QuestionContainer } from '../../../containers';
import SideBar from '../../side-bar';

const QuestionPage = () => {
  return (
    <section className="question">
      <div className="container">
        <div className="main__container">
          <SideBar />
          <QuestionContainer />
        </div>
      </div>
    </section>
  );
};

export default QuestionPage;
