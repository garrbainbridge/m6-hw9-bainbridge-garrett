var locationsInput = document.querySelector('input[type=text]')
var form = document.querySelector ('form')
var local = document.getElementById ('temp')
var image = document.getElementById ('image')

form.onsubmit = function (e) {
    window.location.reload();
    return false;
    e.preventDefault();
    console.log(locationsInput.value)
    fetch ('https://api.openweathermap.org/data/2.5/weather?appid=aed17ebb3e8c6797412a4ce7c8114cda&units=imperial&q=' + locationsInput.value)
    .then (function (response) {
        return response.json()
    })
    .then (function(data) {
        console.log(data)
        var div =document.createElement('div')
        var h3 =document.createElement('h3')
        var h2 =document.createElement('h2')
        var h4 =document.createElement('h4')
        var p =document.createElement('p')
        h3.textContent = data.name + " " + data.sys.country
        div.appendChild(h3)

        var img =document.createElement('img')
        img.src = data.weather[0].id
        image.appendChild(img)

        h2.textContent = 'current temp' + " " + data.main.temp
        h4.textContent ='feels like'+ " " + data.main.feels_like
        div.appendChild(h2)
        div.appendChild(h4)

        p.textContent = data.weather[0].description
        image.appendChild(p)

        local.appendChild(div)
        
    })
    .catch(function(err) {
        console.log(err)
    })
}