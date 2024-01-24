const TipResultComponent = ({ heading, result }) => {
  return (
    <div className="flex justify-between my-2.5 lg:my-5">
      <div>
        <h4 className="text-[hsl(189,41%,97%)] text-[15.5px]">
          {heading}
        </h4>
        <h5 className="text-[hsla(189,41%,97%,0.425)] text-[13px]">
          / person
        </h5>
      </div>
      {result ? (
        <h2 className="text-[hsl(172,67%,45%)] text-[32px] lg:text-5xl">
          ${result}
        </h2>
      ) : (
        <h2 className="text-[hsl(172,67%,45%)] text-[32px] lg:text-5xl">
          $0.00
        </h2>
      )}
    </div>
  );
};
export default TipResultComponent;
