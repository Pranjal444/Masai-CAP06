const form = document.querySelector("#userForm");
    const name_input = document.querySelector("#name_input");
    const age_input = document.querySelector("#age_input");
    const retrieveButton = document.querySelector("#retrieveButton");
    const dataDisplay = document.querySelector("#dataDisplay");
    let tbody = document.querySelector("tbody");

    // clear Button
    function clearFunc() {
      localStorage.clear();
      displayData();
    }

    function displayData() {
      let data = JSON.parse(localStorage.getItem("data"));
      console.log(data);
      tbody.innerHTML = null;
      if (data != null) {
        data.forEach((element) => {
          let row = document.createElement("tr");
          let nameData = document.createElement("td");
          let ageData = document.createElement("td");
          nameData.innerText = element.name;
          ageData.innerText = element.age;
          row.append(nameData, ageData);
          tbody.append(row);
        });
      }
    }
    displayData();

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let data;
      if (localStorage.getItem("data") == null) {
        data = [];
      } else {
        data = JSON.parse(localStorage.getItem("data"));
      }
      let obj = {};
      obj.name = name_input.value;
      obj.age = age_input.value;
      data.push(obj);
      localStorage.setItem("data", JSON.stringify(data));
      displayData();
      form.reset();
      alert("Data Saved Successfully to the Local Storage!!")
    });

    retrieveButton.addEventListener("click", () => {
      const users = JSON.parse(localStorage.getItem("data"));

      if (users && users.length > 0) {
        dataDisplay.classList.remove("hidden");
        const tableBody = dataDisplay.querySelector("tbody");
        tableBody.innerHTML = "";

        // Populate the table with user entries
        users.forEach((user) => {
          tableBody.innerHTML += `
            <tr>
              <td>${user.name}</td>
              <td>${user.age}</td>
            </tr>
          `;
        });
      } else {
        alert("No data found in Local Storage.");
      }
    });