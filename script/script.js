let rowNum = document.getElementById('rowNum');
let colNum = document.getElementById('colNum');
let pTagNum = document.getElementById('pTagNum');
let goBtn = document.getElementById('goBtn');
let elementArea = document.getElementById('elementArea');

goBtn.addEventListener('click', function(){
    
        console.log(rowNum.value);

        for( let i=0;i<rowNum.value;i++){
            let row = document.createElement('div');
            row.setAttribute('class','row');
            for( let i=0;i<colNum.value;i++){
                let col = document.createElement('div');
                col.setAttribute('class','col');
                for( let i=0;i<pTagNum.value;i++){
                    let pTagNum = document.createElement('div');
                    pTagNum.innerText="column area"
                    
                    col.appendChild(pTagNum);
                }
                row.appendChild(col);
            }
            elementArea.appendChild(row);
        }
   
        
    
});

