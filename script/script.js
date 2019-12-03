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
            
            elementArea.appendChild(row);
        }
   
        
    
});

