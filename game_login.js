
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Establece "player1_name" usando la función localStorage.setItem()
    localStorage.setItem("player1_name")
	  //Establece "player2_name" usando la función localStorage.setItem()
    ocalStorage.setItem("player2_name")
    window.location = "game_page.html";
}

