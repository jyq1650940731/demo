import Vue from 'vue';
import {
  Layout, Row, Col, Menu, Icon, Tabs, Button, FormModel, Input, Message, Statistic, Tooltip, Card, DatePicker, Spin, Radio,
} from 'ant-design-vue';

Vue.use(Layout);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Button);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Statistic);
Vue.use(Tooltip);
Vue.use(Card);
Vue.use(DatePicker);
Vue.use(Spin);
Vue.use(Radio);

Vue.prototype.$message = Message;
