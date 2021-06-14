const getClients = () => {
  const httpOptions = {
    method: "GET",
  };

  return fetch(
    `https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes`,
    httpOptions
  )
    .then((res) => {
      return res.json()
      // res.json().then((data) => {
      //   console.log(data);
      //   return data;
      // });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getClientById = (id) => {
  const httpOptions = {
    method: "GET",
  };

  return fetch(
    `https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes/${id}`,
    httpOptions
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveClient = (body) => {
  const httpOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(
    "https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes",
    httpOptions
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateClient = (id, body) => {
  const httpOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(
    `https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes/${id}`,
    httpOptions
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteClient = (id) => {
  const httpOptions = {
    method: "DELETE",
  };

  return fetch(
    `https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes/${id}`,
    httpOptions
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getClients, getClientById, saveClient, updateClient, deleteClient };
