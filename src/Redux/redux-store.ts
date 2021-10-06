import {combineReducers, createStore, Store} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';
import userReducer from './user-reducer';

let rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogPage:DialogsReducer,
    usersPage: userReducer
})
export type RootStateType = ReturnType<typeof rootReducer>
let store: Store = createStore(rootReducer)

export default store;

