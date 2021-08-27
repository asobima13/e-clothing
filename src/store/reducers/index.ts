import { combineReducers } from "redux"
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import directoryReducer from './directoryReducer'
import shopReducer from './shopReducer'
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export default persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof reducers>