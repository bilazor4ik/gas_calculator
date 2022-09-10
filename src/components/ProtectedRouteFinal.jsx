import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarSelectionContext } from '../context/CarSelectionContext'
import DisplayLoading from './DisplayLoading'
export const ProtectedRouteFinal = ({children}) => {
    const { selectedOption} = useContext(CarSelectionContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!selectedOption){
        
       navigate("/selectYear")
        }
    },[])
    if(selectedOption){
        
        return children
    }else{
        return <DisplayLoading/>
    }
  }
