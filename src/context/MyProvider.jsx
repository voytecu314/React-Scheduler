import MyContext from './MyContext.js';
import {days} from '../data/days.js'

const MyProvider = ({ children }) => {

    return  <MyContext.Provider value={{days}}>
                {children}
            </MyContext.Provider>
}

export default MyProvider;