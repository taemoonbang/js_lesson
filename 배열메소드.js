
    // let arr = ['Mike', 'Tom', 'jane'];

    // arr.forEach((name, index) => {
    //     console.log(`${index + 1}. ${name}`);
    // });

    //짝수의 개수 찾기
    // let arr = [1, 2, 3, 4, 5];

    // const result = arr.filter((item) => {
    //     return item % 2 ===0;
    // });

    // console.log(result);

    // let userList = [
    //     {name : "Mike", age: 30},
    //     {name : "Jane", age: 27},
    //     {name : "Tom", age: 10},

    // ];

    // const result = userList.findIndex((user) => {
    //     if(user.age < 19){
    //         return true;
    //     }
    //     return false;
    // });
    // console.log(result);



    // let userList = [
    //     {name: "Mike", age: 30},
    //     {name: "Tom", age: 20},
    //     {name: "Jane", age: 10},

    // ];

    // let newUserList = userList.map((user, index) => {
    //     return Object.assign({}, user, {
    //         id : index + 1,
    //         isAdult: user.age > 19,
    //     })
    // });

    // console.log(newUserList);
    // console.log(userList);

    // let arr = ["안녕", "나는", "철수"];

    // let result = arr.split(",");

    // console.log(result);


    //배열 인지 아닌지 확인

    // let user = {
    //     name : "mike",
    //     age : 30,
    // };

    // let userList = ["mike", "Tom", "jane"];

    // console.log(typeof user);
    // console.log(typeof userList);

    // console.log(Array.isArray(user));
    // console.log(Array.isArray(userList)
    // );


    //arr.sort() 배열 재정렬

    //let arr = [1, 5, 4, 2, 3];
    // let arr = [27, 8, 5, 13];
    // function fn(a,b){
    //     return a-b;
    // }
    // //arr.sort(fn);

    // // arr.sort((a,b) => {
    // //     return a-b;
    // // });
    // console.log(arr);



    //arr.reduce()
        //(누적계산값 , 현재값)
    // let arr = [1, 2, 3, 4, 5];

    // //for, for of, forEach

    // // let result =0;
    // // arr.forEach((num) => {
    // //     result += num;
    // // });
    // const result = arr.reduce((prev, cur) => {
    //     return prev + cur;
    // }, 0)
    // console.log(result);

    let userList = [
        {name : "Mike", age: 30},
        {name : "Tom", age: 10},
        {name : "Jane", age: 27},
        {name : "Sue", age: 26},
        {name : "Harry", age: 42},
        {name : "Steve", age: 60},
   ];

   let result = userList.reduce((prev, cur) =>{
//        if(cur.age > 19) {
//            prev.push(cur.name);
//        }
//        return prev;
//    },[])//누산값 []

    //나이의 합
//     return prev += cur.age
// },0)
    //이름이 세글자 인 사람 찾기
    if(cur.name.length === 3){
        prev.push(cur.name);
    }
    return prev;
}, []);
   console.log(result);
