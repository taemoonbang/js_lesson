
    // let n = "name";
    // let a = "age";

    // const user = {
    //     [n] : "mike",
    //     [a] : 30,
    //     [1+4]: 5,
    // };

    // console.log(user);
    // function makeObj(key, val){
    //     return {
    //         [key] : val
    //     }
    // }

    // const obj = makeObj("성별", "male");

    // console.log(obj);


    //객체 메소드

    // const user = {
    //     name: "mike",
    //     age: 30,
    // };

    // const result = Object.entries(user);
    // //user2.name = "Tom"
    // // console.log(user);
    // // console.log(user2);
    // console.log(result);

    // let arr = [
    //     ['mon', '월'],
    //     ['tue', '화']
    // ]

    // const result = Object.fromEntries(arr);
    // console.log(result);



        //symbol
        //다른 개발자가 만들어 놓은 객체
        const user = {
            name: 'mike',
            age: 30,
        };
        //내가작업
        const showName = symbol('show name');
        user[showName] = function() {
            console.log(this.name);
        };

        user[showName]();


        //사용자가 접속하면 보는 메세지
        for(let key in user){
            console.log(`His ${key} is ${user[key]}`);
        }
