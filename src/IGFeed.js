import React, { Component } from 'react';
import axios from 'axios';

class IGFeed extends Component {
  state = { posts: [] };

  componentWillMount() {
    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=35929661.3045cae.cd68673f17e74f73bcb94c570c9ea7f3&count=10')
      .then(response => this.setState({ posts: response.data.data }));
  }

  renderPosts(){
   return this.state.posts.map(post => 
      <div>
        <h1><img src={post.images.standard_resolution.url} alt=''/></h1>
        <h1>{post.likes.count}</h1>
        {/*<h1>{post.tags}</h1>  */}
      </div>    
    );
  }

  render(){
    console.log(this.state);
    return <h1>{this.renderPosts()}</h1>
    // return <h1></h1>
  }

}

export default IGFeed;