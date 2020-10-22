import React from 'react';
import { withSofService } from '../hoc';
import QuestionsItem from '../questions-item';

import './questions-list.scss';

const QuestionsList = ({ sofService }) => {
  const items = sofService.getQuestions();

  return (
    <ul className="questions__list">
      {
        items.map((data) => {
          return (
            <li key={data.question_id}>
              <QuestionsItem data={data} />
            </li>
          )
        })
      }
    </ul>
  );
};

export default withSofService()(QuestionsList);