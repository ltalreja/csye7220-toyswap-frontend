import Api from "./Api";

class PurchasedApi{

    getPurchasedToys(){
        return Api.get('/purchasedtoys'); 
    }
}

export default new PurchasedApi();