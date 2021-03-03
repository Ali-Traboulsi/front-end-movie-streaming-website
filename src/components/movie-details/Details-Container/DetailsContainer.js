import React, { Component } from 'react';
import Iframe from 'react-iframe';

export class DetailsContainer extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <h3 className='col-4'>{this.props.data.movie_title}</h3>
          <nav aria-label='col-7 breadcrumb '>
            <ol className='breadcrumb bg-transparent text-dark'>
              <li className='breadcrumb-item active' aria-current='page'>
                Genre:
              </li>
              <li className='breadcrumb-item active ' aria-current='page'>
                Duration:
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Year:
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                ******
              </li>
            </ol>
          </nav>
        </div>
      </div>
    );
  }
}

export default DetailsContainer;
