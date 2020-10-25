import React from 'react';

import QuestionsItem from '../questions-item';
import Pagination from '../pagination';

import './questions-list.scss';

const QuestionsList = (p) => {
  return (
    <>
      <Pagination
        currentPage={p.currentPage}
        pageSize={p.pageSize}
        totalItems={p.totalItems}
        setCurrentPage={p.onPageChange}/>
      <ul className="questions__list">
        {
          p.questions.map((data) => {
            return (
              <li key={data.question_id}>
                <QuestionsItem data={data} />
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default QuestionsList;