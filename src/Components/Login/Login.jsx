import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  console.log("Mail:", email);
  console.log(user);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setEmail(result.user.email);
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
      });
    console.log("Clicked the button.");
  };

  const handelGithubLogin = ()=> {
    signInWithPopup(auth,githubProvider)
    .then(result => {
        setUser(result.user); 
        setEmail(result.user.email);
    })
    .catch(err=> {
        console.log(err);
        setUser(null);
        setEmail(null)
    })
  }


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   console.log(user.photoURL);
  return (
    <div className="container flex justify-center mt-24">
      {user && (
        <div className="space-y-2">
          <p>Name: {user && user.displayName}</p>
          <p>Email: {user && user.email}</p>
        </div>
      )}

      <div className="flex gap-5 mt-24">
        {user ? (
          <button onClick={handleSignOut} className="btn btn-primary">
            Sign Out
          </button>
        ) : (
          <div className="flex gap-6">
            <button onClick={handleGoogleSignIn} className="btn btn-primary ">
              Login with Google
            </button>
            <button onClick={handelGithubLogin} className="btn btn-primary">Login with Github</button>
          </div>
        )}
      </div>
      {user && (
        <div>
          <img src={user.photoURL} alt="photo" />
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
