//store the original fetch
const originalFetch = window.fetch;

// request interceptor
// perform all the pre-request actions
window.requestInterceptor = (args) => {
  // your action goes here
  return args;
};

// response interceptor
// perform all the post-response actions
window.responseInterceptor = (response) => {
  // your actions goes here
  return response.json();
};

// over-ride the original fetch
window.fetch = async (...args) => {
  // request interceptor
  // pass the args to request interceptor
  args = requestInterceptor(args);

  // pass the updated args to fetch
  let response = await originalFetch(...args);

  // response interceptor
  // pass the response to response interceptor
  response = responseInterceptor(response);

  // return the updated response
  return response;
};

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
  console.log(response)
);

//Output
// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }