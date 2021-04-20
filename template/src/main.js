
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './dino.js';

function showDinoIpsum(dinoResponse) {
  for (let i = 0; i < dinoResponse.length; i++) {
    const arr = dinoResponse[i];
    $("#response").append(`<li>${arr.join(" ")}</li>`); 
  }
}
$('#submit').on("click", (event) => {
  event.preventDefault();
  let wordNum = parseInt($("#words").val());
  let paragraphNum = parseInt($("#paragraphs").val());
  console.log(`wordNum: ${wordNum} paragraphNum: ${paragraphNum}`);
  let promise = Dino.someWords(wordNum, paragraphNum);
  promise.then(function(response){
    const dinoResponse = JSON.parse(response);
    console.log(dinoResponse);
    showDinoIpsum(dinoResponse);
  },function(error){
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
})