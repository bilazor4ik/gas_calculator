import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarSelectionContext } from '../context/CarSelectionContext'
import DisplayLoading from './DisplayLoading'
export const ProtectedRouteOption = ({children}) => {
    const { selectedModel} = useContext(CarSelectionContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!selectedModel){
        
       navigate("/selectModel")
        }
    },[])
    if(selectedModel){
        
        return children
    }else{
        return <DisplayLoading/>
    }
  }
