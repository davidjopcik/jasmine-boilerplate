import { config as sharedConfig } from './wdio.shared.conf.js'

// @ts-expect-error
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            acceptInsecureCerts: true,

             'wdio:devtoolsOptions': {
                //headless: true
            }, 

        }]
    }
}
