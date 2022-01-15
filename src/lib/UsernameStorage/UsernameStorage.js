import Cookies from "js-cookie";

export class UsernameStorage {
    static instance = undefined;

    constructor() {
    }

    isUsernameProvided() {
        return Cookies.get("username") !== undefined;
    }

    setUsername(username) {
        Cookies.set("username", username)
    }

    getUsername() {
        let username = Cookies.get("username")
        if (username === undefined) {
            return "";
        }else{
            return username;
        }
    }

    static getInstance() {
        if (UsernameStorage.instance === undefined) {
            UsernameStorage.instance = new UsernameStorage();
        }
        return UsernameStorage.instance;
    }
}