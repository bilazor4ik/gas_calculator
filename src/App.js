
import { CarSelectorContextProvider } from "./CarSelectorContext";
import { DarkModeContextProvider } from "./context/DarkModeContext";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="dark:bg-gray-900 bg-gray-200 transition-all duration-300 min-h-screen overflow-hidden relative ">

        <DarkModeContextProvider>
          <CarSelectorContextProvider>
            <Home />
          </CarSelectorContextProvider>
        </DarkModeContextProvider>
      </div>
    </>
  );
}

export default App;
