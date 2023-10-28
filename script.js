// let nilai =prompt("masukan nilai nilai yang anda inginkan");
// console.log(nilai);

// let a = 20
// let b = 10

// var hasil = b + a;
// console.log(hasil);

// var hasil1 = b - a;
// console.log(hasil1);

// var hasil2 = b * a;
// console.log(hasil2);

// var hasil3 = b / a;
// console.log(hasil3);

// var hasil4 = b ** a;
// console.log(hasil4);

// var hasil5 = b % a;
// console.log(hasil5);

// var hasil6 = a - b;
// console.log(hasil6);

// var hasil7 = a * b;
// console.log(hasil7);

// var hasil8 = a / b;
// console.log(hasil8);

// var hasil9 = a ** b;
// console.log(hasil9);

// var hasil10 = a % b;
// console.log(hasil10);


// if(nilai == "10+20"){
//     document.write(`<h1>${hasil}</h1>`);
// }else if(nilai == "10-20"){
//     document.write(`<h1>${hasil1}</h1>`);
// }else if(nilai == "10*20"){
//     document.write(`<h1>${hasil2}</h1>`);
// }else if(nilai == "10/20"){
//     document.write(`<h1>${hasil3}</h1>`);
// }else if(nilai == "10**20"){
//     document.write(`<h1>${hasil4}</h1>`);
// }else if(nilai == "10%20"){
//     document.write(`<h1>${hasil5}</h1>`);
// }else if(nilai == "20+10"){
//     document.write(`<h1>${hasil}</h1>`);
// }else if(nilai == "20-10"){
//     document.write(`<h1>${hasil6}</h1>`);
// }else if(nilai == "20*10"){
//     document.write(`<h1>${hasil7}</h1>`);
// }else if(nilai == "20/10"){
//     document.write(`<h1>${hasil8}</h1>`);
// }else if(nilai == "20**10"){
//     document.write(`<h1>${hasil9}</h1>`);
// }else if(nilai == "20%10"){
//     document.write(`<h1>${hasil10}</h1>`);
// }else{
//     document.write("<h1>Maaf Kami Hanya Menyediakan Angka 10 Dan 20</h1>");
// }

// let inputannilai = prompt("masukan nilai ujian kamu disini dan lihatlah grade kamu");
// var grade = ""

// if(inputannilai >= 100){
//     alert("EROR");
// }else if(inputannilai >= 96){
//     grade = "A";
// }else if(inputannilai >= 90){
//     grade = "B";
// }else if(inputannilai >= 86){
//     grade = "C";
// }else if(inputannilai >= 81){
//     grade = "D";
// }else if(inputannilai >= 76){
//     grade = "E";
// }else if(inputannilai >= 66){
//     grade = "F";
// }else if(inputannilai >= 0){
//     grade = "F-";
// }else{
//     alert("EROR");
// }

// document.write(`<h1>Grade anda adalah ${grade}</h1>`)


h1 = document.getElementById("h1");
link = document.getElementById("link");
h2 = document.getElementById("h2");
hh = document.getElementById("hh");


link.addEventListener("click", function(){
    h1.innerHTML = "butuh motivasi? coba pencet aku";
    h2.innerHTML = ":)";
    link.style.display = "none"

    h1.addEventListener("click", function(){
        let kondisi = alert("besi yang kuat tak akan hancur kecuali oleh karatnya sendiri, demikian juga kamu tak ada yang dapat merusakmu lebih dari dirimu sendiri   kuat2 yaa buat yang baca :)")
    })
})