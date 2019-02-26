/**
 * js 继承实现
 */

const log = console.log

;
(function () {
    function Person() {
        this.name = "ownNamePerson"
    }
    Person.prototype.move = function move(params) {
        log('I am person, can move')
    }

    function Woman(n) {
        // 如果 父类不需要参数初始化
        Person.call(this)

        //如果父类需要参数初始化
        // super(arguments[2]) 翻译成
        //Person.call(this,arguments[2])

        this.name = "iamWoman"
        this.actualName = n
    }

    Woman.prototype = Object.create(Person.prototype)

    // 也可以这样写，不过多调用了一次Person的构造函数
    // Woman.prototype = new Person()

    Woman.prototype.inWomanPrototype = function inWomanPrototype(params) {

    }

    Woman.go = function go(params) {

    }

    Woman.prototype.constructor = Woman

    // 不能这么写，Woman 也需要有自己的原型链，这样Woman直接使用了Person的 prototype
    //当Woman.prototype.go = function name(params) {

    // }
    // 会影响Person的prototype
    // Woman.prototype = Person.prototype

    // ---------test-------------------------

    let woman = new Woman("iam woman name")



})();

