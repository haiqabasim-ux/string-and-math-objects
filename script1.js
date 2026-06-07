
        // ========================================
        // ALL STRING METHODS
        // ========================================
   
     
         
        function str_length() {
            let str = document.getElementById("strInput").value;
            showStr("length: " + str.length,"Returns the length of a string");
                  
        }

        function str_charAt() {
            let str = document.getElementById("strInput").value;
          showStr("charAt(2): " + str.charAt(2),"This Method Returns the character at a specified index (position)");
        }

        function str_charCodeAt() {
            let str = document.getElementById("strInput").value;
           showStr("charCodeAt(0): " + str.charCodeAt(0),"This Method Returns the Unicode of the character at a specified index");
        }

        function str_concat() {
            let str = document.getElementById("strInput").value;
            showStr("concat(): " + str.concat(" - ", "Learn JS!"),"This Method Returns two or more joined strings");
        }

        function str_endsWith() {
            let str = document.getElementById("strInput").value;
            let s = document.getElementById("strSearch").value;
            showStr("endsWith('" + s + "'): " + str.endsWith(s),"This Method Returns if a string ends with a specified value");
        }

        function str_includes() {
            let str = document.getElementById("strInput").value;
            let s = document.getElementById("strSearch").value;
            showStr("includes('" + s + "'): " + str.includes(s),"This Method Returns if a string contains a specified value");
        }

        function str_indexOf() {
            let str = document.getElementById("strInput").value;
            let s = document.getElementById("strSearch").value;
           showStr("indexOf('" + s + "'): " + str.indexOf(s),"This Method 	Returns the index (position) of the first occurrence of a value in a string");
        }

        function str_lastIndexOf() {
            let str = document.getElementById("strInput").value;
            let s = document.getElementById("strSearch").value;
            showStr("lastIndexOf('" + s + "'): " + str.lastIndexOf(s),"This Method Returns the index (position) of the last occurrence of a value in a string");   
        }

        function str_match() {
            let str = document.getElementById("strInput").value;
            let r = str.match(/[A-Z]/g);
            showStr("match(/[A-Z]/g): " + (r ? r.join(", ") : "null"),"This Method Searches a string for a value, or a regular expression, and returns the matches");
        }

        function str_repeat() {
            let str = document.getElementById("strInput").value;
           showStr("repeat(2): " + str.repeat(2),"This Method Returns a new string with a number of copies of a string");
        }

        function str_replace() {
            let str = document.getElementById("strInput").value;
            let s = document.getElementById("strSearch").value;
            let r = document.getElementById("strReplace").value;
           showStr("replace(): " + str.replace(s, r),"Searches a string for a pattern, and returns a string where the first match is replaced");
        }

        function str_search() {
            let str = document.getElementById("strInput").value;
            let s = document.getElementById("strSearch").value;
           showStr("search('" + s + "'): " + str.search(s),"Searches a string for a value, or regular expression, and returns the index (position) of the match");
        }

        function str_slice() {
            let str = document.getElementById("strInput").value;
            showStr("slice(0, 5): " + str.slice(0, 5),"Extracts a part of a string and returns a new string");
        }

        function str_split() {
            let str = document.getElementById("strInput").value;
            showStr("split(' '): " + str.split(" ").join(" | "),"A string can be converted to an array with the split() method:");
        }

        function str_startsWith() {
            let str = document.getElementById("strInput").value;
            let s = document.getElementById("strSearch").value;
            showStr("startsWith('" + s + "'): " + str.startsWith(s),"This Method Checks whether a string begins with specified characters");
        }

        function str_substring() {
            let str = document.getElementById("strInput").value;
            showStr("substring(0, 5): " + str.substring(0, 5),"This Mathod Extracts characters from a string, between two specified indices (positions)");
        }

        function str_toLowerCase() {
            let str = document.getElementById("strInput").value;
            showStr("toLowerCase(): " + str.toLowerCase(),"This Method Returns a string converted to lowercase letters");
        }

        function str_toUpperCase() {
            let str = document.getElementById("strInput").value;
            showStr("toUpperCase(): " + str.toUpperCase(),"Returns a string with removed whitespaces");
        }

        function str_trim() {
            let str = document.getElementById("strInput").value;
            //let str = "   " + document.getElementById("strInput").value + "   ";
           " " + str.value + "  ";
            showStr("trim(): '" + str.trim() + "'","This Method Returns a string with removed whitespaces");
        }

        function str_at() {
            let str = document.getElementById("strInput").value;
           showStr("at(0): " + str.at(0) + " | at(-1): " + str.at(-1),"This Method Returns an indexed character from a string ");
        }

       /* function str_codePointAt() {
            let str = document.getElementById("strInput").value;
            showStr("codePointAt(0): " + str.codePointAt(0),"This Method Returns the Unicode value at an index (position) in a string");
        }

        function str_padEnd() {
            let str = document.getElementById("strInput").value;
          showStr("padEnd(30, '*'): " + str.padEnd(30, '*'),"This Method Pads a string at the end");
        }

        function str_padStart() {
            let str = document.getElementById("strInput").value;
           showStr("padStart(0, '*'): " + str.padStart(30, '*'),"This MethodPads a string from the start");
        }*/

        function str_replaceAll() {
            let str = document.getElementById("strInput").value;
            let s = document.getElementById("strSearch").value;
            let r = document.getElementById("strReplace").value;
           showStr("replaceAll(): " + str.replaceAll(s, r),"This Method 	Searches a string for a pattern and returns a new string where all matches are replaced");
        }

        function showStr(msg , message) {
            document.getElementById("strOutput").innerHTML = msg;
            document.getElementById("strmessage").innerHTML = message;
        }


        // ========================================
        // ALL NUMBER METHODS
        // ========================================

        function num_toString() {
            let n = Number(document.getElementById("numInput").value);
           showNum("toString(): " + n.toString() + " (type: " + typeof n.toString() + ")","The toString() method returns a number as a string.");
           //typeof n.tostring() type batata hay kya yeh string hay 
        }

        function num_toFixed() {
            let n = Number(document.getElementById("numInput").value);
           showNum("toFixed(2): " + n.toFixed(2),"toFixed() returns a string, with the number written with a specified number of decimals.");
        }

       /* function num_toPrecision() {
              let n = Number(document.getElementById("numInput").value);
           showNum("toPrecision(4): " + n.toPrecision(4),"toPrecision() returns a string, with a number written with a specified length:");
        }

        function num_toExponential() {
              let n = Number(document.getElementById("numInput").value);
            showNum("toExponential(2): " + n.toExponential(2),"<p>The toExponential() method returns a string, with the number rounded and written using exponential notation.</p><p>An optional parameter defines the number of digits behind the decimal point.</p>");
        }*/

      /*  function num_valueOf() {
            //let n = new Number(123);
              let n = Number(document.getElementById("numInput").value);
            showNum("valueOf(): " + n.valueOf(),"The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.There is no reason to use it in your code.");
        }*/

        function num_isNaN() { 
             let n = Number(document.getElementById("numInput").value);

           showNum("Number.isNaN(" + n + "): " + Number.isNaN(Number(n)),"isNaN(): Checks whether a value is Number.NaN" );
        }
        function applyMath_sqrt(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.sqrt(" + n + "): " + Math.sqrt(n));

        }
        function applyMath_pow2(){
              let n = Number(document.getElementById("numInput").value);
          showNum("Math.pow 2(" + n + "): " + Math.pow(n, 2));
        }
        function applyMath_pow3(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.pow 3(" + n + "): " + Math.pow(n, 3)); 
        }
        function applyMath_abs(){
                let n = Number(document.getElementById("numInput").value);
          showNum("Math.abs (" + n + "): " + Math.abs(n));
        }
        function applyMath_log(){
                   let n = Number(document.getElementById("numInput").value);
          showNum("Math.log (" + n + "): " + Math.log(n));
        }
        function applyMath_exp(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.exp (" + n + "): " + Math.exp(n));
        }
         function applyMath_random(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.random() (" + n + "): " + Math.random());
        }
         function applyMath_sin(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.sin() (" + n + "): " + Math.sin(n));
        }
         function applyMath_cos(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.cos() (" + n + "): " + Math.cos(n));
        }
         function applyMath_tan(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.tan() (" + n + "): " + Math.tan(n));
        }
         function applyMath_round(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.round() (" + n + "): " + Math.round(n));
        }
         function applyMath_floor(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.floor() (" + n + "): " +Math.floor(n));
        }
         function applyMath_ceil(){
            let n = Number(document.getElementById("numInput").value);
          showNum("Math.ceil() (" + n + "): " + Math.ceil(n));
        }
         function applyMath_add(){
            let n = Number(document.getElementById("numInput").value);
            let n1 = Number(document.getElementById("numInput2").value);
            let sum = n+n1
          showNum("sum of "+ n + "and "  + n1 + " is : " + sum);
        }
           function applyMath_sub(){
            let n = Number(document.getElementById("numInput").value);
            let n1 = Number(document.getElementById("numInput2").value);
            let sub = n-n1
          showNum("Subtract "+ n + "from "  + n1 + " is : " + sub);
        }
                function applymath_divi(){
            let n = Number(document.getElementById("numInput").value);
            let n1 = Number(document.getElementById("numInput2").value);
            let divi = n/n1
          showNum("Divition of "+ n + " to "  + n1 + " is : " + divi);
        }
                function applyMath_mul(){
            let n = Number(document.getElementById("numInput").value);
            let n1 = Number(document.getElementById("numInput2").value);
            let mul = n*n1
          showNum("Multiplication "+ n + "from "  + n1 + " is : " + mul);
        }
        /*function num_isFinite() {
              let n = Number(document.getElementById("numInput").value);
           showNum("Number.isFinite(" + n + "): " + Number.isFinite(Number(n)), "The Number.isNaN() method returns true if the argument is NaN (Not a Number).");
        }

        function num_isInteger() {
             let n = Number(document.getElementById("numInput").value);
            showNum("Number.isInteger(" + n + "): " + Number.isInteger(Number(n)),"The Number.isInteger() method returns true if the argument is an integer.");
        }

        function num_isSafeInteger() {
              let n = Number(document.getElementById("numInput").value);
            showNum("Number.isSafeInteger(" + n + "): " + Number.isSafeInteger(Number(n)),"The Number.isSafeInteger() method returns true if the argument is a safe integer.<br>A safe integer is an integer that can be exactly represented as a double precision number.");
        }

        function num_parseFloat() {
              let n = Number(document.getElementById("numInput").value);
           showNum("Number.parseFloat('" + n + "'): " + Number.parseFloat(n), "Number.parseFloat() parses a string and returns a number.Spaces are allowed. Only the first number is returned:" );
        }

        function num_parseInt() {
              let n = Number(document.getElementById("numInput").value);
          showNum("Number.parseInt('" + n + "'): " + Number.parseInt(n),"Number.parseInt() parses a string and returns a whole number.Spaces are allowed. Only the first number is returned:");
        }

        function num_MAX_VALUE() {
              let n = Number(document.getElementById("numInput").value);
            showNum("Number.MAX_VALUE: " + Number.MAX_VALUE,"Returns the largest number possible in JavaScript");
        }

        function num_MIN_VALUE() {
              let n = Number(document.getElementById("numInput").value);
            showNum("Number.MIN_VALUE: " + Number.MIN_VALUE,"Returns the smallest number possible in JavaScript");
        }

        function num_NEGATIVE_INFINITY() {
            showNum("Number.NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY);
        }
            function showSqrt() {
                let n = Number(document.getElementById("numInput").value);
       // let num = parseFloat(inputBox.value);
       showNum("Math Squire rote " +  Math.sqrt(n));
       // let ans = Math.sqrt(n);
        //resultBox.innerText = ans;
    }

        function num_POSITIVE_INFINITY() {
            showNum("Number.POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY, "Represents infinity (returned on overflow)");
        }

        function num_EPSILON() {
            showNum("Number.EPSILON: " + Number.EPSILON,"Returns the difference between 1 and the smallest number greater than 1");
        }*/

        function showNum(msg, message) {
            document.getElementById("numOutput").innerHTML = msg;
            document.getElementById("nummessage").innerHTML = message;
        }
    