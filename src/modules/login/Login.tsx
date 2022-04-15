/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useFormik} from "formik";
import {loginUser} from "@store/reducers/auth";
import {Checkbox, Button} from "@components";
import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {setWindowClass} from "@app/utils/helpers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Yup from "yup";

import {Form, InputGroup} from "react-bootstrap";
import {checkPermission, getDataProfile} from "@app/utils";
import {PermissionI} from "@app/utils/types";
import MetaxyLogo from "../../static/images/logo_metaxy.svg";
import * as AuthService from "../../services/auth";
import {MENU} from "../main/menu-sidebar/MenuSidebar";

const Login = () => {
  const [isAuthLoading, setAuthLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      setAuthLoading(true);
      const response = await AuthService.login(email, password);
      console.log(
        "🚀 ~ file: Login.tsx ~ line 29 ~ login ~ response",
        response
      );
      toast.success("Login is succeed!");
      setAuthLoading(false);
      dispatch(loginUser(response));
      // check permissions
      // eslint-disable-next-line no-debugger
      const data: any = await getDataProfile();
      const dataPer: PermissionI[] = data?.roles
        .map((item: any) => item.permissions)
        .flat(2);
      const arrPer = Array.from(new Set(dataPer)).map((item) => item.feature);
      const menu = MENU.find((item: any) =>
        checkPermission(arrPer, item.permission)
      );
      if (!menu || (!menu.path && !menu.children.length)) {
        navigate("/");
      } else if (menu.path) {
        navigate(menu.path);
      } else {
        navigate(menu.children[0].path);
      }
    } catch (error: any) {
      setAuthLoading(false);
      toast.error(error.message || "Failed");
    }
  };

  const {handleChange, values, handleSubmit, touched, errors} = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email của bạn không đúng định dạng. Vui lòng thử lại !")
        .required("Vui lòng nhập email của bạn!"),
      password: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(30, "Must be 30 characters or less")
        .required("Vui lòng nhập mật khẩu của bạn!")
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    }
  });

  setWindowClass("hold-transition login-page");

  return (
    <div className="login-box">
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <div className="card-logo">
            <img src={MetaxyLogo} alt="" />
          </div>
          <Link to="/" className="h1 card-header-name">
            <span className="branch-name">METAXY</span>
            <span>Admin</span>
          </Link>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Đăng nhập</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                />
                {touched.email && errors.email ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                ) : (
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                  </InputGroup.Append>
                )}
              </InputGroup>
            </div>
            <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                />
                {touched.password && errors.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : (
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                  </InputGroup.Append>
                )}
              </InputGroup>
            </div>

            <div className="mb-3">
              <Checkbox type="icheck" checked={false}>
                Duy trì đăng nhập
              </Checkbox>
            </div>
            <Button block type="submit" isLoading={isAuthLoading}>
              Đăng nhập
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
