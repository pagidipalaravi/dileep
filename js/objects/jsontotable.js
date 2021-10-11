 function jsontotable(){}
 window.addEventListener("load", function(){
      // (B) PARSE THE JSON STRING INTO OBJECT FIRST
      var data = '{"employeeId":217,"firstName":"surya","lastName":"pagidipala","email":"surya123@gmail.com","phoneNumber":"9182550827","hireDate":"2021-01-15","salary":10000.0,"jobId":"IT_PROG","commisionPct":null,"managerId":103,"departmentId":60}';
      data = JSON.parse(data);
      // console.table(data);

      // (C) GENERATE TABLE
      // (C1) CREATE EMPTY TABLE
      var table = document.createElement("table"), row, cellA, cellB;
      document.getElementById("demoC").appendChild(table);
      for (let key in data) {
        // (C2) ROWS & CELLS
        row = document.createElement("tr");
        cellA = document.createElement("td");
        cellB = document.createElement("td");
        
        // (C3) KEY & VALUE
        cellA.innerHTML = key;
        // COLORS FIELD
        if (key=="Colors") {
          cellB.innerHTML = data[key].join(", ");
        }
        // PET FIELD
        else if (key=="Pet") {
          cellB.innerHTML = `<div>Name: ${data[key]['Name']}</div><div>Species: ${data[key]['Species']}</div>`;
        }
        // OTHER FIELDS
        else {
          cellB.innerHTML = data[key];
        }
        
        // (C4) ATTACH ROW & CELLS
        table.appendChild(row);
        row.appendChild(cellA);
        row.appendChild(cellB);
      }
    });