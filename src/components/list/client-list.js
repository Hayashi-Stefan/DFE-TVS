import { getClients, deleteClient } from "../../service/client-service";

const initTable = () => {
  const tableHeader = `
    <thead class="table-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">CNPJ</th>
        <th scope="col" colspan="2">Opções</th>
        <th scope="col"><a class="btn btn-primary" onclick="navigation('/cadastro'); return false;">Novo Cliente</a></th>
      </tr>
    </thead>
  `;

  const table = document.createElement("table");
  table.innerHTML = tableHeader;
  table.classList.add("table");

  createTableBody(table);

  return table;
};

const createTableBody = (table) => {
  const tableData = document.createElement("tbody");

  const clientData = (Id, nome, cnpj) => {
    const line = document.createElement("tr");

    const lineData = `
          <td> ${Id} </td>
          <td> ${nome} </td>
          <td> ${cnpj} </td>
          <button type='button' class='btn btn-outline-primary' onclick="navigation('/editar?id=${Id}'); return false;">Editar</button>
      `;

    line.innerHTML = lineData;
    line.appendChild(createButtonDelete(Id));
    return line;
  };

  getClients().then((data) => {
    data.forEach((client) => {
      tableData.appendChild(clientData(client.Id, client.nome, client.cnpj));
    });
  });

  table.appendChild(tableData);
};

const createButtonDelete = (id) => {
  const button = document.createElement("button");
  button.classList.add("btn", "btn-outline-warning");
  button.innerHTML = "Excluir";

  button.addEventListener("click", () => {
    onDelete(id);
  });

  return button;
};

const onDelete = (id) => {
  if (confirm("Deseja deletar o cliente?")) {
    deleteClient(id)
      .then((res) => {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default initTable;
