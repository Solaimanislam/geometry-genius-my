

function calculatePentagramArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    // console.log(perimeter);
    const apo = getInputValueById('pentagon-apothem');
    // console.log(apo);
    const area = 0.5 * perimeter * apo;
    // console.log(area);
    setInnerTextById('pentagon-area', area);
}
function getInputValueById(inputFieldId){
    const inputValue = document.getElementById(inputFieldId);
    const inputValueText = inputValue.value;
    const input = parseFloat(inputValueText);
    return input;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}