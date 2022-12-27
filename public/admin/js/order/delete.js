function myFunction(page) {
    let trEle = document.querySelectorAll('tr');
    trEle.forEach((item, index) => {
        let orderId = item.id;
        let att = document.createAttribute('type');
        att.value = "checkbox"
        let att1 = document.createAttribute('value');
        att1.value = orderId;
        let att2 = document.createAttribute('onchange');
        att2.value = `ifCheck(${index})`
        let td = document.createElement('td');
        let input = document.createElement('input');
        input.setAttributeNode(att);
        input.setAttributeNode(att1);
        input.setAttributeNode(att2);
        td.appendChild(input);
        item.appendChild(td);
    })
    let btn = document.createElement('button');
    let btn1 = document.createElement('button');
    let att = document.createAttribute('type');
    let att1 = document.createAttribute('type');
    let attbtnPr = document.createAttribute('class');
    let attbtnPr1 = document.createAttribute('class');
    let clickEve = document.createAttribute('onclick');
    clickEve.value = `deleteFunction(${page})`;
    let cancelEve = document.createAttribute('onclick');
    cancelEve.value = 'cancelFunction()'
    att.value = 'button';
    att1.value = 'button';
    attbtnPr.value = 'btn btn-primary';
    attbtnPr1.value = 'ms-3 btn btn-danger';
    btn.innerHTML = 'Confirm';
    btn1.innerHTML = 'Cancel';
    btn.setAttributeNode(att);
    btn.setAttributeNode(clickEve)
    btn.setAttributeNode(attbtnPr)
    btn1.setAttributeNode(att1);
    btn1.setAttributeNode(cancelEve);
    btn1.setAttributeNode(attbtnPr1)
    document.getElementById('actionDelete').appendChild(btn);
    document.getElementById('actionDelete').appendChild(btn1);
}

function ifCheck(value) {
    if (value === 0) {
        if (document.getElementsByTagName('input')[3].checked === true) {
            document.querySelectorAll('input[type=checkbox]').forEach(item => {
                item.checked = true
            })
        } else {
            document.querySelectorAll('input[type=checkbox]').forEach(item => {
                item.checked = false
            })
        }
    }
}

function cancelFunction() {
    document.getElementById('actionDelete').innerHTML = '';
    let trEle = document.querySelectorAll('tr');
    trEle.forEach(tr => {
        tr.removeChild(tr.lastChild);
    })
}

function deleteFunction(value) {
    if (confirm('Are you Ok?') === true) {
        console.log(1)
        let page = value;
        let checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
        let ids = [];
        checkedBoxes.forEach((box) => {
            ids.push(box.value)
        })
        axios.get('/admin/order/delete', {
            params: {
                ids: ids
            }
        }).then(() => {
            window.location = `/admin/order/${page}`;
        })
    }
}
