// function Loadjson(file,callback){
// var xhr = new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
//    xhr.onreadystatechange=function(){
// 		   if(xhr.readyState === 4 && xhr.status == "200"){
// 	     callback(xhr.responseText);
// 	   }
//     };
// xhr.send(null);
// }
// Loadjson("data.json",function(text){
//    var data = JSON.parse(text);
//    console.log(data);
//    basics(data.details);
//    careerinfo(data.career);
//    educationinfo(data.education);
//    skillset(data.skills);
//    hobbies(data.hobbies);
// })
 function Loadjson(file){
 	return new Promise((resolve,reject)=>{
 		return fetch(file).then(response=>{
 			if(response.ok){
 				resolve(response.json());
 			}
 			else{
 				reject(new Error('error'));
 			}
 		})
 	})
 }
var newfile = Loadjson("data.json");
newfile.then(data=>{
   console.log(data);
   basics(data.details);
   careerinfo(data.career);
   educationinfo(data.education);
   skillset(data.skills);
   hobbies(data.hobbies);
})
var left = document.querySelector(".left");
function basics(det){
	var img = document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
     var name = document.createElement("h3");
     name.textContent = det.name;
     left.appendChild(name);
     var phoneno = document.createElement("h3");
     phoneno.textContent = det.phoneno;
     left.appendChild(phoneno);
     var email = document.createElement("a");
     email.href = "mailto:sripriyavemuri@gmail.com";
     email.textContent = det.email;
     left.appendChild(email);
     var adrs = document.createElement("h2");
     adrs.textContent = "Address";
     left.appendChild(adrs);
     var ele = document.createElement("hr");
     left.appendChild(ele);
     var add = document.createElement("p");
     add.textContent = det.address;
     left.appendChild(add);
 }
var right = document.querySelector(".right");
function careerinfo(info){
	var ca = document.createElement("h2");
	ca.textContent = "Career Objective";
	right.appendChild(ca);
	var ca1 = document.createElement("hr");
	right.appendChild(ca1);
	var ca2 = document.createElement("p");
	ca2.textContent = info.info;
	right.appendChild(ca2);
}	
function educationinfo(edu){
	var ed = document.createElement("h1");
	ed.textContent = "Education Qualification";
	right.appendChild(ed);
	var ed1 = document.createElement("hr");
	right.appendChild(ed1);
	var table1 = document.createElement("table");
	table1.border = "2";
	right.appendChild(table1);
	tabledata = "";
	for(i=0;i<edu.length;i++){
		tabledata += "<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
     }
     table1.innerHTML = tabledata;
}
function skillset(skill){
	var sk = document.createElement("h1");
	sk.textContent = "Technical skills";
	right.appendChild(sk);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<skill.length;i++){
		var s = document.createElement("h3");
		s.textContent = skill[i].title;
		right.appendChild(s);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function hobbies(ho){
	var a = document.createElement("h1");
	a.textContent = "hobbies";
	right.appendChild(a);
	var hr1 = document.createElement("hr");
	right.appendChild(hr1);
	for(i=0;i<ho.length;i++){
		var s1 = document.createElement("h3");
		s1.textContent = ho[i].title;
		right.appendChild(s1);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = ho[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function openpage(){
	window.open("resume.html","_self",true)
}