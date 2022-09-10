import { Route, Routes } from "react-router-dom";
import { ProtectedRouteFinal } from "./components/ProtectedRouteFinal";
import { ProtectedRouteMake } from "./components/ProtectedRouteMake";
import { ProtectedRouteModel } from "./components/ProtectedRouteModel";
import { ProtectedRouteOption } from "./components/ProtectedRouteOption";
import SharedStepsHeader from "./components/SharedStepsHeader";

import { CarSelectionContextProvider } from "./context/CarSelectionContext";
import { SelectionStepsContextProvider } from "./context/SelectionStepsContext";

import Final from "./pages/Final";
import Home from "./pages/Home";
import SelectMake from "./pages/SelectMake";
import SelectModel from "./pages/SelectModel";
import SelectOptions from "./pages/SelectOptions";
import SelectYear from "./pages/SelectYear";

 
function App() {
  return (
    <>
      <div className="min-h-screen mx-auto ">


        <CarSelectionContextProvider>
          
            <SelectionStepsContextProvider>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<SharedStepsHeader />}>
                  <Route path='selectYear' element={<SelectYear />} />
                  <Route path='selectMake' element={<ProtectedRouteMake><SelectMake /></ProtectedRouteMake>} />
                  <Route path='selectModel' element={<ProtectedRouteModel><SelectModel /></ProtectedRouteModel>} />
                  <Route path='selectOptions' element={<ProtectedRouteOption><SelectOptions /></ProtectedRouteOption>} />
                  <Route path='final' element={<ProtectedRouteFinal><Final /></ProtectedRouteFinal>} />

                </Route>


              </Routes>
            </SelectionStepsContextProvider>
          
        </CarSelectionContextProvider>
      </div>
    </>
  );
}

export default App;
