// fetching data from sheet
let parentNode = document.getElementById('parent'); 

let content = document.getElementById('content');
let fetchData = document.getElementById('fetchData');

fetchData.addEventListener('click', (e) => {
    
    const xhr = new XMLHttpRequest();
    let nameVal = document.getElementById('nameVal');

    

    xhr.open('GET', 'https://sheets.googleapis.com/v4/spreadsheets/1uI6RbQTzvWlv6Pqt9dbvsptxbKAsTYsKIPlr9JtRavs/values/Sheet1?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyCTg0huF8IgnDyOi_KmCOc1PhMjrI-QlF4', true);

    xhr.onload = function dis() {
        if (this.readyState === this.DONE) {
            let json = JSON.parse(this.responseText);
            

            for (let i = 0; i < json["values"].length; i++) {
                const element = json["values"][i];
                for (let j = 0; j < json["values"][i].length; j++) {
                    if (json["values"][i][j] == nameVal.value) {
                        j += 2;
                        let last = json["values"][i][j];
                        
                        content.innerText = last;
                    }
                }
            }

        }
    }
    xhr.send();
})