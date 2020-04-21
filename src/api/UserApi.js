import Api from "./Api";

class UserApi {
    
    getCurrentUser () {
        return Api.get('/users/current');
    }

    updateCurrentUserBalance (balance) {
        return Api.put('/users/'+balance+'/set');
    }

}

export default new UserApi();