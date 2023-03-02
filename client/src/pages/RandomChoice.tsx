import React, { useState, useEffect } from 'react'
import {Add} from '@mui/icons-material';
import{useList} from '@pankod/refine-core';
import {Box,Stack,Typography} from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';
import CustomButton from 'components/common/CustomButton';
import { useTable } from '@pankod/refine-core';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import "./Random.css"


interface AllDare {
  title: string;
  status: boolean;
  isMovie: boolean;
  description: string;
  _id: string
}
interface AllPlayers {
  name: string;
}

const RandomChoice = () => {
  const [allDares, setDares] = useState<AllDare[]>([]);
  const [allPlayers, setPlayers] = useState<AllPlayers[]>([]);
  const [spinning, setSpinning] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/dares")
    .then(response => {
      
      setDares(response.data);
    })
    .catch(error => {
    console.log(error);
    });
    }, []);
    useEffect(() => {
      axios.get("http://localhost:8080/api/v1/players")
      .then(response => {
        
        setPlayers(response.data);
      })
      .catch(error => {
      console.log(error);
      });
      }, []);
      //console.log(allDares);
      //console.log(allPlayers);

  const [currentDare, setCurrentDare] = useState('');
  const [currentName, setCurrentName] = useState('');

  
  const handleLottery = () => {
    setSpinning(true);
    setTimeout(() => {
      const randomDareIndex = Math.floor(Math.random() * allDares.length);
    const randomNameIndex = Math.floor(Math.random() * allPlayers.length);
    setCurrentDare(allDares[randomDareIndex].description);
    setCurrentName(allPlayers[randomNameIndex].name);
      setSpinning(false);
    }, 2000);
  }

  return (
    <div className="choice-container">
      <div className="lottery-container">
        <div className={`lottery-result ${spinning ? 'spinning' : ''}`}>
          {currentName && currentDare && !spinning &&
            <>
              <h1>{currentName}</h1>
              <h2>{currentDare}</h2>
            </>
          }
        </div>
        <button className={`choice-button ${spinning ? 'spinning' : ''}`} onClick={handleLottery}>
          {spinning ? 
      <Spinner animation="grow" />
 : 'Spin the wheel'}
        </button>
      </div>
    </div>
  );
}

export default RandomChoice
