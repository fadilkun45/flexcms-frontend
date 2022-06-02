import {BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout";
import UsersLayout from "./Layout/UsersLayout";
import CreateArticle from "./Page/Admin/CreateArticle";
import Dashboard from "./Page/Admin/Dashboard";
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
    <Route  path="/admin/login" element={<Login />} />

    <Route path="/admin" element={<AdminLayout />} >
     <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
     <Route path="create" element={<PrivateRoute><CreateArticle /></PrivateRoute>} />
    </Route>


    </Routes>
    
    </BrowserRouter>
  );
}

const PrivateRoute = ({children}) => {
  const isLogin = localStorage.getItem('logins')

  if(isLogin){
    return children
  }else{
    return  <Navigate to ="/admin/login" replace/>
  }
}



export default App;
