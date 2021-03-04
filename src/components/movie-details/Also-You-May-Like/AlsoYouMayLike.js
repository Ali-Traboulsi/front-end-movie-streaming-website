import React, { Component } from 'react';
import SingleCard from '../../SingleCard/SingleCard';
import SliderComponent from '../../SliderComponent/SliderComponent';

export default class AlsoYouMayLike extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    console.log('SliderComponet - props', this.props);
    console.log(this.props.visuals,"hello");
  }

  // shouldComponentUpdate(nextState, nextProps) {
  //   return true; //nextState.data !== this.state.data;
  // }
  render() {
    return (
      <div>
        <h2> You May Also Like</h2>
        <SliderComponent
          openModal={ this.props.openModal}
          visuals={this.props.visuals} />
      </div>
    );
  }
}
