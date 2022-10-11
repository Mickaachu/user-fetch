import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

const Home = () => {
  const [users, setUser] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((data) => setUser(data))
      
  }, [])
  console.log(users)

  

  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <input placeholder='Seach' onChange={e => setSearch(e.target.value)}></input>
      {
        users.results.filter((user) =>
          user.name.first.toLowerCase().includes(search.toLowerCase())
        ).map((user) => (
          <div key={user.login.uuid}>
            <img src={user.picture.large} alt="" />
            <h3>{user.name.first}</h3>
            <p>{user.email}</p>
          </div>

        ))

      }
    </div>
  )
}

export default Home;
