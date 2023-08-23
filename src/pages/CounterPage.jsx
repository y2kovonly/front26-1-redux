import { useDispatch, useSelector } from "react-redux";
import { increaseCounter } from "../main";

const CounterPage = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({ type: "INCREASE_COUNTER", payload: 3 });
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
        <button className="w-8 bg-slate-300 px-2 py-1 rounded-md">-</button>
        <span>{counter}</span>
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
