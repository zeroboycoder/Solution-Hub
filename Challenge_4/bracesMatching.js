const bracesMatching = (testStr) => {
   let returnValue = true;
   const checkBraces = ["(", ")", "{", "}", "[", "]"];
   const braces = [];
   for (let str of testStr) {
      checkBraces.includes(str) ? braces.push(str) : null;
   }

   const starterBraces = [];
   for (let brace of braces) {
      if (["(", "{", "["].includes(brace)) {
         starterBraces.push(brace);
      } else {
         const currentStarterBrace = starterBraces.pop();
         if (currentStarterBrace === "(") {
            brace === ")"
               ? (returnValue = true && returnValue)
               : (returnValue = false && returnValue);
         }
         if (currentStarterBrace === "{") {
            brace === "}"
               ? (returnValue = true && returnValue)
               : (returnValue = false && returnValue);
         }
         if (currentStarterBrace === "[") {
            brace === "]"
               ? (returnValue = true && returnValue)
               : (returnValue = false && returnValue);
         }
         if (currentStarterBrace === undefined) {
            returnValue = false && returnValue;
         }
      }
   }
   if (starterBraces.length) {
      returnValue = false && returnValue;
   }
   return returnValue;
};

bracesMatching("x*(x-y)*[x-z*{x-a}]") ? console.log("YES") : console.log("NO");
