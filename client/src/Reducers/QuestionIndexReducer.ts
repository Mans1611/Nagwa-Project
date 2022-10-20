
interface actions {
    type : string,
    payload : object
}
interface state {
    index:Number
}
export const initialIndexState:state = {index:0}

export const reducerIndexFunction = (state : state  ,action:actions)=>{
    switch(action .type ){
        case "INCREMENT" : 
            return {index : ((state as state).index as number) + 1};
           
        case "DECREMENT" : 
            return {index : ((state as state).index as number) - 1};
        case "PICKED_QUESTION" : 
            return {index : action.payload};
    }
}

