import React, { useEffect, useRef, useState } from 'react';
import News from './News';
import './NewsApp.css';

function NewsApp() {

    const [newsData , setNewsData] = useState([]);
    const queryInputRef = useRef(null);
    const [query , setQuery] = useState('tesla');

    const apiKey = 'c5acbbd5bd254b2590e0868a32fa44c0';
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-30&sortBy=publishedAt&apiKey=c5acbbd5bd254b2590e0868a32fa44c0`;

    useEffect(() => {
        fetchData();
    },[query])

    async function fetchData (){
        try{
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
    
            setNewsData(jsonData.articles);
        }
        catch(e){
            console.log(e);
        }
    }


    function handleSubmit(event){
      event.preventDefault();
      const queryValue = queryInputRef.current.value;
      setQuery(queryValue);
    }


    function handleClick(event){
      event.preventDefault();
      const dataValue = event.target.value;
      setQuery(dataValue);
    }


  return (
    <div className='main-container'>
          <h1>News Daily</h1>
          <div className='nav-bar'>
          <input className='nav' ref={queryInputRef} onClick={handleClick} type="submit"  value='fifa'/>
          <input className='nav' ref={queryInputRef} onClick={handleClick} type="submit"  value='Health'/>
          <input className='nav' ref={queryInputRef} onClick={handleClick} type="submit"  value='Business'/>
          <input className='nav' ref={queryInputRef} onClick={handleClick} type="submit"  value='India'/>
          <input className='nav' ref={queryInputRef} onClick={handleClick} type="submit"  value='Celebrity'/>
          <input className='nav' ref={queryInputRef} onClick={handleClick} type="submit"  value='Politics'/>
          </div>
          <form onSubmit={handleSubmit}>
            <input className='search' type="text" ref={queryInputRef} placeholder='Hello! Search Your News Here'/>
            <input className='submit-click' onClick={handleSubmit} type="submit"  value='Submit'/>
          </form>
        <div  className='container'>
        {newsData.map(news =>{
            return(<News key={news.url} news={news}/>)
        })}
        </div>
    </div>
  )
}

export default NewsApp;