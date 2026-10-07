
async function callapi() {

    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let temp = await data.json();
    console.log(temp);

}

callapi();