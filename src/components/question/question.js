import React from 'react';
import {Link} from 'react-router-dom';
import {getDateFormat, getShortenNumber} from '../../utils';
import {RelatedTagsContainer} from '../../containers';
import './question.scss';

export default function Question({data}) {
  const {comments, owner} = data;
  console.log(data)
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
          <div className="question__block flex-content">
            <div className="question__votecell">
              <div>
                <button className="vote-up-btn vote-btn">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconArrowUpLg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36">
                    <path d="M2 26h32L18 10 2 26z"></path>
                  </svg>
                </button>
                <div className="vote-count">{data.score}</div>
                <button className="vote-down-btn vote-btn">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconArrowDownLg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36">
                    <path d="M2 10h32L18 26 2 10z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <div className="question__body"
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
              <div className="question__user-info">
                <div className="question__user-action-time">
                  asked
                  <span className="relativetime">{getDateFormat(data.creation_date)}</span>
                </div>
                <div className="flex-content">
                  <div className="question__user-avatar">
                    <Link to={`/users/${owner.user_id}`}>
                      <img src={owner.profile_image} alt={owner.display_name} width="32" height="32"/>
                    </Link>
                  </div>
                  <div className="question__user-details">
                    <Link to={`/users/${owner.user_id}`}>{owner.display_name}</Link>
                    <div className="flex-content">
                      <span className="reputation-score" title={`reputation score ${data.score}`}>
                        {getShortenNumber(owner.reputation)}
                      </span>
                      <span title={`${owner.badge_counts.gold} gold badges`} className="badge-block">
                        <div className="user-badge1 user-badge"></div>
                        <span className="badgecount">{owner.badge_counts.gold}</span>
                      </span>
                      <span title={`${owner.badge_counts.silver} silver badges`} className="badge-block">
                        <div className="user-badge2 user-badge"></div>
                        <span className="badgecount">{owner.badge_counts.silver}</span>
                      </span>
                      <span title={`${owner.badge_counts.bronze} bronze badges`} className="badge-block">
                        <div className="user-badge3 user-badge"></div>
                        <span className="badgecount">{owner.badge_counts.bronze}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="question-comments">
                <ul className='question-comments__list'>
                  {
                    comments.map(el => {
                      return <li key={el.comment_id} className="question-comment">
                        <div
                          className="question-comment__score"
                          title="number of 'useful comment' votes received">
                          {el.score}
                        </div>
                        <div className="question-comment__body">
                          <span
                            dangerouslySetInnerHTML={{
                            __html: el.body
                          }}/>
                          –
                          <Link to={`/users/${el.owner.user_id}`}>{el.owner.display_name}</Link>
                          <span className="question-comment__date">
                            {getDateFormat(el.creation_date)}
                          </span>
                        </div>
                      </li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="question__sidebar">
          {/* <RelatedTagsContainer /> */}
        </div>
      </div>
    </div>
  );
}