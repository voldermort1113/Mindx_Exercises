window.onload = async () => {
    await getUsers();
    // console.log(context.users);
    renderUsers();
    console.dir(divSalaryList);
    console.dir(ulUser);
    renderSalary();
    postMethod();
}
let divSalaryList = document.getElementById('employee_salary');
let ulUser = document.getElementById('ulUser');
let btnPost = document.getElementById('btnPost');
let newUser = {
    "name":"Hieu",
    "salary":"9000",
    "age":"15",
}
const context = {
    users: null,

}
const getUsers = async () => {
    const usersAPI = await fetch('http://dummy.restapiexample.com/api/v1/employees');// await doi fetch xong moi console.log
    const userData = await usersAPI.json();
    context.users = userData;
}
const renderUsers = () => {
    for(let i=0;i<20;i++){
        let user = context.users[i];
        let liUser = 
        `<li id=li${i}>
            ${user.employee_name}
        </li>`
        ulUser.innerHTML += liUser;
    }
}

const renderSalary = () => {
    // const divSalaryList = document.getElementById('employee_salary');
    for(let i=0;i<ulUser.children.length;i++){
        let user = context.users[i];
        let divSalary = `${user.employee_name}: ${user.employee_salary}`;
        const li = document.getElementById(`li${i}`);
        li.addEventListener('mouseover',()=>{
            divSalaryList.innerText = divSalary;
        })
    }
}
// const postMethod = () => {
//     btnPost.addEventListener('click',()=>{
//         console.log('hah');
//         $.post('http://dummy.restapiexample.com/api/v1/create',
//             {myData: newUser },
//             function(data, status, jqXHR) {// success callback
//                 alert('status: ' + status + ', data: ' + data);
//                 console.log(status);
//             }
//         )
//     })
// }

