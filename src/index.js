module.exports = function toReadable (number) {
  const numObj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
  }
  let nStr = String(number);
  let res = '';
  if (nStr.length === 3) {
      let hundreds = `${numObj[+nStr[0]]} ${numObj[100]}`;
      let decid = number-(+nStr[0]*100)>20?
      `${numObj[+nStr[1]*10]} ${numObj[+nStr[2]]}`:
      number-(+nStr[0]*100)<10?
      numObj[+nStr[2]]:numObj[+nStr[1]*10+(+nStr[2])];
      if(+nStr[2]===0)decid=numObj[+nStr[1]*10];
      
      if(+nStr[1]===0) decid= numObj[+nStr[2]];
    res= `${hundreds} ${decid}`;
    if(+nStr[1]===0 && +nStr[2]===0)res=hundreds;
  }
  if (nStr.length === 2) {
    res= +nStr[0]*10+(+nStr[1])<20?numObj[+nStr[0]*10+(+nStr[1])]:`${numObj[+nStr[0]*10]} ${numObj[+nStr[1]]}`;
    if(+nStr[1]===0)res=numObj[+nStr[0]*10];
  }
  if (nStr.length === 1) {
    res= `${numObj[+nStr[0]]}`;
  }
  return res;

}
