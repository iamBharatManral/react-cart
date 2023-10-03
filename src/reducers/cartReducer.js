export const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ADD':
            return {
                ...state,
                items: state.items.map(item =>  {
                    if(item.name === payload.name)
                        return {...item, quantity: item.quantity + 1}
                    return item
                }),
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + payload.price
            }
        case 'REMOVE':
            if(payload.count === 0)
                return {
                    ...state,
                    items: state.items.filter(item => !(item.name === payload.name)),
                    totalItems: state.totalItems - state.items.filter(item => (item.name === payload.name))[0].quantity,
                    totalPrice: state.totalPrice - payload.price
                }
            else if(payload.count === -1)
                if(state.items.filter(item => item.name === payload.name)[0].quantity === 1)
                    return {
                        ...state,
                        items: state.items.filter(item => !(item.name === payload.name)),
                        totalItems: state.totalItems - state.items.filter(item => (item.name === payload.name))[0].quantity,
                        totalPrice: state.totalPrice - payload.price
                    }
                else
                    return {
                        ...state,
                        items: state.items.map(item => {
                            if(item.name === payload.name)
                                return {...item, quantity: item.quantity - 1}
                            return item
                        }),
                        totalItems: state.totalItems - 1,
                        totalPrice: state.totalPrice - payload.price
                    }
                break;
        case 'CLEAR':
            return {
                items: [],
                totalPrice: 0,
                totalItems: 0
            }
        default:
            return state;
    }
}
