export default class Client {
    constructor(private url: string) {
    }

    public loadData() {
        return fetch(this.url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            }
        });
    }
}
