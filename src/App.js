import logo from './logo.svg';
import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

import initilizeauthentication from './Firebase/firebase.initialize'
import { useState } from 'react';
initilizeauthentication();
const provider = new GoogleAuthProvider();
const gitprovader = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({})
  const hanldleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const logedInuser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(logedInuser);
      }
      )

      .catch(error => {

      })
  }
  // const [user, setUser] = useState({});

  // git hub sign in 
  const handleGitSignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, gitprovader)
      .then(result => {
        const { displayName,photoURL } = result.user;

        const logedgituserinfo = {
          name: displayName,
          photo : photoURL
        }
        setUser(logedgituserinfo)
      })

  }
  return (
    <div className="App">
      <button onClick={hanldleGoogleSignIn}>
        Google Sign In
      </button>


      <button onClick={handleGitSignin}>
        Github Sing In
      </button>
      <br />
      {
        user.email && <div>
          <h1>
            welcome {user.name}
          </h1>

          <p>
            Email : {user.email}
          </p>
        </div>
      }


      <br />

      {user.name && <p>
        {user.name}
      </p>
      }
    </div>
  );
}

export default App;
