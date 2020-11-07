import React from 'react';
import {Link} from 'react-router-dom';
import {getDateFormat, getShortenNumber} from '../../utils';
import {RelatedTagsContainer} from '../../containers';
import Comments from '../comments';
import UserInfoCard from '../user-info-card';
import ScoreController from '../score-controller';
import { AnswersContainer } from '../../containers';
import './question.scss';

export default function Question({data}) {
  const {comments, owner} = data;
  return (
    <div className="page__content">
      <div className="question__header">
        <h1>{data.title}</h1>
        <div className="activity-block">
          <div>
            <span className="activity-type">Asked</span>
            <time datatime={new Date(data.creation_date).toISOString()}>
              {getDateFormat(data.creation_date)}
            </time>
          </div>
          <div>
            <span className="activity-type">Active</span>
            <time datatime={new Date(data.last_activity_date).toISOString()}>
              {getDateFormat(data.last_activity_date)}
            </time>
          </div>
          <div>
            <span className="activity-type">Viewed</span>
            <time datatime={new Date(data.view_count).toISOString()}>
              {getShortenNumber(data.view_count)}
              <span>times</span>
            </time>
          </div>
        </div>
      </div>
      <div className="flex-content">
        <div className="question__mainbar">
          <div className="question__block">
            <div className="flex-content">
              <ScoreController score={data.score} />
              <div className="grow-content">
                <div className="content__body"
                  dangerouslySetInnerHTML={{
                  __html: data.body
                }}></div>
                <div className="question__tags">
                  {
                    data.tags.map(el => {
                      return <Link
                        key={el}
                        className="post-tag"
                        to={`/tags/${el}`}
                        title={`show questions tagged '${el}'`}>{el}</Link>
                    })
                  }
                </div>
                <UserInfoCard infoType="asked" owner={owner} date={data.creation_date}/>
                <Comments comments={comments}/>
              </div>
            </div>
            <AnswersContainer
              answers={data.answers}
              answersCount={data.answer_count}
              />
          </div>
        </div>
        <div className="question__sidebar">
          <RelatedTagsContainer />
        </div>
      </div>
    </div>
  );
}