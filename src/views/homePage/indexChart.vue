<template>
  <div>
    <a-row :gutter="24">
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="'总销售额'" total="￥126,560">
          <a-tooltip :title="'指标说明'" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
           <div>
            <trend flag="up" style="margin-right: 16px;">
              <span slot="term"></span>
              12%
            </trend>
            <trend flag="down">
              <span slot="term"></span>
              11%
            </trend>
          </div>
          <template slot="footer"><span>日均销售额</span><span>￥ 234.56</span></template>
        </chart-card>
      </a-col>
       <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="'订单量'" total="8,846">
          <a-tooltip :title="'指标说明'" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
           <div>
            <mini-area />
          </div>
          <template slot="footer"><span>日订单量</span><span>1,234</span></template>
        </chart-card>
      </a-col>
       <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
         <chart-card :loading="loading" :title="'支付笔数'" total="8,846">
          <a-tooltip :title="'指标说明'" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
         <div>
            <mini-bar />
          </div>
          <template slot="footer"><span>转化率</span><span>60%</span></template>
        </chart-card>
      </a-col>
       <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
         <chart-card :loading="loading" :title="'运营活动效果'" total="78%">
          <a-tooltip :title="'指标说明'" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-progress color="rgb(19, 194, 194)" :target="80" :percentage="78" height="8px" />
          </div>
         <template slot="footer">
            <trend flag="down" style="margin-right: 16px;">
              <span slot="term">同周比</span>
              12%
            </trend>
            <trend flag="up">
              <span slot="term">日环比</span>
              80%
            </trend>
          </template>
        </chart-card>
      </a-col>
    </a-row>
    <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
      <div class="salesCard">
         <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrapper" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>今日</a>
              <a>本周</a>
              <a>本月</a>
              <a>本年</a>
            </div>
            <a-range-picker :style="{width: '256px'}" />
          </div>
          <a-tab-pane loading="true" tab="销售额" key="1">
             <a-row>
             <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="销售额排行" :data="barData"/>
              </a-col>
             <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list title="门店销售排行榜" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
         <a-tab-pane tab="销售趋势" key="2">
           <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData2" :title="'销售额趋势'" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list title="门店销售排行榜" :list="rankList"/>
              </a-col>
            </a-row>
         </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
     <a-row>
      <a-col :span="24">
        <a-card :loading="loading" :bordered="false" title="最近一周访问量统计" :style="{ marginTop: '24px' }">
          <a-row>
            <a-col :span="6">
              <head-info title="今日IP" content="1110"></head-info>
            </a-col>
            <a-col :span="2">
              <a-spin class='circle-cust'>
                <a-icon slot="indicator" type="environment" style="font-size: 24px"  />
              </a-spin>
            </a-col>
            <a-col :span="6">
              <head-info title="今日访问" content="1110"></head-info>
            </a-col>
            <a-col :span="2">
              <a-spin class='circle-cust'>
                <a-icon slot="indicator" type="team" style="font-size: 24px"  />
              </a-spin>
            </a-col>
            <a-col :span="6">
              <head-info title="总访问量" content="1110"></head-info>
            </a-col>
            <a-col :span="2">
              <a-spin class='circle-cust'>
                <a-icon slot="indicator" type="rise" style="font-size: 24px"  />
              </a-spin>
            </a-col>
          </a-row>
          <line-chart-multid></line-chart-multid>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import Trend from '@/components/Trend/index';
import ChartCard from '@/components/Charts/ChartCard';
import RankList from '@/components/Charts/RankList';
import HeadInfo from '@/components/tools/HeadInfo.vue';
import MiniArea from '@/components/Charts/MiniArea'
import MiniBar from '@/components/Charts/MiniBar'
import MiniProgress from '@/components/Charts/MiniProgress'
import Bar from '@/components/Charts/Bar'
import LineChartMultid from '@/components/Charts/LineChartMultid'

  const barData = []
  const barData2 = []
  for (let i = 0; i < 12; i += 1) {
    barData.push({
      x: `${i + 1}月`,
      y: Math.floor(Math.random() * 1000) + 200
    })
    barData2.push({
      x: `${i + 1}月`,
      y: Math.floor(Math.random() * 1000) + 200
    })
  }

  const rankList = []
  for (let i = 0; i < 7; i++) {
    rankList.push({
      name: '白鹭岛 ' + (i+1) + ' 号店',
      total: 1234.56 - i * 100
    })
  }

export default {
  name: "IndexChart",
  components: {
    Trend,
    ChartCard,
    RankList,
    HeadInfo,
    MiniArea,
    MiniBar,
    MiniProgress,
    Bar,
    LineChartMultid,
  },
  data() {
    return{
      rankList,
      barData,
      barData2,
      loading: false,
    }
  },
  mounted () {
    // 下面代码解决第一次渲染，图标宽度过款问题
    const e = document.createEvent('Event')
    e.initEvent('resize', true, true)
    window.dispatchEvent(e)
  },
};
</script>
<style lang="less" scoped>
  .circle-cust{
    position: relative;
    top: 28px;
    left: -100%;
  }
.tooltipIcon{
  position: absolute;
  top:28px;
  right:24px;
}
.cardBox{
  width:100%;
}
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
      display: inline-block;
      margin-right: 24px;

      a {
        margin-left: 24px;
      }
    }
  }

  .antd-pro-pages-dashboard-analysis-twoColLayout {
    position: relative;
    display: flex;
    display: block;
    flex-flow: row wrap;
  }

  .antd-pro-pages-dashboard-analysis-salesCard {
    height: calc(100% - 24px);
    /deep/ .ant-card-head {
      position: relative;
    }
  }

  .dashboard-analysis-iconGroup {
    i {
      margin-left: 16px;
      color: rgba(0,0,0,.45);
      cursor: pointer;
      transition: color .32s;
      color: black;
    }
  }
  .analysis-salesTypeRadio {
    position: absolute;
    right: 54px;
    bottom: 12px;
  }
</style>
