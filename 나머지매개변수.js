
    // 나머지 매개변수 ...
    // 전달 받은 모든 수를 더해야함 

    // function add(...numbers) {
    //     let result = 0;
    //     numbers.forEach((num => result += num));
    //     console.log(result);
    // }
    // function add(...numbers) {
    //     let result = numbers.reduce((prev, cur) => prev + cur);
    //     console.log(result);
    // }
    // add(1, 2, 3);
    // add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



    //user 객체를 만들어 주는 생성자 함수

    // function User(name, age, ...skill) {
    //     this.name = name;
    //     this.age = age;
    //     this.skill = skill;
    // }

    // const user1 = new User("mike", 30, "html", "css");
    // const user2 = new User("jun", 20, "english");
    // const user3 = new User("may", 10, "math");


    // console.log(user1);
    // console.log(user2);
    // console.log(user3);


    // 전개구문
    // arr1 을 [4, 5, 6, 1, 2, 3]으로
    
    // let arr1 = [1, 2, 3];
    // let arr2 = [4, 5, 6];

    // // arr2.reverse().forEach(num => {
    // //     arr1.unshift(num)
    // // })

    // arr1 = [...arr2, ...arr1];
    // console.log(arr1);

    let user = {name : "mike"};
    let info = {age : 30};
    let fe = ["JS", "React"];
    let lang = ["korean", "english"];

    // user = Object.assign({}, user, info, {
    //     skill: [],
    // })

    // fe.forEach(item => {
    //     user.skill.push(item);
    // });
    // lang.forEach(item => {
    //     user.skill.push(item);
    // });
    //user.skill = [...fe, ...lang];
        user = {
            ...user,
            ...info,
            skills: [...fe, ...lang],
        };


    console.log(user);
