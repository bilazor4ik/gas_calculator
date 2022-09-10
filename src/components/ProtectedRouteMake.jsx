import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarSelectionContext } from '../context/CarSelectionContext'
import DisplayLoading from './DisplayLoading'
export const ProtectedRouteMake = ({children}) => {
    const { selectedYear} = useContext(CarSelectionContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!selectedYear){
        
       navigate("/selectYear")
        }
    },[])
    if(selectedYear){
        
        return children
    }else{
        return <DisplayLoading/>
    }
  }
