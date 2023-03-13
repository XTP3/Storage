# Storage
A simple engine for easy browser-storage interaction.

## Usage

### Setting
##### Session Storage
```Storage.cache("key", cacheData);```

##### Local Storage
```Storage.store("key", storeData);```

### Getting
```Storage.getStorage("key");```

```Storage.getCache("key");```

### Deleting
```Storage.deleteStore("key");```

```Storage.deleteCache("key");```

### Checking
```Storage.storeExists("key");```

```Storage.cacheExists("key");```
