import {BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout";
import UsersLayout from "./Layout/UsersLayout";
import Login from "./Page/Admin/Login";
import Home from "./Page/Users/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<UsersLayout />} >
      <Route index element={<Home />} />
    </Route>
    
    <Route path="/admin" element={ <Navigate to ="/admin/login" />} />

    <Route path="/admin" element={<AdminLayout />} >
     <Route  path="login/" element={<Login />} />
    </Route>


    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
