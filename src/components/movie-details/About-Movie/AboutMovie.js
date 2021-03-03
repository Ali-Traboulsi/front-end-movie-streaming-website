import React, { Component } from 'react';
import Classes from './../About-Movie/Singlevisual.module.css';
export class AboutMovie extends Component {
  render() {
    return (
      <div>
        <p>
          <img
            className={Classes.img}
            src='pineapple.jpg'
            alt='Pineapple'
            style='width:170px;height:170px;margin-right:15px;'
          />
          <h2>Float Left</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa. Fusce luctus{' '}
        </p>
      </div>
    );
  }
}

export default AboutMovie;
