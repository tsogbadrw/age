// DOM document -> html file deerh buh code
///console.log(document);
//var h1 = document.getElementsByTagName('h1') [0]
///console.log(h1);
// innerText = "text bichine"; --> tag dotorh text uurchilnu
//h1.innerText = "Sain uu";
// .style.styleName = "style utga" --> tag-d style uguh
//h1.style.color="red";
//var h2 = document.getElementsByTagName('h1') [1]
//h2.innerText="hey";
//h2.style.backgroundColor="aqua";
var inputAge = document.getElementsByTagName('input') [0];
console.log (inputAge);
var result = document.getElementsByTagName('p')[0];
console.log (result);
var currentYear=2023, birthYear;
function convert(){
	if(inputAge.value>110){
		result.innerText+"hun iim naslas bolomjgui";
		result.style.color="red";
	}else if(inputAge.value<0){
		result.innerYext="0-ees baga baij bolohgui";
		result.style.color="red";
	}else if(inputAge.value==""){
		alert("Hooson baij bolohgui");
	}else{
		birthYear = currentYear - inputAge.value;
		result.innerText="button darsan : " + birthYear;;
    }
	
}