//console.log('     TASK 1');

function invokeAfterDelay(delay, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = callback();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}

// Приклад використання
invokeAfterDelay(2000, () => Math.floor(Math.random() * 11))
  .then(result => console.log('task 1: ', result))
  .catch(error => console.error('task 1: ', error));


//console.log('     TASK 2');

function produceRandomAfterDelay(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10);
      resolve(randomNum);
    }, delay);
  });
}

Promise.all([
  produceRandomAfterDelay(2000),
  produceRandomAfterDelay(3000),
]).then((results) => {
  const sum = results.reduce((acc, cur) => acc + cur);
  console.log('task 2: ', sum);
});

//console.log('     TASK 3');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log('Task 3: Start');
  await sleep(2000);
  console.log('Task 3: End');
}

example();

//console.log('     TASK 4');

function getUser(id) {
  const users = [
    { id: 0, name: "John", age: 25, city: "Kyiv" },
    { id: 1, name: "Mary", age: 30, city: "Lviv" },
    { id: 2, name: "Bob", age: 35, city: "Odessa" },
    { id: 3, name: "Alice", age: 40, city: "Kharkiv" },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);

      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

getUser(0)
  .then((user) => console.log('task 4: ', user))
  .catch((error) => console.error('task 4: ', error));

getUser(2)
  .then((user) => console.log('task 4: ', user))
  .catch((error) => console.error('task 4: ', error));

getUser(5)
  .then((user) => console.log('task 4: ', user))
  .catch((error) => console.error('task 4: ', error));

//console.log('     TASK 5');

async function loadUsers(ids) {
  try {
    const promises = ids.map(id => getUser(id));
    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.error(`Task 5: Error: ${error.message}`);
  }
}

loadUsers([0, 1, 2, 3, 4]).then(users => {
  console.log("Task 5.undefined:", users);
});

loadUsers([0, 1, 2, 3]).then(users => {
  console.log("Task 5:", users);
});

//console.log('     TASK 6');

function logCall(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(new Date());
      try {
        resolve(callback());
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

logCall(() => console.log("Task 6: ", '1st call'))
  .then(() => logCall(() => console.log("Task 6: ", '2nd call')))
  .then(() => logCall(() => console.log("Task 6: ", '3rd call')))
  .then(() => logCall(() => console.log("Task 6: ", '4th call')))
  .catch(error => console.error(error));

//console.log('     TASK 7');

async function showUsers(ids) {
  console.log("Task 7: ", 'loading');
  try {
    const users = await loadUsers(ids);
    console.log(users);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Task 7: ", 'loading finished');
  }
}

showUsers();