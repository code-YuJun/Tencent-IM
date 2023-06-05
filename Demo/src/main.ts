import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import locales from './locales';

import { TUICore, TUIComponents } from './TUIKit';
import { TUICallKit } from '@tencentcloud/call-uikit-vue';
import { TUINotification } from './TUIKit/TUIPlugin';

const SDKAppID = 1400787156; // Your SDKAppID
const secretKey = 'cf43a58a24466a0ec22c7108cb9722a32afb579ca6eb19c1c20ca9374f924652'; // Your secretKey

const TUIKit = TUICore.init({
  SDKAppID,
});

TUIKit.config.i18n.provideMessage(locales);

TUIKit.use(TUIComponents);
TUIKit.use(TUICallKit);
TUIKit.use(TUINotification);

const app = createApp(App);

app.use(store)
  .use(router)
  .use(TUIKit)
  .use(ElementPlus)
  .mount('#app');

export { SDKAppID, secretKey };
