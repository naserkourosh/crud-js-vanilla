const table = document.getElementById('userTable')
const tableBody = document.getElementById('tableBody')
const form = document.getElementById('userForm')

function removeTableRow(btn){

    let row = btn.parentNode.parentNode;
    tableBody.removeChild(row);
};

function addUser(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    
    let row = document.createElement('tr');
    row.innerHTML = `<td>1</td>
    <td>${data.name}</td>
    <td>${data.lastName}</td>
    <td>${data.email}</td>
    <td>
      <button type="button" class="btn btn-success">Edit</button>
      <button type="button" class="btn btn-danger" onclick="removeTableRow(this)">Remove</button>
    </td>`;

    tableBody.appendChild(row);
    
    event.target.reset();
};


form.addEventListener('submit' , addUser);