 
import { useEffect } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  const LoginUser = async ()=>{
    try {
      const userDetail = {
        email : user.email,
        name : user.name,
        picture : user.picture,
        sub : user.sub
      }
      const userResponse = await fetch("http://localhost:8080/user/register", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(userDetail)
      })
      const userDetails = await userResponse.json()
      console.log(userDetails)
      setTimeout(() => {
        alert(userDetails.msg)
      }, 3000);
    } catch (error) {
      console.log("error: " + error)
      alert("Login Failed !!")
    }
  }

  useEffect(() => {
     if (isAuthenticated) {
       console.log(user);
       console.log(isAuthenticated);
        LoginUser()
     }
  },[isAuthenticated])
 
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="App">
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
