const callCachedApi = (timer) => {
  let cache = {};
  return async function (url, config = {}) {
    let key = `${url}${JSON.stringify(config)}`;
    const entry = cache[key];
    if (!entry || Date.now() > entry.expiry) {
      try {
        console.log("New Api Call");

        let resp = await fetch(url, config);
        resp = await resp.json();
        cache[key] = {value: resp, expiry: Date.now() + timer};
      } catch {
        (e) => console.log(e);
      }
    }
    return cache[key].value;
  };
};

const call = callCachedApi(1500);
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log(a)
);
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 800);


//New Api Call
// setTimeout(() => {
//   call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
//     console.log(a)
//   );
// }, 2000);