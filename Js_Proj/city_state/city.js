const button = document.querySelector('button');
var resultdiv = document.createElement('div');
resultdiv.id = 'result';
document.getElementById('wrapper').appendChild(resultdiv);

// Event listener
button.addEventListener('click', displayStates);

function displayStates() {
    const input = document.getElementById("input");
    const city = input.options[input.selectedIndex].value;
    let population = 0, literacyRate = 0, language = '';
    
    switch (city) {
        case 'Bengaluru':
            population = 8443675;
            literacyRate = 88.71;
            language = 'Kannada';
            break;
        case 'Chennai':
            population = 4647890;
            literacyRate = 90.20;
            language = 'Tamil';
            break;
        case 'Mumbai':
            population = 12445678;
            literacyRate = 89.73;
            language = 'Marathi';
            break;
        case 'Delhi':
            population = 1678907;
            literacyRate = 86.20;
            language = 'Hindi';
            break;
        case 'Assam':
            population = 123458;
            literacyRate = 70.90;
            language = 'Assamese';
            break;
        default:
            // Handle cases where the selected city doesn't match any case
            document.getElementById('result').innerHTML = 'City details not available.';
            return;
    }

    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`;
    console.log(text);
    document.getElementById('result').innerHTML = text;
}

/*
chennai : population=4647890
          literacyrate=90.20
          language='tamil'
'Bengaluru': population=8443675
             literacyRate=88.71
             language='kannada'
'Mumbai' : population= 12445678
           literacyRate=89.73
           language='Marathi'
'Delhi' : population = 1678907
          literacyRate =86.20
          language='hindi'
'Assam' : population=123458
          literacyRate= 70.90
          language='assamie'
The Indian city of Bengaluru has a Population of 8443675.language spoken is Kannada
and Literacy rate is 88.71%.          
*/