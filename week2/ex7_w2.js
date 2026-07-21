//version1
function getData(callback){

    setTimeout(()=>{

        callback("Bonjour");

    },2000);

}

getData(function(data){

    console.log(data);

});


//version2
function getData(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve("Bonjour");

        },2000);

    });

}

async function displayData(){

    const data = await getData();

    console.log(data);

}

displayData();
