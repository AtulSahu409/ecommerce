import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"

import {reducer as collection} from "./Collection/reducer"
import {reducer as Product} from "./Products/reducer"
import {reducer as User} from "./UserSignup/reducer"
import {reducer as Wishlist} from "./Wishlist/reducer"


import thunk from "redux-thunk"

const rootReducer =combineReducers({collection,Product,User,Wishlist})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export {store};
