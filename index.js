
const showFizzBuzzPattern = (count) => {
    let i = 1;
    let store = new Array();
    let numCount = Number(count)
    if(numCount) {
        while(i <= numCount)  {
            store.push(i % 15 === 0 ? `FizzBuzz` : (i % 5 === 0 ? `Buzz` : (i % 3 === 0 ? `Fizz` : ``)))
            i++;
        }
        
    }
}

