class staticCalc {
    constructor() {
    this.resTimes = [];
  }
 
    pushTimes(resTmMs) {
      if(resTmMs)
        this.resTimes.push(resTmMs);
    // TODO implement
  }
 
    getMedian(){
    // TODO implement
    var median = 0, lengthTm = this.resTimes.length;
    this.resTimes.sort();
    if (lengthTm % 2 === 0) {
        median = (this.resTimes[lengthTm/2-1]+this.resTimes[lengthTm/2])/2;
     }
     else {
        median = this.resTimes[(lengthTm - 1) / 2];
     }
         return median;
  }
 
    Avg() {
    var total = 0, a;
    for (a=0;a<this.resTimes.length;a++) {
        total+=this.resTimes[a];
    }
    return total/this.resTimes.length
  }
 
}
