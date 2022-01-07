let result_text = document.getElementById("result-number");
let result = 0;
function calculate(){
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender-list").value;
    var height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let activity = document.getElementById("activity-list").value;

    if(gender=="male"){
        result = (10*weight) + (6.25*height) - (5*age) + 5
    }else{
        result = (10*weight) + (6.25*height) - (5*age) - 161
    }
    if(activity=="Sedentary"){
        result*=1.2;
    }else if(activity=="Slight"){
        result*=1.375;
    }else if(activity=="Moderate"){
        result*=1.55;
    }else if(activity=="Very active"){
        result*=1.725;
    }else{
        result*=1.9;
    }

    result = Math.round(result);
    result_text.innerHTML = result;
    window.scrollTo(0,document.body.scrollHeight);
}


function deductCalorie(){
    let calorie = parseInt(document.getElementById("calorie").value);
    result = Math.round(result) - calorie
    if(result<0){
        result_text.innerHTML = 0;
    }else{
        result_text.innerHTML = result;
    }
    document.getElementById("calorie").value = "";
    document.getElementById("food").value = "";
}