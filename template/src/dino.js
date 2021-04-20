
export default class Dino {
  static someWords(wordNum, paragraphNum){
    return new Promise(function(resolve, reject){
      const request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&words=${wordNum}&paragraphs=${paragraphNum}`;
      request.onload = function() {
        if(this.status === 200){
          resolve(request.response);
        }else{
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

