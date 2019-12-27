function doFirst(){
    console.log("First");
    doSecond();
}
function doSecond(){
    console.log("Second");
    doFirst();
}
doFirst();
