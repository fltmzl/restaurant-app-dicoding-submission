/* eslint-disable consistent-return */
import { openDB } from "idb";
import CONFIG from "../globals/config";

const { IDB_DATABASE_NAME, IDB_DATABASE_VERSION, IDB_OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(IDB_DATABASE_NAME, IDB_DATABASE_VERSION, {
  upgrade(db) {
    db.createObjectStore(IDB_OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

const FavoriteRestaurantIdb = {
  async getAll() {
    return (await dbPromise).getAll(IDB_OBJECT_STORE_NAME);
  },

  async getById(id) {
    if (!id) return;

    return (await dbPromise).get(IDB_OBJECT_STORE_NAME, id);
  },

  async add(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty("id")) return;

    return (await dbPromise).put(IDB_OBJECT_STORE_NAME, restaurant);
  },

  async deleteById(id) {
    return (await dbPromise).delete(IDB_OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
