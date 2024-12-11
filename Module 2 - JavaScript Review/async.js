const span = document.querySelector('span');

function consumeWebService() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json)
    .catch(error => alert('Something bad just happened.'))
    .then(json => console.log(json));
}

async function consumeWebServiceAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await response.json();
        console.log(json);

        span.innerHTML = `id: ${json.id}<br /> title: ${json.title}`;
    } 
    catch (ex){
        alert('Something bad just happened.');
    }
}

consumeWebServiceAsync();