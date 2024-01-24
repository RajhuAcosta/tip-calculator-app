const TipButtonComponent = ({ handleTipButton, value }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => handleTipButton(value)}
        className="outline-none bg-[hsl(183,100%,15%)] focus:bg-[hsl(172,67%,45%)] text-[hsl(189,41%,97%)] focus:text-[hsl(183,100%,15%)] text-2xl px-8 py-2 lg:py-3 lg:px-6 rounded-md"
      >
        {value}%
      </button>
    </>
  );
};
export default TipButtonComponent;
