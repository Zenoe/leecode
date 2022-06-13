var countAndSay = function(n) {

  const cns = (strDigit) => {
    let len = strDigit.length;
    let i = 1;
    let count = 1;
    let result = '';
    while(i<len){
      if(strDigit[i] !== strDigit[i-1]){
        result += count.toString() + strDigit[i-1]
        count = 1
      }else{
        ++count;
      }
      i++;
    }

    result += count.toString() + strDigit[i-1]
    return result
  }

  a=[]
  a[1] = '1'
  for (let i=2;i<=n;i++) {
    a[i] = cns(a[i-1])
  }

  return a[n]
};

var countAndSay = function(n) {
  const cns = (strDigit) => {
    let len = strDigit.length;
    // let i = 1;
    let i = 0;
    let count = 1;
    let result = '';
    while(i<len){
      if(strDigit[i] !== strDigit[i+1]){
        result += count + strDigit[i]
        count = 1
      }else{
        ++count;
      }
      i++;
    }
    return result
  }

  a=[]
  a[1] = '1'
  for (let i=2;i<=n;i++) {
    a[i] = cns(a[i-1])
  }

  return a[n]
};

console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));


/** 100% */
var countAndSay = function (n) {
  if (n === 1) return "1"

  return countAndSay(n - 1)
    .match(/(.)\1*/g)
    .map((match) => match.length + match[0])
    .join("")
}
