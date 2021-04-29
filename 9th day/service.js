async function getImages(pageNumber) {
  try {
    let response = await axios.get(
      `https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`
    );
    let image = await response.data;
    return image;
  } catch (err) {
    console.error(err);
    alert(err);
  }
}

async function getTasks() {
  let response = await axios.get(
    `https://repetitora.net/api/JS/Tasks?widgetId=5385`
  );
  let result = await response.data;
  return result;
}

async function createTask(title) {
  try {
    let promise = await axios.post(`https://repetitora.net/api/JS/Tasks`, {
      widgetId: 5385,
      title: title,
    });
    let result = await promise.data;
    return result;
  } catch (err) {
    alert(err);
    console.error(err.message);
  }
}

async function updateTask(title, id, done) {
  let response = await axios.put(`https://repetitora.net/api/JS/Tasks`, {
    widgetId: 5385,
    title: title,
    taskId: id,
    done: done,
  });
  let result = await response.data;
  return result;
}

async function deleteTask(id) {
  let response = await axios.delete(
    `https://repetitora.net/api/JS/Tasks?widgetId=53452&taskId=${id}`
  );
  let res = await response.data;
  return res;
}
