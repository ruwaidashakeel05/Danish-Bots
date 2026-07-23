/** import required scripts */
import './ua-detect.min.js';
import * as UTILS from './utils.js';
import logger, { formatStack } from './logger.js';

const apiURL = 'https://api.myloft.xyz/';
const reportingapiURL = 'https://reporting.myloft.xyz/';
const appURL = 'https://app.myloft.xyz/';
const ping_proxy_url = 'https://ping.myloft.xyz';
const ping_proxy_domain = 'ping.myloft.xyz'
const myloft_cookie_domain = '.myloft.xyz';
const myloft_proxy_domain_blacklist_url = 'https://cdn.myloft.xyz/proxy-blacklist-domains/domains_disable_list.json';
const myloft_chatbot_client_url = 'https://aibuddybot.myloft.xyz';
const myloft_chatbot_pub_key = atob('LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FEVjIvRUxXZWxmdnJ1NDhleUFvSW91SGlFRAp2aUVLR3ZnVWZsRHl5a0FVZk1kcmE0Qk9OOTNkay82bE04QjU2RmgwZzhUY3JUakJkQ2tlZ2NJdGEvL2N0N1FZClBnTmUwbkZOQXYrSXpKM1QzazNkTUh6ajAweDZkVnNoN01kWnZmT0xVQVRQZUcyK3ZsbkM3cmVrcVcwWEIvMHkKK0w3dUN6eGtaQnpkb2hvZjN3SURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ==');
const myloft_ping_url = 'https://api.myloft.xyz/api/auth/ping';
const myloft_auth_trigger_url = 'https://authtrigger.myloft.xyz';

