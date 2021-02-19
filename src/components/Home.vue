<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible :style="{ overflow: 'auto', height: '100vh'}">
      <div class="logo" />
      <a-menu
        :default-selected-keys="['1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        @openChange="onOpenChange"
        @select="select"
        :open-keys="openKeys"
      >
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>首页</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
          <a-menu-item key="5">
            Option 5
          </a-menu-item>
          <a-menu-item key="6">
            Option 6
          </a-menu-item>
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
          <a-menu-item key="9">
            Option 9
          </a-menu-item>
          <a-menu-item key="10">
            Option 10
          </a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">
              Option 11
            </a-menu-item>
            <a-menu-item key="12">
              Option 12
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-button type ="info" @click = "logout" style = "margin-right:24px">退出</a-button>
      </a-layout-header>
      <a-layout-content>
         <tabs></tabs>
      <router-view style = "margin:12px 12px 0px"></router-view>  
      </a-layout-content>
      <div style = "text-align:center; line-height:50px; height:150px;">Ant Design ©2020 Created by Ant UED</div>
    </a-layout>
  </a-layout>
</template>
<script>
import tabs from './tabs.vue';

export default {
  components: {
    tabs,
  },
  data() {
    return {
      collapsed: false,
      rootSubmenuKeys: ['sub1', 'sub2'],
      openKeys: [],
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find((key) => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    select(item) {
      if (item.key === '1') {
        this.openKeys = [];
      }
    },
    logout() {
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
  },
};
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-layout-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
