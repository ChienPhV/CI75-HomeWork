//hàm lấy giá trị và hiển thị ra màn hình

let contacts = [];
function getContact() {
    
    let Name = document.querySelector('#name').value.toUpperCase();
    let Phone = document.querySelector('#phone').value;
    if (Name && Phone) {
        contacts.push(`<br> ${Name}, ${Phone}`);
    }
    contacts.sort(); // arrange text in alphabetical 
    document.getElementById("display").innerHTML= contacts;
    console.log(contacts);
    return false; 
}




