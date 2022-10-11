function Myfunction() {
    let x, y, z;
    x = '5';
    y = 6;
    z = x + y;
    alert('toi ten la thien')
    document.getElementById('demo').innerHTML = Math.pow(y, 2);

    console.log("toi ten la thien")
    console.log(Math.pow(y,2))
}

const myName ={firstName:'Thien', secondName:'Hoan', lastName:'Nguyen', age: function() {return this.lastName + " " + this.secondName + " " + this.firstName;}};
console.log(myName.firstName);
console.log(myName.age());


function Mul(a, b) {
    return a * b;
}
console.log(Mul(5, 6));

console.log(Date());