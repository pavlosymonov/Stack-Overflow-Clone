import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getQuestions, setCurrentPage } from '../actions';

import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import QuestionsList from '../components/questions-list';

class QuestionsListContainer extends Component {
  componentDidMount() {
    const { currentPage, pageSize, getQuestions } = this.props;
    const url = `questions?page=${currentPage}&pagesize=${pageSize}&order=desc&sort=activity&site=stackoverflow&filter=!0S2DC*iP9nl5dEmG4*.sVeSJC`;

    getQuestions(url);
  }

  onPageChange = (pageNumber) => {
    const { getQuestions, setCurrentPage, pageSize } = this.props;
    setCurrentPage(pageNumber);
    getQuestions(`questions?page=${pageNumber}&pagesize=${pageSize}&order=desc&sort=activity&site=stackoverflow&filter=!0S2DC*iP9nl5dEmG4*.sVeSJC`);
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

const mapDispatchToProps = {
  getQuestions,
  setCurrentPage
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(QuestionsListContainer);
