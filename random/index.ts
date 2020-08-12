const ip1 = document.getElementById("num1") as HTMLInputElement;
const ip2 = document.getElementById("num2") as HTMLInputElement;
const btt = document.getElementById("btt_sum");

function somaAi (a: number, b: number) {
    return a + b;
}

btt.addEventListener("click", function() {
    console.log(somaAi(Number(ip1.value), Number(ip2.value)));
});
  