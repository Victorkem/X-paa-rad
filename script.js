let brett = [];


function nyttBrett(){
    brett = []
    $("#tur").html(tur+" sin tur");
    $("#tur").attr("style", "color: black;")
    let høyde = $("#størrelse").val();
    let lengde = $("#størrelse").val();
    $("#dokumentnavn").html($("#størrelse").val() + " på rad")

    
    for (let i = 0; i < høyde; i++){
        brett.push(new Array(lengde));
    }

    for (let i = 0; i < brett.length; i++){
        for (let j = 0; j < brett.length; j++){
            brett[i][j] = "  ";
        }
    }
    console.log(brett);
    ut = "";
   
    for (let i = 0; i < brett.length; i++){
        for (let j = 0; j < brett.length; j++){
             ut += `<button class="brettKnapper" id="`+ i +``+ j + `" onclick="trykk(` + i +", "+ j + `)">&nbsp;</button>`;
        }
        ut += "<br>"
    }


    $("#spillContainer").html(ut);




    
}

let tur = "O";

function trykk(høyde, lengde){
    $(`#`+høyde+``+lengde+``).html(tur);
    brett[høyde][lengde] = tur;


    if (tur == "O"){
        tur = "X";
    } else if (tur == "X"){
        tur = "O";
    }
    $("#tur").html(tur + " sin tur");


    console.log(høyde + " " + lengde + " trykket!");

    if (sjekkHorisontal() == "O" || sjekkVertikal() == "O" || sjekkdiagonal1() == "O" || sjekkdiagonal2() == "O"){
        $("#tur").html("O vant!");
        $(".brettKnapper").prop("disabled", true).attr("style", "background-color: lightgreen;")
        $("#tur").attr("style", "color: green;")
    }
    if (sjekkHorisontal() == "X" || sjekkVertikal() == "X" || sjekkdiagonal1() == "X" || sjekkdiagonal2() == "X"){
        $("#tur").html("X vant!");
        $(".brettKnapper").prop("disabled", true).attr("style", "background-color: lightgreen;")
        $("#tur").attr("style", "color: green;")
    }
    



    $(`#`+høyde+``+lengde+``).prop("disabled", true);
}

function sjekkHorisontal(){
    let vinn = brett.length;
    for (let i = 0; i < brett.length; i++){
        let antallX = 0;
        let antallO = 0;
        for(let j = 0; j < brett.length; j++){
            if (brett[i][j] == "O"){
                antallO ++;
            } else if (brett[i][j] == "X"){
                antallX++;
            }
            if (antallO == vinn){
                return "O"
            } else if (antallX == vinn){
                return "X"
            } 
        }
    }
}

function sjekkVertikal(){
    let vinn = brett.length;
    for (let i = 0; i < brett.length; i++){
        let antallX = 0;
        let antallO = 0;
        for(let j = 0; j < brett.length; j++){
            if (brett[j][i] == "O"){
                antallO ++;
            } else if (brett[j][i] == "X"){
                antallX++;
            }
            if (antallO == vinn){
                return "O"
            }
            if (antallX == vinn){
                return "X"
            }
            
        }
    }
}

function sjekkdiagonal1(){
    let vinn = brett.length;
    let antallX = 0;
    let antallO = 0;
    for (let i = 0; i < brett.length; i++){

        if (brett[i][i] == "O"){
            antallO ++;
        } else if (brett[i][i] == "X"){
            antallX++;
        }
        if (antallO == vinn){
            return "O"
        }
        if (antallX == vinn){
            return "X"
        }
    }
}

function sjekkdiagonal2(){
    let vinn = brett.length;
    let antallX = 0;
    let antallO = 0;
    for (let i = 0; i < brett.length; i++){
        if (brett[i][brett.length - i - 1] == "O"){
            antallO ++;
        } else if (brett[i][brett.length - i - 1] == "X"){
            antallX++;
        }
        if (antallO == vinn){
            return "O";
        }
        if (antallX == vinn){
            return "X";
        }
    }
}






