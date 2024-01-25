import baseAxios from "../configs/base.axios";
class ApiService {
  async getAll(endpoint: string): Promise<any> {
    try {
      return await baseAxios.get(endpoint);
    } catch (error) {
      alert("Lỗi trong quá trình xử lý");
      throw error;
    }
  }
}
export default ApiService;
