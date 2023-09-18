import CONFIG from "../globals/config";

class RestaurantApi {
  static async getAll() {
    const res = await fetch(`${CONFIG.BASE_URL_API}/list`);
    const data = await res.json();
    return data;
  }
}

export default RestaurantApi;
