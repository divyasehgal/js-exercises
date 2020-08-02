let names = ["rahul", "ranbir", "raj"];
names.map((test) => {
  console.log(test);
});

let a = [3, 5, 7, 9, 1];
a.map((test) => {
  console.log(test);
});

let numbers = [1, 3, 4, 5, 6, 6];
numbers.map((count) => {
  console.log(count);
});

const getHRZApigeeLogin = async arr => {
  const requests = arr.map(result => {
    const username = result.username;
    return hrzAdapters
      .login({
        cookie: result.val,
      })
      .then(res => {
        const body = JSON.stringify(res.body);
        const statusCode = res.status;
        const url = res.req.path;
        return {
          username,
          body,
          statusCode,
          url,
        };
      });
  });
