

let dot1 = document.querySelector("#d1");
let dot2 = document.querySelector("#d2");
let dot3 = document.querySelector("#d3");


let slide1 = document.querySelector("#s1");
let slide2 = document.querySelector("#s2");
let slide3 = document.querySelector("#s3");


let write = document.querySelector("#connect");
let write2 = document.querySelector("#connect2");


let dot2Function = () => {
    slide1.classList.add("active");
    slide3.classList.add("active")
    slide2.classList.remove("active");
    write2.classList.add("active");
   

};


let dot1Function = () => {
    slide2.classList.add("active");
    slide1.classList.remove("active");
    slide3.classList.add("active")
    write.classList.add("active");
    write2.classList.add("active");
   

};

dot2.addEventListener("click", dot2Function);
dot1.addEventListener("click", dot1Function);


let showWrite = () => {

    write.classList.remove("active");

};

dot2.addEventListener("click", showWrite);



let GetAccessToChannnel = document.querySelector("#channel");
let GetAccessToText = document.querySelector("#get");


let dot3Function = () => {
    slide1.classList.add("active");
    slide2.classList.add("active");
    slide3.classList.remove("active");
    write.classList.add("active");
    write2.classList.remove("active");
};

dot3.addEventListener("click", dot3Function);


let accessToInfo = document.querySelector("#info");
let classState = document.querySelector(".hidden");


let getAcess = () => {
    if(classState.classList.contains("hidden")){
        accessToInfo.classList.remove("hidden");
        
        
    } else{
        accessToInfo.classList.add("hidden");
        GetAccessToText.classList.add("link");
    };
    
  
   
};

let button = document.querySelector("#help");
button.addEventListener("click", getAcess);




let showLink = () => {
    if(GetAccessToText.classList.contains("link")){
        GetAccessToText.classList.remove("link");
    } else{
        GetAccessToText.classList.add("link");
    };
   
  
};

GetAccessToChannnel.addEventListener("click", showLink);





let getBitID = document.querySelector("#bit");
let getUID = document.querySelector("#u");
let getUID2 = document.querySelector("#u2");


let show = () => {
    if(getUID.classList.contains("hide")){
        getUID.classList.remove("hide");
        getUID2.classList.remove("hide");

    } else{
        getUID.classList.add("hide")
        getUID2.classList.add("hide")
    };
  
};

getBitID.addEventListener("click", show);

