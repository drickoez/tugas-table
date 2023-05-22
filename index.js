class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((i) => {
      open += `<th>${i}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((i) => {
      open += `
        <tr>
          <td>${i[0]}</td>
          <td>${i[1]}</td>
          <td>${i[2]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "089789765434"],
    ["Mike", "mike@gmail.com", "098765432345"],
    ["Luna", "luna@gmail.com", "098763456345"],
    ["Mina", "mina@gmail.com", "0912345432345"],
    ["Jihyo", "jihyo@gmail.com", "024265432345"],
    ["Sana", "sana@gmail.com", "09895332345"],
  ],
});
const app = document.getElementById("table");
table.render(app);
