import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarSelectionContext } from "../context/CarSelectionContext";
import { SelectionStepsContext } from "../context/SelectionStepsContext";

const Final = () => {
  const { selectedOption } = useContext(CarSelectionContext);
  const [selectedCar, setSelectedCar] = useState({});
  const { steps, setSteps } = useContext(SelectionStepsContext);
  const [tripLength, setTripLenght] = useState("");
  const [neededGas, setNeededGas] = useState(0);
  const navigate = useNavigate();
  const getCarData = async () => {
    axios
      .get(`https://www.fueleconomy.gov/ws/rest/vehicle/${selectedOption}`)
      .then(function (response) {
        setSelectedCar(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getCarData();
    console.log(selectedCar.trany);
    setSteps((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === 4) {
          return { ...obj, friendly: selectedCar.trany };
        }

        return obj;
      });

      return newState;
    });
  }, []);

  const calculateGas = ()=>{
        setNeededGas(tripLength / selectedCar.comb08)
  }
  return (
    <>
      <p className="text-2xl text-gray-300 pb-2">Your car: </p>
      <p className="text-4xl text-gray-200 eading-relaxed">
        <b>
          {selectedCar.year} {selectedCar.make}
          <br /> {selectedCar.model} <br />
          {selectedCar.trany} <br />
          
        </b>
        
      </p>
      {selectedCar.comb08 && <span className="text-md text-gray-300">You avarage MPG: <span className="text-indigo-400 text-lg "><b>{selectedCar.comb08}</b></span></span> }
      <label
        htmlFor="miles"
        className="block mt-8 text-sm font-medium text-gray-200"
      >
        How big is your trip
      </label>
      <div className="relative mt-1 rounded-md shadow-sm w-64 mx-auto">
        <input
          type="number"
          name="miles"
          id="miles"
          className="block w-full rounded-md border-gray-300  pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="0"
          aria-describedby="miles-count"
          value={tripLength}
          onChange={(e) => setTripLenght(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="miles">
            Miles
          </span>
        </div>
      </div>

      <div className="mt-8 text-2xl">{neededGas ? <p className="text-white">You will need approximately {neededGas} gallons </p> : null}</div>
      <div className="mt-8 flex mx-auto justify-center">
        <div className="inline-flex rounded-md shadow">
          <button disabled = {tripLength > 0 ? false : true} className={tripLength > 0 ? `inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700` : `inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 cursor-not-allowed`}
          onClick={()=>calculateGas()}
          >
            Calculate
          </button>
        </div>
        <div className="ml-3 inline-flex">
          <button
            
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-200"
            onClick={() => navigate("/selectYear")}
          >
            Start Over
          </button>
        </div>
      </div>
    </>
  );
};

export default Final;
