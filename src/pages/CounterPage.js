import { useReducer} from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            return{
                ...state,
                count:state.count+1
            };
        case SET_VALUE_TO_ADD:
            return{
                ...state,
                valueToAdd: action.payload
            };
        case DECREMENT_COUNT:
            return{
                ...state,
                count: state.count-1
            }
        case ADD_VALUE_TO_COUNT:
            return{
                ...state,
                count: state.count+state.valueToAdd,
                valueToAdd:0
            }
        default:
            return state;
    }
    // if(action.type === INCREMENT_COUNT){
    //     return{
    //         ...state,
    //         count:state.count+1
    //     };
    // }
    // if(action.type === SET_VALUE_TO_ADD){
    //     return{
    //         ...state,
    //         valueToAdd: action.payload
    //     };
    // }
   
};
function CounterPage({intialCount}) {
    //const [count,setCount] = useState(intialCount);
    //const [valueToAdd, setValueToAdd] = useState(0);
    const[state, dispatch] = useReducer(reducer,{
        count: intialCount,
        valueToAdd: 0,
    });
    console.log(state);
    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
        //setCount(count+1);
    }
    const decrement = () => {
        //setCount(count-1);
        dispatch({
            type: DECREMENT_COUNT
        });
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
        //setValueToAdd(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT
        })
       // setCount(count+valueToAdd);
       // setValueToAdd(0);
    }
    return(
        <Panel className="m-3">
            <h1 className='text-lg'>Count is: {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                value = {state.valueToAdd || ""}
                onChange={handleChange}
                type="number" 
                className="p-1 m-3 bg-gray-50 border border-gray-300"/>
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;