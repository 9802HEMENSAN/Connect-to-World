 
import { useEffect } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        alert("Login Successful !!")
      }, 2000);
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
      
 
  },[]);
 
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