//myloft doi checks below
const findDoi = /\b(10[.][0-9]{3,}(?:[.][0-9]+)*\/(?:(?!["&\'<>])\S)+)\b/ig;
const findDoiURL = /^(?:https?\:\/\/)(?:dx\.)?doi\.org\/(10[.][0-9]{3,}(?:[.][0-9]+)*\/(?:(?!["&\'<>])\S)+)$/ig;
const MD5 = function (d) { var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }
const manifest = chrome.runtime.getManifest();
const manifestVersion = manifest.version;
const extensionId = chrome.runtime.id;

// update_url is added by chrome web store when the extension is published
const isExtensionAddedLocally = !manifest.update_url;

//initiate the global current time stamp -> used for pdf first time check 	
let globalRefreshTokenProcessMain = false;
let currentBrowser = new UserAgent.UAParser(navigator.userAgent).getBrowser().name;
let defaultBrowserName = "CHROME_EXTENSION";
let platformName = "CHROMEEXTENSION";
let deviceName = "Chrome";
let uidGen = "CHROME_EXT_";
if (currentBrowser && currentBrowser == "Edge") {
    defaultBrowserName = "MICROSOFTEDGE_EXTENSION";
    platformName = "MICROSOFTEDGEEXTENSION";
    deviceName = "Microsoft Edge";
    uidGen = "MICROSOFTEDGE_EXT_"
}

let loggingStarted = false;

function startLogging() {
    if (loggingStarted) return;

    const styleMap = {
        info: 'color: #1E90FF; font-weight: bold;',
        log: 'color: #5CE65C;',
        warn: 'color: #FFA500; font-weight: bold;',
        error: 'color: #FF0000; font-weight: bold;'
    };

    ['info', 'log', 'warn', 'error'].forEach((level) => {
        logger.on(level, async (data) => {
            console[level](
                `%c[MyLOFT] [${level}] [${new Date(data.timestamp).toLocaleTimeString()}]`,
                styleMap[level],
                ...data.message,
                formatStack(data.stack)
            );

            // Store in diagnostic logs
            try {
                await diagnosticLogsStore.append({
                    ...data,
                    stack: formatStack(data.stack)
                });
            } catch (e) {
                // Silently fail to avoid infinite loop if logger fails
            }
        });
    });

    logger.info('MyLOFT logger initialized');

    loggingStarted = true;
}

self.myloftLogger = startLogging;
self.myloftLoggerOff = function () {
    logger.info('MyLOFT logger Turned Off');
    loggingStarted = false;
}

if (isExtensionAddedLocally) {
    myloftLogger();
    logger.info('Extension added locally, initializing logger');
}

// chrome local storage store
const domainBlacklistStore = new UTILS.ChromeLocalStorage('domainRuleBlacklist');
const domainRuleStore = new UTILS.ChromeLocalStorage('allDomainRulesOfUser');
const instituteInfoStore = new UTILS.ChromeLocalStorage('instituteInfo');
const instituteIdStore = new UTILS.ChromeLocalStorage('instituteId');
const domainRuleHelpfulStore = new UTILS.ChromeLocalStorage('domainRuleHelpful');

const domainExceedStore = new UTILS.ChromeLocalStorage('limitExceededDomainList');

const searchConfigStore = new UTILS.ChromeLocalStorage('searchConfigs');
const ppaStore = new UTILS.ChromeLocalStorage('ppaConfig');
const tempPpaFound = new UTILS.ChromeLocalStorage('tempPpaFound');

const eResourcesDomainsStore = new UTILS.ChromeLocalStorage('eresource_domains');
const eResourcesDomainsStoreRewrite = new UTILS.ChromeLocalStorage('eresource_domains_rewrite');

const tokenStore = new UTILS.ChromeLocalStorage('token');
const deviceIdStore = new UTILS.ChromeLocalStorage('deviceId');
const userIdStore = new UTILS.ChromeLocalStorage('userId');

const chatbotInjectTempInfoStore = new UTILS.ChromeLocalStorage('chatbotInjectTempInfo');
const isAiChatbotEnabledStore = new UTILS.ChromeLocalStorage('isAiChatbotEnabled');

const instituteProxyTypeStore = new UTILS.ChromeLocalStorage('instituteProxyType');
const instituteHostnameStore = new UTILS.ChromeLocalStorage('instituteHostname');

const isOnCampusStore = new UTILS.ChromeLocalStorage('isOnCampus');

// maxCacheAge is in min
const eResourcesDomainsStoreCache = new UTILS.CacheStorage(eResourcesDomainsStore, { maxCacheAge: 2 });
const eResourcesDomainsStoreRewriteCache = new UTILS.CacheStorage(eResourcesDomainsStoreRewrite, { maxCacheAge: 2 });
const instituteProxyTypeStoreCache = new UTILS.CacheStorage(instituteProxyTypeStore, { maxCacheAge: 2 });
const isOnCampusStoreCache = new UTILS.CacheStorage(isOnCampusStore, { maxCacheAge: 2 });


const logoStore = new UTILS.ChromeLocalStorage('myloftIconState');
const diagnosticLogsStore = new UTILS.ChromeLocalStorage('diagnostic_logs');

// Consolidated icon cache — holds all rendered ImageData variants
const iconCache = {
    institute: null,       // { colored: {16,19,48,128}, greenDot: {16,19,48,128} }
    defaultGreenDot: null, // { 16,19,48,128 }
    version: 0
};


async function clearAllCacheStorage() {
    const removeCache = [
        eResourcesDomainsStoreCache.remove(),
        eResourcesDomainsStoreRewriteCache.remove(),
        instituteProxyTypeStoreCache.remove(),
        isOnCampusStoreCache.remove(),
    ];

    await Promise.all(removeCache).then((x) => {
        logger.log('All cache storage cleared successfully');
    }).catch(error => {
        logger.error('Error clearing cache storage:', error);
    });
}

function logCacheValues() {
    Promise.all([
        eResourcesDomainsStoreCache.get(),
        eResourcesDomainsStoreRewriteCache.get(),
        instituteProxyTypeStoreCache.get(),
        isOnCampusStoreCache.get(),
    ]).then((data) => {
        console.group("Cache Values:");
        console.log('eResourcesDomainsStoreCache:', data[0]);
        console.log('eResourcesDomainsStoreRewriteCache:', data[1]);
        console.log('instituteProxyTypeStoreCache:', data[2]);
        console.log('isOnCampusStoreCache:', data[3]);
        console.groupEnd();
    }).catch(error => {
        logger.error('Error logging cache values:', error);
    });
}

// bind to global execution context
self.logCacheValues = logCacheValues;

const INST_PROXY_TYPE = Object.freeze({
    SQUID: 'SQUID',
    REWRITE: 'REWRITE',
});

const eventReportConfig = Object.freeze({
    CHATBOT_ACTION: { name: 'ChatbotAction' },
    ARTICLE_SAVE: { name: 'ArticleSave', urlKey: 'url' },
    SEARCH_KEYWORD: { name: 'SearchKeyword' },
    BROWSING: { name: 'Browsing', urlKey: 'url' },
});

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

//--  PDF check

const PDF_MIME_TYPES = [
    'application/pdf', 'image/pdf', 'text/pdf', 'application/x-pdf', 'image/x-pdf', 'text/x-pdf', 'application/acrobat', 'applications/vnd.pdf',
];
const HEADER_CONTENT_DISPOSITION = 'content-disposition';

// keep a check on window max and min just in case we need to refresh token on window min and max

// keep a check on the new tab opened just in case if need to check on pdf

const popUpPageForHelpPath = 'src/chatbot_popup/index.html';
const defaultPopUpPath = 'src/browser_action/browser_action.html';
const pdfLimitExceededPath = 'src/notifiers/pdf-limit-exhausted.html';

const chatbotPopupInfoStore = new UTILS.ChromeLocalStorage('chatbotPopupInfo', 'session');

chrome.tabs.onCreated.addListener(async function (tab) {
    await isRefreshTokenUpdated();
})

async function isInternetAvailable() {
    try {
        const response = await fetch(myloft_ping_url, { method: "HEAD", cache: "no-cache" });
        return response.ok;
    } catch (error) {
        logger.error('Internet check failed:', error);
        return false;
    }
}

//MyLOFT Cookie set in WebApp to Authenticate Ext.
//chrome cookie listener for checking auth for first time or future re authentications

chrome.cookies.onChanged.addListener(async function (changeInfo) {
    if (changeInfo.cookie) {
        if (changeInfo.cookie.name == "myloftTokenCook" && changeInfo.cookie.domain == myloft_cookie_domain && changeInfo.cause == "explicit") {
            const tokenTemp = await getLocalStorageValue('token');
            const token = tokenTemp['token'];
            if (!token) {
                if (changeInfo.cookie.value) {
                    const tempToken = changeInfo.cookie.value;
                    const parsedToken = parseJwt(tempToken);
                    if (parsedToken['uId'] && parsedToken['aId'] && parsedToken['refreshToken']) {
                        await instituteIdStore.set(parsedToken.instId);
                        await userIdStore.set(parsedToken.uId);
                        await setLocalStorageValue({ 'token': tempToken })
                        //authentication success
                        const opt = {
                            iconUrl: '../../icon.png',
                            title: chrome.i18n.getMessage('notification_successfull_login'),
                            type: 'basic',
                            message: chrome.i18n.getMessage('notification_successfull_login_msg')
                        }
                        chrome.notifications.create('', opt);
                        await setMyLOFTIcon(true);
                        sendMessagetoOptions();

                        await getDomainsListtoDisableExt();
                        await getInstituteInfo();
                        await getListOfDomains();
                        await setAlarms();
                        await Promise.all([
                            getlistOfTags(),
                            getlistOfCollections(),
                            getListOfDomainRules(),
                            getUserAppSettings(),
                            getUserDomainRuleReactions(),
                            getExceededLimits(),
                        ]);

                        logger.info('Login successful, token set', { tokenClaims: parsedToken });
                    } else {
                        logger.error('Login failed, token not valid', { tokenClaims: Object.keys(parsedToken) });
                    }
                }
            }
        }
        if (changeInfo.cookie.name == "myloftLogout" && changeInfo.cookie.domain == myloft_cookie_domain && changeInfo.cause == "explicit") {
            if (changeInfo.cookie.value) {
                if (changeInfo.cookie.value == true || changeInfo.cookie.value == 'true') {
                    //update logout query
                    const tokenTemp = await getLocalStorageValue('token');
                    const token = tokenTemp['token'];
                    if (token) {
                        await logoutUser();
                    } else {
                        logger.warn('Logout called but no token found, user might not be logged in');
                    }
                }
            }
        }
    }
})

async function sendMessagetoOptions() {
    chrome.runtime.sendMessage({ loginSuccess: true }, (response) => {
        if (chrome.runtime.lastError) {
            return;
        }
    });
}

const MAX_ATTEMPTS = 3;
let TOO_MANY_RETRIES_URL_MAPPER = {};
let isTokenRefreshed = false;

chrome.webRequest.onAuthRequired.addListener(
    async function (details, callbackFn) {
        try {
            const accessibleDomains = await eResourcesDomainsStore.get();
            if (!accessibleDomains || accessibleDomains.length === 0) {
                return callbackFn({});
            }

            let hostname;
            try {
                const tempURL = new URL(details.url);
                hostname = tempURL.hostname;
            } catch (error) {
                return callbackFn({});
            }

            const checkIfAuthNeeded = accessibleDomains.filter(d => hostname.includes(d) && hostname.endsWith(d));

            if (checkIfAuthNeeded.length === 0 || details.isProxy === false) {
                return callbackFn({});
            }

            const token = await tokenStore.get();
            if (!token) {
                return callbackFn({});
            }

            if (TOO_MANY_RETRIES_URL_MAPPER[details.url]) {
                TOO_MANY_RETRIES_URL_MAPPER[details.url] += 1;
            } else {
                TOO_MANY_RETRIES_URL_MAPPER[details.url] = 1;
            }

            const authP = token;
            const uid = parseJwt(authP).uId;

            if (TOO_MANY_RETRIES_URL_MAPPER[details.url] <= MAX_ATTEMPTS) {
                return callbackFn({
                    authCredentials: {
                        'username': uid + '_' + defaultBrowserName,
                        'password': authP
                    }
                });
            } else if (!isTokenRefreshed) {
                await refreshToken();
                const newToken = await tokenStore.get();

                if (newToken) {
                    const newUid = parseJwt(newToken).uId;
                    isTokenRefreshed = true;
                    return callbackFn({
                        authCredentials: {
                            'username': newUid + '_' + defaultBrowserName,
                            'password': newToken
                        }
                    });
                } else {
                    return callbackFn({});
                }
            } else {
                return callbackFn({});
            }
        } catch (error) {
            logger.error('Error in onAuthRequired handler:', error);
            return callbackFn({});
        }
    },
    { urls: ["<all_urls>"] },
    ["asyncBlocking"]
);

//chrome extensions inbuilt message passing listener
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.readableArticleData) {
        const articleJsonData = JSON.parse(request.readableArticleData);
        addArticle(articleJsonData);
    };

    if (request.refreshProxy) {
        logger.info('Refreshing proxy settings');
        await getListOfDomains()
    }

    if (request.search_report) {
        searchKeywordAnalytics(request.search_report)
    }

    if (request.chatbot_report) {
        chatbotAnalytics(request.chatbot_report)
    }

    if (request.saveTags) {
        taggingChecker(request.saveTags);
    }

    if (request.report_myloft) {
        sendReports(request.report_myloft)
    }

    if (request.logoutFromOptions) {
        await chrome.storage.local.remove('token');
        await triggerCredentialCacheRefresh();
        await clearAllCacheStorage();
        await clearChromeLocalStorage();
        await clearProxySettings();
        await chrome.alarms.clearAll();
        await setMyLOFTIcon(false);
        logger.info('User logged out successfully from options page');
    }

    if (request.refreshToken) {
        await refreshToken();
    }

    // add domain to domain rule blacklist
    if (request.blockDomainRule) {
        try {
            const domainRuleId = request.blockDomainRule.id;
            await domainBlacklistStore.append({ timeStamp: Date.now(), id: domainRuleId });
        } catch (error) {
            logger.error("failed to add patter in domainRuleBlacklist", error);
        }
    }

    // send domain rule analytics data
    if (request.domainRuleAnalyticsData) {
        const data = request.domainRuleAnalyticsData;
        const responseData = await sendDomainRuleAnalyticsData(data);

        if (responseData.success && responseData?.data?.event_type === 'REACTION') {
            await domainRuleHelpfulStore.append({ domainRuleId: data.id });
        }

        // reaction is already added in the db
        if (!responseData.success && responseData.msgId === 'RECEXISTS003') {
            await domainRuleHelpfulStore.append({ domainRuleId: data.id });
        }
    }

    // handle doi received form the script
    if (request.ppaDoi) {
        try {
            const dataToSend = { type: 'ppaFound', data: null };
            const doi = request.ppaDoi;
            const tempData = await tempPpaFound.get();

            const ppa = tempData.data.ppa;

            // if it's not enabled for all & no userCat found so return 
            if (!ppa.enableForAll && ppa.allowedUserCat.length === 0) {
                return;
            }

            let InstituteConfigCheck = Object.keys(tempData.data.searchConfig.PPAInstituteConfig || {});

            // no institute config so return 
            if (InstituteConfigCheck.length === 0) {
                return;
            }

            InstituteConfigCheck = InstituteConfigCheck[0];
            const checkForISSN = InstituteConfigCheck.includes('WITH_ISSN');

            // get issn and other data from cross ref
            const getCrossRefData = await getDataFromCrossRef(doi);

            // crossref data not found so return 
            if (!getCrossRefData) {
                return;
            }

            if (checkForISSN) {
                // no issn found for the check to be made so return
                if (getCrossRefData?.message?.ISSN.length === 0) {
                    return;
                }

                // check issn exists with in myloft
                const checkISSN = await checkIssnForPPA(getCrossRefData.message.ISSN, null);

                // check failed so return
                if (!checkISSN.success || !checkISSN.data?.length) {
                    return;
                }
            }

            dataToSend.data = { crossRefData: getCrossRefData.message, ...tempData.data };

            const tab = await findActiveTabWithUrl(request.requestedByURL)
            if (!tab) {
                throw new Error('tab to send msg not found')
            }

            await chrome.tabs.sendMessage(tab.id, dataToSend, function (response) {
                if (chrome.runtime.lastError) {
                    return;
                }
            });
        } catch (error) {
            logger.error('ppa doi error ', error)
        }
    }

    if (request.ppaPriceEstimateData) {
        try {
            const data = request.ppaPriceEstimateData;
            const priceEstimate = await getPriceEstimatePPA(data.ppaConfigId, data.priceEstimateInput);
            const tab = await findActiveTabWithUrl(data.requestedByURL)
            if (!tab) {
                throw new Error('tab to send msg not found')
            }

            await chrome.tabs.sendMessage(tab.id, { type: 'ppaPriceEstimateFound', data: priceEstimate }, function (response) {
                if (chrome.runtime.lastError) {
                    return;
                }
            });
        } catch (error) {
            logger.error('ppa price estimation error ', error)
        }
    }

    if (request.ppaPlaceOrder) {
        try {
            const dataToSend = { type: 'ppaOrderData' };
            const data = await placeOrderPPA(request.ppaPlaceOrder);
            dataToSend.data = data;
            const tab = await findActiveTabWithUrl(request.ppaPlaceOrder.requestedByURL)
            if (!tab) {
                throw new Error('tab to send msg not found')
            }

            await chrome.tabs.sendMessage(tab.id, dataToSend, function (response) {
                if (chrome.runtime.lastError) {
                    return;
                }
            });
        } catch (error) {
            logger.error('ppa place order error ', error)
        }
    }

    if (request.ppaOrderDownload) {
        try {
            const data = request.ppaOrderDownload;
            const downloadData = await orderDownloadPPA(data.ppaConfigId, data.ppaOrderId);
            const tab = await findActiveTabWithUrl(data.requestedByURL)
            if (!tab) {
                throw new Error('tab to send msg not found')
            }

            await chrome.tabs.sendMessage(tab.id, { type: 'ppaOrderDownloadData', data: downloadData }, function (response) {
                if (chrome.runtime.lastError) {
                    return;
                }
            });
        } catch (error) {
            logger.error('ppa order download error ', error)
        }
    }

    // handle on chatbot pop-up closed msg
    if (request.action === 'popupClosed') {
        try {
            // const data = await chatbotPopupInfoStore.get();
            // if (!data) {
            //     return;
            // }
            // reset pop-up on close to use the default one
            // await chrome.action.setPopup({ tabId: data.tabId, popup: defaultPopUpPath });
            // await chatbotPopupInfoStore.remove();
        } catch (error) {
            logger.error('chatbot popup close error ', error)
        }
    }

    if (request.action === 'getDiagnostics') {
        try {
            const report = await getDiagnosticReport();
            sendResponse(report);
        } catch (err) {
            logger.error('Error generating diagnostic report:', err);
            sendResponse({ error: err.message });
        }
    }

    if (request.action === 'clearLogs') {
        try {
            await diagnosticLogsStore.remove();
            sendResponse({ success: true });
        } catch (err) {
            logger.error('Error clearing diagnostic logs:', err);
            sendResponse({ success: false, error: err.message });
        }
    }

    return true;
});

async function findActiveTabWithUrl(requestUrl) {
    try {
        const [matchingTab] = await chrome.tabs.query({
            active: true,
            url: requestUrl
        });
        if (matchingTab) return matchingTab;

        const [urlMatchTab] = await chrome.tabs.query({ url: requestUrl });
        if (urlMatchTab) return urlMatchTab;

        const [activeTab] = await chrome.tabs.query({ active: true });
        return activeTab || null;
    } catch (error) {
        logger.error('Error finding tab:', error);
        return null;
    }
}

async function setAlarms() {
    const alarmsToCreate = [
        { name: 'refreshToken', delayInMinutes: 0, periodInMinutes: 1 },
        { name: 'analyticsInterval', delayInMinutes: 0, periodInMinutes: 1 },
        { name: 'whereAmIstatusInterval', delayInMinutes: 0, periodInMinutes: 5 },
        { name: 'iconInterval', delayInMinutes: 0, periodInMinutes: 1 },
        { name: 'getDomainsListtoDisableExt', delayInMinutes: 0, periodInMinutes: 5 },
        { name: 'fetchPeriodicData', delayInMinutes: 0, periodInMinutes: 15 },
        { name: 'cleanupLogs', delayInMinutes: 0, periodInMinutes: 10 }
    ];

    await chrome.alarms.clearAll();

    const promises = alarmsToCreate.map(alarm => chrome.alarms.create(alarm.name, {
        delayInMinutes: alarm.delayInMinutes,
        periodInMinutes: alarm.periodInMinutes
    }));

    const data = await Promise.all(promises);
    logger.info('Alarms set successfully', { alarms: data });

    return true;
}

const ERRS_TO_TRIGGER_TO = [
    "net::ERR_PROXY_CONNECTION_FAILED",
    "net::ERR_TIMED_OUT",
    "net::ERR_CONNECTION_CLOSED",
    "net::ERR_TUNNEL_CONNECTION_FAILED",
];

chrome.webRequest.onErrorOccurred.addListener(async function (details) {
    const proxyType = await instituteProxyTypeStoreCache.get();
    // NOTE: in case of rewrite proxy, no need to show pdf limit exceeded popup or chatbot popup on request error
    if (proxyType === INST_PROXY_TYPE.REWRITE) {
        return;
    }

    const accessibleDomains = await eResourcesDomainsStoreCache.get();
    let notifierRan = false;
    if (accessibleDomains && accessibleDomains.length) {
        const tempURL = new URL(details.url);
        const hostname = tempURL.hostname;
        const canAccessDomain = accessibleDomains.filter((d) => {
            return hostname.includes(d) && hostname.endsWith(d) && details.type === "main_frame" && details.documentLifecycle === "active" && details.error === "net::ERR_TUNNEL_CONNECTION_FAILED";
        });

        if (canAccessDomain.length > 0) {
            const exceedDomainList = await domainExceedStore.get() ?? [];
            const canAccess = exceedDomainList.filter((d) => hostname.includes(d) && hostname.endsWith(d));

            // domain limit exhausted
            if (exceedDomainList.includes('overall') || canAccess.length > 0) {
                logger.warn('Domain access limit exceeded, showing limit notification', { hostname, exceedDomainList });
                const url = chrome.runtime.getURL(pdfLimitExceededPath) + '?refer=webRequestOnErrorOccurred';
                chrome.tabs.update(details.tabId, { url: url });
                notifierRan = true;
            }
        }

        // chatbot auto trigger on page error
        if (!notifierRan) {
            const isChatbotEnabled = await isAiChatbotEnabledStore.get();
            if (!isChatbotEnabled) {
                return;
            }

            // accessible domains check
            // The error code net::ERR_ABORTED is intended to only be generated when a user action causes a load to be interrupted.
            const canAccessDomainWithCheck = accessibleDomains.filter((d) => {
                return (
                    hostname.includes(d) &&
                    hostname.endsWith(d) &&
                    details.type === "main_frame" &&
                    details.documentLifecycle === "active" &&
                    details.error.length > 0 &&
                    details.tabId !== -1 &&
                    details.frameId !== -1 &&
                    ERRS_TO_TRIGGER_TO.includes(details.error)
                );
            });

            if (canAccessDomainWithCheck.length === 0) {
                return;
            }

            const hasInternetConnection = await isInternetAvailable();
            if (!hasInternetConnection) {
                return;
            }

            let urlToUse = details.url;

            if (urlToUse.length > 100) {
                urlToUse = urlToUse.slice(0, 100) + '...'
            }

            const obj = {
                init_msg: `I'm having trouble accessing ${urlToUse} with error ${details.error}.`
            }
            await runNeedHelpPopup(obj, details.tabId, urlToUse)
        }
    }
}, { urls: ["<all_urls>"] });

// Alarms Listener	
chrome.alarms.onAlarm.addListener(async function (alarm) {
    let name = alarm.name;
    if (name == 'refreshToken') {
        await isRefreshTokenUpdated()
    }

    if (name == 'analyticsInterval') {
        await updateAnalytics()
    }

    if (name == 'whereAmIstatusInterval') {
        await whereAmIstatusInterval()
    }

    if (name == 'iconInterval') {
        await iconInterval()
    }

    if (name == 'getDomainsListtoDisableExt') {
        await getDomainsListtoDisableExt();
    }

    if (name == 'fetchPeriodicData') {
        try {
            const tokenTemp = await getLocalStorageValue('token');
            const token = tokenTemp['token'];

            if (token) {
                await isRefreshTokenUpdated();
                await getInstituteInfo();
                await getlistOfTags();
                await getListOfDomains();
                await getlistOfCollections();
                await getListOfDomainRules();
                await getUserAppSettings();
                await getExceededLimits();
            }
        } catch (error) {
            logger.error('failed to perform fetchPeriodicData', error)
        }
    }

    if (name == 'cleanupLogs') {
        try {
            const hoursToKeep = 1;
            const cutoff = Date.now() - (hoursToKeep * 60 * 60 * 1000);
            const logs = await diagnosticLogsStore.get() || [];
            const filteredLogs = logs.filter(log => log.timestamp > cutoff);
            await diagnosticLogsStore.set(filteredLogs);
            logger.info(`Cleaned up logs older than ${hoursToKeep} hour(s). Remaining: ${filteredLogs.length}`);
        } catch (error) {
            logger.error('Error during log cleanup:', error);
        }
    }
})


//function to check oncampus offcampus status

async function whereAmI() {
    const tokenTemp = await getLocalStorageValue('token');
    const token = tokenTemp['token'];
    const deviceIdTemp = await getLocalStorageValue('deviceId');
    const deviceId = deviceIdTemp['deviceId'];
    if (token && deviceId) {
        const queryData = JSON.stringify({
            "query": "query{getCampusAccessType{data{ip type proxyOptions} msg msgId success}}"
        });
        try {
            const networkData = await simpleFetchQuery(queryData, true, 'getCampusAccessType');
            if (networkData) {
                if (networkData['success']) {
                    await turnOffProxy(networkData);
                    const getUserProxyStatus = await chrome.storage.local.get('proxyStatusUser');
                    const proxyStatusUser = getUserProxyStatus['proxyStatusUser'];
                    if ((networkData.data.type == "ON_CAMPUS" && proxyStatusUser === undefined) || (networkData.data.type == "ON_CAMPUS" && proxyStatusUser !== true)) {
                        clearProxySettings();
                        await chrome.storage.local.set({ isOnCampus: true })
                    } else {
                        await chrome.storage.local.set({ isOnCampus: false })
                        await getListOfDomains();
                    }
                }
                else if (!networkData["success"] && networkData["msgId"] == "FAILEDREQ") {
                    const networkData = await simpleFetchQuery(queryData, true, 'getCampusAccessType');
                    if (networkData && networkData.data && networkData.data.type == "ON_CAMPUS") {
                        clearProxySettings();
                        await chrome.storage.local.set({ isOnCampus: true })
                    } else {
                        await chrome.storage.local.set({ isOnCampus: false })
                    }
                }
            }
        } catch (err) {
            logger.error('Error in whereAmI function:', err);
        }
    }
}


//oncampus offcampusinterval 

async function whereAmIstatusInterval() {
    whereAmI()
    try {
        const { token } = await getLocalStorageValue('token');
        if (!token) {
            return { 'success': false }
        }

        const url = ping_proxy_url;
        const settings = {
            method: 'GET'
        };

        await fetch(url, settings)
    } catch (error) {
        return { 'success': false, 'msgId': "FAILEDREQ" }
    }
}

async function iconInterval() {
    try {
        const tokenTemp = await getLocalStorageValue('token');
        const token = tokenTemp['token'];
        const isLoggedIn = !!(token && token !== 'null' && token !== '');
        await setMyLOFTIcon(isLoggedIn);

        // Force-refresh the active tab's icon to show the change immediately (e.g. after login)
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tabs && tabs[0]) {
            const activeTab = tabs[0];
            if (activeTab.id && activeTab.url) {
                await refreshIconForTab(activeTab.id, activeTab.url);
            }
        }
    } catch (error) {
        logger.error('Error in iconInterval:', error);
        await setMyLOFTIcon(false);
    }
}

chrome.runtime.onStartup.addListener(async () => {
    try {
        await iconInterval();
    } catch (error) {
        logger.error('Error in onStartup handler:', error);
    }
});

chrome.storage.onChanged.addListener(async (changes, area) => {
    try {
        // only check for token changes
        if (area === 'local' && changes.token) {
            await iconInterval();
        }
    } catch (error) {
        logger.error('Error in storage.onChanged handler:', error);
    }
});

// keep a check on the highlighted/ selected tabs just in case we need to refresh token on tab highlighted/ selected

chrome.tabs.onHighlighted.addListener(async function (highlightInfo) {
    try {
        if (highlightInfo.windowId && highlightInfo.tabIds && highlightInfo.tabIds.length > 0) {
            const [tabInfo] = highlightInfo.tabIds
            chrome.tabs.get(tabInfo, async function (data) {
                //If hightlighted tab has url 
                if (data && data.url) {
                    /** check if the opened url is part of the disalbe list */
                    const disableDomainsTemp = await chrome.storage.local.get('disableExtList')
                    const disableDomains = disableDomainsTemp['disableExtList'];
                    let SaveFuncDisableDomains = (disableDomains) ? JSON.parse(disableDomains) : {}
                    SaveFuncDisableDomains = SaveFuncDisableDomains.saveDisableList ? SaveFuncDisableDomains.saveDisableList : [];
                    var isPartOfIt = false;
                    SaveFuncDisableDomains.forEach((tempDomain) => {
                        if (data.url.indexOf(tempDomain) > -1) {
                            isPartOfIt = true;
                        }
                    })
                }
                /** if opend url is part of disabled list disable chrome action else enable it */
                if ((data && data.url && data.url.indexOf(appURL) > -1) || (data && data.url && isPartOfIt)) {
                    chrome.action.disable();
                } else {
                    chrome.action.enable();
                }
            })
            await isRefreshTokenUpdated();
            // chrome.tabs.sendMessage(tab.id, { domainsList: JSON.stringify(accessibleDomains) });
        }
    } catch (error) {
        logger.error('Error in onHighlighted handler:', error);
    }
});
// keep a check on window max and min just in case we need to refresh token on window min and max

chrome.windows.onFocusChanged.addListener(async function (windowId) {
    try {
        await isRefreshTokenUpdated()
    } catch (error) {
        logger.error('Error in onFocusChanged handler:', error);
    }
});

async function handelAnalyticsFromStorage(event_name) {
    try {
        const dataTemp = await chrome.storage.local.get(event_name + '_analytics');
        const data = dataTemp[event_name + '_analytics'];

        await chrome.storage.local.remove(event_name + '_analytics')

        if (data) {
            return data;
        }

        return null;
    } catch (error) {
        logger.error(`Error handling analytics from storage for ${event_name}:`, error);
        return null;
    }
}

async function updateAnalytics() {
    // add event names to process here
    const eventNames = Object.values(eventReportConfig).map(event => event.name);

    const mergedDataIs = [];

    for (const event_name of eventNames) {
        const data = await handelAnalyticsFromStorage(event_name);
        if (data) {
            const parseData = JSON.parse(data)
            mergedDataIs.push(...parseData);
        }
    }

    if (mergedDataIs && mergedDataIs != null) {
        if (mergedDataIs.length > 0) {
            const dataJSON = {
                'data': mergedDataIs
            }
            try {
                await reportingFetchQuery(JSON.stringify(dataJSON), true);
            } catch (err) {
                logger.error('Error while updating analytics data', err);
            }
        }
    }

}


// function for anayltics engine


async function reportingFetchQuery(queryData, withAuth) {
    const localTempData = queryData;
    const localAuthStatus = withAuth;
    // var localQueryName = queryName;
    const url = reportingapiURL + "api/analytics/add";
    const deviceIdTemp = await getLocalStorageValue('deviceId');
    const deviceId = deviceIdTemp['deviceId'];
    try {

        await isRefreshTokenUpdated();

        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-DeviceID': deviceId,
                'X-App-Version': manifestVersion,
                'X-Device': deviceName // chrome/IE/Safari
            },
            body: queryData
        };

        if (withAuth) {
            const tokenTemp = await getLocalStorageValue('token');
            const token = tokenTemp['token'];
            settings.headers['X-Authorization'] = token;
        }

        const response = await fetch(url, settings);
        const data = await response.json();

        if (data && data['data'] && data['data'][queryName]['msgId'] == "INVALIDTOKEN") {
            //refresh token first as msg received from server says invalid token
            const refreshTokenNow = await refreshToken();
            if (refreshTokenNow['success']) {
                const reData = await reportingFetchQuery(localTempData, localAuthStatus);
                return reData;
            } else {
                return { 'success': false, 'msgId': "FAILEDREQ" }
            }
        } else {
            return data; //{ 'success': true}
        }
    } catch (err) {
        logger.error('Error in reportingFetchQuery:', err);
        return { 'success': false, 'msgId': "FAILEDREQ" }
    }
}
/** util functions */

//check if refresh token is up to date

async function isRefreshTokenUpdated() {
    try {
        const tokenTemp = await getLocalStorageValue('token');
        const token = tokenTemp['token'];

        const deviceIdTemp = await getLocalStorageValue('deviceId');
        const deviceId = deviceIdTemp['deviceId']
        if (token && deviceId) {
            const decodedToken = await parseJwt(token);
            const currentTime = new Date().getTime();
            await userIdStore.set(decodedToken.uId);
            // 2.5 min buffer
            if ((decodedToken['exp'] - 150000) < currentTime) {
                const refreshTokenData = await refreshToken();
                if (refreshTokenData) {
                    if (refreshTokenData['success']) {
                        return { 'success': true };
                    } else {
                        return { 'success': false };
                    }
                } else {
                    return { 'success': false };
                }
            } else {
                return { 'success': true };
            }
        } else {
            return { 'success': false };
        }
    } catch (error) {
        logger.error('Error in isRefreshTokenUpdated:', error);
        return { 'success': false };
    }
}


//Refresh Token Function
let TOKEN_QUEUE = [];

// Fetches authtrigger URL (returns 407) to force Chrome to call onAuthRequired
// again with fresh credentials, clearing its stale credential cache.
async function triggerCredentialCacheRefresh() {
    try {
        await fetch(myloft_auth_trigger_url, { method: 'HEAD', cache: 'no-cache' });
    } catch (_) {}
}

async function resolveTokenRefreshQueue(withSuccess) {
    if (TOKEN_QUEUE?.length > 0) {
        for (let i = 0; i < TOKEN_QUEUE.length; i++) {
            TOKEN_QUEUE[i].resolve({ 'success': withSuccess });
        }

        TOKEN_QUEUE = []
    }
}

// function to refresh the current token when it has expired
async function refreshToken(forceRefresh = false, version = 'v2') {
    if (!globalRefreshTokenProcessMain) {
        globalRefreshTokenProcessMain = true;
        try {
            const queryData = JSON.stringify({
                query: `mutation($version: String, $forceRefresh: Boolean) {
					refreshToken(version: $version, forceRefresh: $forceRefresh) {
						token success msg msgId
					}
				}`,
                variables: {
                    version: version,
                    forceRefresh: forceRefresh
                }
            });

            const data = await simpleFetchQuery(queryData, true, 'refreshToken');

            if (data.success) {
                if (data.token) {
                    await setLocalStorageValue({ 'token': data.token });
                    await setMyLOFTIcon(true);
                    logger.info('Token refresh successful', { token: data.token });
                } else {
                    logger.warn('Token refresh successful but no token received');
                }
                globalRefreshTokenProcessMain = false;
                TOO_MANY_RETRIES_URL_MAPPER = {};
                await resolveTokenRefreshQueue(true);
                return { 'success': true };
            } else {
                logger.error('Token refresh failed', { msgId: data.msgId, msg: data.msg });
                if (data.msgId) {
                    if (data.msgId == "FAILEDREQ") {
                        globalRefreshTokenProcessMain = false;
                        await resolveTokenRefreshQueue(false);
                        return { 'success': false };
                    }
                }

                if (data.token == null || !data.token) {
                    logger.error('Token refresh failed - no valid token received, clearing user session');
                    await resolveTokenRefreshQueue(false);
                    await clearChromeLocalStorage();
                    await setMyLOFTIcon(false);
                    await chrome.alarms.clearAll();

                    await clearProxySettings();
                    globalRefreshTokenProcessMain = false;
                    return { 'success': false };
                }

                globalRefreshTokenProcessMain = false;
                TOO_MANY_RETRIES_URL_MAPPER = {};
                await resolveTokenRefreshQueue(false);
                return { 'success': false };
            }
        } catch (error) {
            logger.error('Exception during token refresh:', error);
            globalRefreshTokenProcessMain = false;
            TOO_MANY_RETRIES_URL_MAPPER = {};
            await resolveTokenRefreshQueue(false);
            return { 'success': false };
        }
    } else {
        return new Promise((resolve, reject) => {
            TOKEN_QUEUE.push({ resolve, reject });
        });
    }
}

// function waitUntil(conditionFn, timeout = 10000) {
//     return new Promise((resolve, reject) => {
//         const startTime = Date.now();

//         function checkCondition() {
//             conditionFn()
//                 .then(result => {
//                     if (!result || !result.globalRefreshTokenProcess) {
//                         resolve();
//                     } else if (Date.now() - startTime >= timeout) {
//                         resolve();
//                     } else {
//                         setTimeout(checkCondition, 300);
//                     }
//                 })
//                 .catch(error => {
//                     resolve();
//                 });
//         }

//         checkCondition();
//     });
// }


// async function sleep() {
//     const globalRefreshTokenProcessTemp = await chrome.storage.session.get("globalRefreshTokenProcess");
//     const globalRefreshTokenProcess = globalRefreshTokenProcessTemp['globalRefreshTokenProcess']
//     if (!globalRefreshTokenProcess) {
//         return { 'success': true }
//     }
//     await wait(3000);
//     return await sleep();
// }

// async function wait(ms) {
//     let start = new Date().getTime();
//     let end = start;
//     while (end < start + ms) {
//         end = new Date().getTime();
//     }
// }


function isValidProxyConfigJSON(config) {
    if (
        config &&
        config.WEB &&
        config.WEB.allowUserstoManage &&
        typeof config.WEB.allowUserstoManage.value === 'boolean' &&
        config.WEB.allowUserstoManage.default !== undefined &&
        ['ON', 'OFF'].includes(config.WEB.allowUserstoManage.default)
    ) {
        return true;
    } else {
        return false;
    }
}

async function turnOffProxy(networkData) {
    let proxyOffConfig = networkData.data.proxyOptions;
    let proxyOffConfigVal = false;
    let allowUserstoManage = false;
    let isProxyCompleteOff = false;
    if (isValidProxyConfigJSON(proxyOffConfig)) {
        proxyOffConfigVal = true;
        if (proxyOffConfig.WEB.allowUserstoManage.value) {
            allowUserstoManage = true;

            if (proxyOffConfig.WEB.allowUserstoManage.default === "OFF") {
                isProxyCompleteOff = true;
            } else {
                isProxyCompleteOff = false;
            }
        }
    } else {
        allowUserstoManage = false;
    }

    await chrome.storage.local.set({ proxyOffConfigVal });
    await chrome.storage.local.set({ allowUserstoManage: allowUserstoManage });
    await chrome.storage.local.set({ isProxyCompleteOff: isProxyCompleteOff });

    const getUserProxyStatus = await chrome.storage.local.get('proxyStatusUser');
    const proxyStatusUser = getUserProxyStatus['proxyStatusUser'];
    if (isProxyCompleteOff && !proxyStatusUser) {
        clearProxySettings();
    }
    return { allowUserstoManage, isProxyCompleteOff };
}


// function to get all domains users can access
async function getListOfDomains() {
    const queryData = JSON.stringify({
        "query": "query{getMyDomainsForUsers{msgId msg success ip instituteData{ remotexsHostName instituteProxyIP instituteProxyPort} data}}"
    });
    try {
        const netqueryData = JSON.stringify({
            "query": "query{getCampusAccessType{data{ip type proxyOptions} msg msgId success}}"
        });
        const networkData = await simpleFetchQuery(netqueryData, true, 'getCampusAccessType');
        if (networkData) {
            if (networkData['success']) {
                //check if proxy is to be turned off

                await turnOffProxy(networkData);
                const getUserProxyStatus = await chrome.storage.local.get('proxyStatusUser');
                const proxyStatusUser = getUserProxyStatus['proxyStatusUser'];
                if ((networkData.data.type == "ON_CAMPUS" && proxyStatusUser === undefined) || (networkData.data.type == "ON_CAMPUS" && proxyStatusUser !== true)) {
                    await chrome.storage.local.set({ isOnCampus: true })
                    clearProxySettings();
                } else {
                    await chrome.storage.local.set({ isOnCampus: false })
                }
            }
        }

        const deviceTem = await getLocalStorageValue('deviceId')

        if (!deviceTem['deviceId'] || deviceTem['deviceId'] === undefined || deviceTem['deviceId'] == 'null') {
            return { 'success': false }
        }

        const recData = await simpleFetchQuery(queryData, true, 'getMyDomainsForUsers');
        if (recData['success']) {
            const domainsList = recData['data'];
            await chrome.storage.local.set({ 'eresource_domains': domainsList });
            const accessibleDomains = domainsList;

            if (recData['instituteData']) {
                await Promise.all([
                    chrome.storage.local.set({ instituteHostname: recData['instituteData']['remotexsHostName'] }),
                    chrome.storage.local.set({ instituteIpAddress: recData['instituteData']['instituteProxyIP'] }),
                    chrome.storage.local.set({ instituteProxyPort: recData['instituteData']['instituteProxyPort'] })
                ]);
                const [instituteInfo, proxyType] = await Promise.all([instituteInfoStore.get(), instituteProxyTypeStore.get()]);
                const instituteHostname = recData['instituteData']['remotexsHostName'];
                const hostName = instituteHostname.replace('https://', '')
                const instituteIpAddress = recData['instituteData']['instituteProxyIP'];
                const instituteProxyPort = recData['instituteData']['instituteProxyPort'];
                if (hostName && instituteIpAddress && instituteProxyPort) {
                    // user's ip address
                    await chrome.storage.local.set({ pubIPAddress: recData['ip'] });

                    if (proxyType === INST_PROXY_TYPE.REWRITE) {
                        const rewriteAccessibleDomains = accessibleDomains.map(domain => {
                            return UTILS.transformDomainForRewriteProxy(domain, hostName);
                        });
                        await eResourcesDomainsStoreRewrite.set(rewriteAccessibleDomains);
                        clearProxySettings();
                    }

                    accessibleDomains.push(ping_proxy_domain);
                    accessibleDomains.push(new URL(myloft_auth_trigger_url).hostname);
                    await chrome.storage.local.set({ 'eresource_domains': accessibleDomains });

                    if (proxyType === INST_PROXY_TYPE.SQUID) {
                        const httpsProxyConfig = instituteInfo?.httpsProxyConfig;
                        if (httpsProxyConfig && httpsProxyConfig.port) {
                            httpsPacFileCreator(accessibleDomains, instituteIpAddress, httpsProxyConfig.port, hostName)
                        } else {
                            proxyPacFileCreator(accessibleDomains, instituteIpAddress, instituteProxyPort, hostName)
                        }
                    }
                } else {
                    await chrome.storage.local.set({ instituteHostname: "" });
                    await chrome.storage.local.set({ instituteIpAddress: "" });
                    await chrome.storage.local.set({ instituteProxyPort: null });
                    clearProxySettings();
                }
            } else {
                await chrome.storage.local.set({ instituteHostname: "" });
                await chrome.storage.local.set({ instituteIpAddress: "" });
                await chrome.storage.local.set({ instituteProxyPort: null });
                clearProxySettings();
            }
            //send domain list to reporting sript if needed
            return { 'success': true }
        }
    } catch (error) {
        logger.error('Failed to get domains list', error);
        clearProxySettings()
        return { 'success': false }
    }
}

async function getDomainsListtoDisableExt() {
    try {
        const { token } = await getLocalStorageValue('token');
        if (!token) {
            return { 'success': false }
        }

        const url = myloft_proxy_domain_blacklist_url;
        const settings = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        };

        const data = await fetch(url, settings)
            .then(response => response.json())
            .then(json => {
                return json;
            })
            .catch(e => {
                return { 'success': false, 'msgId': 'FAILEDREQ' }
            })

        const dataToBeSaved = JSON.stringify(data);
        await chrome.storage.local.set({ 'disableExtList': dataToBeSaved });
        return { 'success': true }
    } catch (error) {
        logger.error('Failed in getDomainsListtoDisableExt:', error);
        return { 'success': false }
    }
}

async function getExceededLimits() {
    const instituteHostnameTemp = await chrome.storage.local.get('instituteHostname');
    const instituteHostname = instituteHostnameTemp['instituteHostname'];
    if (instituteHostname) {
        const tokenTemp = await getLocalStorageValue('token')
        try {
            const url = instituteHostname + "/api/user/exceed";
            const settings = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Authorization': tokenTemp['token']
                }
            };
            let responseData = await fetch(url, settings);
            responseData = await responseData.json();

            if (responseData && responseData['success']) {
                if (responseData.overall === 0) {
                    await domainExceedStore.set(['overall']);
                } else if (Array.isArray(responseData.domains)) {
                    await domainExceedStore.set(responseData.domains);
                }

                return { 'success': true };
            } else {
                logger.warn('Failed to get exceeded limits - response unsuccessful', responseData);
                return { 'success': false };
            }
        } catch (error) {
            logger.error('Error in getExceededLimits:', error);
            return { 'success': false }
        }
    } else {
        return { 'success': false }
    }
}

