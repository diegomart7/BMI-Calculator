document.getElementById('calculate').addEventListener('click', myFunction);

var i = 0 ;



function myFunction () {

    if ( i === 0 ){

    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var divArea = document.getElementById('resultdiv');
    var createH3 = document.createElement('h3');

    var operation2 = height/100*height/100 ;
    var finalOperation = weight /operation2 ;

    var roundedResult = finalOperation.toFixed(2);
    
    


    if (roundedResult < 18.5){

        var underweight = document.createTextNode( `BMI of ${roundedResult} considered Underweight`);
        createH3.appendChild(underweight);
        divArea.appendChild(createH3);
        

    }

    if (18.5 <= roundedResult && roundedResult<25.1){

        var healthyweight = document.createTextNode( `BMI of ${roundedResult} considered Healthy Weight`);
        createH3.appendChild(healthyweight);
        divArea.appendChild(createH3);
    }

    if (roundedResult < 30 && roundedResult>25){

        var overweight = document.createTextNode( `BMI of ${roundedResult} considered Overweight`);
        createH3.appendChild(overweight);
        divArea.appendChild(createH3);
    }

    if( roundedResult > 30){
        
        var obesity = document.createTextNode( `BMI of ${roundedResult} considered Obesity`);
        createH3.appendChild(obesity);
        divArea.appendChild(createH3);
    
    }
    
    i++;

}

};


/*

Adult Body Mass Index
If your BMI is less than 18.5, it falls within the underweight range.
If your BMI is 18.5 to <25, it falls within the healthy weight range.
If your BMI is 25.0 to <30, it falls within the overweight range.
If your BMI is 30.0 or higher, it falls within the obesity range.
*/
