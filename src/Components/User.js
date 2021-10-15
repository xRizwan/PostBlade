import React, {useEffect, useState} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Loading from './Loading';
import ContactImage from '../Images/contact.png';

export default function User({ isLogged }) {
  const params = useParams();
  const [state, setState] = useState({
    user: null,
    loading: true,
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${params.id}`)
      .then(response => response.json())
      .then(json => {
          if (json == null || json.length > 0)
            setState({loading: false, user: json[0]})
          else
            throw Error;
      })
      .catch(err => setError(true))
  }, [params])

  if (!isLogged) return <Redirect to="/" />
  if (error) return <div className="error">Something went wrong or the user does not exist, please refresh the page and try again.</div>
  if (state.loading) return <Loading />

  return (
    <>
      <div className="centered headingText">User Information</div>
      <ContactCard name={state.user.name} username={state.user.username} email={state.user.email} number={state.user.email} />
    </>
  )
}

const ContactCard = ({ name, username, email, number }) => {
  return (
    <div className="card horizontal cyan darken-1 contact-card white-text">
      <div className="card-image">
        <div className="imageWrapper">
        <img alt="" src={ContactImage} className="contactImage" />
        </div>
      </div>
      <div className="card-stacked">
        <div className="card-content">
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {number}</p>
        </div>
      </div>
    </div>
  )
}