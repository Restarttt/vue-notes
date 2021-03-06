// <!-- 第一种方式:对象的形式 -->
// <!-- 第一个参数 类名， 第二个参数：boolean值 -->
// <!-- 对象的形式: 用花括号包裹起来，类名用引号， -->
// <!-- 优点: 以对象的形式可以写多个，用逗号分开 -->
// <
// p: class = "{'p1' : true}" > 对象的形式(文字的颜色) < /p> <
// p: class = "{'p1' : false, 'p': true}" > 对象的形式(文字的颜色) < /p>


// <!-- 第二种方式:三元表达式 注意点：放在数组中，类名要用引号-->
// <
// p: class = "[ 1 < 2 ? 'p1' : 'p' ]" > 三元表示式(文字的颜色) < /p>


// <!-- 第三种方式: 数组的形式 -->
// <
// p: class = "[isTrue, isFalse]" > 数组的形式(文字的颜色) < /p>

// <!-- 数组中用对象 -->
// <
// p: class = "[{'p1': false}, isFalse]" > 数组中使用对象(文字的颜色) < /p>


// <!--补充:  class中还可以传方法，在方法中返回类名-->
// <
// p: class = "setClass" > 通过方法设置class类名 < /p> < /
//     div >