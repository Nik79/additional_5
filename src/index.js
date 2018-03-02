module.exports = function check(str, bracketsConfig) {
 var currentStr = str;

   for (var k = 0; k < bracketsConfig.length; k++)
   {
    var currentPair = bracketsConfig[k];
    var patternForReplacement = currentPair[0] + currentPair[1];

    for (var j = 0; j <= str.length/2; j++) {
     currentStr = currentStr.replace(patternForReplacement, '');
    }
   }

   var isCorrect = (currentStr.length == 0);

   return isCorrect;
}
