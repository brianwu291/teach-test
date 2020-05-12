// function + if else 教學 & 複習
// 當值只可被 3 整除，console 出 fizz，只可被 5 整除，console 出 buzz，可被 3 跟 5 同時整除，console fizzbuzz
// 當以上都不符合，console no

// const numberValue = 23
// const isDivideByThree = numberValue % 3 === 0
// const isDivideByFive = numberValue % 5 === 0
// if (isDivideByThree && isDivideByFive) {
//   console.log('fizzbuzz')
// } else if (isDivideByThree) {
//   console.log('fizz')
// } else if (isDivideByFive){
//   console.log('buzz')
// } else {
//   console.log('no')
// }

// 一坨邏輯，如果可以包裹起來，不但可以透過取名來了解做的事情，也可以保護變數名稱不被污染
// function judgeFizzBuzz(numberValue = 0) {
//   const isDivideByThree = numberValue % 3 === 0
//   const isDivideByFive = numberValue % 5 === 0
//   if (isDivideByThree && isDivideByFive) {
//     console.log('fizzbuzz')
//   } else if (isDivideByThree) {
//     console.log('fizz')
//   } else if (isDivideByFive){
//     console.log('buzz')
//   } else {
//     console.log('no')
//   }
// }
// judgeFizzBuzz(23)

// 如果今天，給定一個大於一的正整數，請你寫下一個判斷，從 1 到 n 之間，讓每個數都去做 fizz buzz 的邏輯判斷，該如何做呢？
// ... 死了，n 是 100 就要寫到掛。
// 迴圈登場
// 用途，處理“重複的行為”、"重複的邏輯"

// 練習： 1 加到 n？

// while (情況) {
//  ... 做的事情
// }
// ex:
// let c = 1
// while (c < 10) {
//   console.log('yes! I am in while loop')
//   c += 1
// }

// for loop
//   初始值       情況     單次迴圈結束後的行為
// for (let i = 1; i < 10; i += 1) {
//   console.log('yes! I am in for loop')
// }

// function judgeFizzBuzzLoopVersion(n = 0) {
//   let w = 1
//   while (w <= n) {
//     const isDivideByThree = w % 3 === 0
//     const isDivideByFive = w % 5 === 0
//     if (isDivideByThree && isDivideByFive) {
//       console.log(`n is ${w}, fizzbuzz`)
//     } else if (isDivideByThree) {
//       console.log(`n is ${w}, fizz`)
//     } else if (isDivideByFive){
//       console.log(`n is ${w}, buzz`)
//     } else {
//       console.log(`n is ${w}, no`)
//     }
//     w += 1
//   }
// }
// judgeFizzBuzzLoopVersion(23)

// if else + loop 應用
// 情境：
// 假如今天公司的網站上，有一個購物車的功能，邏輯如下：
// 產品的資訊一律以物件的形式出現，並帶有兩個欄位：id 以及 amount
// 例如： { id: 1233, amount: 3 }
// 當使用者點選商品並放入購物車，此時會有兩種情況：
// 一, 購物車中已經有這個商品了，二, 購物車中沒有這個商品
// 需求：當購物車中已經有商品時，找到購物車中的那個商品，並把他的 amount +1，如果沒找到，那就把代表購物車的陣列加上一個新的商品物件
// const cartList = []

// function addToCartListV1(newItemId) {
//   if (newItemId === undefined) return
//   let hasFound = false
//   for (let i = 0; i < cartList.length && hasFound === false; i += 1) {
//     const currentItem = cartList[i]
//     if (currentItem.id === newItemId) {
//       currentItem.amount += 1
//       hasFound = true
//     }
//   }
//   if (hasFound === false) {
//     cartList.push({ id: newItemId, amount: 1 })
//   }
// }
// function addToCartListV2(newItemId) {
//   if (newItemId === undefined) return
//   const hasInCardListIndex = cartList.findIndex(({ id }) => id === newItemId)
//   if (hasInCardListIndex !== -1) {
//     cartList[hasInCardListIndex].amount += 1
//   } else {
//     cartList.push({ id: newItemId, amount: 1 })
//   }
// }

// addToCartListV2(1)
// addToCartListV2(1)
// addToCartListV2(1)
// addToCartListV2(2)
// addToCartListV2(2)

// console.log(cartList)