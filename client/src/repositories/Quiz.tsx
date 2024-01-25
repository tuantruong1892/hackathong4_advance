import ApiService from "../api/apiServices";

class Quizzepository {
private apiService:any;
constructor() {
    this.apiService=new ApiService
}
async getAll() {
    return await this.apiService.get("api/v1/category")
}
}
export default Quizzepository