//o	Danh bạ được sắp xếp bằng tên theo bảng chữ cái
//o	Thêm mới danh bạ với tên và số điện thoại


let contacts = [];

function getContact() {

    let Name = document.querySelector('#name').value.toUpperCase();
    let Phone = document.querySelector('#phone').value;
    if (Name && Phone) {
        contacts.push(`<br>${Name}, ${Phone}`);
    }
    contacts.sort(); // arrange text in alphabetical 
    document.getElementById("display").innerHTML = contacts;
    console.log(contacts);
    return false;
}

//o	Tìm kiếm danh bạ theo tên và số điện thoại
function search() {
    let input, filter, a, i;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();

    for (i = 0; i < contacts.length; i++) {
        a = contacts[i];
        if (a.indexOf(filter) > -1) {
            document.getElementById("display").innerHTML = a;
            console.log(a.indexOf(filter))
        }
    }
}

//o	Xoá các danh bạ bị trùng số điện thoại 
function remove() {
    let check = contacts.filter((element, index) => {
        return contacts.indexOf(element) === index;
    });
    
    console.log(check);
    document.getElementById("display").innerHTML = check;
}


    








