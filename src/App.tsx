import React, { useEffect } from 'react';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@modules/main/Main';
import Login from '@modules/login/Login';
import ForgetPassword from '@modules/forgot-password/ForgotPassword';
import RecoverPassword from '@modules/recover-password/RecoverPassword';
import { useWindowSize } from '@app/hooks/useWindowSize';
import { calculateWindowSize } from '@app/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setWindowSize } from '@app/store/reducers/ui';

import Dashboard from '@pages/Dashboard';
import Blank from '@pages/Blank';
import SubMenu from '@pages/SubMenu';
import Profile from '@pages/profile/Profile';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import CreateTypeUser from './pages/createTypeUser';
import DetailUser from './pages/detailUser';

import ManagePlayer from './pages/managePlayer';


const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const dispatch = useDispatch();

  useEffect(() => {
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      dispatch(setWindowSize(size));
    }
  }, [windowSize]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<PublicRoute />} />
        <Route path="/forgot-password" element={<PublicRoute />}>
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Route>
        <Route path="/recover-password" element={<PublicRoute />}>
          <Route path="/recover-password" element={<RecoverPassword />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Main />}>
            <Route path="/nguoi-dung" element={<Blank />} />
            <Route path="/kieu-nguoi-dung" element={<SubMenu />} />
            <Route
              path="/kieu-nguoi-dung/tao-kieu-nguoi-dung"
              element={<CreateTypeUser />}
            />
            <Route
              path="/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung"
              element={<DetailUser />}
            />
            <Route path="/nguoi-choi" element={<ManagePlayer />} />
            <Route path="/nghi-van-vi-pham" element={<Blank />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
