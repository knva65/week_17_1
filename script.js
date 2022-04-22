function change() {
    let first_name = document.querySelector('#first_name').value.replace(/\s/g, '');
    first_name = first_name[0].toUpperCase() + first_name.slice(1).toLowerCase();
    let patronymic = document.querySelector('#patronymic').value.replace(/\s/g, '');
    patronymic = patronymic[0].toUpperCase() + patronymic.slice(1).toLowerCase();
    let surname = document.querySelector('#surname').value.replace(/\s/g, '');
    surname = surname[0].toUpperCase() + surname.slice(1).toLowerCase();
    let arr = [first_name, patronymic, surname];
    

document.getElementById("errorMessage").innerHTML = '';
document.getElementById("sucsessMessage").innerHTML = '';

if(first_name === '' || patronymic === '' || surname === '') 
{document.getElementById("errorMessage").innerHTML += "не все поля заполнены, исправьте ошибку";}
else {document.getElementById('sucsessMessage').innerHTML += "Ваши данные: <br> <br> Имя: " + arr[0].bold() + ",  Отчество: " + arr[1].bold() + ",  Фамилия: " + arr[2].bold();}
}

document.getElementById('forma').onsubmit = function(){return false};

