const url = 'https://restcountries.com/v3.1/all'

const xhr = new XMLHttpRequest();

xhr.open('GET', url)

xhr.send();

xhr.onload = () => {

    let data = JSON.parse(xhr.response)

    var cur = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].currencies[0].code === "USD") {
            cur.push(data[i].currencies[0].code)
            // console.log("name:", data[i].name, "==>", data[i].currencies[0].code)
        }
    }

    console.log(cur)
}