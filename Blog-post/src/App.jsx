import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <Blog posts={posts} />
    </div>
  );
}

const Blog = (props) => {
  const sidebar = (
    <ul>
      {props.posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );

  const content = props.posts.map((post) => 
  <div key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
  </div>
);

  return (
    <div>
      {sidebar}
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Purpose', content: 'I came to conquor.'},
  {id: 2, title: 'Craft', content: 'Messing around with React.'},
  {id: 3, title: 'Plan', content: 'See yall in 6 months.'}
];

export default App
