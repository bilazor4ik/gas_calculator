import HeroSection from "./components/HeroSection";
import InputForm from "./components/InputForm";

function App() {
  return (
    <>
<div className="min-h-screen bg-gray-900 pt-24">



<HeroSection/>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl pt-8">

        <InputForm/>
      </div>
    </div>
</div>

    </>
  );
}

export default App;
