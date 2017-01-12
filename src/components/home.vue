<template>
    <div id="home">
        <mt-header fixed title="实时监测">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-content">
            <div class="alarm-records-view alarm-first">
                <div class="alarm-records-title">最新报警信息</div>
                <mt-cell class="home-cell"  is-link v-for="(item, index) in rows">
                    <span class="home-item">
                        <img src="/static/images/image-square.png"/>
                        <span class="home-title">
                            <span v-text="item.name"></span><span v-text="formatDate(item.createDate)"></span>
                        </span>
                        <span class="home-item-content" v-text="item.message.message"></span>
                    </span>
                </mt-cell>
            </div>
            <div class="alarm-records-view">
                <div class="alarm-records-title">电路</div>
                <ul class="alarm-table-view">
                    <li class="alarm-table-cell">
                        <span class="circuit-number" v-text="electricLength"></span>
                        <i class="warning-icon"></i>
                        <span class="circuit-title">报警记录</span>
                    </li>
                    <li class="alarm-table-cell">
                        <span class="circuit-number" v-text="electricDevicesLength"></span>
                        <i class="viewlist-icon"></i>
                        <span class="circuit-title">监控设备</span>
                    </li>
                    <li class="alarm-table-cell">
                        <span class="circuit-number">2</span>
                        <i class="warning-icon"></i>
                        <span class="circuit-title">数据统计</span>
                    </li>
                </ul>
            </div>
            <div class="alarm-records-view">
                <div class="alarm-records-title">视频</div>
                <ul class="alarm-table-view">
                    <li class="alarm-table-cell">
                        <span class="circuit-number" v-text="videoLength"></span>
                        <i class="warning-icon"></i>
                        <span class="circuit-title">报警记录</span>
                    </li>
                    <li class="alarm-table-cell">
                        <span class="circuit-number">{{ videoDevicesLength }}</span>
                        <i class="warning-icon"></i>
                        <span class="circuit-title">摄像头</span>
                    </li>
                    <li class="alarm-table-cell">
                        <span class="circuit-number">2</span>
                        <i class="warning-icon"></i>
                        <span class="circuit-title">数据统计</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript" src="../js/home.js"></script>

<style lang="less" src="../style/home.less" scoped></style>