// function to get list of all tags
async function getlistOfTags() {
    const queryData = JSON.stringify({
        "query": "query{getTags(orderBy:name_ASC){data{id name} msg msgId success}}"
    });
    try {
        const tagData = await simpleFetchQuery(queryData, true, 'getTags');
        if (tagData['success']) {
            const allTagsofUser = tagData['data'].map((singleTag) => {
                return singleTag['name']
            })
            await chrome.storage.local.set({ 'allTagsofUser': allTagsofUser });
            return { 'success': true }
        } else {
            logger.warn('Failed to get list of tags - response unsuccessful', tagData);
            return { 'success': false }
        }

    } catch (error) {
        logger.error('Error in getlistOfTags:', error);
        return { 'success': false }
    }
}

//function to get list of all collections
async function getlistOfCollections() {
    var queryData = JSON.stringify({
        "query": "query{ getCollections(order:title_ASC){data{id title} msg msgId success}}"
    });
    try {
        var collectionsData = await simpleFetchQuery(queryData, true, 'getCollections');
        if (collectionsData['success']) {
            const allCollectionsofUser = collectionsData['data'];
            await chrome.storage.local.set({ 'allCollectionsofUser': allCollectionsofUser });
            return { 'success': true }
        } else {
            return { 'success': false }
        }

    } catch (error) {
        return { 'success': false }
    }
}

