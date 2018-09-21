let array=['tittle','author','alreadyRead']

alreadyRead=0
array[0]="The Hobbit";
array[1]="J.R.R.Tolkien";
 console.log(array[0]+" by "+array[1]);
let a=array[0]+" by "+array[1];
alreadyRead=1
array[0]="Wings Of Fire";
array[1]="A.P.J.Abdul Kalam";
console.log(array[0]+" by "+array[1]);
b=(array[0]+" by "+array[1]);
if (alreadyRead==0) {
  console.log("you already read "+a);
} else {console.log("you still need to read "+a+" & "+b);
}

