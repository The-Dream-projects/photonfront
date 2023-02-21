//Animazione titolo slide1
function typeEffect(element, speed) {
  let text = element.innerHTML;
  element.innerHTML = "";

  let i = 0;
  let timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
let speed = 140;
let h1 = document.querySelector('h2');
let delay = h1.innerHTML.length * speed + speed;

// type affect to header

typeEffect(h1, speed);

document.getElementById('ActiveSlider1').style.display = 'block';

function slide(id) {
  let clicked = id.getAttribute('id');

  if (clicked == 'slider1') {
    disableClass('ActiveSlider', "Slide");
    document.getElementById('Slide1').style.display = 'block';
    document.getElementById('ActiveSlider1').style.display = 'block';
  }
  if (clicked == 'slider2') {
    disableClass('ActiveSlider', "Slide");
    document.getElementById('Slide2').style.display = 'block';
    document.getElementById('ActiveSlider2').style.display = 'block';
  }
  if (clicked == 'slider3') {
    disableClass('ActiveSlider', "Slide");
    document.getElementById('Slide3').style.display = 'block';
    document.getElementById('ActiveSlider3').style.display = 'block';
  }
  if (clicked == 'slider4') {
    disableClass('ActiveSlider', "Slide");
    document.getElementById('Slide4').style.display = 'block';
    document.getElementById('ActiveSlider4').style.display = 'block';
    
  }
}

function disableClass(...id) {
  id.forEach(element => {
    var classes = document.querySelectorAll("." + element);
    classes.forEach(element1 => {
      element1.style.display = 'none';
    });
  });
}

var io = io(window.location.origin);
var isPaused = false;

io.on("ping", (data) => {
    var v = new Date();
    if(isPaused) { return; }
    document.getElementById("value").innerHTML = data.val.toFixed(4);
    addData(v.getHours() +":"+ v.getMinutes() + ":" + v.getSeconds(), data.val.toFixed(4));
});
let lineChart = document.querySelector('#line');

//Line Chart
let line = new Chart(lineChart, {
  type: 'line',
  data: data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {}
});

const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;


function pauseManager(v) {
    if(isPaused == false) {
        isPaused = true;
        v.innerHTML = "Start";
    } else {
        isPaused = false;
        v.innerHTML = "Pause";
    }
}

function addData(label, data) {
  if(myChart.data.labels.length > 50){
      removeData(myChart);
  }
  myChart.data.labels.push(label);
  myChart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  myChart.update();
}

function removeData(chart) {
  chart.data.labels.shift();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.shift();
  });
  chart.update();
}