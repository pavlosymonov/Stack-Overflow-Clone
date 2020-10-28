import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getQuestions, setCurrentPage,
  setPageSize, setOrder, setSort } from '../actions';
import { getApiUrl } from '../utils';

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

  onOrderChaned = (order) => {
    console.log(order);
  }

  render() {
    const p = this.props;
    const sorts = [
      {field: "activity", label: "Activity"},
      {field: "votes", label: "Votes"},
      {field: "creation", label: "Creation"},
    ]

    if (p.loading) return <Spinner />;
  
    if (p.error) return <ErrorIndicator />;
    
    return <QuestionsList
      questions={p.questions}
      totalItems={p.totalItems}
      pageSize={p.pageSize}
      currentPage={p.currentPage}
      loading={p.loading}
      sorts={sorts}
      sort={p.sort}
      onPageChange={this.onPageChange}
      onPageSizeChanged={this.onPageSizeChanged}
      onSortChanged={this.onSortChanged} />
  }
};

const mapStateToProps = (state) => {
  return state;
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