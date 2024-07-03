// khởi tạo 1 nút setting giúp người dùng mở ra các profile hay logout
import React, { useState } from "react";
import classNames from "classnames/bind";
import Styles from "./setting.module.scss";
import { Link } from "react-router-dom";
import AuthService from "~/core/services/auth.service.tsx";

const cx = classNames.bind(Styles);

function Setting() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        const {access_token} = JSON.parse(localStorage.getItem("token"));
        if (!access_token) {
            return;
        }
        localStorage.removeItem("token");
        const authService = new AuthService();
        authService.logout(access_token);
        window.location.href = "/";
    };

    return (
        <div className={cx("setting")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={cx("setting-icon")}>{/* Add your setting icon here */}</div>
            {showDropdown && (
                <div className={cx("dropdown")}>
                    <Link to="/profile" className={cx("dropdown-item")}>
                        Profile
                    </Link>
                    <Link to="/settings" className={cx("dropdown-item")}>
                        Settings
                    </Link>
                    <Link onClick={handleLogout} to="/logout" className={cx("dropdown-item")}>
                        Logout
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Setting;
