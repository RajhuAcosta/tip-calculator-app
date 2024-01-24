const LabelComponent = ({ validation, onChange, icon, heading }) => {
  return (
    <div
      className="relative pb-2.5
    "
    >
      <h3 className="text-[hsl(186,14%,43%)] pb-2">{heading}</h3>
      <label className="relative" htmlFor="">
        <input
          placeholder={'0'}
          step="any"
          onChange={onChange}
          className={`${
            validation
              ? 'border-2 border-red-600'
              : 'outline-[hsl(172,67%,45%)]'
          } rounded-md w-full h-11 pr-4 bg-[hsl(189,41%,97%)] text-[hsl(183,100%,15%)] text-2xl text-end`}
          type="number"
        />
        <img
          className="absolute top-0.5 left-5"
          src={`/icons/icon-${icon}.svg`}
          alt=""
        />
      </label>
      {validation ? (
        <p className="absolute top-0 right-0 text-[#ef7264]">
          Can't be zero
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
export default LabelComponent;
