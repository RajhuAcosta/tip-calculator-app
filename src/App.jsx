// import './App.css'

import { useEffect, useState } from 'react';
import LabelComponent from './components/LabelComponent';
import TipButtonComponent from './components/TipButtonComponent';
import TipResultComponent from './components/TipResultComponent';

function App() {
  const [billValue, setBillValue] = useState(0);
  const [tipPorcent, setTipPorcent] = useState(0);
  const [numberPeople, setNumberPeopleValue] = useState(0);
  const [buttonResetOnAppearance, setButtonResetOnAppearance] =
    useState(false);
  const [showCannotBeZeroBill, setShowCannotBeZeroBill] = useState(false);
  const [showCannotBeZeroPorcent, setShowCannotBeZeroPorcent] =
    useState(false);
  const [showCannotBeZeroNumberPeople, setShowCannotBeZeroNumberPeople] =
    useState(false);
  const [resultAmount, setResultAmount] = useState(0);
  const [resultTotal, setResultTotal] = useState(0);
  const resetValues = () => {
    setBillValue(0);
    setTipPorcent(0);
    setNumberPeopleValue(0);
  };
  const handleTipButton = (value) => {
    setTipPorcent(value);
  };
  const handleBillChange = (event) => {
    setBillValue(parseFloat(event.target.value));
  };
  const handleCustomClick = (event) => {
    event.target.value = '';
  };
  const handleCustomChange = (event) => {
    setTipPorcent(parseFloat(event.target.value));
  };
  const handleNumPeopleChange = (event) => {
    setNumberPeopleValue(parseInt(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (billValue || tipPorcent || numberPeople) {
      setButtonResetOnAppearance(true);
    }
    if (!billValue && !tipPorcent && !numberPeople) {
      setButtonResetOnAppearance(false);
    }
    if (!billValue && tipPorcent) {
      setShowCannotBeZeroBill(true);
    }
    if (!billValue && numberPeople) {
      setShowCannotBeZeroBill(true);
    }
    if (billValue) {
      setShowCannotBeZeroBill(false);
    }
    if (billValue && numberPeople && !tipPorcent) {
      setShowCannotBeZeroPorcent(true);
    }
    if (tipPorcent) {
      setShowCannotBeZeroPorcent(false);
    }
    if (!numberPeople && tipPorcent) {
      setShowCannotBeZeroNumberPeople(true);
    }
    if (!numberPeople && billValue) {
      setShowCannotBeZeroNumberPeople(true);
    }
    if (numberPeople) {
      setShowCannotBeZeroNumberPeople(false);
    }
    if (billValue && tipPorcent && numberPeople) {
      const amount = Number(
        (billValue * tipPorcent) / 100 / numberPeople
      ).toFixed(2);
      setResultAmount(amount);
      console.log(amount); //* : MUESTRAN RESULTADOS
      const total = Number(billValue / numberPeople + +amount).toFixed(2);
      setResultTotal(total);
      console.log(total); //* : MUESTRAN RESULTADOS
    }
    console.log(billValue, tipPorcent, numberPeople);
  }, [billValue, tipPorcent, numberPeople]);

  return (
    <main className="min-h-screen font-['Space_Mono'] bg-[hsl(185,41%,84%)] grid justify-center">
      <div className="max-w-[375px] lg:max-w-[930px]">
        <picture className="">
          <img
            className="mx-auto pt-[50px] 1.5xl:pt-40 pb-10 1.5xl:pb-[90px]"
            src="/logo/logo.svg"
            alt=""
          />
        </picture>
        <form className="bg-white rounded-t-3xl lg:rounded-3xl overflow-auto px-8 lg:pl-14 lg:pr-10 lg:pt-10 py-8 lg:grid lg:grid-cols-2 lg:gap-14">
          <section>
            <LabelComponent
              validation={showCannotBeZeroBill}
              onChange={handleBillChange}
              icon={'dollar'}
              heading={'Bill'}
              resetValue={resetValues}
            />
            <div className="mt-6 mb-8 relative">
              <h3 className="text-[hsl(186,14%,43%)] pb-1">
                Select Tip %
              </h3>
              <div className="grid grid-cols-2 grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 gap-[16px] mt-3 mb-8">
                <TipButtonComponent
                  handleTipButton={handleTipButton}
                  value={5}
                />
                <TipButtonComponent
                  handleTipButton={handleTipButton}
                  value={10}
                />
                <TipButtonComponent
                  handleTipButton={handleTipButton}
                  value={15}
                />
                <TipButtonComponent
                  handleTipButton={handleTipButton}
                  value={25}
                />
                <TipButtonComponent
                  handleTipButton={handleTipButton}
                  value={50}
                />
                <input
                  onClick={handleCustomClick}
                  onChange={handleCustomChange}
                  placeholder="Custom"
                  className="outline-[hsl(172,67%,45%)] rounded-md bg-[hsl(189,41%,97%)] focus:text-[hsl(183,100%,15%)] placeholder:text-[hsl(186,14%,43%)] text-center text-2xl focus:text-end focus:pr-4 focus:placeholder:invisible"
                  type="number"
                />
                {showCannotBeZeroPorcent ? (
                  <p className="absolute top-0 right-0 text-[#ef7264] border-b-2 border-[#ef7264]">
                    Can't be zero
                  </p>
                ) : (
                  <></>
                )}
              </div>
              <LabelComponent
                validation={showCannotBeZeroNumberPeople}
                onChange={handleNumPeopleChange}
                icon={'person'}
                heading={'Number of People'}
                resetValue={resetValues}
              />
            </div>
          </section>
          <section className="bg-[hsl(183,100%,15%)] -mx-2 px-6 lg:px-10 -mt-2 pt-7 lg:pt-10 pb-6 rounded-2xl grid 1.5xl:flex 1.5xl:flex-col 1.5xl:gap-2">
            <TipResultComponent
              heading={'Tip Amount'}
              result={resultAmount}
            />
            <TipResultComponent heading={'Total'} result={resultTotal} />
            <button
              onSubmit={handleSubmit}
              className={`outline-none w-full mt-4 pt-3 pb-2 rounded-md max-h-[48px] lg:flex-1 lg:mt-32 ${
                buttonResetOnAppearance
                  ? 'bg-[hsl(172,67%,45%)]'
                  : 'bg-[rgb(43,114,118)]'
              } hover:bg-[hsl(185,41%,84%)] text-[hsl(183,100%,15%)] text-xl`}
            >
              RESET
            </button>
          </section>
        </form>
      </div>
    </main>
  );
}

export default App;
