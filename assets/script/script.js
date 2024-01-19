// =================
// variables

let text = "write some text"
let n1 = 384
let n2 = 183
let response = true

let result = n1 + n2


// =================
// select HTML elements

const dv1 = document.getElementById("dataviz_01")
const sections = document.getElementsByClassName("no_margin")



// =================
// edit the DOM

const title = document.querySelector("h1")
const subtitle = document.querySelector("h2")


// =================
// edit css

subtitle.style.color = "gray"
subtitle.style.fontSize = "2rem"


// =================
//function

function my_first_function(){
    console.log("works!")
}


function sum(n1,n2){
    let result = n1 + n2
    title.innerHTML = result
}


// =================
// listener

function listener(element){
    dv1.addEventListener("mouseenter", function(){
        console.log("in")
    })
    
    dv1.addEventListener("mouseleave", function(){
        console.log("out")
    })
}

// =================
// highlight

function highlight(){ // dv1

    const flows = dv1.contentDocument.documentElement.getElementById("flows").querySelectorAll("g")

    flows.forEach(function(el){

        el.addEventListener("mouseenter", function(){
            flows.forEach(function(a){
                a.style.opacity = 0.3
            })
            this.style.opacity = 1
        })

        el.addEventListener("mouseleave", function(){
            flows.forEach(function(a){
                a.style.opacity = 1
            })
        })
    })
}

// =================
// page load
function showGraph(graphId) {
  var graphs = document.querySelectorAll('.flourish-embed.graph');
  graphs.forEach((graph) => {
    if (graph.id === graphId) {
      graph.style.display = 'block'; // Show the selected graph
    } else {
      graph.style.display = 'none'; // Hide other graphs
    }
  });

  var buttons = document.querySelectorAll('.graph-button');
  buttons.forEach((button) => {
    var buttonId = 'btn' + graphId.charAt(0).toUpperCase() + graphId.slice(1);
    if (button.id === buttonId) {
      button.classList.add('active'); // Add 'active' class to the clicked button
    } else {
      button.classList.remove('active'); // Remove 'active' class from other buttons
    }
  });

  var explanations = document.querySelectorAll('.explanation');
  explanations.forEach((explanation) => {
    if (explanation.id === 'explanation' + graphId.slice(-1)) {
      explanation.style.display = 'block'; // Show the explanation for the selected graph
    } else {
      explanation.style.display = 'none'; // Hide explanations for other graphs
    }
  });
}


