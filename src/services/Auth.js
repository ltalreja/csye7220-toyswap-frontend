import AuthApi from "../api/AuthApi";

const tokenKey = "_token";

class Auth {
    setLoggedIn = () => { };

    isLoggedIn() {
        return this._getToken() != null;
    }

    async login(loginData) {
        return await this._loginOrRegister(AuthApi.authenticate, loginData);
    }

    async register(registrationData) {
        return await this._loginOrRegister(AuthApi.register, registrationData);
    }

    logout() {
        this.setLoggedIn(false);
        this._clearToken();
    }

    bindLoggedInStateSetter(loggedInStateSetter) {
        this.setLoggedIn = loggedInStateSetter;
    }

    getAuthorizationHeader() {
        return "Bearer " + this._getToken();
    }

    async _loginOrRegister(action, data) {
        try {
            const response = await action(data);
            console.log(response.data.token);
            if(action === AuthApi.authenticate){
                this._setToken(response.data.token);
                this.setLoggedIn(true);
            } else{
                this._setToken(null);
            }
            return true;
        } catch (e) {
            console.error(e);

            this.setLoggedIn(false);
            return false;
        }
    }

    _getToken() {
        return window.sessionStorage.getItem(tokenKey);
    }

    _setToken(token) {
        window.sessionStorage.setItem(tokenKey, token);
    }

    _clearToken() {
        window.sessionStorage.removeItem(tokenKey);
    }
}


export default new Auth();