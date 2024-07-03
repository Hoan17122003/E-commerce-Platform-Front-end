import { Fragment, useState } from "react";
import AuthService from "~/core/services/auth.service.tsx";
import { redirectDocument } from "react-router-dom";
import classNames from "classnames/bind";
import Styles from "~/pages/Login/login.module.scss";

import Header from "~/components/layout/components/header/header";

const cx = classNames.bind(Styles);

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const authService = new AuthService();
        const token = await authService.login(username, password);
        console.log("token : ", token.status);
        if (token.status === 201) {
            localStorage.setItem("token", JSON.stringify(token.data));
            return (window.location.href = "/");
        } else {
            alert("Đăng nhập thất bại");
        }
        setUsername("");
        setPassword("");
    };

    return (
        <Fragment>
            <Header dissableSignUp_login={true} searchEngine={false} />
            <div className={cx("container-login")}>
                <form className={cx("login-form")} onSubmit={handleSubmit}>
                    <h3>Trang Đăng Nhập</h3>
                    <div>
                        <label htmlFor="username">username:</label>
                        <input
                            type="text"
                            id={cx("username")}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password:</label>
                        <input
                            type="password"
                            id={cx("password")}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Đăng Nhập</button>
                </form>
            </div>
        </Fragment>
    );
}

export default Login;
