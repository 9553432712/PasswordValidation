        function validatePassword(){
            try{
                var i = document.getElementById("i").value;
                var str = i;
                var patt = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$");
                var res = patt.test(str);
                if(Boolean(res) && !Boolean(currentYear(i)) && Boolean(spaceRest(i))  && Boolean(checkConNumber(i))){
                	alert("Entered Password is valid");
                	//alert(i);
                }else{
                	alert("Entered Password is invalid");
                }
            }
            catch(e){
                alert(e);
            }
        }
        function currentYear(i){
        	// returns the current year
        	var year = new Date().getFullYear();
            return n = i.includes(year);
        }
        function spaceRest(i){
        	var str = i;
            //alert("space"+i.indexOf(' '));
            if(i.indexOf(' ') == 0 || i.indexOf(' ')==i.length-1){
            	return false;
            }else {
                if(i.indexOf(' ')!=-1){
            		var l = i.length;
                	//alert(l);
                	//alert(i.split(' ').length-1);
                	var n = i.split(' ').length - 1;
                	//alert(n);
            		if(n/l*100>15)
                	return false;
                }

            }
            return true;
            //alert("space --"+res);

        }

        function checkConNumber(i) {
            var s = i;
            try{
                for (var i = 0; i < s.length-1; i++)
                {
                    var res = s.charAt(i);

                    //alert(res+" "+isNaN(s.charAt(i+1)));

                    if(!isNaN(s.charAt(i)) && !isNaN(s.charAt(i+1))){
                        if(parseInt(s.charAt(i))==parseInt(s.charAt(i+1))-1){
                            //alert("");
                            return false;
                        }
                    }
                }
            }
            catch(e){
            	alert(e);
            }
            return true;
        }