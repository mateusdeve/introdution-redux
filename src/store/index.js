import {configureStore} from '@reduxjs/toolkit'
import login from './login'

const reducer = {
  login
}
const store = configureStore({reducer});

export default store;