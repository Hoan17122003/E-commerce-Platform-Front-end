import * as axios from "axios";
import api from "./api.tsx";

class AccountService {
    constructor() {}

    async getProfile() {
        const reponse = await api.get("/account/profile");
    }
}
