const url = 'https://restcountries.com/v3.1/all'

const xhr = new XMLHttpRequest();

xhr.open('GET', url)

xhr.send();

xhr.onload = () => {

    let data = JSON.parse(xhr.response)

    let result = [];

    data.forEach((element) => {
        console.log("Name =>",element.name,"Capitan =>",element.capital,"Flag =>",element.flag)
    });
   
}