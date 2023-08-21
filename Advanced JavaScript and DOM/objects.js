function HouseMaid(yearsOfExperience, name, cleaningRepetoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name= name;
    this.cleaningRepetoire= cleaningRepetoire;
    this.clean = function() {
        alert("Cleaning in progress ...");
    }
}
// var houseKeeper1 = new HouseMaid(4, "Jenny", ["bathroom, living room"])
// var houseKeeper2 = new HouseMaid(12, "Janet", ["dining, living room"])
// houseKeeper1.clean();

// console.log(houseKeeper2)

// var bellBoy1 = {
//     name: "Timmy",
//     age: 19,
//     hasWorkPermit: true,
//     languages: ["French", "English"],
//     moveSuitCase: function(){
//         alert("May I take your Suitcase");
//         pickupSuitCase();
//     }
// }