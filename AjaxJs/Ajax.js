$(()=>{
// creating an instance of a user
    var user = {
            admin: false,
            email: "Dgrohl@music.com",
            firstName: "David",
            id: 0,
            lastName: "Grohl",
            password: "FFighters",
            phoneNumber: "321-543-9586",
            reviewer: true,
            userName: "DGrohl"};
    //passing in a JSON object
    $.ajax({
        method:"POST",
        url:"http://localhost:8080/api/users/",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
    .done(res=>{
        console.log(res);
        getAll();
        })
        //error handleing 
    .fail(err=>{
        console.error(err);
        console.log("Wow");
        });
        //end

    const getAll=()=>{
    $.getJSON("http://localhost:8080/api/users/")
    .done(users =>{
        console.log(users);
    });
}
    console.log("after getJSON message called")
    })
