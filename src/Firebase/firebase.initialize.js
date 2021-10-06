import { getDefaultNormalizer } from '@testing-library/dom';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.cofig';


const initilizeauthentication = () => {
    initializeApp(firebaseConfig)
}
export default initilizeauthentication;


// const analytics = getAnalytics(app);