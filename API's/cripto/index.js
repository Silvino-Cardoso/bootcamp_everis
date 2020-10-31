
var apikey = {
    key: '501ea90a-9b51-4c41-ba91-435d08ed66d2'
};

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apikey.key)
    .then((response) =>{
        if(!response.ok) throw new Error('Erro ao executar a requisição, status' + response.status);
        return response.json()
    })
    .then((api) =>{
        console.log(api.data)
        text = ''
        for(let i = 0 ;i < 10; i++){

            text = text + `
                <div class="media">
                    <img src="./images/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                    <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                    </div>
                </div>
            
            `
            document.getElementById("coins").innerHTML = text
            
        }

    })
    .catch((error) =>{
        console.error(error)
    })