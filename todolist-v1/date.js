module.exports.getDate= getDate;
function getDate() {
    let today = new Date();
    // var currDay = today.getDay();   // stores current day as a number from 0-6 (Sunday-Saturday)
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

module.exports.getDay= getDay;
function getDay() {
    let today = new Date();
    // var currDay = today.getDay();   // stores current day as a number from 0-6 (Sunday-Saturday)
  
    let options = {
      weekday: "long"
    };
  
    let day = today.toLocaleDateString("en-US", options);
    return day;
  }
