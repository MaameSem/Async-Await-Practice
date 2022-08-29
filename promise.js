
function getRandomNumber(number) {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            resolve(Math.random());
        }, 450)
    );
    
}

async function awaitGetRandomNumber() {
    const num = await getRandomNumber();
    console.log(num);

}
