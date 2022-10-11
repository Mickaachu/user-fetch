import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

const Home = () => {
  const [users, setUser] = useState([])
  const searchBar = () => {
    const [searchResult, setSearchResult] = useState([])
    const [searchInput, setSearchInput] = useState({})
    const [search, setSearch] = useState('')
    
    const handleInput = (e) => {
        let {name, value} = e.target
        setSearchInput({...searchInput, [name]: value})
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchResult(users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())))        
        
      }
 
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((data) => setUser(data))
      
  }, [])
  console.log(users)

  

  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit} value={search} name="search" className="searchBar" onChange={handleInput}>
            <input type="text" placeholder="Search" />
            <button>Search</button>
      </form>
      {
        users.results && users.results.map((result) => (
          <div key={result.login.uuid}>
            <img src={result.picture.large} alt={result.name.first} />
            <h3>{result.name.first}</h3>
            <p>{result.email}</p>
          </div>
        ))

      }
    </div>
  )
}
}
export default Home;
