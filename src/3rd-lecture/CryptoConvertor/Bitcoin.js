import React, { useEffect, useState } from 'react'
import './bitcoin.css';
import {Button, Form , Input, Select} from 'antd';

function Bitcoin() {

  const defaultFirstSelectValue = "Bitcoin";
  const defaultSecondSelectValue = "Ether";

  const[currency , setCurrency] = useState([]);
  const [InputValue , setInputValue] = useState("0");
  const [firstState, setFirstState] = useState(defaultFirstSelectValue);
  const [secondState,  setSecondState] = useState(defaultSecondSelectValue);
  const [result , setResult] = useState("0");

  const apiUrl = `https://api.coingecko.com/api/v3/exchange_rates` ;


  
  useEffect(() => {
    fetchData(); 
  },[])


   
  async function fetchData (){
    try{
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        const data = jsonData.rates;

        const tempArray = Object.entries(data).map(item => {
          return{
             value : item[1].name,
             lable : item[1].name,
             rate : item[1].value,

          }
        })
        console.log(tempArray);
        setCurrency(tempArray);
         
    }
    catch(e){
        console.log(e);
    }
}

useEffect(()=> {

   if (currency.length == 0) return;

   const firstObj = currency.find((item) => {
    return item.value === firstState
   }).rate;

   const secondObj = currency.find((item) => {
    return item.value === secondState
   }).rate;


   const resultValue = (InputValue * secondObj) / firstObj;
   
   setResult(resultValue);

  
},
[InputValue,firstState,secondState]);
  

  return (
    <div className='main-container'>
    <h1>Crypto Convertor</h1> 
    <Form className='form'>
       <Form.Item>
          <Input className='input' onChange= {(event)=> setInputValue(event.target.value)}/>
       </Form.Item>
    </Form>
    <div className='select'>
    <Select style={{width: '200px'}} 
         defaultValue= {defaultFirstSelectValue}
         options={currency}
         onChange= {(value)=> setFirstState(value)}
    />
    <Select style={{width: '200px'}} 
        defaultValue= {defaultSecondSelectValue}
        options={currency}
        onChange= {(value)=> setSecondState(value)}
    />
    </div>
    <p>{result}</p>
    </div>
  )
}

export default Bitcoin;