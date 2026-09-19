import { Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import TokenPage from '../pages/TokenPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<LoginPage />} 
      />

      <Route
        path="/token"
        element={<TokenPage />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;