async function getListOfDomainRules() {
    const queryData = JSON.stringify({
        query: `query {
            getDomainRule {
                data {
                    id
                    name
                    value
                    domains
                    targetType
                }
                msg
                msgId
                success
            }
        }
        `
    });

    try {
        const domainRule = await simpleFetchQuery(queryData, true, 'getDomainRule');
        if (domainRule['success']) {
            await domainRuleStore.set(domainRule.data);
            return { 'success': true }
        } else {
            return { 'success': false }
        }
    } catch (error) {
        return { 'success': false }
    }
}

async function sendDomainRuleAnalyticsData(data) {
    try {
        await isRefreshTokenUpdated()

        const url = reportingapiURL + "api/analytics/domainRules/helpful"
        const tokenTemp = await getLocalStorageValue('token')
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Authorization': tokenTemp['token']
            },
            body: JSON.stringify(data)
        };

        let responseData = await fetch(url, settings);
        responseData = await responseData.json();

        return responseData;
    } catch (error) {
        return { 'success': false }
    }
}

async function getUserDomainRuleReactions() {
    try {
        await isRefreshTokenUpdated()

        const url = reportingapiURL + "api/analytics/domainrules/reactions"
        const tokenTemp = await getLocalStorageValue('token')
        const settings = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-Authorization': tokenTemp['token']
            },
        };

        let responseData = await fetch(url, settings);
        responseData = await responseData.json();

        if (responseData.data && responseData.data.length > 0) {
            await domainRuleHelpfulStore.set(responseData.data)
        }

        return true;
    } catch (error) {
        return false;
    }
}

async function getInstituteInfo() {
    const instId = await instituteIdStore.get()

    if (!instId) {
        return { success: false };
    }

    const query_data = JSON.stringify({
        query: `query ($filterByID: ID) {
            getInstitutes(
              filterByID: $filterByID
            ) {
              data {
                instituteName
                instituteProxyType
                httpsProxyConfig
                appConfig {
                    logoUrl
                    extensionUrl
                    standaloneURL
                }
              }
              success
              msgId
              msg
            }
          }`,
        variables: {
            filterByID: instId,
        }
    });

    try {
        const instData = await simpleFetchQuery(query_data, true, 'getInstitutes');
        if (instData.success) {
            await instituteInfoStore.set({
                instituteName: instData.data[0].instituteName,
                instituteLogoUrl: instData.data[0]?.appConfig?.logoUrl,
                standaloneURL: instData.data[0]?.appConfig?.standaloneURL,
                httpsProxyConfig: instData.data[0]?.httpsProxyConfig
            });

            const instituteProxyType = instData.data[0].instituteProxyType;
            await instituteProxyTypeStore.set(instituteProxyType);            
            const logoUrl = instData.data[0]?.appConfig?.extensionUrl;
            if (logoUrl) {
                await logoStore.set(logoUrl);
                const success = await setDynamicInstituteIcon(logoUrl);
                if (!success) {
                    await setDefaultIcon();
                }
                await setMyLOFTIcon(true);
            } else {
                // Clear stale logo URL so previous institute's logo isn't used
                await logoStore.set(null);
                await setDefaultIcon();
                iconCache.institute = null;
            }

            return { success: true };
        }
    } catch (e) {
        return { success: false };
    }
}

//one function for all http fetch queries
async function simpleFetchQuery(queryData, withAuth, queryName) {
    const localTempData = queryData;
    const localAuthStatus = withAuth;
    const localQueryName = queryName;
    const url = apiURL;
    const deviceIdTemp = await getLocalStorageValue('deviceId');
    const deviceId = deviceIdTemp['deviceId'];
    try {

        if (!['refreshToken', 'logout'].includes(queryName)) {
            await isRefreshTokenUpdated()
        }

        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-DeviceID': deviceId,
                'X-Referer': appURL,
                'X-App-Version': manifestVersion,
                'X-Device': deviceName // chrome/IE/Safari
            },
            body: queryData
        };

        if (withAuth) {
            const tokenTemp = await getLocalStorageValue("token");
            const token = tokenTemp['token'];
            settings.headers['X-Authorization'] = token;
            if (!token) {
                return { 'success': false, 'msgId': "FAILEDREQ" }
            }
        }

        const response = await fetch(url, settings);
        if (!response.ok) {
            logger.error(`Network error in simpleFetchQuery (${queryName}):`, { status: response.status, statusText: response.statusText });
            return { 'success': false, 'msgId': "FAILEDREQ" };
        }
        const data = await response.json();

        if (!['refreshToken', 'logout'].includes(queryName) && data['data'][queryName]['msgId'] == "INVALIDTOKEN") {
            //refresh token first as msg received from server says invalid token
            const refreshTokenNow = await refreshToken();
            if (refreshTokenNow['success']) {
                const reData = await simpleFetchQuery(localTempData, localAuthStatus, localQueryName);
                return reData;
            } else {
                logger.error('Token refresh failed during API call', { queryName });
                return { 'success': false, 'msgId': "FAILEDREQ" }
            }
        } else if (queryName != 'refreshToken') {
            return data['data'][queryName];
        } else if (queryName == 'refreshToken' && data['data'][queryName]['token']) {
            return data['data'][queryName];
        } else {
            logger.warn(`API query (${queryName}) returned unsuccessful state`, { response: data });
            return { 'success': false, token: null }
        }
    } catch (err) {
        logger.error(`Exception in simpleFetchQuery (${queryName}):`, err);
        return { 'success': false, 'msgId': "FAILEDREQ" }
    }
}

async function logoutUser() {
    const querydata = JSON.stringify({ "query": "mutation{logout{msgId msg success}}" });
    simpleFetchQuery(querydata, true, 'logout');
    await chrome.storage.local.remove('token');
    TOO_MANY_RETRIES_URL_MAPPER = {};
    await triggerCredentialCacheRefresh();
    await clearProxySettings();
    await clearAllCacheStorage();
    await clearChromeLocalStorage();
    await chrome.alarms.clearAll();

    logoutchromeNotification(chrome.i18n.getMessage('notification_logout_success'));
    await logoStore.set(null);
    await setMyLOFTIcon(false);
    await chrome.storage.local.remove('token');
    TOO_MANY_RETRIES_URL_MAPPER = {};
    logger.info('User logged out successfully');
    return true;
}

function parseJwt(token) {
    try {
        if (!token) {
            return {};
        }

        const parts = token.split('.');
        const base64Url = parts[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

        try {
            const jsonPayload = atob(base64);
            return JSON.parse(jsonPayload);
        } catch (decodeError) {
            return {};
        }
    } catch (error) {
        return {};
    }
};

async function ensureIconReady() {
    // prevent duplicate initialization
    if (iconCache.institute) return;
    const logoUrl = await logoStore.get();

    if (logoUrl) {
        const success = await setDynamicInstituteIcon(logoUrl);
        if (!success && !iconCache.defaultGreenDot) {
            await setDefaultIcon();
        }
    } else if (!iconCache.defaultGreenDot) {
        await setDefaultIcon();
    }
}


//function to set icon color of the extention
async function setMyLOFTIcon(isLoggedIn, tabId = null) {
    const currentVersion = ++iconCache.version;
    if (isLoggedIn) {

        await ensureIconReady();

        // Ignore outdated async calls
        if (currentVersion !== iconCache.version) return;

        if (iconCache.institute) {
            await chrome.action.setIcon({ imageData: iconCache.institute.colored });
            return;
        }

        // Fallback to default colored icons
        await chrome.action.setIcon({
            path: {
                "16": "../../icons/icon16.png",
                "19": "../../icons/icon19.png",
                "48": "../../icons/icon48.png",
                "128": "../../icons/icon128.png"
            }
        });
    } else {

        // Clear all icon caches on logout
        iconCache.institute = null;
        iconCache.defaultGreenDot = null;

        if (currentVersion !== iconCache.version) return;

        await chrome.action.setIcon({
            tabId: tabId,
            path: {
                "16": "../../icons/icon_myloftbw16.png",
                "19": "../../icons/icon_myloftbw19.png",
                "48": "../../icons/icon_myloftbw48.png",
                "128": "../../icons/icon_myloftbw128.png"
            }
        });
    }
}

// Function to fetch remote institute logo, convert to ImageData and set as icon dynamically
async function setDynamicInstituteIcon(logoUrl) {
    if (!logoUrl) return false;
    try {

        //  Timeout handling
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);
        const response = await fetch(logoUrl, { signal: controller.signal });
        clearTimeout(timeout);

        if (!response.ok) return false;

        // content type validation
        const contentType = response.headers.get("content-type") || "";
        if (!contentType.startsWith("image/")) {
            console.warn("Invalid content-type:", contentType);
            return false;
        }

        const blob = await response.blob();

        const MAX_SIZE = 5 * 1024 * 1024;
        if (blob.size > MAX_SIZE) {
            console.warn("Image too large:", blob.size);
            return false;
        }

        const bitmap = await createImageBitmap(blob);
        const sizes = [16, 19, 48, 128];

        const colored = {};
        const greenDot = {};

        for (const size of sizes) {

            const scale = Math.min(size / bitmap.width, size / bitmap.height);
            const x = (size - bitmap.width * scale) / 2;
            const y = (size - bitmap.height * scale) / 2;

            // ---------- Colored Icon ----------
            const canvasColored = new OffscreenCanvas(size, size);
            const ctxColored = canvasColored.getContext('2d');

            ctxColored.clearRect(0, 0, size, size);
            ctxColored.drawImage(bitmap, x, y, bitmap.width * scale, bitmap.height * scale);

            colored[size] = ctxColored.getImageData(0, 0, size, size);

            // ---------- Green Rectangle Badge ----------
            const canvasGreenDot = new OffscreenCanvas(size, size);
            const ctxGreenDot = canvasGreenDot.getContext('2d');

            ctxGreenDot.clearRect(0, 0, size, size);
            ctxGreenDot.drawImage(bitmap, x, y, bitmap.width * scale, bitmap.height * scale);

            // scale factor
            const scaleFactor = 2;

            // base size (before scaling)
            let badgeWidth = size * 0.65;
            let badgeHeight = size * 0.38;

            // apply scaling (~2x)
            badgeWidth *= scaleFactor;
            badgeHeight *= scaleFactor;

            // safety clamp (prevent overflow)
            badgeWidth = Math.min(badgeWidth, size * 0.9);
            badgeHeight = Math.min(badgeHeight, size * 0.6);

            const paddingX = size * 0.005;
            const paddingY = size * 0.002;

            // FIXED POSITION (fully inside bottom-right)
            const badgeX = size - badgeWidth + paddingX;
            const badgeY = size - badgeHeight + paddingY;
            
            const radius = badgeHeight * 0.3;

            // ---------- Draw Rounded Rectangle ----------
            ctxGreenDot.beginPath();
            ctxGreenDot.moveTo(badgeX + radius, badgeY);
            ctxGreenDot.lineTo(badgeX + badgeWidth - radius, badgeY);
            ctxGreenDot.quadraticCurveTo(badgeX + badgeWidth, badgeY, badgeX + badgeWidth, badgeY + radius);
            ctxGreenDot.lineTo(badgeX + badgeWidth, badgeY + badgeHeight - radius);
            ctxGreenDot.quadraticCurveTo(badgeX + badgeWidth, badgeY + badgeHeight, badgeX + badgeWidth - radius, badgeY + badgeHeight);
            ctxGreenDot.lineTo(badgeX + radius, badgeY + badgeHeight);
            ctxGreenDot.quadraticCurveTo(badgeX, badgeY + badgeHeight, badgeX, badgeY + badgeHeight - radius);
            ctxGreenDot.lineTo(badgeX, badgeY + radius);
            ctxGreenDot.quadraticCurveTo(badgeX, badgeY, badgeX + radius, badgeY);
            ctxGreenDot.closePath();

            // Fill
            ctxGreenDot.fillStyle = '#00ff00';
            ctxGreenDot.fill();

            // Stroke
            ctxGreenDot.strokeStyle = 'rgba(0,0,0,0.4)';
            ctxGreenDot.lineWidth = size * 0.03;
            ctxGreenDot.stroke();

            // ---------- TEXT ----------
            ctxGreenDot.fillStyle = '#000000';

            // scale text properly
            const fontSize = badgeHeight * 0.75;
            ctxGreenDot.font = `bold ${fontSize}px sans-serif`;

            ctxGreenDot.textAlign = 'center';
            ctxGreenDot.textBaseline = 'middle';

            ctxGreenDot.fillText(
              'ON',
              badgeX + badgeWidth / 2,
              badgeY + badgeHeight / 2
            );

            greenDot[size] = ctxGreenDot.getImageData(0, 0, size, size);
        }

        bitmap.close();
        iconCache.institute = { colored, greenDot };
        return true;

    } catch (err) {
        console.warn("Failed to set dynamic institute icon:", err);
        return false;
    }
}

async function setDefaultIcon() {
    const sizes = [16, 19, 48, 128];
    const greenDot = {};

    for (const size of sizes) {
       const img = await fetch(`../../icons/icon${size}.png`).then(r => r.blob());
       const bitmap = await createImageBitmap(img);

       const canvasDot = new OffscreenCanvas(size, size);
       const ctxDot = canvasDot.getContext("2d");

       ctxDot.drawImage(bitmap, 0, 0, size, size);

       const scaleFactor = 2;

       let badgeWidth = size * 0.65;
       let badgeHeight = size * 0.3;

       badgeWidth *= scaleFactor;
       badgeHeight *= scaleFactor;

       // clamp
       badgeWidth = Math.min(badgeWidth, size * 0.9);
       badgeHeight = Math.min(badgeHeight, size * 0.6);

       const paddingX = size * 0.005;
       const paddingY = size * 0.002;

       // FIXED POSITION (fully inside bottom-right)
       const badgeX = size - badgeWidth + paddingX;
       const badgeY = size - badgeHeight + paddingY;

       const radius = badgeHeight * 0.3;

       // Rounded Rectangle
       ctxDot.beginPath();
       ctxDot.moveTo(badgeX + radius, badgeY);
       ctxDot.lineTo(badgeX + badgeWidth - radius, badgeY);
       ctxDot.quadraticCurveTo(badgeX + badgeWidth, badgeY, badgeX + badgeWidth, badgeY + radius);
       ctxDot.lineTo(badgeX + badgeWidth, badgeY + badgeHeight - radius);
       ctxDot.quadraticCurveTo(badgeX + badgeWidth, badgeY + badgeHeight, badgeX + badgeWidth - radius, badgeY + badgeHeight);
       ctxDot.lineTo(badgeX + radius, badgeY + badgeHeight);
       ctxDot.quadraticCurveTo(badgeX, badgeY + badgeHeight, badgeX, badgeY + badgeHeight - radius);
       ctxDot.lineTo(badgeX, badgeY + radius);
       ctxDot.quadraticCurveTo(badgeX, badgeY, badgeX + radius, badgeY);
       ctxDot.closePath();

       // Fill
       ctxDot.fillStyle = "#00ff00";
       ctxDot.fill();

       // Stroke
       ctxDot.strokeStyle = "rgba(0,0,0,0.4)";
       ctxDot.lineWidth = size * 0.03;
       ctxDot.stroke();

       // TEXT
       ctxDot.fillStyle = "#000000";

       const fontSize = badgeHeight * 0.75;
       ctxDot.font = `bold ${fontSize}px sans-serif`;

       ctxDot.textAlign = "center";
       ctxDot.textBaseline = "middle";

       ctxDot.fillText(
           "ON",
           badgeX + badgeWidth / 2,
           badgeY + badgeHeight / 2
       );

       greenDot[size] = ctxDot.getImageData(0, 0, size, size);
       bitmap.close();
    }

    iconCache.defaultGreenDot = greenDot;
}


