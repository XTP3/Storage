export default class Storage {
    static prefix = "";

    static cacheExists(key) {
        return window.sessionStorage.getItem(this.prefix + key) !== null;
    }

    static storeExists(key) {
        return window.localStorage.getItem(this.prefix + key) !== null;
    }

    static cache(key, value) {
        window.sessionStorage.setItem(this.prefix + key, value);
    }

    static store(key, value) {
        window.localStorage.setItem(this.prefix + key, value);
    }

    static getCache(key) {
        return this.cacheExists(this.prefix + key) ? window.sessionStorage.getItem(this.prefix + key) : false;
    }

    static getStore(key) {
        return this.storeExists(this.prefix + key) ? window.localStorage.getItem(this.prefix + key) : false;
    }

    static deleteCache(key) {
        window.sessionStorage.removeItem(this.prefix + key);
    }

    static deleteStore(key) {
        window.localStorage.removeItem(this.prefix + key);
    }
}
