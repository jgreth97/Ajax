$().ready(() =>
{
const baseurl = "http://localhost:8080/api";
$(()=>{
    $("#pkbutton").on("click",()=>{
        getPk();
    });
})
const getAll=()=>{

}
const getPk = () =>{
    let id= $("#xpk").val();
    $.getJSON(`${baseurl}/users/${id}`)
    .done(res=>{
        console.log(res);
       displaySingle(res);
    });
}
const displaySingle = (user)=>{
    $("#xid").val(user.id);
    $("#xusername").val(user.userName);
    $("#xname").val(`${user.firstName} ${user.lastName}`);
    $("#xmail").val(user.email);
    $("#xphonenum").val(user.phoneNumber);
    $("#xreviewer").val(user.reviewer);
    $("#xadmin").val(user.admin);
}
const displayAll = (users)=>{

}

const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users){
        let tr =$("<tr></tr>");
        let tdId =$(`<td>${user.id}</td>`);
        let tdusername =$(`<td>${user.userName}</td>`);
        let tdname =$(`<td>${user.firstName} ${user.lastName}</td>`);
        let tdphone=$(`<td>${user.phoneNumber}</td>`);
        let tdemail =$(`<td>${user.email}</td>`);
        let tdreviewer =$(`<td>${user.reviewer}</td>`);
        let tdadmin =$(`<td>${user.admin}</td>`);
        tr.append(tdId)
        .append(tdusername).append(tdname)
        .append(tdphone).append(tdemail)
        .append(tdreviewer).append(tdadmin);
        tbody.append(tr)

    }
}
//getAll();      
    
});