let currentplayer = 1;
let moves = 0;
let grid = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let buttons=document.getElementsByTagName('button');
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',handleClick);
}
// buttons.forEach((item) => {
//     item.addEventListener('click',handleClick);
// });
function handleClick(){
    if(this.innerText === ""){
        this.innerText = currentplayer === 1? 'X' : 'O';
        let id = parseInt(this.id);
        let row = Math.floor((id-1)/3);
        let col = (id-1)%3;
        grid[row][col]=currentplayer;
        moves++;
        //check for the winner
        if(checkWinner(currentplayer)){ //we can also write it as [checkWinner(currentplayer)=== true{}]
            alert(`Congratulations! Player${currentplayer} wins`);
            reset();
            return;
        }

        if(moves===9){
            alert("The match is drawn");
            reset();
            return;
        }
        currentplayer = currentplayer === 1? 2 : 1;
    }
}
function reset(){
    moves=0;
    currentplayer=1;
    grid=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    for(let i=0;i<buttons.length;i++){
        buttons[i].innerText='';
    }
}
function checkWinner(player){
    //rows
    for(let rows=0;rows<3;rows++){
        if(
            grid[rows][0]===player && 
            grid[rows][1]===player && 
            grid[rows][2]===player
        ){
            return true;
        }
    }
    //columns
    for(let col=0;col<3;col++){
        if(
            grid[0][col]===player && 
            grid[1][col]===player && 
            grid[2][col]===player
        ){
            return true;
        }
    }
    if(
        grid[0][0]===player && grid[1][1]===player && grid[2][2]===player ||
        grid[0][2]===player && grid[1][1]===player && grid[2][0]===player
    ){
        return true;
    }
}
