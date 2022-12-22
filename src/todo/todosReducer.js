const initialState = [
    {
        id: 1,
        text: 'A'
    },
    {
        id: 2,
        text: 'B'
    },
    {
        id: 3,
        text: 'C'
    },
]

export default function todosReducer(state = initialState,action){
    console.log(action);

    switch (action.type) {
        case 'add' : {
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text
                }
            ]
        }
        default:
            return state
    }
}