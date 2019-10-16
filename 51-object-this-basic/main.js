let baby = {
  age: 3,
  // sayAge: function(){}
  sayAge() {
    console.log(this.age); // 3, this 指方法所在的对象
    console.log(baby.age); // 直接调用对象变量不可靠，因为可能改变
  }
  // 箭头函数没有this
  // sayAge: ()=>{} // age is not defined.
  // 以下可行
  // sayAge() {
  //       let func = () => console.log(this.age);
  //       func();
  //   }
};

baby.sayAge();

x = 1;
function logAge() {
  // 这种情况下，严格模式里 this == undefined
  // 非严格模式下， this 指全局/window
  // console显示undefined
  // 相当与console.log({}.age)
  // 除非提前声明 age = 3, chrome浏览器里变量声明不能带 let 或者 const
  // console.log(this.age);
  console.log(this.x); // 1
}

logAge();
