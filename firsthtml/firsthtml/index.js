// alert("Hello Java  Script");

/**
 * Quiz　1 数字と文字の足し算の違い
 */

const apple = "3"
const pen   = "5"
const goukei = apple + pen

console.log(goukei)

/**
 * Quiz 2
 * 配列の中の番号について
 */
const array = ["サッカー","野球","テニス"]

console.log(array[1])

/**
 *IF条件分岐1
 */

const fruits = "ぶどう"
let color = "???"

if ( fruits == "りんご" ) {
    color = "赤"
} else if ( fruits == "みかん" ) {
    color = "オレンジ"
} else if ( fruits == "ぶどう" ) {
    color = "紫"
}

console.log(color)

/**
 *IF条件分岐2 
 */

 const student_score = 83
 const  student_social_score =98

 if ( student_score >= 90 && student_social_score>=95 ) {
    console.log("S")
 } else if ( student_score >= 80 || student_social_score >= 80 ) {
    console.log("A")
 } else if ( student_score >= 50 ) {
    console.log("B")
 } else {
    console.log("C")
 }

 /**
 * for 繰り返し処理
 */

//  for (i in array) {
//     console.log(array[i])
//  }

for (let i = 0 ; array.length > i; i++ ) {
        console.log(array[i])
     }

 /**
 * じゃんけんゲーム
 * 相手：ぐー、ちょき、パー
 * 自分：ぐー、ちょき、パー
 */
function janken(myAnswer) {
    const enemyAnswers = ["ぐー","ちょき","ぱー"]
    const enemyAnswer = enemyAnswers[Math.floor(Math.random()*enemyAnswers.length)]
    console.log(`自分:${myAnswer} 相手:${enemyAnswer}`)

    let thisResult
    if ( myAnswer == enemyAnswer ) {
        thisResult = `<p id=jankenResult>自分:${myAnswer} 相手:${enemyAnswer}<br />アイコ！</p>`
    } else if ((myAnswer == "ぐー" && enemyAnswer == "ちょき") || (myAnswer == "ちょき" && enemyAnswer == "ぱー") || (myAnswer == "ぱー" && enemyAnswer == "ぐー")) {
        thisResult = `<p id=jankenResult>自分:${myAnswer} 相手:${enemyAnswer}<br />勝ち！</p>`
    } else {
        thisResult = `<p id=jankenResult>自分:${myAnswer} 相手:${enemyAnswer}<br />負け！</p>`
    }
     
    let result = document.getElementById("jankenResult")
    result.remove()
    result = document.getElementById("janken")
    result.insertAdjacentHTML("afterend",thisResult)
}