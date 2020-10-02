const recusiveSum = (num) => {
   if (typeof num === "number") {
      if (num >= 10) {
         const numArr = num.toString().split("");
         let ans = 0;
         for (const digit of numArr) {
            ans += Number(digit);
         }
         return recusiveSum(ans);
      }
      return num;
   } else {
      console.log("Please set a number");
   }
};

console.log(recusiveSum(9));
