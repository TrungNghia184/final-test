import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  NavLink,
} from "react-router-dom";

import EntryPage from "./pages/entryPage";
import CustomersPage from "./pages/customersPage";
import AuthRoute from "./components/authRoute";
import NavBar from "./components/navBar";
import CustomerDetail from "./pages/customerDetailPage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <AuthRoute>
              <EntryPage />
            </AuthRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            // <PrivateRoute>
            //   <HomePage restricted={false}/>
            // </PrivateRoute>
            <Navigate to="/customers" replace />
          }
        />
        <Route
          exact
          path="/customers"
          element={
            // <PrivateRoute>
            //   <HomePage restricted={false}/>
            // </PrivateRoute>
            <CustomersPage/>
          }
        />
        <Route
          exact
          path="/customers/:id/details"
          element={
            // <PrivateRoute>
            //   <HomePage restricted={false}/>
            // </PrivateRoute>
            <CustomerDetail/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;


