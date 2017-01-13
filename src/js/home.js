import api from 'api'
import moment from 'moment'
import { Cell } from 'mint-ui';
import headerComponent from './../components/header.vue';
export default {
    data() {
        return {
            headerTitle: '实时监测',
            link: '#',
            rows: [],
            videoLength: null,
            electricLength: null,
            videoDevicesLength: null,
            electricDevicesLength: null
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.alarmRecords('all');
            this.alarmRecords('video');
            this.alarmRecords('electric');
            this.devicesList('electric');
            this.devicesList('video');
        });
    },
    methods: {
        // 报警记录
        alarmRecords(type) {
            let self = this;
            let params = {
                type: type,
                cycle: 'all'
            };
            api.alarmRecordsData(params).then(result => {
                if (!result) return false
                if (result.code == 0) {
                    if (type == 'all') {
                        self.rows = result.response.datas;
                        console.log(1);
                    } else if (type == 'video') {
                        self.videoLength = result.response.datas.length;
                        console.log(2);
                    } else if (type == 'electric') {
                        self.electricLength = result.response.datas.length;
                        console.log(3);
                    }
                }
            })
        },
        //设备列表
        devicesList(type) {
            let self = this;
            let params = {
                type: type,
                action: 'list'
            };
            api.devicesListData(params).then(result => {
                if (!result) return false
                if (result.code == 0) {
                    if (type == 'video') {                        
                        self.videoDevicesLength = result.response.datas.length;
                    } else if (type == 'electric') {
                        self.electricDevicesLength = result.response.datas.length;
                    }
                }
            })
        },
        formatDate(date) {
            return moment(new Date(date)).format("YYYY-MM-DD HH:mm:ss");
        }
    },
    components: {
        'header-component': headerComponent,
        'mt-cell': Cell
    }
}