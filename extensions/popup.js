let grid = [];
document.getElementById('submit').addEventListener('click', getContributionSize);

function getContributionSize(){
    console.log("Getting Contribution Size");
    const startDate = document.getElementById('Cdate');
    const timeallocated = document.getElementById('timeframe');
    
    console.log(startDate.value);
    console.log(timeallocated.value);

    const strtDt = startDate.value;
    const tmAll = Number(timeallocated.value);

    Make2DArray(strtDt,tmAll);



}



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

    draw2DArray(grid);
    }


function draw2DArray(grid){
    console.log("Drawing 2D Array");
    const htmltable = document.getElementById('contributionTable');
    htmltable.innerHTML = ''; 

    for (let i=0; i<grid.length; i++){
        let row = htmltable.insertRow();

        for (let j = 0; j <grid[i].length;j++){
            let cell = row.insertCell();

            cell.innerText = grid[i][j];
        }

    }


}