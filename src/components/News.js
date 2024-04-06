import React from 'react'
import Menu from './Menu'
import NewsGrid from './NewsGrid'
import {useState,useEffect} from 'react'

function News() {

  const [items,setItems]=useState([])
  const [active,setActive]=useState(1)
  const [category,setCategory]=useState('latest')

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=ef22418418154bb496b627854d9b32fd`)
    .then(res=>res.json())
    .then(data=>setItems(data.articles))
  },[category])

  return (
    <>
    <div className="App">
      <h1 className="title">See the latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    </div>
    </>
  )
}

export default News