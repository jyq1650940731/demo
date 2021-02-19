<template>
  <a-tabs v-model="activeKey" type="editable-card" @edit="onEdit" style="background:#fff;padding:0 24px">
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
      {{ pane.content }}
    </a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  data() {
    const panes = [
      {
        title: '首页', key: '1', closable: false,
      },
    ];
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0,
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    add() {
      const { panes } = this;
      const activeKey = `newTab${this.newTabIndex += 1}`;
      panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    remove(targetKey) {
      let { activeKey } = this;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter((pane) => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key;
        } else {
          activeKey = panes[0].key;
        }
      }
      this.panes = panes;
      this.activeKey = activeKey;
    },
  },
};
</script>
<style lang="less" scoped>
.ant-tabs-bar{
  margin:0;
}
</style>
