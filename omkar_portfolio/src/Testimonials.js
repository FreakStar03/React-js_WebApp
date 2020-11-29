import React, { Component } from 'react';
import './App.css'
import { ParallaxBanner , ParallaxProvider   } from 'react-scroll-parallax';

class Testimonials extends Component {
  render() {

    return (
      <div>
      <div>
      <ParallaxProvider>
      <ParallaxBanner
          className="your-class"
          layers={[
              {
                  image: 'https://elumina.me/wp-content/uploads/2017/06/elumina-freebies-3-free-line-art-pattern-science-fabricio-marques-1.jpg',
                  amount: 0.1,
              },
              {
                  image: 'https://elumina.me/wp-content/uploads/2017/06/elumina-freebies-3-free-line-art-pattern-science-fabricio-marques-1.jpg',
                  amount: 0.2,
              },
          ]}
          style={{
              height: '500px',
          }}
      >
      </ParallaxBanner>
      </ParallaxProvider>
      </div>

      <div id='parallel_text'>
        <h1>Hello Visitor!</h1>
        <h3>Be Ready To <spam className='extra_imp'> know </spam>about me</h3>
      </div>
      </div>

    );
  }
}

export default Testimonials;