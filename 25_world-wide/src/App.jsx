import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

import CityList from './components/CityList/CityList';
import City from './components/City/City';
import CountryList from './components/CountryList/CountryList';
import Form from './components/Form/Form';
import SpinnerFullPage from './components/SpinnerFullPage/SpinnerFullPage';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const Product = lazy(() => import('./pages/Product/Product'));
const Login = lazy(() => import('./pages/Login/Login'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const AppLayout = lazy(() => import('./pages/AppLayout/AppLayout'));
import './App.css';

const App = () => {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='product' element={<Product />} />
              <Route path='login' element={<Login />} />
              <Route
                path='app'
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to='cities' />} />
                <Route path='cities' element={<CityList />} />
                <Route path='cities/:id' element={<City />} />
                <Route path='countries' element={<CountryList />} />
                <Route path='form' element={<Form />} />
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
};

export default App;
