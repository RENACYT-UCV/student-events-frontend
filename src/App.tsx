import React from 'react';
import HeaderBar from './components/HeaderBar';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import RecoverAccountScreen from './components/RecoverAccountScreen';
import ResetPasswordScreen from './components/ResetPasswordScreen';
import { Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/recover-account" element={<RecoverAccountScreen />} />
        <Route path="/reset-password/:token" element={<ResetPasswordScreen />} />
      </Routes>
    </div>
  );
}

export default App;