

const CounterReducer = (state,action) => {
    switch(action){
        case 'INCREMENT':
            return state + 1;
        default:
            return 0;
    }
}
export default CounterReducer;