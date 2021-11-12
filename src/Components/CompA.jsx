import React, {useState, useEffect} from 'react'
import axios from 'axios';

const CompA = () => {
   const [num, setNum] = useState();
   const [name, setName] = useState();
   const[moves, setMoves] = useState();
    const selectF =(event) => {
      setNum(event.target.value)
    }

    useEffect(() => {
      const getData = async() => {
         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
         setName(res.data.name)
         setMoves(res.data.moves.length);
        }
        getData();
    })
  return (
    <>
    <h1 style={{alignItems: 'center', fontSize: '5rem', marginLeft: '4rem'}}>You choose <span style={{color: 'red'}}>{num} Value</span></h1>
    <h1 style={{alignItems: 'center', fontSize: '5rem', marginLeft: '4rem'}}>My name is  <span style={{color: 'red'}}>{name}</span></h1>
    <h1 style={{alignItems: 'center', fontSize: '5rem', marginLeft: '4rem'}}>I have <span style={{color: 'red'}}>{moves} moves</span></h1>
      <select style={{fontSize: '2rem', marginLeft: '4rem', padding: '0.3rem 3rem'}} value={num} onChange={selectF}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  )
}

export default CompA;
