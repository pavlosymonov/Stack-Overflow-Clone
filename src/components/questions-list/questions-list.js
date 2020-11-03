import React from 'react';

import QuestionsItem from '../questions-item';
import Pagination from '../pagination';
import Sorts from '../sorts';
import { numberWithCommas } from '../../utils';

import './questions-list.scss';

const QuestionsList = (p) => {
  console.log(p)
  return (
    <>
      <Sorts
        totalItems={`${numberWithCommas(p.totalItems)} questions`}
        onSortChanged={p.onSortChanged}
        onOrderChanged={p.onOrderChanged}
        sorts={p.sorts}
        currentSort={p.sort}
        currentOrder={p.order}
        loading={p.loading}/>
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
      <Pagination
        currentPage={p.currentPage}
        pageSize={p.pageSize}
        totalItems={p.totalItems}
        setCurrentPage={p.onPageChange}
        onPageSizeChanged={p.onPageSizeChanged}/>
    </>
  );
}

export default QuestionsList;