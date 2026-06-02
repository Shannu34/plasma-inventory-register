import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import PlasmaRegister from "./pages/PlasmaRegister";
import MonthlySummary from "./pages/MonthlySummary";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/plasma-register"
            element={<PlasmaRegister />}
          />

          <Route
            path="/monthly-summary"
            element={<MonthlySummary />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

        </Routes>

      </Layout>

    </BrowserRouter>
  );
}

export default App;