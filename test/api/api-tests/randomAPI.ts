const axios = require('axios');

let x_token;

class RandomApi {

    async getToken() {
        const response = await axios.get('https://lgi-new-api.aws.playco.com/api/v1.2/layout/series/3b35b331353d44d1ab8de47b18825838-lgi?parentalControl=18&platform=mobile&origin=android&lang=en');
        console.log(await response.data['x-token']);
        x_token = await response.data['x-token'];
        return response;
    }


    async getRandomApi() {
        const response = await axios.get('https://lgi-new-api.aws.playco.com/api/v1.2/modules/series/?origin=android&modules=534097960385%2C482186792191%2C498542632284%2C335859752225%2C265964584024%2C265964584023%2C265964584018%2C265964584051%2C265964584050%2C265964584019%2C265964584043%2C265964584059%2C265964584054%2C399514152319',
            {
                headers: {
                    'x-token': x_token,
                },
            }
        );
        return response;
    }

}
export default new RandomApi();