async function refreshIconForTab(tabId, url) {
    if (!url) {
        return;
    }
    try {
        const tokenTemp = await getLocalStorageValue('token');
        const isLoggedIn = !!(tokenTemp && tokenTemp['token'] && tokenTemp['token'] !== 'null');

        let isWhitelisted = false;
        const accessibleDomains = await getDomainsForAccessCheck();
        if (accessibleDomains && accessibleDomains.length > 0) {
            try {
                const hostname = new URL(url).hostname;
                isWhitelisted = accessibleDomains.some(d => hostname.includes(d) && hostname.endsWith(d));
            } catch (e) {
                isWhitelisted = false;
            }
        }
        if (isLoggedIn) {
            if (isWhitelisted) {
                if (iconCache.institute) {
                    await chrome.action.setIcon({ tabId: tabId, imageData: iconCache.institute.greenDot });
                } else if (iconCache.defaultGreenDot) {
                    await chrome.action.setIcon({
                        tabId: tabId,
                        imageData: iconCache.defaultGreenDot
                    }).catch(() => { });
                }
            } else {
                if (iconCache.institute) {
                    await chrome.action.setIcon({ tabId: tabId, imageData: iconCache.institute.colored });
                } else {
                    await chrome.action.setIcon({
                        tabId: tabId,
                        path: {
                            "16": "../../icons/icon16.png",
                            "19": "../../icons/icon19.png",
                            "48": "../../icons/icon48.png",
                            "128": "../../icons/icon128.png"
                        }
                    }).catch(() => { });
                }
            }
        } else {
            await setMyLOFTIcon(false, tabId);
        }
    } catch (error) {
        console.warn("Failed refreshing icon for tab", error);
    }
}


// keep a check on the replaced tabs just in case we need to refresh token on tab replaced
chrome.tabs.onReplaced.addListener(async function (addedTabId, removedTabId) {

    if (addedTabId && removedTabId) {
        await isRefreshTokenUpdated();
        const accessibleDomains = await eResourcesDomainsStoreCache.get();
        /** send message to Inject icons  */
        chrome.tabs.sendMessage(addedTabId, { domainsList: JSON.stringify(accessibleDomains) }, function (response) {
            if (chrome.runtime.lastError) {
                // 'Could not establish connection. Receiving end does not exist.'
                return;
            }
        });
    }
});

let searchConfigPpaData = null;
let ppaData = null;
const allowedPpaServices = ['REPRINT_DESK'];

async function getUserAppSettings() {
    const instituteId = await chrome.storage.local.get('instituteId')
    const id = instituteId['instituteId'];
    const variables = {
        'instituteId': id,
    }

    const query_data = JSON.stringify({
        "query": `query($instituteId: ID) { 
                getAppSettings(instituteId: $instituteId) { 
                    data { 
                        id 
                        allowFormSubmission
                        optionalProxy
                        shouldShowJournalDetail
                        isAiChatbotEnabled
                        searchConfigs {
                            id
                            title
                            searchURL
                            orderIndex
                            enablePPA
                            ppaConfigId
                            PPAInjectionConfig
                            PPAInstituteConfig
                            masterSearch {
                                iconURL
                            }
                        }
                        ppaConfig {
                            id
                            masterPPAConfig {
                                id
                                serviceName
                            }
                            configLevel
                            enableForAll
                            orderConfig
                            allowedUserCat {
                                id
                            }
                        }
                    }
                    success
                    msgId
                    msg
                }
            }`,
        "variables": variables
    });
    try {
        const collectionsData = await simpleFetchQuery(query_data, true, 'getAppSettings');
        if (collectionsData) {
            await Promise.all([
                chrome.storage.local.set({ 'searchConfigs': collectionsData.data.searchConfigs }),
                ppaStore.set(collectionsData.data.ppaConfig),
                isAiChatbotEnabledStore.set(collectionsData.data.isAiChatbotEnabled),
            ]);
            searchConfigPpaData = collectionsData.data.searchConfigs;
            ppaData = collectionsData.data.ppaConfig;
            const [tabs] = await chrome.tabs.query({ active: true, currentWindow: true });
            if (tabs) {
                chrome.tabs.sendMessage(tabs.id, { reportMessenger: true }, function (response) {
                    if (chrome.runtime.lastError) {
                        // 'Could not establish connection. Receiving end does not exist.'
                        return;
                    }
                });
            }
            return true;
        }
    } catch (e) {
        return false;
    }
}

async function getPriceEstimatePPA(ppaConfigId, priceEstimateData) {
    try {
        const variables = {
            ppaConfigId,
            priceEstimateInput: priceEstimateData,
        };

        const query_data = JSON.stringify({
            "query": `query ($ppaConfigId: Int!, $priceEstimateInput: userPpaPriceEstimateInput!) {
                getPriceEstimatePPA(ppaConfigId: $ppaConfigId, priceEstimateInput: $priceEstimateInput) {
                  data {
                    orderId
                    createdAt
                    intendedUseId
                    orderState
                    ppaOrderId
                    orderState
                    requestReason
                    formSubmissionStatus
                    formSubmissionUpdatedReason
                    orderResponse {
                        status
                        pdfUrl
                    }
                    priceEstimate  {
                        serviceCharge
                        copyrightCharge
                    }
                    overPriceCap
                  }
                  msg
                  msgId
                  success
                }
              }`,
            "variables": variables
        });

        const estimateData = await simpleFetchQuery(query_data, true, 'getPriceEstimatePPA');
        if (estimateData.success) {
            return { success: true, data: estimateData.data };
        }

        return { success: false, data: null };
    } catch (error) {
        return { success: false, data: null };
    }
}

async function orderDownloadPPA(ppaConfigId, ppaOrderId) {
    try {
        const variables = {
            ppaConfigId,
            ppaOrderId
        };

        const query_data = JSON.stringify({
            "query": `query ($ppaConfigId: Int!, $ppaOrderId: Int!) {
                orderDownloadPPA(ppaConfigId: $ppaConfigId, ppaOrderId: $ppaOrderId) {
                    data {
                        status
                        pdfUrl
                    }
                    msg
                    msgId
                    success
                }
              }`,
            "variables": variables
        });

        const orderData = await simpleFetchQuery(query_data, true, 'orderDownloadPPA');
        if (orderData.success) {
            return { success: true, data: orderData.data };
        }

        return { success: false, data: null };
    } catch (error) {
        return { success: false, data: null };
    }
}

async function placeOrderPPA({ ppaConfigId, placeOrderInput, articleDetails }) {
    try {
        const variables = {
            ppaConfigId,
            placeOrderInput,
            articleDetails
        }

        const query_data = JSON.stringify({
            "query": `mutation ($ppaConfigId: Int!, $placeOrderInput: userPpaPlaceOrderInput!, $articleDetails: JSON!) {
                placeOrderPPA(ppaConfigId: $ppaConfigId, placeOrderInput: $placeOrderInput, articleDetails: $articleDetails) {
                  data {
                    orderData {
                        id
                    }
                    orderResponse {
                        status
                        pdfUrl
                    }
                  }
                  msg
                  msgId
                  success
                }
              }`,
            "variables": variables
        });

        const estimateData = await simpleFetchQuery(query_data, true, 'placeOrderPPA');
        if (estimateData.success) {
            return { success: true, data: estimateData.data };
        }

        return { success: false, data: null };
    } catch (error) {
        return { success: false, data: null };
    }
}

async function checkIssnForPPA(issnList, isReprintDeskEnabled) {
    try {
        const variables = {
            issnList,
        }

        if (typeof isReprintDeskEnabled === 'boolean') {
            variables.isReprintDeskEnabled = isReprintDeskEnabled
        }

        const query_data = JSON.stringify({
            "query": `query ($issnList: [String!]!, $isReprintDeskEnabled: Boolean) {
                checkIdentifierForPPA(issnList: $issnList, isReprintDeskEnabled: $isReprintDeskEnabled) {
                  data
                  msg
                  msgId
                  success
                }
              }`,
            "variables": variables
        });

        const issnData = await simpleFetchQuery(query_data, true, 'checkIdentifierForPPA');
        if (issnData.success) {
            return { success: true, data: issnData.data };
        }

        return { success: false, data: null };
    } catch (error) {
        return { success: false, data: null };
    }
}

async function getDataFromCrossRef(doiNumber) {
    if (!doiNumber) {
        return null;
    }

    const apiConfig = {
        method: 'GET',
        url: `${reportingapiURL}api/crossref/works/${doiNumber}?mailto=support@myloft.xyz`,
        timeout: 4000,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const tokenTemp = await getLocalStorageValue("token");
    const token = tokenTemp['token'];
    if (!token) {
        return { 'success': false, 'msgId': "FAILEDREQ" }
    }

    apiConfig.headers['X-Authorization'] = token;

    try {
        const response = await fetch(apiConfig.url, {
            method: apiConfig.method,
            headers: apiConfig.headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const body = await response.json();
        return body;
    } catch (err) {
        return handleCrossRefError(err, doiNumber);
    }
}

async function handleCrossRefError(err, doiNumber) {
    try {
        let filteredDoi = '';
        if (err.response && err.response.data === 'Resource not found.') {
            filteredDoi = filterDoiString(doiNumber);
        } else if (
            err.response &&
            err.response.data &&
            err.response.data.status &&
            err.response.data.status === 'failed'
        ) {
            filteredDoi = filterDoiString(doiNumber);
        }

        if (filteredDoi && filteredDoi.length) {
            return await getDataFromCrossRef(filteredDoi);
        }

        return null;
    } catch (error) {
        logger.error(`Exception Caught : ${error.message}`);
        return null;
    }
}

function filterDoiString(doiString) {
    try {
        // Check if doiString is null or not
        if (!doiString) {
            return null;
        }

        const replacementTags = [
            {
                action: 'REPLACE_MATCH_AND_AFTER',
                searchValue: '/full',
                replaceValue: '',
            },
            {
                action: 'REPLACE_MATCH',
                searchValue: '.pdf',
                replaceValue: '',
            },
            {
                action: 'REPLACE_MATCH_AND_AFTER',
                searchValue: '/MediaObjects',
                replaceValue: '',
            },
            {
                action: 'REPLACE_MATCH_AND_AFTER',
                searchValue: '/suppl_file',
                replaceValue: '',
            },
            {
                action: 'REPLACE_MATCH_AND_AFTER',
                searchValue: '.pub',
                replaceValue: '',
            },
            {
                action: 'REPLACE_MATCH_AND_AFTER',
                searchValue: '/pdf',
                replaceValue: '',
            },
            {
                action: 'REPLACE_MATCH_AND_AFTER',
                searchValue: 'Accession',
                replaceValue: '',
            },
            {
                action: 'REPLACE_MATCH_AND_AFTER',
                searchValue: '/attachment',
                replaceValue: '',
            },
        ];

        const matchedObject = replacementTags.find((replacement) => doiString?.toLowerCase().includes(replacement.searchValue?.toLowerCase()));

        // If match found then replace the string else check if doiString contains more then two '/' then remove the last one and try again
        if (matchedObject) {
            if (matchedObject.action === 'REPLACE_MATCH') {
                return doiString.replace(
                    matchedObject.searchValue,
                    matchedObject.replaceValue,
                );
            }
            if (matchedObject.action === 'REPLACE_MATCH_AND_AFTER') {
                const matchedIndex = doiString
                    .toLowerCase()
                    .indexOf(matchedObject.searchValue.toLowerCase());
                const doiSplit = doiString.substring(0, matchedIndex);
                return doiSplit;
            }
        }

        // Try after removing last text after last '/' if possible
        const doiSplit = doiString.split('/');
        if (doiSplit.length >= 3) {
            doiSplit.pop();
            const newDoiString = doiSplit.join('/');
            return newDoiString;
        }

        return null;
    } catch (error) {
        logger.error(`Exception Caught : ${error.message}`);
        return null;
    }
}

// keep a check on the removed tabs just in case we need to refresh token on tab removed
chrome.tabs.onRemoved.addListener(async function (tabId, removeInfo) {

    if (removeInfo.windowId && removeInfo.isWindowClosing) {
        await isRefreshTokenUpdated();
        const accessibleDomains = await eResourcesDomainsStoreCache.get();
        /** send message to Inject icons  */
        chrome.tabs.sendMessage(tabId, { domainsList: JSON.stringify(accessibleDomains) }, function (response) {
            if (chrome.runtime.lastError) {
                // 'Could not establish connection. Receiving end does not exist.'
                return;
            }
        });
    }
});

// keep a check on previous and current tab just in case if need to check on pdf
chrome.tabs.onActivated.addListener(async function (details) {
    try {
        const tab = await chrome.tabs.get(details.tabId);

        if (tab && tab.url) {
            await refreshIconForTab(tab.id, tab.url);
        }
    } catch (err) {
        logger.error(`Exception Caught : ${err.message}`);
    }


    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
        const [tabInfo] = tabs
        if (tabInfo) {
            const accessibleDomains = await eResourcesDomainsStoreCache.get();
            /** send message to inject icons */
            chrome.tabs.sendMessage(tabs[0].id, { domainsList: JSON.stringify(accessibleDomains) }, function (response) {
                if (chrome.runtime.lastError) {
                    // 'Could not establish connection. Receiving end does not exist.'
                    return;
                }
            });
        }
    })
})

// keep a check on the updated tabs just in case we need to refresh token on tab updation
chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
    /** check the status of the chrome tab - if loaded completely */
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined) {
        try {
            /** if url exits in chrome tab */
            if (tab.url) {
                const firstLoadTemp = await chrome.storage.local.get('firstLoad');
                const firstLoad = firstLoadTemp['firstLoad'];
                if (tab.url.indexOf(appURL) > -1 && firstLoad) {
                    const UUID = await loadFingerPrint(true);
                    const tokenTemp = await getLocalStorageValue('token');
                    const token = tokenTemp['token'];
                    if (!token) {
                        await chrome.tabs.update(tab.id, { url: appURL + 'user/login?deviceId=' + UUID });
                        await chrome.storage.local.set({ 'firstLoad': false });
                    }
                }
                /** check if the url opend is part of disable list or not */
                const disableDomainsTemp = await chrome.storage.local.get('disableExtList');
                const disableDomains = disableDomainsTemp['disableExtList'];
                let SaveFuncDisableDomains = (disableDomains) ? JSON.parse(disableDomains) : {}
                SaveFuncDisableDomains = SaveFuncDisableDomains.saveDisableList ? SaveFuncDisableDomains.saveDisableList : [];
                var isPartOfIt = false;
                SaveFuncDisableDomains.forEach((data) => {
                    if (tab.url.indexOf(data) > -1) {
                        isPartOfIt = true;
                    }
                })
            }
            /** if the url is part of disable list disable actions or else enable */
            if ((tab.url && tab.url.indexOf(appURL) > -1) || (tab.url && isPartOfIt)) {
                chrome.action.disable();
            } else {
                chrome.action.enable();
            }
            await isRefreshTokenUpdated();
            const accessibleDomains = await eResourcesDomainsStoreCache.get();
            /** send message to inject icons */
            chrome.tabs.sendMessage(tab.id, { domainsList: JSON.stringify(accessibleDomains) }, function (response) {
                if (chrome.runtime.lastError) {
                    // 'Could not establish connection. Receiving end does not exist.'
                    return;
                }
            });
        } catch (error) {
            logger.error('Error in onUpdated handler for status check:', error);
        }
    }

    /** check for domain rules and inject script if it matches. */
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.active && tab.url !== undefined) {
        try {
            const htmlToShow = [];
            let urlToCheck = tab.url;
            const [proxyType, instituteHostname] = await Promise.all([instituteProxyTypeStoreCache.get(), instituteHostnameStore.get()]);
            if (proxyType === INST_PROXY_TYPE.REWRITE && instituteHostname) {
                const proxyHostname = new URL(instituteHostname).hostname;
                urlToCheck = UTILS.reverseRewriteProxyUrl(urlToCheck, proxyHostname);
            }

            const domainRules = await domainRuleStore.get();
            let domainRulesBlocklist = (await domainBlacklistStore.get()) ?? [];

            if (domainRules && Array.isArray(domainRules) && domainRules.length > 0) {
                for (let i = 0; i < domainRules.length; i++) {
                    const checkBlacklistIndex = domainRulesBlocklist.findIndex(({ id }) => id === domainRules[i].id);

                    if (checkBlacklistIndex != -1) {
                        if (domainRulesBlocklist[checkBlacklistIndex].timeStamp + ONE_DAY_IN_MS > Date.now()) {
                            continue;
                        } else {
                            domainBlacklistStore.removeItemUsingIndex(checkBlacklistIndex)
                        }
                    }

                    const checkURL = UTILS.matchUrlForDomainRule(domainRules[i].domains, urlToCheck)

                    if (checkURL.match) {
                        const { value, name, id } = domainRules[i];
                        htmlToShow.push({ name, value, id });
                    }
                }
            }

            if (htmlToShow.length > 0 && htmlToShow[0]?.id?.length > 0 && htmlToShow[0]?.value?.length > 0) {
                const instituteInfo = await instituteInfoStore.get();
                const helpfulData = await domainRuleHelpfulStore.get();

                chrome.storage.local.set({
                    'tempDomainRuleStore': {
                        instituteInfo,
                        helpfulData,
                        htmlToShow,
                    }
                }).then(() => {
                    chrome.scripting.executeScript({
                        target: {
                            tabId: tabId,
                            allFrames: true,
                        },
                        files: ["src/domain-rules/index.js"],
                    });
                });
            }
        } catch (error) {
            logger.error('Error in domain rules injection', error)
        }
    }

    /** set the data for the browsing analytics as well */
    if (changeInfo.status == 'complete' && tab.active && tab.url != undefined) {
        try {
            const accessibleDomains = await getDomainsForAccessCheck();
            if (accessibleDomains && accessibleDomains.length) {
                let urlToCheck = tab.url;

                const checkIfAuthNeeded = accessibleDomains.filter((d) => {
                    try {
                        const tempURL = new URL(urlToCheck);
                        const hostname = tempURL.hostname;
                        return hostname.includes(d) && hostname.endsWith(d);
                    } catch (error) {
                        return false;
                    }
                });

                if (checkIfAuthNeeded.length > 0 && checkIfAuthNeeded[0]) {
                    const proxyType = await instituteProxyTypeStoreCache.get();
                    if (proxyType === INST_PROXY_TYPE.REWRITE) {
                        const instituteHostname = await instituteHostnameStore.get();
                        const proxyHostname = new URL(instituteHostname).hostname;
                        urlToCheck = UTILS.reverseRewriteProxyUrl(urlToCheck, proxyHostname);
                    }

                    const token = await tokenStore.get();
                    await mainAnalyticsDataStore(eventReportConfig.BROWSING.name, token, {
                        'url': urlToCheck,
                        isSubscribed: 'true',
                        'host': new URL(urlToCheck).hostname
                    })
                }
            }
        } catch (error) {
            logger.error('Error in onUpdated handler for browsing analytics:', error);
        }
    }

    /** check ppa on the current tab */
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.active && tab.url !== undefined) {
        try {
            const data = await checkForPPA(tab.url);

            if (data.success) {
                await tempPpaFound.set(data);
                await chrome.scripting.executeScript(
                    {
                        target: { tabId: tab.id },
                        files: [
                            '/src/content/findDoi.js'
                        ],
                    }
                );
            }
        } catch (error) {
            logger.error('Error in onUpdated handler for checkForPPA:', error);
        }
    }

    /** inject chatbot */
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.active && tab.url !== undefined) {
        try {
            const isChatbotEnabled = await isAiChatbotEnabledStore.get();
            if (!isChatbotEnabled) {
                return;
            }
            const accessibleDomains = await getDomainsForAccessCheck();
            if (accessibleDomains && accessibleDomains.length) {
                const checkIfAccessable = accessibleDomains.filter((d) => { var tempURL = new URL(tab.url); var hostname = tempURL.hostname; return hostname.includes(d) && hostname.endsWith(d) });
                if (checkIfAccessable.length > 0 && checkIfAccessable[0]) {
                    const [deviceId, userId, instituteInfo] = await Promise.all([deviceIdStore.get(), userIdStore.get(), instituteInfoStore.get()]);
                    if (!deviceId || !userId) {
                        throw new Error('deviceId or userId not found');
                    }

                    const authId = await UTILS.encryptRSA(`ui_${userId}`, myloft_chatbot_pub_key)

                    const infoObj = {
                        baseUrl: myloft_chatbot_client_url,
                        input: {
                            deviceId: deviceId,
                            userId: userId,
                            instituteName: instituteInfo.instituteName,
                            platform: 'Web',
                            authId: authId,
                            browser: getBrowser(),
                            os: getOs(),
                            language: getLanguage(),
                            tz: getTimezone(),
                        }
                    };

                    if (instituteInfo.standaloneURL) {
                        infoObj.input.standaloneURL = instituteInfo.standaloneURL
                    }

                    await chatbotInjectTempInfoStore.set(infoObj);
                    await chrome.scripting.insertCSS({
                        target: { tabId: tab.id },
                        files: [
                            '/src/content/inject-chatbot.css'
                        ],
                    });
                    await chrome.scripting.executeScript(
                        {
                            target: { tabId: tab.id },
                            files: [
                                '/src/content/inject-chatbot.js'
                            ],
                        }
                    );
                }
            }
        } catch (error) {
            logger.error('error injecting chatbot', error)
        }
    }

    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.active && tab.url !== undefined) {
        await refreshIconForTab(tab.id, tab.url);
    }

})

