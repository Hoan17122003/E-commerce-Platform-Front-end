import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Styles from "./header.module.scss";
import Search from "../search/search";
import Setting from "~/components/layout/components/setting/setting";

import { publicRoutes } from "../../../../routes/index.router";
import Test from "../../../../core/services/test.jsx";
import Productservice from "../../../../core/services/product.service.tsx";
import { useEffect } from "react";

const cx = classNames.bind(Styles);
function Header({ dissableSignUp_login }) {
    const token = localStorage.getItem("token");

    // useEffect(() => {

    // }, [token]);

    return (
        <Fragment>
            <div className={cx("header")}>
                <Link to="/" className={cx("logo")}>
                    <img src="../../../assets/logo.png" alt="logo" />
                </Link>
                {dissableSignUp_login ? (
                    <Fragment>
                        <div className={cx("title")}>Đăng nhập</div>
                        <a target="_blank" href="/hoanha-ecommerce-platform/help" className={cx("help")}>
                            Bạn cần giúp đỡ?
                        </a>
                    </Fragment>
                ) : (
                    <Fragment>
                        <hr className={cx("custom-divider")}></hr>
                        <div className={cx("container")}>
                            <Search />
                            <ul className={cx("items")}>
                                <li className="item">fill categories</li>
                                <li className="item">navbar</li>
                            </ul>
                        </div>
                        <hr className={cx("custom-divider")}></hr>
                        {token ? (
                            <Setting />
                        ) : (
                            <div className={cx("signup_login")}>
                                <div className={cx("signup")}>
                                    <Link className={cx("signup-achor")} to="Account/Signuplocal">
                                        sign up
                                    </Link>
                                </div>
                                <div className={cx("login")}>
                                    <Link className={cx("login-achor")} to="Auth/login/local">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Fragment>
                )}
            </div>
        </Fragment>
    );
}

export default Header;
