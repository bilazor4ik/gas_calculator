import { Route, Routes } from "react-router-dom";
import SharedStepsHeader from "./components/SharedStepsHeader";

import { CarSelectionContext, CarSelectionContextProvider } from "./context/CarSelectionContext";
import { SelectionStepsContextProvider } from "./context/SelectionStepsContext";
import { StartedContextProvider } from "./context/StartedContext";
import Final from "./pages/Final";
import Home from "./pages/Home";
import SelectMake from "./pages/SelectMake";
import SelectModel from "./pages/SelectModel";
import SelectOptions from "./pages/SelectOptions";
import SelectYear from "./pages/SelectYear";

function App() {
  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto ">


        <CarSelectionContextProvider>
          <StartedContextProvider>
            <SelectionStepsContextProvider>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<SharedStepsHeader />}>
                  <Route path='selectYear' element={<SelectYear />} />
                  <Route path='selectMake' element={<SelectMake />} />
                  <Route path='selectModel' element={<SelectModel />} />
                  <Route path='selectOptions' element={<SelectOptions />} />
                  <Route path='final' element={<Final />} />

                </Route>


              </Routes>
            </SelectionStepsContextProvider>
          </StartedContextProvider>
        </CarSelectionContextProvider>
      </div>
    </>
  );
}

export default App;
