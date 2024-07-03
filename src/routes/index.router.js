import Home from "../pages/Home/home";
import Login from '~/pages/Login/login.jsx';
import SignUp from '~/pages/signup/signup.jsx';

export const publicRoutes = [
    {
        path: '/Auth/login/local',
        component: Login,
        layout: Login
    },
    {
        path: '/Account/Signuplocal',
        component: SignUp,
        layout: SignUp
    },
    {
        path: "/",
        component: Home,
    },

    // { path: "auth/login", component: "render login page" },
    // { path: "" },
];
