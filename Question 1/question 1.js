const url = 'https://restcountries.com/v3.1/all'

const xhr = new XMLHttpRequest();

xhr.open('GET',url)

xhr.send();

xhr.onload = () => {

    let data = JSON.parse(xhr.response)
    
    let result = data.filter((reg) => reg.region === "Asia").map((reg) => reg.name)
    console.log(result)


}

console.log(result)