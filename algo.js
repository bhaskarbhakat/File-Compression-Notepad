// function convert() {
//     document.getElementById("textfile").value = "Fifth Avenue, New York City";
// }

// var tempfile = document.getElementById('myfile');
//     document.getElementById('myfile').addEventListener('change', function() {
//     var GetFile = new FileReader();
//     GetFile .onload=function(){
//     // DO Somthing
//     document.getElementById('textfile').value= GetFile.result;
//     }
//     GetFile.readAsText(this.files[0]);
// })


window.onload = function () {
    myfile = document.getElementById("myfile")
    card1 = document.getElementById("card1");
	card2 = document.getElementById("card2");
	card3 = document.getElementById("card3");
    myfile = document.getElementById("myfile");
    submitbutton = () => {
        let file = myfile.files[0];
		if(file==undefined){
            alert("Please select file before you submit");
            return;
        }
        let nameSplit = file.name.split('.');
        let file_name = nameSplit[0];
        let file_extension = nameSplit[1].toLowerCase();
        if(file_extension!="txt")
        {
            alert("submit .txt extension file");
            return ;
        }

		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "inline-flex";
		document.getElementById("card2").style.visibility = "visible";
	}

}