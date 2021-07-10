let number = 0;

const addItem = () => {
    number++;
    let label = document.createElement('label');

    label.className = 'checkBox';

    let inputText = document.getElementsByTagName("textarea")[0].value;

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.name = "task";
    label.appendChild(checkBox);
    label.appendChild(document.createTextNode(inputText));

    document.getElementsByName('checkBoxForm')[0].appendChild(label);
}

const delItem = () => {
    let checkedBoxLabels = [];
    let checkBoxes = document.checkBoxForm.getElementsByTagName("label");
    
    for(const checkBox of checkBoxes){
        if(checkBox.getElementsByTagName("input").task.checked){
            checkedBoxLabels.push(checkBox);
        }
    }

    if (number == 0) {
        alert('削除できる項目がありません');
        return;
    }

    for(const delLabel of checkedBoxLabels){
        delLabel.remove();
    }
}
