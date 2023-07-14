player_1_name=localStorage.getItem("User 1");
player_2_name=localStorage.getItem("User 2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= player_1_name+" : ";
document.getElementById("player1_score").innerHTML= " "+player1_score;
document.getElementById("player2_name").innerHTML= player_2_name+ " : ";
document.getElementById("player2_score").innerHTML= " "+player2_score;

document.getElementById("question_turn").innerHTML="Question Turn: "+player_1_name;
document.getElementById("answer_turn").innerHTML="Answer Turn: "+player_2_name;