import api from "./api.tsx";
import axios from "axios";

class AuthService {
    async login(username: string, password: string) {
        const response = await api.post("/Auth/login/local", {
            TenDangNhap: username,
            MatKhau: password,
        });

        return response;
    }

    async logout(access_token: string) {
        try {
            const response = await api.post(
                "/Auth/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            );
            console.log(response.data, response.status);
            return response;
        } catch (error) {
            console.error("Error logging out:", error);
            if (axios.isAxiosError(error) && error.response) {
                console.error("Error response data:", error.response.data);
            }
            throw error;
        }
    }
}
export default AuthService;
