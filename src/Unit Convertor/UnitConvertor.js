import React, {useState} from 'react';
import './us.css';

function UnitConvertor() {
    const[Feet , setFeet] = useState(0);
    const[Inch , setInch] = useState(0);
    const[Yard , setYard] = useState(0);
    const[Meter, setMeter] = useState(0);
    const[cm , setCm] = useState(0);
    const[km,setKm] = useState(0);

    function handlefeet(event){
        const data = event.target. value;
        setFeet(data);

        const forInch = (data*12).toFixed(2);
        setInch(forInch);

        const forYards = (data/3).toFixed(2);
        setYard(forYards);

        const forMeter = (data/3.2).toFixed(2);
        setMeter(forMeter);

        const forCm = (data*30.48).toFixed(4);
        setCm(forCm);

        const forKm = (data/3281).toFixed(5);
        setKm(forKm);
    }

    function handleInches(event){
        const data = event.target. value;
        setInch(data);

        const forFeet = (data/12).toFixed(2);
        setFeet(forFeet);

        const forYards = (data/36).toFixed(2);
        setYard(forYards);

        const forMeter = (data/39).toFixed(2);
        setMeter(forMeter);

        const forCm = (data*2.54).toFixed(4);
        setCm(forCm);

        const forKm = (data/39370).toFixed(5);
        setKm(forKm);

    }

    function handleYards(event){
        const data = event.target. value;
        setYard(data);

        const forInch = (data*36).toFixed(2);
        setInch(forInch);

        const forFeet = (data*3).toFixed(2);
        setFeet(forFeet);

        const forMeter = (data/1.094).toFixed(2);
        setMeter(forMeter);

        const forCm = (data*91).toFixed(4);
        setCm(forCm);

        const forKm = (data/1094).toFixed(5);
        setKm(forKm);
    }

    function handleMeters(event){
        const data = event.target. value;
        setMeter(data);

        const forInch = (data*39).toFixed(2);
        setInch(forInch);

        const forYards = (data/1.1).toFixed(2);
        setYard(forYards);

        const forFeet = (data*3.2).toFixed(2);
        setFeet(forFeet);

        const forCm = (data*100).toFixed(4);
        setCm(forCm);

        const forKm = (data/1000).toFixed(5);
        setKm(forKm);
    }

    function handleCm(event){
        const data = event.target. value;
        setCm(data);

        const forInch = (data/2.54).toFixed(2);
        setInch(forInch);

        const forYards = (data/91).toFixed(2);
        setYard(forYards);

        const forMeter = (data/100).toFixed(2);
        setMeter(forMeter);

        const forFeet = (data/30.48).toFixed(4);
        setFeet(forFeet);

        const forKm = (data/100000).toFixed(5);
        setKm(forKm);
    }

    const handlekm = (event) =>{
        const data = event.target. value;
        setKm(data);

        const forInch = (data*39370).toFixed(2);
        setInch(forInch);

        const forYards = (data*1094).toFixed(2);
        setYard(forYards);

        const forMeter = (data*1000).toFixed(2);
        setMeter(forMeter);

        const forFeet = (data*3281).toFixed(4);
        setFeet(forFeet);

        const forCm = (data*100000).toFixed(5);
        setCm(forCm);
    }

  return (
    <div className='container'>
        <img className='img'width="1100px" src="https://images.pexels.com/photos/5412499/pexels-photo-5412499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Unit Converter</h1>
        <div className='form-box'>
        <form>
            <label htmlFor="Feet">Feet</label>
            <input onChange={handlefeet} type="number" value={Feet} />
        </form>
        <form>
            <label htmlFor="Inches">Inches</label>
            <input onChange={handleInches} type="number" value={Inch} />
        </form>
        <form>
            <label htmlFor="Yards">Yards</label>
            <input onChange={handleYards} type="number" value={Yard}/>
        </form>
        <form>
            <label htmlFor="Meters">Meters</label>
            <input onChange={handleMeters} type="number" value={Meter} />
        </form>
        <form>
            <label htmlFor="cm">Centi-Meter</label>
            <input onChange={handleCm} type="number" value={cm} />
        </form>
        <form>
            <label htmlFor="km">Kilo-Meter</label>
            <input onChange={handlekm} type="number" value={km} />
        </form>
        </div>
    </div>
  )
}

export default UnitConvertor;