async function checkForPPA(tabUrl) {
    try {
        const currentTabUrl = new URL(tabUrl);

        let data = searchConfigPpaData || (await searchConfigStore.get()) || [];
        data = data.filter(d => d.enablePPA);

        if (data.length === 0) {
            return { success: false, data: null };
        }

        let ppa = ppaData || (await ppaStore.get()) || [];
        ppa = ppa.filter((d) => allowedPpaServices.includes(d.masterPPAConfig.serviceName));

        if (ppa.length === 0) {
            return { success: false, data: null };
        }

        const foundData = data.find(({ searchURL }) => {
            try {
                const url = new URL(searchURL);
                if (url.origin === currentTabUrl.origin) {
                    return true;
                }
            } catch (error) {
                logger.error('URL parsing error', error);
            }
        });

        if (foundData) {
            const findPPA = ppa.find((x) => x.id === foundData.ppaConfigId);
            if (!findPPA) {
                return { success: false, data: null };
            }

            const data = { ppa: findPPA, searchConfig: foundData }
            return { success: true, data };
        }

        return { success: false, data: null };
    } catch (error) {
        logger.error('Error in checkForPPA:', error);
        return { success: false, data: null };
    }
}

//function to push notification out
async function triggerNotification(iconPath, type, message, isTitleTranslateRequired, title) {
    const opt = {
        iconUrl: iconPath,
        title: chrome.i18n.getMessage(title) ? chrome.i18n.getMessage(title) : title,
        type: type,
        message: chrome.i18n.getMessage(message) ? chrome.i18n.getMessage(message) : message

    }
    await chrome.notifications.create('', opt, async (id) => {
        await chrome.storage.local.set({ 'notification_id': id });
    });
}

//clear proxy settings
async function clearProxySettings() {
    try {
        await chrome.proxy.settings.clear({ scope: 'regular' });
        return { 'success': true };
    } catch (error) {
        logger.error('Error clearing proxy settings:', error);
        return { 'success': false, 'error': error.message };
    }
}

async function taggingChecker(tagsD) {
    // { id: encoded_url, url: tab_data.url, tagsList: currentArticleTagsList, collectionId: selectedCollectionId }
    const localId = tagsD.id; //encoded_url
    const localTags = tagsD.tagsList; //tags
    const localUrl = tagsD.url; // actual url
    if (localTags.length > 0) {
        // check if article has already been added
        const articleIdCheckTemp = await chrome.storage.local.get(`${localId}_ARTICLE`);
        const articleIdCheck = articleIdCheckTemp[`${localId}_ARTICLE`]
        if (articleIdCheck) {
            const articleIdFinal = JSON.parse(articleIdCheck).id;
            await addTagstoArticle(localTags, articleIdFinal);
        } else {
            const encUrl = btoa(localUrl + "_TAGS")
            await chrome.storage.local.set({ [encUrl]: JSON.stringify(localTags) });
        }
    }
    const localCol = tagsD.collectionId;
    const localIdCol = localId;
    if (localCol) {
        const articleIdCheckTemp = await chrome.storage.local.get(`${localId}_ARTICLE`);
        // check if article has already been added
        const articleIdCheck = articleIdCheckTemp[`${localId}_ARTICLE`]
        if (articleIdCheck) {
            //add collection to article
            const articleIdFinal = JSON.parse(articleIdCheck).id;
            const dataTemp = await chrome.storage.local.get(btoa(localUrl) + '_ARTICLE');
            const data = dataTemp[btoa(localUrl) + '_ARTICLE'];
            const colIdtoReplace = JSON.parse(data)['collection'][0].id
            const articlesTitle = JSON.parse(articleIdCheck).title;
            if (articleIdFinal && colIdtoReplace) {
                addCollectiontoArticle(localCol, articleIdFinal, colIdtoReplace, articlesTitle)
            }
        }
    } else {
        const encColl = btoa(localUrl + "_COLLECTION")
        await chrome.storage.local.set({ [encColl]: localCol });
    }
}

async function addTagstoArticle(tagsNameArray, articleId) {

    const variables = {
        "articleId": articleId,
        "tagNames": tagsNameArray,
        "nameOnly": true
    }

    const queryData = JSON.stringify({ "query": "mutation($articleId: String!, $tagNames:[String!], $nameOnly: Boolean ){addArticleTags(articleID: $articleId, tagNames: $tagNames, nameOnly: $nameOnly){data{ id } msg msgId success}}", "variables": variables });

    try {
        const tagsResponseData = await simpleFetchQuery(queryData, true, 'addArticleTags');
        if (tagsResponseData) {
            if (tagsResponseData['success']) {
                return { 'success': true }
            } else {
                logger.error('Failed to add tags to article', { articleId, error: tagsResponseData.msg });
                return { 'success': false }
            }
        } else {
            return { 'success': false }
        }

    } catch (error) {
        logger.error('Exception while adding tags to article', { articleId, error: error.message });
        return { 'success': false }
    }
}
//function to add the required colletion to the article 
async function addCollectiontoArticle(newId, articleId, oldId, articleTitle) {
    const variables = {
        "articleId": articleId,
        "nCol": newId,
        "oCol": oldId,
        "title": articleTitle
    }

    const queryData = JSON.stringify({ "query": "mutation($articleId: String!,$nCol: String!, $oCol: String!, $title:String ){editArticleCollection(id:$articleId , newCollectionID:$nCol,currentCollectionID:$oCol, title:$title){msgId data{id} success msg}}", "variables": variables });

    try {
        const colResponseData = await simpleFetchQuery(queryData, true, 'editArticleCollection');
        if (colResponseData) {
            if (colResponseData['success']) {
                return { 'success': true }
            } else {
                logger.error('Failed to update article collection', { articleId, error: colResponseData.msg });
            }
        }
        return { 'success': false }

    } catch (error) {
        logger.error('Exception while updating article collection', { articleId, error: error.message });
        return { 'success': false }
    }
}
//Function to add the article after it has been processed by the MyLOFT Bundle

async function addArticle(article_json) {
    try {
        //send data to http req function
        const articleId = article_json.id;
        const title = article_json.title;
        const isReadable = article_json.readable;
        let imageUrl = "";
        if (article_json.image) {
            imageUrl = article_json.image;
        }

        let contentURL = article_json.url;
        const [proxyType, instituteHostname] = await Promise.all([instituteProxyTypeStoreCache.get(), instituteHostnameStore.get()]);
        if (proxyType === INST_PROXY_TYPE.REWRITE) {
            const proxyHostname = new URL(instituteHostname).hostname;
            if (contentURL.includes(proxyHostname)) {
                contentURL = UTILS.reverseRewriteProxyUrl(contentURL, proxyHostname);
            }
        }

        let htmlData = "";
        if (article_json.html) {
            htmlData = article_json.html;
        }
        const articleType = 'HTML';
        let doiNumber = '';
        if (article_json.doi && article_json.doi != undefined) {
            doiNumber = article_json.doi;
        }

        const variables = {
            'title': title,
            'imageURL': imageUrl,
            'isReadable': isReadable,
            'contentURL': contentURL,
            'htmlData': htmlData,
            'toDeflate': true,
            'articleType': articleType,
            'doi': doiNumber,
            'pdfURL': article_json.pdf ? article_json.pdf : ''
        }

        const query_data = JSON.stringify({
            "query": "mutation($title: String!,$imageURL: String!, $isReadable: Boolean!,$contentURL: String!, $htmlData: String!, $articleType:ArticleType!, $toDeflate: Boolean, $doi: String, $pdfURL: String){addArticle(title:$title,imageURL:$imageURL,isReadable:$isReadable,url:$contentURL,contentURL:$contentURL,html:$htmlData,type:$articleType,toDeflate:$toDeflate, doi: $doi, pdfURL: $pdfURL){msgId data{ id isReadable url collection{id} } msg success} }",
            "variables": variables
        });

        /** article is saved here */
        const article_response_data = await simpleFetchQuery(query_data, true, 'addArticle');
        if (!article_response_data.success) {
            logger.error('Article save failed', { title, error: article_response_data.msg });
        }
        const encoded_url = btoa(article_response_data['data'].url) + '_ARTICLE'
        await chrome.storage.local.set({ [encoded_url]: JSON.stringify(article_response_data['data']) });
        const oldColId = article_response_data?.data?.collection?.[0]?.id || null;
        const article_to_check = btoa(contentURL);
        const article_localTemp = await chrome.storage.local.get(article_to_check);
        const article_local = article_localTemp[article_to_check]
        /** object used for updating tag and collections */
        const local_tags_coll_json = {};
        local_tags_coll_json['id'] = article_to_check; //set article encodeId
        if (article_local?.tagsList && article_local.tagsList.length > 0) {
            local_tags_coll_json['tagsList'] = article_local.tagsList;
        }
        if (article_local?.collectionId && article_local.collectionId.length > 0) {
            local_tags_coll_json['collectionId'] = article_local.collectionId;
        }

        /** on article success  save tags and send reports*/
        if (article_response_data.success) {
            let article_id = article_response_data['data']['id'];
            //after article is saved , add the tags and collection if present
            //update the local with article id 
            await getAndUpdateInLocalStorage(article_to_check, {
                'article_id': article_id
            });
            // update local article status to COMPLETED
            await getAndUpdateInLocalStorage(article_to_check, {
                'status': 'COMPLETED'
            });

            //add tags & collection
            addTagsandCollectiontoArticle(local_tags_coll_json, oldColId, title);
            const customJSONDataforArticleSaved = {
                'name': article_json.title,
                'url': contentURL,
                'hasTemplate': article_json.hasTemplate,
                'viaReadability': article_json.isReadabilityContent,
                'isReadable': article_json.readable,
                'doi': article_json.doi,
                'hasFullTextAccess': article_json.hasFullTextAccess ? article_json.hasFullTextAccess.toString() : '',
                'pdf': article_json.pdf ? article_json.pdf : '',
                'type': 'HTML'
            }
            articleSavedAnalytics(customJSONDataforArticleSaved);
            await triggerNotification('../../icon.png', 'basic', title, true, 'article_success');

        } else {
            if (article_response_data.msgId && article_response_data.msgId == 'ARTICLEADD004') {
                let article_id = article_response_data['data']['id'];

                //article already exists
                //update the local with article id
                await getAndUpdateInLocalStorage(article_to_check, {
                    'article_id': article_id
                });

                // update local article status to COMPLETED
                await getAndUpdateInLocalStorage(article_to_check, {
                    'status': 'COMPLETED'
                });
                //add tags & collection
                addTagsandCollectiontoArticle(local_tags_coll_json, oldColId, title);
                await triggerNotification('../../icon.png', 'basic', title, true, 'article_present');
            } else {
                //article failed to save
                await triggerNotification('../../icon.png', 'basic', title, true, 'something_went_wrong');
            }
        }

    } catch (error) {
        logger.error('Error in addArticle:', error);
        const fallbackTitle = article_json?.title || 'Unknown Article';
        await triggerNotification('../../icon.png', 'basic', fallbackTitle, true, 'something_went_wrong');
    }
}
async function addTagsandCollectiontoArticle(tag_collection_json, oldColId, title) {
    try {
        let article_to_check = tag_collection_json.id;
        //check if article has already been added
        const articleTemp = await chrome.storage.local.get(article_to_check);
        const article = articleTemp[article_to_check]
        if (article && article.status === "COMPLETED") {
            //if yes then tags & collection for the article need to be updated
            //update tags for the article
            if (tag_collection_json.tagsList && tag_collection_json.tagsList.length > 0) {
                addTagstoArticle(tag_collection_json.tagsList, article.article_id);
            }
            //update collection for the article
            if (tag_collection_json.collectionId) {
                addCollectiontoArticle(tag_collection_json.collectionId, article.article_id, oldColId, title)
            }

            //delete the ids from local
            await chrome.storage.local.remove(article_to_check);
        }
    } catch (error) {
        logger.error('Error in addTagsandCollectiontoArticle:', error);
    }
}
async function sendReports(reportData, articleType) {
    try {
        let title = '';
        //check if we need to refresh token
        const data = await isRefreshTokenUpdated();
        if (data['success']) {
            const localURL = reportData.url;
            const tokenTemp = await getLocalStorageValue('token')
            let currentSessId = MD5(tokenTemp['token'])

            //get session id from local
            const localStorageSessTemp = await chrome.storage.local.get('sessionId');
            const localStorageSess = localStorageSessTemp['sessionId'];

            // Check if we have a valid session that's not older than 750 seconds
            let shouldCreateNewSession = true;

            if (localStorageSess) {
                try {
                    const parsedSession = JSON.parse(localStorageSess);
                    if (parsedSession?.ts) {
                        const currentTimestamp = new Date().getTime();
                        if ((currentTimestamp - parsedSession.ts) < 750000) {
                            currentSessId = parsedSession.id;
                            shouldCreateNewSession = false;
                        }
                    }
                } catch (error) {
                    // JSON parsing failed, will create new session
                }
            }

            if (shouldCreateNewSession) {
                await chrome.storage.local.set({
                    'sessionId': JSON.stringify({
                        'ts': new Date().getTime(),
                        'id': currentSessId
                    })
                });
            }

            //check if domain is in my list to report
            const accessibleDomains = await getDomainsForAccessCheck();
            const accDomain = accessibleDomains.filter((d) => { var tempURL = new URL(localURL); var hostname = tempURL.hostname; return hostname.includes(d) && hostname.endsWith(d) });

            if (accDomain.length > 0) {
                const [proxyType, instituteHostname] = await Promise.all([instituteProxyTypeStoreCache.get(), instituteHostnameStore.get()]);
                if (proxyType === INST_PROXY_TYPE.REWRITE) {
                    const proxyHostname = new URL(instituteHostname).hostname;
                    reportData.url = UTILS.reverseRewriteProxyUrl(reportData.url, proxyHostname);
                }

                if (articleType && articleType === 'PDF') {
                    articleSavedAnalytics(
                        {
                            'name': title ? title : '',
                            'url': reportData.url ? reportData.url : '',
                            'doi': reportData.doi ? reportData.doi : '',
                            'type': 'PDF',
                            'hasTemplate': false,
                            'viaReadability': false,
                            'isReadable': false
                        }
                    )
                }

                const customJSON = {};
                const timeStamp = new Date().getTime();
                const today = new Date().setHours(0, 0, 0, 0);
                customJSON['timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
                customJSON['sessionID'] = "BROWSER_SESS_" + currentSessId;
                if (proxyType === INST_PROXY_TYPE.REWRITE) {
                    customJSON['domain'] = UTILS.transformRewriteDomainToOriginal(accDomain[0]);
                } else {
                    customJSON['domain'] = accDomain[0];
                }
                customJSON['articleURL'] = reportData.url;
                customJSON['device'] = deviceName;
                customJSON['platform'] = platformName;
                customJSON['doi'] = reportData.doi;
                customJSON['articleReportType'] = "article_saved";
                customJSON['type'] = reportData.articleType;
                customJSON['biblioData'] = reportData.biblioData;
                customJSON['ts'] = timeStamp;
                customJSON['date'] = today;

                await simpleHTTPReportQuery(customJSON);
                return { 'success': true };
            } else {
                return { 'success': false };
            }
        } else {
            return { 'success': false };
        }
    } catch (error) {
        logger.error('Error in sendReports:', error);
        return { 'success': false };
    }
}
//reporting http query

async function simpleHTTPReportQuery(reportData) {
    try {
        await isRefreshTokenUpdated()

        const url = reportingapiURL + "api/report/add"
        const localBodyReportData = reportData;
        const tokenTemp = await getLocalStorageValue('token')
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Device': deviceName,
                'X-App-Version': manifestVersion,
                'X-Authorization': tokenTemp['token']
            },
            body: JSON.stringify(localBodyReportData)
        };

        const responseData = await fetch(url, settings)
            .then(response => response.json())
            .then(json => {
                return json;
            })
            .catch(e => {
                return { 'success': false, 'msgId': "FAILEDREQ" }
            })

        if (responseData['success']) {
            return { 'success': true }
        } else {
            if (responseData['msgId'] == "INVALIDTOKEN") {
                const refreshTokenData = await refreshToken();
                if (refreshTokenData['success']) {
                    var reportingData = await simpleHTTPReportQuery(localBodyReportData);
                    if (reportingData['success']) {
                        return { 'success': true }
                    } else {
                        return { 'success': false }
                    }
                } else {
                    return { 'success': false }
                }
            } else {
                return { 'success': false }
            }
        }
    } catch (error) {
        logger.error('Error in simpleHTTPReportQuery:', error);
        return { 'success': false }
    }
}

