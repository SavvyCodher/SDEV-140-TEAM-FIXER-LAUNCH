import {useState, useEffect} from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

//implement custom hook, store user state and keep track of wheter we have loaded the user or not 
const useUser = () => {
    const [user, setUser] = useState(null);                //initial value null this is when user is not logged in
    const [isLoading, setIsLoading] = useState(true);  //initial value true helps determine is logged in

    //can use subscribe within firebase to know what the current user is, helps to keep if we have already loaded
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoading(false);
        });
    
    return unsubscribe;
}, []);

return {user, isLoading}  //make sure components can access them by returning these values 

}
 
export default useUser;