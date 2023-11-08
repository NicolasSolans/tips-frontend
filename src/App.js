
import { SearchBar } from './components/SearchBar';
import CardList from './components/CardList';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState(products);
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    event.preventDefault(event)
    setSearch(event.target.value.toLowerCase())
  };

  const handleSubmit = (event) => {
    event.preventDefault(event)
    const filtrar = products.filter((p) => p.name.toLowerCase().includes(search));

    setFiltered(filtrar)
  }

  const getProducts = async() => {
    const response = (await axios.get('products.json')).data;
    const productsData = response.data
    setProducts(productsData)
  }

  useEffect(()=>{
    setTimeout(()=>{
    getProducts();
    }, 3000)
  }, [])

  useEffect(()=>{
    setFiltered(products)
  }, [products])

  return (
    <div>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <CardList products={filtered}/>
    </div>
  );
}

export default App;
