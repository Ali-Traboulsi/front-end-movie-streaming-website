import React, { Component } from 'react';
export class EnbeddedVideo extends Component {
  render() {
    return (
      <div className='embed-responsive embed-responsive-21by9 embed-responsive-item '>
        <iframe
          className='embed-responsive-item'
          src='https://www.youtube.com/embed?v=AZCzfLMHUQs&list=RDQu3vaC73UvQ&index=4'
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default EnbeddedVideo;
