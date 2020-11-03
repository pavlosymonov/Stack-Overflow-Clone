import React from 'react';

export default function Question({ data }) {
  return (
    <div className="question-container">
      <div className="question__header">
        <h1>{data.title}</h1>
        <div className="activity-block">
          
        </div>
      </div>
    </div>
  );
}
