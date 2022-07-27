import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

function NavBar(){
    return (
      <div>
        <NavLink
          to="/"

          exact

          style={linkStyles}
 
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
        <NavBar
         to="/message" 
        exact 
        style={linkStyles} 
        activeStyle={{background:"darkblue",}}>Message</NavBar>
        <NavBar 
        to="/signup" 
        exact 
        style={linkStyles} 
        activeStyle={{background:"darkblue"}}>SignUp</NavBar>
      </div>
    );
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}
function Message(){
  return (
    <div>
      <p> This my message, my trial task</p>
    </div>
  );
}

function SignUp(){
  return (
    <div>
      <h1>Sign Up form</h1>
      <form>
        <div>
      <input type="text"name="FirstName" label="First Name" placeholder="FirstName"/>
      </div>
      <div>
      <input type="text"name="LastName" label="Last Name" placeholder="LastName"/>
      </div>
        <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
ReactDOM.render(
  <BrowserRouter>
  <NavBar/>
  <switch>
  <Routes>
    
    <Route path="/" element={<Home />}/>
    
    <Route path="/about" element={<About />}/>
    <Route path="/login" element={<Login />} />
    </Routes>
    <Route path="/message" element={<Message />} />
    <Route path="/signup" element={<SignUp/>} />
    </switch>
  </BrowserRouter>,
  document.getElementById("root")
);