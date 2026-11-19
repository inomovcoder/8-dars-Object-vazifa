let user ={
    username: "admin",
    password: "12345"
};

function login(Login,parol){
    if(Login == user.username && parol == user.password){
        return "Login successful"
    }
    else{
        return "Invalid username or password"
    }

}


console.log(login("admin","12345"))