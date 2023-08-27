(() => {
    "use strict";
    var __webpack_require__ = {};
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                }
            }
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    var __webpack_exports__ = {};
    var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P((function(resolve) {
                resolve(value);
            }));
        }
        return new (P || (P = Promise))((function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        }));
    };
    class App {
        constructor(serverConfigs) {
            this.serverConfigs = serverConfigs;
        }
        attachGetListMethod(lists) {
            lists.forEach((list => {
                list.GetList = () => __awaiter(this, void 0, void 0, (function*() {
                    const uri = list.__metadata.uri;
                    const settings = {
                        method: "GET",
                        url: uri,
                        headers: {
                            Accept: "application/json; odata=verbose"
                        },
                        timeout: 0
                    };
                    return yield $.ajax(settings);
                }));
            }));
        }
        init() {
            return __awaiter(this, void 0, void 0, (function*() {
                const href = this.href;
                if (href.length > 1) {
                    const serverName = href.split("/")[2];
                    let settings;
                    let url = "";
                    let legitServer = false;
                    const defaultSettings = {
                        method: "GET",
                        timeout: 0
                    };
                    const config = this.serverConfigs.find((c => c.serverName === serverName));
                    if (config) {
                        url = config.url;
                        settings = Object.assign(Object.assign({}, defaultSettings), {
                            url,
                            headers: config.headers || {}
                        });
                        legitServer = true;
                    } else {
                        console.log("serverName", serverName);
                    }
                    if (legitServer) {
                        const lists = yield this.getLists(settings);
                        this.d = lists.d;
                        this.results = lists.d.results;
                        this.attachGetListMethod(this.results);
                        console.log("lists: ", lists);
                        const firstListDetails = yield this.results[0].GetList();
                        console.log("First list details: ", firstListDetails);
                    }
                }
            }));
        }
        getLists(settings) {
            return __awaiter(this, void 0, void 0, (function*() {
                const lists = yield $.ajax(settings);
                return lists;
            }));
        }
    }
    $(document).ready((() => {
        const href = window.location.href;
        const serverConfigs = [ {
            serverName: "127.0.0.1:5500",
            url: "http://localhost:3000/Lists"
        }, {
            serverName: "localhost:5500",
            url: "http://localhost:3000/Lists"
        }, {
            serverName: "traxxisdev.sharepoint.com",
            url: "/_api/Lists",
            headers: {
                Accept: "application/json; odata=verbose"
            }
        } ];
        const app = new App(serverConfigs);
        app.href = href;
        app.init();
    }));
})();