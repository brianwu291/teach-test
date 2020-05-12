// function + if else 教學 & 複習
// 當值只可被 3 整除，console 出 fizz，只可被 5 整除，console 出 buzz，可被 3 跟 5 同時整除，console fizzbuzz
// 當以上都不符合，console no


function name (parameters) {
  // ......
}

// 如果今天，給定一個大於一的正整數，請你寫下一個判斷，從 1 到 n 之間，讓每個數都去做 fizz buzz 的邏輯判斷，該如何做呢？
// ... 死了，n 是 100 就要寫到掛。

// 迴圈登場
// 用途，處理“重複的行為”、"重複的邏輯"

// 練習： 1 加到 n？


// fizzbuzz  實作

function judgeFizzBuzzLoopVersion(n = 0) {
 // ...
}

// if else + loop 應用

// 情境：
// 假如今天公司的網站上，有一個購物車的功能，邏輯如下：
// 產品的資訊一律以物件的形式出現，並帶有兩個欄位：id 以及 amount
// 例如： { id: 1233, amount: 3 }
// 當使用者點選商品並放入購物車，此時會有兩種情況：
// 一, 購物車中已經有這個商品了，二, 購物車中沒有這個商品
// 需求：當購物車中已經有商品時，找到購物車中的那個商品，並把他的 amount +1，如果沒找到，那就把代表購物車的陣列加上一個新的商品物件


const cartList = []

function addToCartListV1(newItemId) {
  // ......
}