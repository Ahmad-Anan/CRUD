// crud s system
/* 
c --> create ✅  
r --> read  ✅ 
u --> update 
d --> delete  ✅
s --> search 
validation
*/
/* 
create 
1- click btn --> print hello ✅
2- object product --> properties ✅
3- properties value --> static ✅
4- value input --> properties ✅

*/
/* 
display 
1- design static ✅
2- design dynamic
3- logic 

*/
/* 
delete
1- click delete --> hello
2- index
3- splice
*/
// alert("hello");
/* 
1- input
2- event --> value
3- value --> names products

*/
/* 
update
1- click update
2- index product 
3- set value product --> inputs
4- add --> update
5- update 

*/

var productNameInput = document.getElementById("productName"); //input kolo
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var productImageInput = document.getElementById("productImage");
var searchInput = document.getElementById("searchInput")
var addBtn = document.getElementById("addBtn")
var updateBtn = document.getElementById("s")
var productsList = [];

// user 2dem
// user gded
// [{}]
if (localStorage.getItem("products") !== null) {
  productsList = JSON.parse(localStorage.getItem("products"));
  display();
}

function addproducts() {
  var product = {
    name: productNameInput.value,
    price: +productPriceInput.value,
    category: productCategoryInput.value,
    desciption: productDescInput.value,
    image: "imgs/iphone.jpg",
  };
  //
  productsList.push(product);
  localStorage.setItem("products", JSON.stringify(productsList));
  display();

  clearInputs();
  console.log(productsList);
}

function clearInputs() {
  productNameInput.value = null;
  productDescInput.value = null;
  productImageInput.value = null;
  productPriceInput.value = null;
  productCategoryInput.value = null;
}

function display() {
    // 1000  1001  1002
  var cartona = ``;
  for (var i = 0; i < productsList.length; i++) {
    cartona += `
     <div class="col-md-2">
        <div class="card ">
           <div class="card-body">
            <img src="${productsList[i].image}" class="w-100" alt="">
           <h2 class="h3">${productsList[i].name}</h2>
           <h3 class="h4"><span class="fw-bold">price: </span> ${productsList[i].price}</h3>
           <h3 class="h4"><span class="fw-bold">cate: </span> ${productsList[i].category}</h3>

           <p>${productsList[i].desciption}</p>
  <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button>
    <button class="btn btn-outline-warning" onclick="setValueInputUpdtae(${i})">update</button>


           </div>
        </div>
      </div>
    `;
  }

  document.getElementById("rowData").innerHTML = cartona;

}


var indexProduct ; //undefined
function setValueInputUpdtae(index){ 
    indexProduct = index
    productNameInput.value =  productsList[index].name;
    productDescInput.value = productsList[index].desciption;
    productPriceInput.value = productsList[index].price;
    productCategoryInput.value = productsList[index].category;
    addBtn.classList.add("d-none")
    updateBtn.classList.remove("d-none")
 
   
}

function updateProduct(){

 
    var updateProduct = {
        name: productNameInput.value,
        price: +productPriceInput.value,
        category: productCategoryInput.value,
        desciption: productDescInput.value,
        image: "imgs/iphone.jpg",
      };
      //
      productsList.splice(indexProduct,1,updateProduct);
      localStorage.setItem("products", JSON.stringify(productsList));
      display();
    
      clearInputs();
      addBtn.classList.remove("d-none")
      updateBtn.classList.add("d-none")
}
// 0

function deleteProduct(index) {
  productsList.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productsList));
  display();
}

function search(){
   var term =  searchInput.value //""
   console.log(term);
   var cartona = ``;
  for (var i = 0; i < productsList.length; i++) {
    if(productsList[i].name.toLowerCase().includes(term.toLowerCase())){
        cartona += `
        <div class="col-md-2">
           <div class="card ">
              <div class="card-body">
               <img src="${productsList[i].image}" class="w-100" alt="">
              <h2 class="h3">${productsList[i].name}</h2>
              <h3 class="h4"><span class="fw-bold">price: </span> ${productsList[i].price}</h3>
              <h3 class="h4"><span class="fw-bold">cate: </span> ${productsList[i].category}</h3>
   
              <p>${productsList[i].desciption}</p>
     <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button>
       <button class="btn btn-outline-warning">update</button>
   
   
              </div>
           </div>
         </div>
       `;
    }

  }

  document.getElementById("rowData").innerHTML = cartona;

     
}

/* 
  <div class="col-md-2">
        <div class="card ">
           <div class="card-body">
            <img src="./imgs/iphone.jpg" class="w-100" alt="">
           <h2 class="h3">iphone</h2>
           <h3 class="h4"><span class="fw-bold">price: </span> 5000</h3>
           <h3 class="h4"><span class="fw-bold">cate: </span> mobile</h3>

           <p>Lorem ipsum dolor sit amet consectetur.</p>

           </div>
        </div>
      </div>

*/

// local storage

/* 


*/

// localStorage.setItem( "userName" , "sherine"  )
// localStorage.setItem("userName","mohamed")
// console.log(localStorage.getItem("userName"));
// localStorage.clear()
// localStorage.removeItem("age")
// localStorage.length

// sessionStorage.setItem()
// sessionStorage.getItem
// localStorage.setItem("userName","ahmed")
// sessionStorage.setItem("age","50")
//       0123456789
// "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed voluptatum consequuntur error enim eligendi ab, hic quos dolor quo delectus ea itaque deserunt dolorum quod veniam commodi ipsa non."
//  [ful,l, ful,development]
//       Full
//              -2-1
// x.charAt()
// x.at()
// x.concat(" ahmed")
// "AhmEd".toLowerCase()
//toUpperCase()
// includes
// slice
// x.toLowerCase().includes("s".toLowerCase())
//split
// 5 --> 6  --> 56000

// var x =  5
// if(x>0){
    
//     if(x>10){
//         console.log("x>0 & x>10");
        
//     }else{
//         console.log("x>0 & x<10");
        
//     }
    
// }
// condition ? true : false
// var z =  x>0 ? (x>10? "yes" : "no" ) :null
// console.log(z);
