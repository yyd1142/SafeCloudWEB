import { httpGet, httpPost } from './requestService'

export default {
  // 报警记录
  alarmRecordsData: httpGet('alarmRecords'),
  devicesListData: httpGet('devices')
}
