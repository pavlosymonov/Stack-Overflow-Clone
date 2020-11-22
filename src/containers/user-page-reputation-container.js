import React, { Component } from 'react';

import { compose } from "redux";
import {Link, withRouter} from "react-router-dom";

import { getApiUrl } from "../utils";

import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import sofService from "../services/sof-service";
import UserPageItem from "../components/user-page-item";

const ReputationItem = ({ data }) => {
  return <>
    <td>
      <div className={`reputation__item-mount ${data.reputation_change > 0 ? 'green-rep-amount' : 'red-rep-amount'}`}>
        {data.reputation_change > 0 ? '+' : ''}{data.reputation_change !== 0 ? data.reputation_change : ''}
      </div>
    </td>
    <td>
      <div className="reputation__item-type">
        {data.vote_type.replace(/_/, '')}
      </div>
    </td>
    <td>
      <Link to={`/questions/${data.post_id}`}>
        <div className="reputation__item-title" dangerouslySetInnerHTML={{
          __html: data.title
        }} />
      </Link>
    </td>
  </>;
}

const USER_REPUTATION_FILTER = "!0YkVxhHO7dkTlewxZ5-jzSDVC";

class UserPageReputationContainer extends Component {

  state = {
    data: {},
    loading: true,
    error: null,
    currentPage: 1,
    totalItems: 0
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.getUserData();
    }
  }

  getUserData = () => {
    const { match } = this.props;
    const url = getApiUrl(`users/${match.params.id}/reputation`, {
      page: this.state.currentPage,
      pagesize: "10",
      filter: USER_REPUTATION_FILTER
    });

    sofService.getData(url)
      .then(data => {
        if (data.items.length === 0) {
          this.setNewState({}, false, { message: "User not found" });
        } else {
          this.setState({totalItems: data.total});
          this.setNewState(data.items, false, null);
        }
      }).catch(error => this.setNewState({}, false, error));
  }

  setNewState = (data, loading, error) => {
    this.setState({data, loading, error});
  }

  setCurrentPage = (currentPage) => {
    this.setState({currentPage, loading: true, error: null});
  }

  getAnswersByCurrentPage = () => {
    const trimStart = (this.state.currentPage - 1) * 30;
    const trimEnd = trimStart + 30;
    return this.state.answers.slice(trimStart, trimEnd);
  }

  render() {
    if (this.state.loading) return <Spinner />;

    if (this.state.error) return <ErrorIndicator error={this.state.error} />;

    return <UserPageItem
      data={this.state.data}
      totalItems={this.state.totalItems}
      currentPage={this.state.currentPage}
      setCurrentPage={this.setCurrentPage}
      itemName="Reputation"
      View={ReputationItem}
    />;
  }
};

export default compose(
  withRouter
)(UserPageReputationContainer);