//getting all data from search keywrod report
async function searchKeywordAnalytics(jsonData) {
    const token = await tokenStore.get();
    if (token) {
        const dataObj = {
            'keyword': jsonData.keyword,
            'source': jsonData.source,
            'searchEngine': jsonData.searchEngine
        };
        await mainAnalyticsDataStore(eventReportConfig.SEARCH_KEYWORD.name, token, dataObj);
    }
}

async function articleSavedAnalytics(jsonData) {
    const token = await tokenStore.get();
    if (token) {
        const dataObj = {
            'name': jsonData.name,
            'url': jsonData.url,
            'hasTemplate': String(jsonData.hasTemplate),
            'doi': jsonData.doi,
            'viaReadability': String(jsonData.viaReadability),
            'isReadable': String(jsonData.isReadable),
            'source': 'Browser',
            'type': jsonData.type,
        };
        await mainAnalyticsDataStore(eventReportConfig.ARTICLE_SAVE.name, token, dataObj);
        return true;
    }
}

async function chatbotAnalytics(jsonData) {
    const token = await tokenStore.get();
    if (token) {
        await mainAnalyticsDataStore(eventReportConfig.CHATBOT_ACTION.name, token, jsonData)
    }
}

function proxyPacFileCreator(domains, proxyURL, instituteProxyPort, hostName) {
    const pacStart = "function FindProxyForURL(url, host) {\n";
    const pacEnd = "  return 'DIRECT';\n}";

    let proxyRules = "";
    const proxyServer = `PROXY ${proxyURL}:${instituteProxyPort}`;

    for (const domain of domains) {
        // Add rules for both wildcard subdomain and exact domain matches
        proxyRules += `  if (shExpMatch(host, '*.${domain}'))\n`;
        proxyRules += `    return '${proxyServer}';\n`;
        proxyRules += `  if (shExpMatch(host, '${domain}'))\n`;
        proxyRules += `    return '${proxyServer}';\n`;
    }

    const pacFileContent = pacStart + proxyRules + pacEnd;
    configureProxyonAuth(pacFileContent);
}

function httpsPacFileCreator(domains, proxyURL, instituteProxyPort, hostName) {
    const pacStart = "function FindProxyForURL(url, host) {\n";
    const pacEnd = "  return 'DIRECT';\n}";

    let httpsRules = "";
    const httpsServer = `HTTPS ${hostName}:${instituteProxyPort}`;

    for (const domain of domains) {
        // Add rules for both wildcard subdomain and exact domain matches
        httpsRules += `  if (shExpMatch(host, '*.${domain}'))\n`;
        httpsRules += `    return '${httpsServer}';\n`;
        httpsRules += `  if (shExpMatch(host, '${domain}'))\n`;
        httpsRules += `    return '${httpsServer}';\n`;
    }

    const pacFileContent = pacStart + httpsRules + pacEnd;
    configureProxyonAuth(pacFileContent);
}


// set the proxy based on the pac file
async function configureProxyonAuth(pacFileData) {
    const isOnCampusTemp = await chrome.storage.local.get('isOnCampus');
    const isOnCampus = isOnCampusTemp['isOnCampus'];
    const isProxyCompleteOff = await chrome.storage.local.get('isProxyCompleteOff');
    const isProxyCompleteOffValue = isProxyCompleteOff['isProxyCompleteOff'];
    const proxyStatusUser = await chrome.storage.local.get('proxyStatusUser');
    const proxyStatus = proxyStatusUser['proxyStatusUser'];

    let proxyOffConfigVal = await chrome.storage.local.get('proxyOffConfigVal');
    proxyOffConfigVal = proxyOffConfigVal['proxyOffConfigVal'];

    if (proxyOffConfigVal) {
        if (proxyStatus === false || (!proxyStatus && isProxyCompleteOffValue === true)) {
            return;
        }

        if (!isOnCampus || proxyStatus === true) {
            var config = {
                mode: "pac_script",
                pacScript: {
                    data: pacFileData,
                    mandatory: true
                }
            };
            chrome.proxy.settings.set(
                { value: config, scope: 'regular' },
                function () { });
        }
    } else {
        if (!isOnCampus) {
            var config = {
                mode: "pac_script",
                pacScript: {
                    data: pacFileData,
                    mandatory: true
                }
            };
            chrome.proxy.settings.set(
                { value: config, scope: 'regular' },
                function () { });
        }
    }
}

async function mainAnalyticsDataStore(event_name, token, jsonData) {
    const version = chrome.runtime.getManifest().version;
    let local_user_agent = new UserAgent.UAParser(navigator.userAgent);
    let os_version = local_user_agent.getOS().version ? local_user_agent.getOS().version : "NA";
    let browser_version = local_user_agent.getBrowser().version ? local_user_agent.getBrowser().version : "NA"
    let os_name = local_user_agent.getOS().name ? local_user_agent.getOS().name : "NA";
    let local_device_name = deviceName + ", OS_VER: " + os_version + ", VER: " + browser_version + ", OS_Name: " + os_name;
    const paramJSON = {
        "event_name": event_name,
        "device": local_device_name,
        "platform": platformName,
        "event_ts": new Date().getTime(),
        'token': token,
        'params': {},
        'appVersion': version
    }

    for (const key in jsonData) {
        paramJSON['params'][key] = jsonData[key]
    }

    const paramArray = [];
    paramArray.push(paramJSON);
    const stringfiedArray = JSON.stringify(paramArray)
    //get from local storage / update and save to localstorage
    const eventDataTemp = await chrome.storage.local.get(event_name + '_analytics');
    const eventData = eventDataTemp[event_name + '_analytics']
    if (typeof eventData === 'string' && eventData) {
        const parsedEventData = JSON.parse(eventData);
        const mergedData = parsedEventData.concat(paramArray);
        const stringfiedMergedData = JSON.stringify(mergedData);
        await chrome.storage.local.set({ [event_name + '_analytics']: stringfiedMergedData })
    }
    else {
        await chrome.storage.local.set({ [event_name + '_analytics']: [] })
        await chrome.storage.local.set({ [event_name + '_analytics']: stringfiedArray })
    }
    return true;
}

chrome.proxy.onProxyError.addListener(function (details) { })

/* Respond to the user's clicking one of the buttons */
chrome.notifications.onClicked.addListener(async (notifId) => {
    const myNotificationIDTemp = await chrome.storage.local.get('notification_id');
    const myNotificationID = myNotificationIDTemp['notification_id']
    if (notifId === myNotificationID) {
        if (isReadableArticle) {
            chrome.tabs.create({ url: appURL + "browse/article/" + currentlySavedArticleId });
        } else {
            chrome.tabs.create({ url: currentlySavedArticleId });
        }
    }
});



function logoutchromeNotification(messageNot) {
    const opt = {
        iconUrl: '../../icon.png',
        title: 'MyLOFT',
        type: 'basic',
        message: messageNot
    }
    chrome.notifications.create('', opt)
    return true;
}

