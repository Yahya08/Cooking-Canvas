import { useLocation } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import DasboardNavbarComponent from './components/DashboardNavbar'; // Pastikan import ini sudah benar
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Recipe from './pages/Recipe';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import DasboardAdmin from './pages/DasboardAdmin';
import DasboardTambahResep from './pages/DasboardTambahResep';
import DashboardPermintaanResep from './pages/DasboardPermintaanResep';
import DasboardEditResep from './pages/DasboardEditResep';
import RecipeDetailPage from './pages/RecipeDetailPage';

function App() {
  const location = useLocation();

  // Check if the current path starts with "/dashboard"
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {isDashboard ? <DasboardNavbarComponent /> : <NavbarComponent />}

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/recipe" Component={Recipe} />
        <Route path="/aboutus" Component={Aboutus} />
        <Route path="/signin" Component={Signin} />
        <Route path="/contact" Component={Contact} />
        <Route path="/signup" Component={Signup} />
        <Route path="/dashboardadmin" Component={DasboardAdmin} />
        <Route path="/dashboardtambahresep" Component={DasboardTambahResep} />
        <Route path="/dashboardpermintaanresep" Component={DashboardPermintaanResep} />
        <Route path="/dashboardeditresep" Component={DasboardEditResep} />
        <Route path="/recipedetailpage" Component={RecipeDetailPage} />
      </Routes>

      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
