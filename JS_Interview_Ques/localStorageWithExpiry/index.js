window.localStorageWithExpiry = {
  setItem: function (key, value, expiry) {
    let result = {
      value,
      expiry: expiry + Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(result));
  },
  getItem: function (key) {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);

    if (data.expiry <= Date.now()) {
      localStorage.removeItem(key);
      return null;
    }
    return data.value;
  },
};

localStorageWithExpiry.setItem("abc", "pqr", 2000);

setTimeout(() => {
  console.log(localStorageWithExpiry.getItem("abc"));
}, 1500);

setTimeout(() => {
  console.log(localStorageWithExpiry.getItem("abc"));
}, 5000);
