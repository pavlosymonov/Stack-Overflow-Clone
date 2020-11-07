import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getQuestions, setCurrentPage,
  setPageSize, setOrder, setSort } from '../actions';
import { getApiUrl } from '../utils';
import { mainSorts } from '../utils';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import QuestionsList from '../components/questions-list';

class QuestionsListContainer extends Component {
  componentDidMount() {
    const { currentPage, pageSize, getQuestions, order, sort } = this.props;

    getQuestions(getApiUrl("questions", {
      page: currentPage,
      pagesize: pageSize,
      order,
      sort,
      filter: "!0S2DC*iP9nl5dEmG4*.sVeSJC"
    }));
  }

  onPageChange = (pageNumber) => {
    const { getQuestions, setCurrentPage, pageSize, order, sort } = this.props;
    
    setCurrentPage(pageNumber);
    getQuestions(getApiUrl("questions", {
      page: pageNumber,
      pagesize: pageSize,
      order,
      sort,
      filter: "!0S2DC*iP9nl5dEmG4*.sVeSJC"
    }));
  }

  onPageSizeChanged = (pageSize) => {
    const { setPageSize, setCurrentPage,
      getQuestions, order, sort } = this.props;
    
    setPageSize(pageSize);
    setCurrentPage(1);
    getQuestions(getApiUrl("questions", {
      page: 1,
      pagesize: pageSize,
      order,
      sort,
      filter: "!0S2DC*iP9nl5dEmG4*.sVeSJC"
    }));
  }

  onSortChanged = (sort) => {
    const { setSort, setCurrentPage,
      getQuestions, order, pageSize } = this.props;

    setSort(sort);
    setCurrentPage(1);
    getQuestions(getApiUrl("questions", {
      page: 1,
      pagesize: pageSize,
      order,
      sort,
      filter: "!0S2DC*iP9nl5dEmG4*.sVeSJC"
    }));
  }

  onOrderChanged = (order) => {
    const { setOrder, setCurrentPage,
      getQuestions, sort, pageSize } = this.props;

    setOrder(order);
    setCurrentPage(1);
    getQuestions(getApiUrl("questions", {
      page: 1,
      pagesize: pageSize,
      order,
      sort,
      filter: "!0S2DC*iP9nl5dEmG4*.sVeSJC"
    }));
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
      loading={p.loading}
      sorts={mainSorts}
      sort={p.sort}
      order={p.order}
      onPageChange={this.onPageChange}
      onPageSizeChanged={this.onPageSizeChanged}
      onSortChanged={this.onSortChanged}
      onOrderChanged={this.onOrderChanged}/>
  }
};

const mapStateToProps = (state) => {
  return state.questionsPage;
}

const mapDispatchToProps = {
  getQuestions,
  setCurrentPage,
  setPageSize,
  setOrder,
  setSort
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(QuestionsListContainer);
