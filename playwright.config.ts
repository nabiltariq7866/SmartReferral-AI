import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir:'./e2e',
  fullyParallel:false,
  reporter:[['list'],['html',{open:'never',outputFolder:'playwright-report'}]],
  use:{baseURL:'http://127.0.0.1:4173',trace:'retain-on-failure',screenshot:'only-on-failure'},
  webServer:{command:'node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4173',url:'http://127.0.0.1:4173',reuseExistingServer:true,timeout:120000,stdout:'ignore',stderr:'pipe'},
  projects:[{name:'chromium',use:{...devices['Desktop Chrome']}},{name:'tablet',use:{browserName:'chromium',viewport:{width:1024,height:1366},isMobile:true,hasTouch:true}}],
})
