import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchQuestions, setCurrentPage } from '../actions';

import { withSofService } from '../components/hoc';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import QuestionsList from '../components/questions-list';

class QuestionsListContainer extends Component {
  componentDidMount() {
    const { currentPage, pageSize, fetchQuestions } = this.props;
    const url = `/2.2/questions?page=${currentPage}&pagesize=${pageSize}&order=desc&sort=activity&site=stackoverflow&filter=!0S2DC*iP9nl5dEmG4*.sVeSJC`;

    //fetchQuestions(url);
  }

  onPageChange = (pageNumber) => {
    const { fetchQuestions, setCurrentPage, currentPage, pageSize } = this.props;
    setCurrentPage(pageNumber);
    fetchQuestions(`/2.2/questions?page=${currentPage}&pagesize=${pageSize}&order=desc&sort=activity&site=stackoverflow&filter=!0S2DC*iP9nl5dEmG4*.sVeSJC`);
  }

  render() {
    const p = this.props;

    if (p.loading) return <Spinner />;
  
    if (p.error) return <ErrorIndicator />;

    return <QuestionsList
      questions={p.questions}
      totalItems={p.totalItems}
      pageSize={p.pageSize}
      currentPage={p.currentPage}
      onPageChange={this.onPageChange}/>
  }
};

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch, { sofService }) => {
  return {
    fetchQuestions: fetchQuestions(dispatch, sofService),
    setCurrentPage: (newPageId) => dispatch(setCurrentPage(newPageId))
  }
};

export default compose(
  withSofService(),
  connect(mapStateToProps, mapDispatchToProps)
)(QuestionsListContainer);
