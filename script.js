document.getElementById('font-bold').addEventListener('click', function(){
    const textareaField = document.getElementById('text-area');
    textareaField.style.fontWeight='bold';
})

// italic

document.getElementById('font-italic').addEventListener('click', function(){
    const textareaField = document.getElementById('text-area');
    textareaField.style.fontStyle='italic';
})

// underline 

document.getElementById('font-underline').addEventListener('click', function(){
    const textareaField = document.getElementById('text-area');
    textareaField.style.textDecoration='underline';
})

// text align left 

document.getElementById('text-left').addEventListener('click', function(){
    const textareaField = document.getElementById('text-area');
    textareaField.style.textAlign='left';
})

// text align center 

document.getElementById('text-center').addEventListener('click', function(){
    const textareaField = document.getElementById('text-area');
    textareaField.style.textAlign='center';
})

// text align right 

document.getElementById('text-right').addEventListener('click', function(){
    const textareaField = document.getElementById('text-area');
    textareaField.style.textAlign='right';
})
// text align justify 

document.getElementById('text-justify').addEventListener('click', function(){
    const textareaField = document.getElementById('text-area');
    textareaField.style.textAlign='justify';
})

// font size 

document.getElementById('font-size').addEventListener('click', function(){
    const fontsizeInput = document.getElementById('font-size');
    const textareaField = document.getElementById('text-area');

    const fontSize = fontsizeInput.value+"px";
    textareaField.style.fontSize = fontSize;
})

// upper case transformation 

document.getElementById('upper-case').addEventListener('click', function(){
    const textareaField = document.getElementById('text-area');
    textareaField.style.textTransform='uppercase';
})

// font color 
document.getElementById('font-Color').addEventListener('input', function(){
    const colorPickerInput = document.getElementById('font-Color');
    const colorPicker = colorPickerInput.value;
    const textareaField = document.getElementById('text-area');
    textareaField.style.color=colorPicker;

})

// function applycolor() {
    
//     const fontColorInput = document.getElementById("font-Color");
//     const contentElement = document.getElementById("text-area");
    
    
//     const fontColor = fontColorInput.value;
    
//     contentElement.style.color = fontColor;
// }