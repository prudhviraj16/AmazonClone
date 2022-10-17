import { FETCH_ITEMS_ADD, FETCH_ITEMS_REMOVE} from './action'

const initialState = {
    basket : []
}

export const getBasketTotal = (basket)=>{
    return basket.reduce((amount,item)=>item.price+amount,0)
}

const itemsReducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_ITEMS_ADD: 
            return {
                ...state,
                basket :  [...state.basket,action.payload]
            }
       
        case FETCH_ITEMS_REMOVE: 

        const index = state.basket.findIndex((basketItem => basketItem.id === action.payload))

        let newBasket = [...state.basket]
        if(index>=0){
            newBasket.splice(index,1)
        }else{
            console.warn(`Can't remove product (id:${action.payload}) as it's not in the basket`)
        }
            return {
                ...state,
                basket : newBasket
            }
        default : 
            return state 
    }
}

export default itemsReducer