import { D, Lists, Result } from "../../QuickType.js";

interface ServerConfig {
    serverName: string;
    url: string;
    headers?: Record<string, string>;
}

export class App {
    href!: string;
    serverConfigs: ServerConfig[];
    d!: D;
    results!: Result[];

    constructor(serverConfigs: ServerConfig[]) {
        this.serverConfigs = serverConfigs;
    }

    attachGetListMethod(lists: any[]) {
        lists.forEach(list => {
            list.GetList = async () => {
                const uri = list.__metadata.uri;
                const settings = {
                    "method": "GET",
                    "url": uri,
                    "headers": {
                        "Accept": "application/json; odata=verbose"
                    },
                    "timeout": 0
                };

                return await $.ajax(settings);
            };
        });
    }

    async init() {
        const href = this.href;
        if (href.length > 1) {
            const serverName = href.split('/')[2];
            let settings: any;
            let url = '';
            let legitServer = false;
            const defaultSettings = {
                "method": "GET",
                "timeout": 0,
            };

            const config = this.serverConfigs.find(c => c.serverName === serverName);
            if (config) {
                url = config.url;
                settings = {
                    ...defaultSettings,
                    "url": url,
                    "headers": config.headers || {}
                };
                legitServer = true;
            } else {
                console.log('serverName', serverName);
            }

            if (legitServer) {
                const lists: Lists | any = await this.getLists(settings);
                this.d = lists.d;
                this.results = lists.d.results;
                this.attachGetListMethod(this.results);
                console.log('lists: ', lists);

                // Example usage of GetList method:
                const firstListDetails = await this.results[0].GetList();
                console.log('First list details: ', firstListDetails);
            }
        }
    }

    async getLists(settings: any): Promise<Lists> {
        const lists = await $.ajax(settings);
        return lists;
    }
}

$(document).ready(() => {
    const href = window.location.href;
    const serverConfigs: ServerConfig[] = [
        {
            serverName: '127.0.0.1:5500',
            url: 'http://localhost:3000/Lists'
        },
        {
            serverName: 'localhost:5500',
            url: 'http://localhost:3000/Lists'
        },
        {
            serverName: 'traxxisdev.sharepoint.com',
            url: '/_api/Lists',
            headers: {
                "Accept": "application/json; odata=verbose"
            }
        }
    ];
    const app: App = new App(serverConfigs);
    app.href = href;
    app.init();
});
