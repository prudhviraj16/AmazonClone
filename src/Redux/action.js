export const FETCH_ITEMS_ADD = 'FETCH_NEWS_ADD'
export const FETCH_ITEMS_REMOVE = 'FETCH_ITEMS_REMOVE'


export const fetchItemsAdd = (item) => ({
    type : FETCH_ITEMS_ADD,
    payload : item
})

export const fetchItemsRemove = (id) => ({
    type : FETCH_ITEMS_REMOVE,
    payload : id
})