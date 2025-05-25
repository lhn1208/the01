import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount, reset} from '../features/counterSlice';

const Counter = () => {
   const count = useSelector((state) =>state.counter.value);
   const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
         <button onClick={()=> dispatch(increment())}>+</button>
         <button onClick={()=> dispatch(decrement())}>-</button>
         <button onClick={()=> dispatch(incrementByAmount(5))}>+5</button>
         <button onClick={()=> dispatch(reset())}>reset</button>
      </div>
    </div>
  )
}

export default Counter