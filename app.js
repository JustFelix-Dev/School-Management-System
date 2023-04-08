var editMe = []
var get = []
function submit() {
   if(fname.value =="" || lname.value=="" || email.value=="" ||pass.value==""){
        alert("Please kindly check your details correctly. Something might be missing!.")
    }else{
        var mySelf = {
        firstName: fname.value,
        lastName: lname.value,
        email: email.value,
        passWord: pass.value,
    }
    get.push(mySelf)
    localStorage.setItem("localStudents", JSON.stringify(get))
    window.location.href = "signin.html"
        fname.value = ""
    lname.value = ""
    email.value = ""
    pass.value = ""
    // displayTable()
    }
   
}

function displayTable() {
    var get = JSON.parse(localStorage.getItem("localStudents"))
    if(get.length == 0){
        disp.innerHTML = "There are currently no Student's Record."
    } else {
        render.innerHTML = ` <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
        </tr>`

    for (let index = 0; index < get.length; index++) {
        render.innerHTML += `
        <tr>
    <td></td>
    <td> ${get[0].firstName} </td>
    <td>${get[0].lastName}</td>
    <td>${get[0].email}</td>
    <td>${get[0].passWord}</td>
    <td><button onclick="edit()" style="background-color:yellow;color:black;"data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit User</button>
        <button onclick="del()" style="background-color:red;color:black;">Delete User</button></td>
</tr>
    `
    }
   
    }
}

function del(btndel) {
    var userResponse = confirm('This user details would be permanently deleted. Click "Ok" to confirm')
    if (userResponse == true) {
        get.splice(btndel, 1)
        displayTable()
    } else {}

}
 function edit() {
    //  editMe = btnedit
     cname.value = get[0].firstName
     clname.value = get[0].lastName
     cemail.value = get[0].email
     cpass.value = get[0].passWord

}
function change (){
    get[0] = {
        firstName: cname.value,
        lastName: clname.value,
        email : cemail.value,
        passWord: cpass.value,
    }
    displayTable()

}

function signIn(){
 var get = JSON.parse(localStorage.getItem("localStudents"))
     if(email.value != get[0].email || pass.value != get[0].passWord){
        alert("You are wrong")
    }else{
window.location.href = "dashboard.html"
     }
 }