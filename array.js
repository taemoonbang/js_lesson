
    //배열

    let day = ["mon", "tue", "wed"];
    day[1] ="화요일";//화요일로 변경
    day.push('thr');//추가
    day.unshift('sun')//배열의 맨 앞에 추가
    console.log(day);


    // for(let index = 0; index < day.length; index++) {
    //     console.log(day[index]);
    // }


    for(let x of day) {
        console.log(x);
    }
