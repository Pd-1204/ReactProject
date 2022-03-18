import { useState, useEffect } from 'react';
import './App.css';
import SocialCard from './SocialCard';

function App() {

  const [users, setUsers] = useState([]);
  const [allusers, setallUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=15");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setallUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allusers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }
  return (
    <div className="App">
    <input className="search-box" placeholder="Search" onInput={filterCards}></input>    <div className="cards-container">
    {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
    </div>
     
    </div>
  );
}

export default App;
