import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loading from './Loading';
import Search from './Search';

export default function Posts({ isLogged }) {
  const [state, setState] = useState({
    posts: [],
    loading: true,
    displayablePosts: [],
  })
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setState({loading: false, posts: json.slice([0], [10]), displayablePosts: json.slice([0], [10])}))
      .catch(err => setError(true))
  }, [])

  const handleTitleSearch = (title) => {
    const filteredPosts = state.posts.filter(val => val.title.includes(title))
    setState({...state, displayablePosts: filteredPosts});
  }

  const handleUserNameSearch = async (username) => {
    setState({...state, loading: true})
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
    users = await users.json();

    const foundUser = users.filter((val) => username.toLowerCase() === val.username.toLowerCase())[0];

    if (!foundUser) {
      setState({...state, displayablePosts: [], loading: false})
      return null;
    }
    
    let userPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${foundUser.id}`)
    userPosts = await userPosts.json();

    setState({...state, loading: false, displayablePosts: userPosts})

  }

  if (!isLogged) return <Redirect to="/" />
  if (state.loading) return <Loading />
  if (error) return <div className="error">Something went wrong, please refresh the page.</div>

  return (
    <>
      <Search handleTitleSearch={handleTitleSearch} handleUserNameSearch={handleUserNameSearch} />
      {state.displayablePosts.length === 0 && <div className="center">None Found!</div>}
      {state.displayablePosts.map((post, index) => <Card key={index} title={post.title} body={post.body} userid={post.userId}></Card>)}
    </>
  )
}

const Card = ({title, body, userid}) => {
  return (
    <div className="card blue-grey lighten-1 semi-full">
      <div className="card-content white-text">
        <span className="card-title thick-text">{title}</span>
        <p>
          {body}
        </p>
      </div>
      <div className="card-action">
        <div> Posted by : <Link to={`/users/${userid}`}>User {userid}</Link> </div>
      </div>
    </div>
  )
}