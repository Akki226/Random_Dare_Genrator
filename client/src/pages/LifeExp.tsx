import React, { useState, useEffect } from 'react'
import {Add} from '@mui/icons-material';
import{useList} from '@pankod/refine-core';
import {Box,Stack,Typography} from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';
import CustomButton from 'components/common/CustomButton';
import { useTable } from '@pankod/refine-core';
import axios from 'axios';
interface LifeDare {
  title: string;
  status: boolean;
  isMovie: boolean;
  description: string;
  _id: string
}
const LifeExp = () => {
  const [lifeDares, setDares] = useState<LifeDare[]>([]);
  const navigate=useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/dares")
    .then(response => {
      
      setDares(response.data.filter((item: LifeDare) => !item.isMovie));
    })
    .catch(error => {
    console.log(error);
    });
    }, []);
     
  return (
    <>
    <div>
    <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center">
        <Typography fontSize={25}
        fontWeight={700}
        color="#FCFCFC">List Of Dares Inspired from Life Experience</Typography>
      </Stack>
      <br></br>
    <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: "1rem", fontSize: "1.2rem", color: "#fff" }}>
      <thead>
        <tr>
         <th style={{ textAlign: "left", padding: "0.5rem", border: "1px solid #ccc", backgroundColor: "#808191" }}>#</th>
          <th style={{ textAlign: "left", padding: "0.5rem", border: "1px solid #ccc", backgroundColor: "#808191" }}>Dare</th>
          
        </tr>
      </thead>
      <tbody>
      {lifeDares.map((Ldare: LifeDare,index)=>{
        return(
        <tr key={Ldare.title}>
        <td style={{ textAlign: "left", padding: "0.5rem", border: "1px solid #ccc" }}>{index + 1}</td>
       <td style={{ textAlign: "left", padding: "0.5rem", border: "1px solid #ccc" }}>{Ldare.description}</td>
     </tr>);
      })}
          
        
      </tbody>
    </table>
    </Box>
    
  </div>
</>

  


  )
}

export default LifeExp
