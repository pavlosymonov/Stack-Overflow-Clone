import React, { Component } from 'react';
import RelatedTags from '../components/related-tags';
import { withSofService } from '../components/hoc';

// const withRequested = (View, getData) => {
//   return class extends Component {

//   }
// }

class RelatedTagsContainer extends Component {
  state = {
    relatedTags: [],
    loading: true,
    isShowAll: false
  }

  componentDidMount() {
    this.props.sofService.getTags('tags?page=1&pagesize=25&order=desc&sort=popular&site=stackoverflow&filter=!-.G.68pqislT')
      .then(data => {
        this.setState({
          relatedTags: data.items,
          loading: false
        });
      })
  }

  onMoreBtnClick = () => {
    this.setState({ isShowAll: true });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }
    return <RelatedTags {...this.state} onMoreBtnClick={this.onMoreBtnClick} />
  }
}

export default withSofService()(RelatedTagsContainer);
