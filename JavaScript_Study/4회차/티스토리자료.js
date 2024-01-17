function OrderSet(mainFood,sideFood,other) {
    this.main = mainFood
    this.side = sideFood
    this.drink = other
}

const order1 = new OrderSet("스테이크","시저샐러드","탄산수")
const order2 = new OrderSet("봉골레파스타","허니버터고구마","커피")
const order3 = new OrderSet("해산물리소토","양송이스프","물")

console.log(order1)
console.log(order2)
console.log(order3)