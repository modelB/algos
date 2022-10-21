const body = document.querySelector("body");
const table = document.querySelector("table");
const forwardButton = document.querySelector('#forward')
const backButton = document.querySelector('#back')
fetch("./data.json").then(async (data) => {
  const addresses = await data.json();
  const thead = document.createElement("thead");
  table.appendChild(thead);
  const headers = Object.keys(addresses[0].location).map((header) => {
    const th = document.createElement("th");
    th.innerText = header[0].toUpperCase() + header.slice(1);
    thead.appendChild(th);
    return { header, th };
  });
  const tbody = document.createElement("tbody");
  const rows = [];
  table.appendChild(tbody);

  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    const tds = [];
    if (i % 2 === 0) tr.classList.add("gray-background");
    headers.forEach(({ header }) => {
      const td = document.createElement("td");
      td.innerText = addresses[i].location[header];
      tr.appendChild(td);
      tds.push(td);
    });
    rows.push({ tr, tds });
  }
  let currentPage = 1;
  const updateRows = () => {
    console.log({ currentPage });
    rows.forEach(({ tds }, i) => {
      const addressIndex = (currentPage - 1) * 5 + i;
      headers.forEach(({ header }, j) => {
        if (addressIndex >= 0 && addressIndex < addresses.length) {
          tds[j].innerText = addresses[addressIndex].location[header];
        } else {
          td[j].innerText = undefined;
        }
      });
    });
    if ((currentPage-1) * 5 + 4 >= addresses.length) {
        forwardButton.disabled = true;
    } else {
        forwardButton.disabled = false;
    }
    if (currentPage === 1) backButton.disabled = true;
    else backButton.disabled = false;
  };

  const pageForward = () => {
    currentPage++;
    updateRows();
  };

  const pageBack = () => {
    currentPage--;
    updateRows();
  };

  document
    .querySelector("#forward")
    .addEventListener("click", pageForward, false);
  document.querySelector("#back").addEventListener("click", pageBack, false);
});
