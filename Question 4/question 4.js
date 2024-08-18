const url = 'https://restcountries.com/v3.1/all'

const xhr = new XMLHttpRequest();

xhr.open('GET', url)

xhr.send();

xhr.onload = () => {

    let data = JSON.parse(xhr.response)

    let population = []

    data.forEach(element => {
        population.push("name ==>", element.name, element.population)
    });




    const popul = data.reduce((tot, sum) => tot + sum)



    console.log(population)
}