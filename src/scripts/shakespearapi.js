var request = new XMLHttpRequest()
let lina = [];
request.open('GET', 'https://poetrydb.org/author,title/Shakespeare;Sonnet', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)



  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      movie.lines.forEach((line) => {
        lina.push(line);
      })
    })
  } else {
    console.log('error')
  }
  poem_maker();
}

request.send()

const poem_maker = () => {
  setInterval(function(){
    const poem = document.querySelector('.poem');
    let quick = [];
    quick.push(lina.pop());
    quick.push(lina.pop());
    quick.push(lina.pop());
    quick.push(lina.pop());
    quick.push(lina.pop());
    quick.push(lina.pop());
    poem.innerText = quick;
  }, 1000)
}