// listener to check if a PDF is downloaded and act accordinly
chrome.webRequest.onHeadersReceived.addListener(
    async function (details) {
        // NOTE: only process PDF download count & analytics when proxy type is squid
        const proxyType = await instituteProxyTypeStoreCache.get();
        if (proxyType !== INST_PROXY_TYPE.SQUID) {
            return;
        }
        const [accessibleDomains, isOnCampus] = await Promise.all([eResourcesDomainsStoreCache.get(), isOnCampusStoreCache.get()]);

        if (accessibleDomains && accessibleDomains.length) {
            const canAccessDomain = accessibleDomains.filter((d) => { var tempURL = new URL(details.url); var hostname = tempURL.hostname; return hostname.includes(d) && hostname.endsWith(d) });
            if (canAccessDomain.length > 0) {
                // pdf limit exceeded check & redirect to pdf limit exceeded page
                // accessible domain + squid proxy type + off campus -> block
                if (isOnCampus === false && details.tabId) {
                    const tempURL = new URL(details.url);
                    const hostname = tempURL.hostname;

                    const exceedDomainList = await domainExceedStore.get() ?? [];
                    const canAccess = exceedDomainList.filter((d) => hostname.includes(d) && hostname.endsWith(d));

                    if (exceedDomainList.includes('overall') || canAccess.length > 0) {
                        const url = chrome.runtime.getURL(pdfLimitExceededPath) + '?refer=webRequestOnHeadersReceived';
                        chrome.tabs.update(details.tabId, { url: url });
                    }
                }

                // check if the response is a pdf
                if (details.statusCode === 200) {
                    const responseHeaders = details.responseHeaders || [];
                    const domainName = canAccessDomain[0];
                    let isPdfFoundViaType = false;

                    for (const header of responseHeaders) {
                        const name = header.name.toLowerCase();
                        const value = header.value.toLowerCase();

                        if (name === 'content-type') {
                            const isStandardPdf = ['application/pdf', 'application/x-pdf', 'application/pdf; charset=utf-8', 'application/pdf;charset=utf-8'].includes(value);
                            const isAlternativePdf = PDF_MIME_TYPES.includes(value);

                            if (isStandardPdf || isAlternativePdf) {
                                sendRequesttoScrape(false, details.url, details.tabId, domainName);
                                if (isStandardPdf) {
                                    isPdfFoundViaType = true;
                                }
                            }
                        }
                    }

                    if (!isPdfFoundViaType) {
                        for (const header of responseHeaders) {
                            if (header.name.toLowerCase() === HEADER_CONTENT_DISPOSITION) {
                                const filename = getDispositionFilenameFromHeaderValue(header.value);
                                if (filename && filename.toLowerCase().includes('.pdf')) {
                                    sendRequesttoScrape(false, details.url, details.tabId, domainName);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }, { urls: ["*://*/*"] },
    ["responseHeaders"]
);


function sendRequesttoScrape(scrapeHTML, tabURL, tabId, domainName) {
    updateProxyPDFStatus(domainName);
    var doifromURL = getDOIFromURL(tabURL);
    if (doifromURL && doifromURL != undefined) {
        var reportData = { 'title': '', 'doi': doifromURL, 'articleType': 'PDF', 'url': tabURL, 'biblioData': {} }
        sendReports(reportData, 'PDF')
    } else {
        var reportData = { 'title': '', 'doi': null, 'articleType': 'PDF', 'url': tabURL, 'biblioData': {} }
        sendReports(reportData, 'PDF')
    }
}

// Returns the filename found in content disposition header
function getDispositionFilenameFromHeaderValue(disposition) {
    // Matches optional `; ` + `filename=` and captures filename value
    let re = /(?:; ?)?filename=(?:(?:"(.*?)")|([^;"]+))/i;

    let m = re.exec(disposition);
    if (m === null) {
        return false;
    }
    return m[1] !== undefined ? m[1] : m[2];
}

async function updateDoaminExceedLimitCheck(data) {
    const domains = Object.entries(data).filter(([k, v]) => v === 0).map(([k, v]) => k);

    if (!domains.length) {
        await domainExceedStore.set([]);
        return { success: true };
    }

    if (domains.includes('overall')) {
        await domainExceedStore.set(['overall']);
    } else {
        await domainExceedStore.set(domains);
    }

    return { success: true };
}

async function updateProxyPDFStatus(domain) {
    try {
        const instituteHostnameTemp = await chrome.storage.local.get('instituteHostname');
        const instituteHostname = instituteHostnameTemp['instituteHostname'];
        if (instituteHostname) {
            const url = instituteHostname + "/api/pdf/update";
            const localDomain = domain;
            const bodyData = {};
            bodyData[domain] = 1;
            const tokenTemp = await getLocalStorageValue('token')
            const settings = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Authorization': tokenTemp['token']
                },
                body: JSON.stringify(bodyData)
            };

            const response = await fetch(url, settings);
            const responseData = await response.json();

            if (responseData && responseData.success && responseData.data) {
                await updateDoaminExceedLimitCheck(responseData.data);
                return { success: true, data: responseData.data };
            }

            if (responseData && responseData.msgId === "INVALIDTOKEN") {
                const refreshTokenData = await refreshToken();
                if (refreshTokenData.success) {
                    const updateStatusData = await updateProxyPDFStatus(localDomain);
                    if (updateStatusData && updateStatusData.success && updateStatusData.data) {
                        await updateDoaminExceedLimitCheck(updateStatusData.data);
                        return { success: true, data: updateStatusData.data };
                    }
                }
            }

            return { success: false };
        } else {
            return { success: false };
        }
    } catch (error) {
        logger.error('Error updating proxy PDF status:', error);
        return { success: false, msgId: "FAILEDREQ" };
    }
}

//function to get doi from url 

function getDOIFromURL(pageURL) {
    if (pageURL) {
        pageURL = decodeURIComponent(pageURL);
        if (pageURL.endsWith(".pdf")) {
            pageURL = pageURL.replace('.pdf', '');
        }
        if (pageURL.match(findDoi)) {
            return pageURL.match(findDoi)[0]
        }
        else if (pageURL.match(findDoiURL)) {
            return pageURL.match(findDoiURL)[0]
        }
        else {
            return null;
        }
    }
}

// external message listener for web app
chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
    const handleAsync = async () => {
        logger.info('Received external message:', message, 'from:', sender);
        const origin = sender.origin;
        const currAppOrigin = new URL(appURL).origin;

        if (origin !== currAppOrigin) {
            if (message === 'detect') {
                sendResponse({
                    type: 'success',
                    appOrigin: currAppOrigin,
                    version: manifestVersion
                });
                return true;
            }

            return false;
        }

        if (message === 'version') {
            sendResponse({
                type: 'success',
                version: manifestVersion
            });
            return true;
        }

        if (message === 'device') {
            const { deviceId } = await getLocalStorageValue("deviceId");
            if (deviceId) {
                sendResponse({
                    type: "success",
                    device: deviceId,
                });
            } else {
                let newId;
                newId = await loadFingerPrint();
                if (!newId) {
                    newId = uidGen + UTILS.generateCustomUUID();
                }
                await setLocalStorageValue({ 'deviceId': newId });

                sendResponse({
                    type: "success",
                    device: newId,
                });
            }
            return true;
        }

        if (message === 'forceRefreshToken') {
            const result = await refreshToken(true, 'v2');
            if (result && result.success) {
                try {
                    await getDomainsListtoDisableExt();
                    await getInstituteInfo();
                    await getListOfDomains();
                    await Promise.all([
                        getlistOfTags(),
                        getlistOfCollections(),
                        getListOfDomainRules(),
                        getUserAppSettings(),
                        getUserDomainRuleReactions(),
                        getExceededLimits(),
                    ]);
                    logger.info('forceRefreshToken success');
                    sendResponse({ type: 'success', refreshed: true });
                } catch (e) {
                    logger.error('forceRefreshToken failed', e);
                    sendResponse({ type: 'error', refreshed: true, msg: 'forceRefreshToken failed' });
                }
            } else {
                sendResponse({ type: 'error', refreshed: false, msg: 'forceRefreshToken failed' });
            }
            return true;
        }

        if (message === 'loginStatus') {
            const { token } = await getLocalStorageValue('token');
            if (token) {
                sendResponse({
                    type: 'success',
                    loggedIn: true
                });
            } else {
                const { deviceId } = await getLocalStorageValue("deviceId");
                if (deviceId) {
                    sendResponse({
                        type: "success",
                        device: deviceId,
                        loggedIn: false
                    });
                } else {
                    let newId;
                    newId = await loadFingerPrint();
                    if (!newId) {
                        newId = uidGen + UTILS.generateCustomUUID();
                    }
                    await setLocalStorageValue({ 'deviceId': newId });
                    sendResponse({
                        type: 'success',
                        device: newId,
                        loggedIn: false
                    }); 
                }
            }
            return true;
        }

        if (message === 'proxySetStatus') {
            try {
                const proxyDetails = await getProxyStatus();
                const isProxySet = proxyDetails?.value?.mode === 'pac_script'
                    && proxyDetails?.levelOfControl === 'controlled_by_this_extension';
                sendResponse({
                    type: 'success',
                    success: isProxySet,
                    mode: proxyDetails?.value?.mode,
                    levelOfControl: proxyDetails?.levelOfControl
                });
            } catch (err) {
                logger.error('Error getting proxy set status:', err);
                sendResponse({ type: 'error', success: false, msg: err.message });
            }
            return true;
        }

        if(message === 'clearToken') {
            const tokenTemp = await getLocalStorageValue('token');
    
            if(tokenTemp && Object.keys(tokenTemp).length > 0) {                                
                await logoutUser();
            }
            sendResponse({ type: 'success', cleared: true });
            return true;
        }

        if (message.clearcookies) {
            let all_cookies = JSON.parse(message.clearcookies);
            for (let i = 0; i < all_cookies.length; i++) {
                deleteCookiesOnLogout(all_cookies[i]['url'], all_cookies[i]['name'], function (data) { })
            }
            return true;
        }
    };
    handleAsync();

    // CRITICAL: return true synchronously to keep sendResponse alive
    return true;
});

function deleteCookiesOnLogout(url, name, callback) {
    chrome.cookies.remove({ "url": url, "name": name }, function (cookie) {
        if (cookie) {
            callback(true)
        } else {
            callback(false)
        }
    })
}

// check state of the system and check if we need to refresh token when the system comes back from idle state
chrome.idle.onStateChanged.addListener(async function (data) {
    if (data == "active") {
        await isRefreshTokenUpdated();
        await iconInterval();
    }
})


chrome.runtime.onInstalled.addListener(async (details) => {
    logger.info('MyLOFT Extension installed or updated to version:', manifestVersion);
    const tokenTemp = await getLocalStorageValue('token');
    const token = tokenTemp['token']
    if (token) {
        await setMyLOFTIcon(true)
        const instId = parseJwt(token).instId;
        getCookies(appURL, 'ml-preferred-institute', async function (webInstid) {
            if (webInstid && (webInstid != instId)) {
                await clearChromeLocalStorage();
            }
        });
    } else {
        await setMyLOFTIcon(false)
    }
    if (details.reason === 'install') {
        const deviceIdTemp = await getLocalStorageValue('deviceId');
        const deviceId = deviceIdTemp['deviceId'];
        if (!deviceId || deviceId == 'null') {
            await chrome.tabs.create({ url: appURL + 'user/login' }); // create a tab to inject fingerpring js
            await chrome.storage.local.set({ firstLoad: true });
            /** move finger print to on tabsonUpdated load methods */

        } else {
            chrome.tabs.create({ url: appURL + 'user/login?deviceId=' + deviceId });
        }

    }
})

async function runNeedHelpPopup(urlParamObj, tabId, forUrl) {
    try {
        const [deviceId, userId, instituteInfo] = await Promise.all([deviceIdStore.get(), userIdStore.get(), instituteInfoStore.get()]);
        if (!deviceId || !userId) {
            return;
        }
        const authId = await UTILS.encryptRSA(`ui_${userId}`, myloft_chatbot_pub_key)

        const newParamObj = {
            ...urlParamObj,
            userId,
            deviceId,
            instituteName: instituteInfo.instituteName,
            platform: 'Web',
            authId: authId,
            browser: getBrowser(),
            os: getOs(),
            tz: getTimezone(),
            language: getLanguage(),
        };

        if (instituteInfo.standaloneURL) {
            newParamObj.standaloneURL = instituteInfo.standaloneURL
        }

        const params = new URLSearchParams(newParamObj);

        const obj = {
            url: myloft_chatbot_client_url + `/?${params.toString()}`,
            tabId: tabId,
            forUrl: forUrl,
        };
        await chatbotPopupInfoStore.set(obj);
        await showNeedHelpPopUp(tabId);
    } catch (error) {
        logger.error('failed to open chatbot pop up', error)
    }
}

async function showNeedHelpPopUp(tabId) {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab?.id !== tabId) {
            return;
        }

        await chrome.action.setPopup({ tabId, popup: popUpPageForHelpPath });
        await chrome.action.openPopup({}, async (obj) => {
            if (chrome.runtime.lastError) {
                logger.error('auto pop up chrome runtime error occured.');
            }
        });
    } catch (error) {
        logger.error('Error opening auto popup:', error);
    }
}

function getBrowser() {
    const userAgent = navigator.userAgent;
    const browsers = {
        Chrome: /chrome|crios/i.test(userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(userAgent),
        Firefox: /firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent),
        Safari: /safari/i.test(userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(userAgent),
        Edge: /edg/i.test(userAgent),
        Opera: /opr|opera/i.test(userAgent),
        IE: /; msie|trident/i.test(userAgent) && !/ucbrowser/i.test(userAgent)
    };

    for (const [name, condition] of Object.entries(browsers)) {
        if (condition) return name;
    }

    return "Unknown";
}

function getOs() {
    const platform = navigator?.userAgentData?.platform || navigator.platform,
        macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    let os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}

function getTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function getLanguage() {
    return navigator.language || navigator.userLanguage;
}

function getCookies(domain, name, callback) {
    chrome.cookies.get({ "url": domain, "name": name }, function (cookie) {
        if (cookie) {
            callback(cookie.value);
        } else {
            callback(null);
        }
    });
}

async function loadFingerPrint(withOutCheck = false) {
    try {
        let queryOptions = { active: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        if (withOutCheck || tab.url && tab.url.indexOf(appURL) > -1) {
            await chrome.scripting.executeScript(
                {
                    target: { tabId: tab.id },
                    files: [
                        '/src/bg/fingerprint.min.js'
                    ],
                });

            const data = await chrome.scripting.executeScript(
                {
                    target: { tabId: tab.id },
                    func: generateUUID,
                    args: [uidGen]
                },
            )

            if (!data) {
                throw new Error('data not found')
            }

            await setLocalStorageValue({ 'deviceId': data[0].result });
            return data[0].result;
        }
    } catch (error) {
        logger.warn('Failed to load fingerprint script or generate UUID', error);
        // Fallback to generating a custom UUID if fingerprint generation fails
        const uuid = UTILS.generateCustomUUID();
        return uidGen + uuid;
    }
}

async function generateUUID(UUID_Gen) {
    const fp = await FingerprintJS.load()
    const data = await fp.get()

    let tokenData = data.visitorId
    if (!tokenData) {
        let d = new Date().getTime();
        const uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return UUID_Gen + uuid;
    }
    return UUID_Gen + tokenData;
};

//function to get value of key and update in local storage (only works for values that have json format)
async function getAndUpdateInLocalStorage(key, value) {
    try {
        const response = await chrome.storage.local.get(key);
        let key_value = response[key];
        for (let i in value) {
            key_value[i] = value[i];
        }
        let article_init_json = {};
        article_init_json[key] = key_value;
        await chrome.storage.local.set(article_init_json);
        return true;
    } catch (error) {
        return false;
    }
}

async function getLocalStorageValue(key) {
    try {
        const data = await chrome.storage.local.get(key);
        return data
    } catch (error) {
        return null
    }
}

async function setLocalStorageValue(object) {
    try {
        await chrome.storage.local.set(object);
        return true;
    } catch (error) {
        return false;
    }
}

async function clearChromeLocalStorage() {
    const localData = await chrome.storage.local.get(null);
    const promises = [];

    for (const key of Object.keys(localData)) {
        if (key.toLowerCase() !== 'deviceid') {
            promises.push(chrome.storage.local.remove(key));
        }
    }

    await Promise.all(promises);
    await setMyLOFTIcon(false);
    return true;
}

// reset state for onAuthRequired
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (details.type === "main_frame") {
            isTokenRefreshed = false;
            TOO_MANY_RETRIES_URL_MAPPER = {};
        }
    },
    { urls: ["<all_urls>"] },
    []
);

chrome.webNavigation.onBeforeNavigate.addListener(async function (details) {
    try {
        if (details.frameId !== 0 || !details?.url) {
            return;
        }

        const proxyType = await instituteProxyTypeStoreCache.get();
        if (proxyType !== INST_PROXY_TYPE.REWRITE) {
            return;
        }

        const [proxyDomain, accessibleDomains] = await Promise.all([
            instituteHostnameStore.get(),
            eResourcesDomainsStoreCache.get()
        ]);

        if (!proxyDomain || !accessibleDomains || !accessibleDomains.length) {
            return;
        }

        const proxyHost = new URL(proxyDomain).hostname;

        if (details.url.includes(proxyHost)) {
            return;
        }

        const tempURL = new URL(details.url);
        const hostname = tempURL.hostname;

        const canAccessDomain = accessibleDomains.find(d =>
            hostname.includes(d) && hostname.endsWith(d)
        );

        if (canAccessDomain) {
            const transformedUrl = UTILS.transformUrlForRewriteProxy(details.url, proxyHost);
            await chrome.tabs.update(details.tabId, { url: transformedUrl });
        }

    } catch (error) {
        logger.error('Error in onBeforeNavigate listener:', error);
    }
});

async function getDomainsForAccessCheck() {
    const proxyType = await instituteProxyTypeStoreCache.get();

    if (proxyType === INST_PROXY_TYPE.REWRITE) {
        return await eResourcesDomainsStoreRewriteCache.get() || [];
    } else {
        return await eResourcesDomainsStoreCache.get() || [];
    }
}



function getChromiumVersion() {
    const match = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9.]+)/);
    return match ? match[1] : "Unknown";
}

function getBrowserType() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Edg/")) return "Microsoft Edge";
    if (userAgent.includes("Brave/")) return "Brave";
    if (userAgent.includes("Chrome/")) return "Chrome";
    return "Unknown Chromium";
}

async function getProxyStatus() {
    return new Promise((resolve) => {
        chrome.proxy.settings.get({ incognito: false }, (details) => {
            resolve(details);
        });
    });
}

async function getAccessibleDomains() {
    try {
        const domains = await eResourcesDomainsStore.get();
        return domains || [];
    } catch (e) {
        return [];
    }
}

async function getDiagnosticReport() {
    const diagnostic_logs = await diagnosticLogsStore.get() || [];
    const instituteId = await instituteIdStore.get();
    const isOnCampus = await isOnCampusStore.get();
    const proxyType = await instituteProxyTypeStore.get();
    const instituteHostname = await instituteHostnameStore.get();
    const token = await tokenStore.get();
    const { userProfile } = await chrome.storage.local.get('userProfile');
    const isIncognitoAllowed = await chrome.extension.isAllowedIncognitoAccess();

    const browserType = getBrowserType();
    const chromiumVersion = getChromiumVersion();
    const proxyDetails = await getProxyStatus();
    const isPacFileSet = proxyDetails?.value?.mode === 'pac_script';
    const accessibleDomains = await getAccessibleDomains();

    const tokenPayload = token ? parseJwt(token) : null;

    // Connectivity checks
    const apiCheck = await UTILS.checkUrl(myloft_ping_url);
    const pingCheck = await UTILS.checkUrl(ping_proxy_url);
    const internetCheck = await UTILS.checkUrl('https://www.google.com/favicon.ico');

    return {
        extension: {
            name: manifest.name,
            version: manifest.version,
            id: extensionId,
            browser: browserType,
            chromiumVersion: chromiumVersion,
            isIncognitoAllowed: isIncognitoAllowed,
            isExtensionAddedLocally: isExtensionAddedLocally
        },
        connection: {
            isOnCampus: isOnCampus,
            proxyType: proxyType,
            instituteHostname: instituteHostname,
            isPacFileSet: isPacFileSet,
            proxyDetails: proxyDetails,
            accessibleDomainsCount: accessibleDomains.length,
            accessibleDomains: accessibleDomains,
            connectivity: {
                myloftApi: apiCheck,
                internet: internetCheck
            }
        },
        auth: {
            isTokenAvailable: !!token,
            tokenPayload: tokenPayload,
            instituteId: instituteId,
        },
        system: {
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
            language: navigator.language,
            platform: navigator.platform
        },
        logs: diagnostic_logs
    };
}
