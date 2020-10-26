import React, { Component } from 'react';
import RelatedTags from '../components/related-tags';
import { withSofService } from '../components/hoc';

// const withRequested = (View, getData) => {
//   return class extends Component {

//   }
// }

class RelatedTagsContainer extends Component {
  state = {
    relatedTags: []
  }

  componentDidMount() {
    this.setState({relatedTags: this.props.sofService.getTags() });
  }

  render() {
    return <RelatedTags relatedTags={this.state.relatedTags} />
  }
}

export default withSofService()(RelatedTagsContainer);
