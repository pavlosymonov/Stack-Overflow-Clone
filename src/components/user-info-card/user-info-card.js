import React from 'react';
import {Link} from 'react-router-dom';
import {getDateFormat, getShortenNumber} from '../../utils';
import UnknownUserIcon from './unknown-user.png';
import './user-info-card.scss';

export default function UserInfoCard({ infoType, owner, date }) {
  
  if (!owner.badge_counts) {
    return (
      <div className="question__user-info">
        <div className="question__user-action-time">
          {infoType}
          <span className="relativetime">{getDateFormat(date)}</span>
        </div>
        <div className="flex-content">
          <div className="question__user-avatar">
            <img src={UnknownUserIcon} alt="Unknown User" width="32" height="32"/>
          </div>
          <div className="question__user-details">
            {owner.display_name}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="question__user-info">
      <div className="question__user-action-time">
        {infoType}
        <span className="relativetime">{getDateFormat(date)}</span>
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
            <span className="reputation-score" title={`reputation score ${owner.reputation}`}>
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
  );
}
