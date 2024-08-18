const url = 'https://restcountries.com/v3.1/all'

const xhr = new XMLHttpRequest();

xhr.open('GET', url)

xhr.send();

xhr.onload = () => {

    let data = JSON.parse(xhr.response)

    let result = data.filter((pop) => pop.population < 200000).map((pop) => pop.name)
    console.log(result)

}