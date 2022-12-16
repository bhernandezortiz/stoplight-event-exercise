(function() {
  'use strict';
  // STOP BUTTON Event Listeners
  var stopBtn = document.getElementById('stopButton'); 
  stopBtn.addEventListener('click', () => {
    var stopLight = document.getElementById('stopLight');
    stopLight.classList.toggle('stop');
  });
  stopBtn.addEventListener('mouseenter', () => {
    var stopButton = document.getElementById('stopButton');
    console.log(`Entered ${stopButton.textContent} button`) 
  });
  stopBtn.addEventListener('mouseleave', () => {
    var stopButton = document.getElementById('stopButton');
    console.log(`Left ${stopButton.textContent} button`)
  });
  
  // SLOW BUTTON Event Listeners
  var slowBtn = document.getElementById('slowButton')
  slowBtn.addEventListener('click', () => {
    var slowLight = document.getElementById('slowLight');
    slowLight.classList.toggle('slow');
  }); 
  slowBtn.addEventListener('mouseenter', () => {
    var slowButton = document.getElementById('slowButton');
    console.log(`Entered ${slowButton.textContent} button`)
  }); 
  slowBtn.addEventListener('mouseleave', () => {
    var slowButton = document.getElementById('slowButton');
    console.log(`Left ${slowButton.textContent} button`)
  }); 

  // GO BUTTON Event Listeners
  var goBtn = document.getElementById('goButton') 
  goBtn.addEventListener('click', () => {
    var goLight = document.getElementById('goLight');
    goLight.classList.toggle('go');
  });
  goBtn.addEventListener('mouseenter', () => {
    var goButton = document.getElementById('goButton');
    console.log(`Entered ${goButton.textContent} button`);
  });
  goBtn.addEventListener('mouseleave', () => {
    var goButton = document.getElementById('goButton');
    console.log(`Left ${goButton.textContent} button`) 
  });

  var btnClass = document.querySelector('#controls');
  btnClass.addEventListener('click', (e) => {
    if (e.target.classList.toggle(true)) {
      console.log(`${e.target.textContent} bulb off`);
    } else console.log(`${e.target.textContent} bulb on`)
  })
})();