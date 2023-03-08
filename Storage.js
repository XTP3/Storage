export default class Storage {
    static prefix = "";

    static cacheExists(key) {
        return typeof(window.sessionStorage.getItem(this.prefix + key)) !== "object";
    }

    static storeExists(key) {
        return typeof(window.localStorage.getItem(this.prefix + key)) !== "object";
    }

    static cache(key, value) {
        window.sessionStorage.setItem(this.prefix + key, value);
    }

    static store(key, value) {
        window.localStorage.setItem(this.prefix + key, value);
    }

    static getCache(key) {
        return window.sessionStorage.getItem(this.prefix + key);
    }

    static getStore(key) {
        return window.localStorage.getItem(this.prefix + key);
    }

    static deleteCache(key) {
        window.sessionStorage.removeItem(this.prefix + key);
    }

    static deleteStore(key) {
        window.localStorage.removeItem(this.prefix + key);
    }
}
