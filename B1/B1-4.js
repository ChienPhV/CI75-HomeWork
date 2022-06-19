//hàm lấy giá trị và hiển thị ra màn hình
let contacts = [];

function getContact() {
    let Name = document.querySelector('#name').value;
    let Phone = document.querySelector('#phone').value;
    if (Name && Phone) {
        contacts.push(`<br> ${Name}, ${Phone}`);
    }
    contacts.sort(); // arrange text in alphabetical 
    document.getElementById("display").innerHTML = contacts;
    
}
console.log(contacts);

// function getSearch(text) 
//     return text = document.getElementById("search-input").value;
//   }
  
// function find() {
//     document.getElementById("result").innerHTML = contacts.filter(getSearch);
//   }

