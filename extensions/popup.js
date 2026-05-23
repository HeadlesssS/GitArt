


let grid = [];
document.getElementById('submit').addEventListener('click', getContributionSize);

function getContributionSize(){
    const startDate = document.getElementById('Cdate');
const timeallocated = document.getElementById('timeframe');
    
    console.log(startDate.value);
    console.log(timeallocated.value);

    const strtDt = startDate.value;
    const tmAll = Number(timeallocated.value);

    Make2DArray(strtDt,tmAll);



}

getContributionSize();


function Make2DArray(strtDt,tmAll){
    console.log("Making 2D Array");
    console.log(strtDt);
    console.log(tmAll);
    for (let i = 0; i < tmAll; i++){
        grid[i] = [];
        for (let j = 0; j < 7; j++){
            const currentDate = new Date(strtDt);
            currentDate.setDate(currentDate.getDate() + i * 7 + j);
            grid[i][j] = currentDate;
        }
    } console.log("2D Array Made");
    console.log(grid);
    return grid;
    }


function setup(){

}