import Api from "./Api";
class ToysApi {
    getAllToys() {
        return Api.get('/toys');
    }
    getToyByName(name) {
        return Api.get('/toys?name='+name);
    }
    getToyById(id) {
        return Api.get('/toys/'+id);
    }
    createPost(toy,header) {
        return Api.post('/toys', toy, header);
    }
    updateToy(toy) {
        return Api.put('/toys', toy);
    }
    deleteToy(id) {
        return Api.delete('/toys/'+id);
    }
    buyToy(id) {
        return Api.post('/toys/'+id+'/buy');
    }
}

export default new ToysApi();