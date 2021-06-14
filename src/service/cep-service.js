const getCep = (cep) => {
  const httpOptions = {
    method: "GET",
  };
  return fetch(`https://viacep.com.br/ws/${cep}/json/`, httpOptions)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getCep };
