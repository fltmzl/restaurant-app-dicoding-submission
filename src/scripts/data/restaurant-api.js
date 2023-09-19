import CONFIG from "../globals/config";

class RestaurantApi {
  static async getAll() {
    const res = await fetch(`${CONFIG.BASE_URL_API}/list`);
    const data = await res.json();
    return data;
  }

  static async getOneById(id) {
    const res = await fetch(`${CONFIG.BASE_URL_API}/detail/${id}`);
    const data = await res.json();
    return data;
  }
}

export default RestaurantApi;
