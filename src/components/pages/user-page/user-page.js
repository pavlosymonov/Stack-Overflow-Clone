import React from 'react';
import { UserInfoContainer } from '../../../containers';
import SideBar from '../../side-bar';
import UserPageReputationContainer from "../../../containers/user-page-reputation-container";

const UserPage = () => {
  return (
    <section className="user">
      <div className="container">
        <div className="page__container">
          <SideBar />
          <div className="page__content content__body">
            <UserInfoContainer />
            <ul className="user__items-container">
              <li><UserPageReputationContainer /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
