/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

const number = (1 + Math.floor(Math.random() * 10));
let life = Number(prompt("how much life u want: "));
let lifetresh = life;
count = 1;
let scoreCalc = function (x) {
    globalThis.scoreperLife = 100 / x;
    return life * scoreperLife;
}

while (life > 0) {


    let guess = Number(prompt("tahmin"));
    if (guess < number) {
        count += 1;
        life -= 1;
        alert("wrong its higher");
    } else if (guess > number) {
        count += 1;
        life -= 1;
        alert("wrong its lower");
    } else {
        alert(`your gues ${guess} is right u find the number in ${count} try your score is ${scoreCalc(lifetresh)}`);
        break;
    }
    if (life == 0) {
        alert(`you life(${lifetresh}) ended number was : ${number} your score is ${scoreCalc(lifetresh)} ever guess takes ${scoreperLife.toFixed(2)}`);
        break;
    };

};