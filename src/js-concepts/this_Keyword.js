// console.log(this) // logs blank object :  {}

// const obj1 = {
//     myFunction1() {
//         console.log('hello')
//     }
// }

// OR

// const obj2 = {
//     myFunction1: function () {
//         console.log('hello')
//     }
// }

// note ob1 can be written as obj2. same thing.

{
    const obj = {
        myFunction1() {
            console.log(this)
        }
    }

    const test1 = obj.myFunction1

    // test1()
    // now function is being calling here and console at that location prints the value of "this" at that particular location.
    // the logged value : global object/ window object

    // obj.myFunction1()
    // now function is being calling here in diff way and console at that location prints the value of "this" at that particular location.
    // the logged value : {myFunction1: f} , obj cintaining that function. NOTE this one. in case of arrow function we will have {} (blank).

    // so by checking both way we can say that, test1() refering to global and obj.myFunction1() refering to obj.
    // means if parent is there(like obj.something, here obj is parent, means invokes directly) that this refers to parent , 
    // if no parent (test1() not having parent) that global.
}
// ===================
{
    const obj = {
        myFunction1() {
            // console.log(this)
            console.log(this === global)
        }
    }

    const test1 = obj.myFunction1
    // test1() // logs true, becasue in this case this refers to global object.
    // obj.myFunction1() // logs false, becasue in this case this refers to same object having that function.
}
// ===================
{
    const obj = {
        myFunction1() {
            console.log(this)
        },
        myFunction3() {
            function myFunction4() {
                console.log(this)

            }
            return myFunction4()
        },
    }

    const test1 = obj.myFunction1
    const test2 = obj.myFunction3
    // test1()             // here this refers to global object;
    // obj.myFunction1()   // here this refers to same object;
    // test2()             // here this refers to global object;???
    // because this value of this depends how we are calling the function. so by calling test2(), 
    // we actually calling myFunction4() and it donr have anything before it, thats why global.

}

// =======================

{
    const anotherObj = {
        myFunction4() {
            console.log(this)

        }
    }
    const obj = {
        myFunction1() {
            console.log(this)
        },
        myFunction3() {

            return anotherObj.myFunction4() //
        },
    }

    // let test4 = obj.myFunction3
    // test4()                 // this refers to "anotherObj" because in F3 anotherObj is used before myFunction()
    // obj.myFunction3()       // this refers to "anotherObj"

}
// ==================================
{

    function myFunction() {
        return this
    }

    let test = myFunction()
    // console.log(test)         //global object
    // console.log(myFunction()) //global object

    test.a = 100; // coz test is global object. we just created a property in global object
    // console.log(test.a === global.a) //true
}
{

    function myFunction() {
        return this
    }

    let test = new myFunction()
    // console.log(test)         // refers to myFunction{} but not realy that function , 
    //                           now it is test object {}. in browser console it shaws that it came from myFunction
    
    test.a = 100;
    // console.log(test)         // refers to myFunction{} but not realy that function , now it is test object {a: 100}

    //so when we add new keyword:::
    //1. an object is created pointing to the cunstructor function.
    //2. "this"  in that constructor function rpotins to the new object. Here "test" it is.
}
{

    function myFunction() {
        return this
    }

    let test1 = myFunction() //bcoz fn returns this, and it is global obj, so test1 is global obj 
    let test2 = myFunction()  //bcoz fn returns this, and it is global obj, so test2 is global obj 
   
    test1.a = 100 // adding a property in global object
    test2.a = 200 // overriting the same property in global object
    
    // console.log(test1.a) //200
    // console.log(test2.a) //200

    // console.log(test1.a === test2.a) //true
   
}
{

    function myFunction() {
        return this
    }

    let test1 = new myFunction() // myFunction is working as a constructor so this points to new obj. test1 ={}
    let test2 = new myFunction()  //  myFunction is working as a constructor so this points to new obj. test2 ={}
   
    test1.a = 100 // adding a property in test1 object
    test2.a = 200 // adding a property in test2 object
    
//     console.log(test1.a) //100
//     console.log(test2.a) //200

//     console.log(test1.a === test2.a) // false
   
}
