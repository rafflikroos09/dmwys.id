const getData = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.npoint.io/bffc7b818cec021a3bf4");

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject("Error loading data");
      }
    };

    xhr.onerror = () => reject("Network Error");

    xhr.send();
  });
};

const runData = async () => {
  try {
    const response = await getData();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

runData();
