function Getscore()
{
    var score = localStorage.getItem("Score");
    document.getElementById("Score").innerHTML=score;
}