import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarSelectionContext } from '../context/CarSelectionContext'
import DisplayLoading from './DisplayLoading'
export const ProtectedRouteModel = ({children}) => {
    const { selectedMake} = useContext(CarSelectionContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!selectedMake){
        
       navigate("/selectMake")
        }
    },[])
    if(selectedMake){
        
        return children
    }else{
        return <DisplayLoading/>
    }
  }
