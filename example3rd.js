function cal(a,b)
{
A=b-a;
C=b-a;
B=C+1;
 l=(b/4-b/100+b/400)-(a/4-a/100+a/400);
     console.log( " number of leap years passed are  " +l);
console.log(" and your age is "+A+ "  or  "+B);
}
today=new Date();
console.log("today's date is"+today);
cal(2000,2010);