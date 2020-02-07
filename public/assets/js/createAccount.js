function checkPassword(){
    let pass1 = $("#password1").val().trim(); 
    console.log(`first password is: ${pass1}`); 
    let pass2 = $("#password2").val().trim(); 
    console.log(`second password is: ${pass2}`); 
    if (pass1 === pass2){
        return true;
    } else {
        return false; 
    }

}

$(".registerBtn").on("click", function(event){
    event.preventDefault(); 
    if(checkPassword()){
        let name= $("#nameInput").val().trim(); 
        let email = $("#InputEmail").val().trim(); 
        let password = $("#password1").val().trim();
        let favoriteAnimal; 
        let favoriteColor; 
        let counters; 
        if ($("#favoriteAnimalInput").val().trim()){
            favoriteAnimal = $("#favoriteAnimalInput").val().trim(); 
        } 
        if ($("#dropdownColor").val().trim()){
            favoriteColor = $("#dropdownColor").val().trim(); 
        }
        if ( $("#dropdownCounter").val().trim()){
            counters =  $("#dropdownCounter").val().trim(); 
        }
        if (name && email && password){
            const account = {
                name: name,
                email: email,
                password: password,
                favoriteAnimal: favoriteAnimal,
                favoriteColor: favoriteColor,
                counters: counters
            }; 
            console.log(account); 
            $.post("/accounts", account)
                .then(function(results){
                    window.location.href="/"; 
            }); 
        }
    } 
}); 

