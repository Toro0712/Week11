
const buttons=document.querySelectorAll('.col-4');
player='o';
const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


console.log(buttons);
function game(){
    buttons.forEach(btn=> btn.addEventListener('click',()=>{
        player = (player == 'x') ? 'o' : 'x';
        let winner = false;
        console.log(winner);
            if(player == 'x'){
            btn.setAttribute('class','col-4 btn btn-hover bg-success disabled');
            document.getElementById('text').innerHTML= "Yellow's Turn";
            
                }
                
            
            else if(player == 'o'){
            btn.setAttribute('class', 'col-4 btn btn-hover bg-warning disabled');
            document.getElementById('text').innerHTML= "Green's Turn";

            }

       
        let greenWin= 'col-4 btn btn-hover bg-success disabled';
        let yellowWin= 'col-4 btn btn-hover bg-warning disabled';
        
                
                    //Green Wins
                if(document.getElementById('0').className == greenWin
                    && document.getElementById('1').className == greenWin
                    && document.getElementById('2').className == greenWin

                        ||
                    
                    document.getElementById('3').className == greenWin
                    && document.getElementById('4').className == greenWin
                    && document.getElementById('5').className == greenWin

                        ||

                    document.getElementById('6').className == greenWin
                    && document.getElementById('7').className == greenWin
                    && document.getElementById('8').className == greenWin

                        ||
                    document.getElementById('0').className == greenWin
                    && document.getElementById('3').className == greenWin
                    && document.getElementById('6').className == greenWin

                        ||
                    
                    document.getElementById('1').className == greenWin
                    && document.getElementById('4').className == greenWin
                    && document.getElementById('7').className == greenWin

                        ||

                    document.getElementById('2').className == greenWin
                    && document.getElementById('5').className == greenWin
                    && document.getElementById('8').className == greenWin
                    
                    ||
                    
                    document.getElementById('0').className == greenWin
                    && document.getElementById('4').className == greenWin
                    && document.getElementById('8').className == greenWin

                        ||

                    document.getElementById('2').className == greenWin
                    && document.getElementById('4').className == greenWin
                    && document.getElementById('6').className == greenWin
                ){
                    let alertDiv = document.createElement('div');
                    let parentAlert = document.getElementById('alert');
                    document.getElementById('text').innerHTML = 'Green Wins!';
                    parentAlert.appendChild(alertDiv).setAttribute('id', 'alertDiv');
                    document.getElementById('alertDiv').setAttribute('class', 'alert alert-success');
                    document.getElementById('alertDiv').innerHTML = 'Green Wins!';
                    winner = true;
                    console.log(winner);
                    
                    
                    for(const button of buttons){
                        button.classList.add('disabled');
                    };
                    
                    //------------------------------------------------------------//
                    //Yellow Wins
                }
                else if(document.getElementById('0').className == yellowWin
                    && document.getElementById('1').className == yellowWin
                    && document.getElementById('2').className == yellowWin

                        ||
                    
                    document.getElementById('3').className == yellowWin
                    && document.getElementById('4').className == yellowWin
                    && document.getElementById('5').className == yellowWin

                        ||

                    document.getElementById('6').className == yellowWin
                    && document.getElementById('7').className == yellowWin
                    && document.getElementById('8').className == yellowWin

                        ||
                    document.getElementById('0').className == yellowWin
                    && document.getElementById('3').className == yellowWin
                    && document.getElementById('6').className == yellowWin

                        ||
                    
                    document.getElementById('1').className == yellowWin
                    && document.getElementById('4').className == yellowWin
                    && document.getElementById('7').className == yellowWin

                        ||

                    document.getElementById('2').className == yellowWin
                    && document.getElementById('5').className == yellowWin
                    && document.getElementById('8').className == yellowWin
                    
                    ||
                    
                    document.getElementById('0').className == yellowWin
                    && document.getElementById('4').className == yellowWin
                    && document.getElementById('8').className == yellowWin

                        ||

                    document.getElementById('2').className == yellowWin
                    && document.getElementById('4').className == yellowWin
                    && document.getElementById('6').className == yellowWin)
                    
                    {
                        document.getElementById('text').innerHTML = 'Yellow Wins!';
                        let alertDiv = document.createElement('div');
                    let parentAlert = document.getElementById('alert');
                   
                    parentAlert.appendChild(alertDiv).setAttribute('id', 'alertDiv');
                    document.getElementById('alertDiv').setAttribute('class', 'alert alert-warning');
                    document.getElementById('alertDiv').innerHTML = 'Yellow Wins!';
                    winner = true;
                    console.log(winner);
                    for(const button of buttons){
                        button.classList.add('disabled');
                    };
                    }
                    else if(document.getElementById('0').classList.contains('disabled') &&
                    document.getElementById('1').classList.contains('disabled') &&
                    document.getElementById('2').classList.contains('disabled') &&
                    document.getElementById('3').classList.contains('disabled') &&
                    document.getElementById('4').classList.contains('disabled') &&
                    document.getElementById('5').classList.contains('disabled') &&
                    document.getElementById('6').classList.contains('disabled') &&
                    document.getElementById('7').classList.contains('disabled') &&
                    document.getElementById('8').classList.contains('disabled') &&
                    winner == false
                    
                    
                    ){
                        document.getElementById('text').innerHTML = 'Draw!';
                        let alertDiv = document.createElement('div');
                        let parentAlert = document.getElementById('alert');
               
                        parentAlert.appendChild(alertDiv).setAttribute('id', 'alertDiv');
                        document.getElementById('alertDiv').setAttribute('class', 'alert alert-dark');
                        document.getElementById('alertDiv').innerHTML = 'Draw!';
                        console.log('draw');
                        console.log(winner);
                    }
                    
    }));
   
    const restart = document.getElementById('restart');
    restart.addEventListener('click',() =>{
        document.getElementById('0').setAttribute('class', 'col-4 btn btn-hover bg-transparent');
        document.getElementById('1').setAttribute('class', 'col-4 btn btn-hover bg-transparent');
        document.getElementById('2').setAttribute('class', 'col-4 btn btn-hover bg-transparent');
        document.getElementById('3').setAttribute('class', 'col-4 btn btn-hover bg-transparent');
        document.getElementById('4').setAttribute('class', 'col-4 btn btn-hover bg-transparent');
        document.getElementById('5').setAttribute('class', 'col-4 btn btn-hover bg-transparent');
        document.getElementById('6').setAttribute('class', 'col-4 btn btn-hover bg-transparent');
        document.getElementById('7').setAttribute('class', 'col-4 btn btn-hover bg-transparent');
        document.getElementById('8').setAttribute('class', 'col-4 btn btn-hover bg-transparent');
        player = 'o';
        document.getElementById('text').innerHTML= "Green's Turn";
        document.getElementById('alertDiv').remove();
        winner = false;
    })

    
};



game();
