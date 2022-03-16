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

// import Dashboard from "@pages/Dashboard";
import ListUser from "@app/pages/listUsers";
import Profile from "@pages/profile/Profile";
import GameInfoSub1 from './pages/gameInfoManager/GameInfoSub1';
import ManagePlayer from './pages/managePlayer';

import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import CreateTypeUser from "./pages/createTypeUser";
import DetailUser from "./pages/detailUser";
import ManagerUser from "./pages/managerUser";
import DetailPlayer from './pages/detailPlayer';
import CreateUser from './pages/createUser';

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
          <Route path="/nguoi-dung" element={<ListUser />} />
          <Route path="/kieu-nguoi-dung" element={<ManagerUser />} />
          <Route path="/gameinfo-manager-sub1" element={<GameInfoSub1 />} />
          <Route path="/gameinfo-manager-sub2" element={<GameInfoSub1 />} />
          <Route
            path="/kieu-nguoi-dung/tao-nguoi-dung"
            element={<CreateUser />}
          />
          <Route
            path="/kieu-nguoi-dung/tao-kieu-nguoi-dung"
            element={<CreateTypeUser />}
          />
          <Route
            path="/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung"
            element={<DetailUser />}
          />
          <Route path="/nguoi-choi" element={<ManagePlayer />} />
          <Route
            path="/nguoi-choi/chi-tiet-nguoi-choi"
            element={<DetailPlayer />}
          />
          <Route path="/nghi-van-vi-pham" element={<div>something here</div>} />
          <Route path="/blank" element={<ListUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<ListUser />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
