function getItems() {

    app.get("/get-items").then((res) => {
        console.log(res)

        var newRow = `
        <tr>
          <th scope="row">${result[i].id}</th>
          <td>${result[i].name}</td>
          <td>${result[i].qty}</td>
          <td>${result[i].dscrptn}</td>
          <td>${result[i].price}</td>
          <td>
            <button type="button" class="btn btn-info" id="buyBtn">Buy</button>
          </td>

        </tr>`;

      $("#rowHolder").append(newRow);
    });

    
}




$('#popBtn').on(click, function(){
    getItems()
});




for (var i = 0; i < result.length; i++) {
    html += "<li><p> ID: " + result[i].id + "</p>";
    html += "<p>School: " + result[i].name + " </p></li>";
  }