const enter = confirm("open the door?"); // bertujuan agar user meng inputkan nama
        
if(enter) {
    const name = prompt("What's your name?");

    alert(`Hi ${name}`);

} else {
    alert("goodbye");
}