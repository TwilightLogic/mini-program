// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    count: 1,
    msg: 'Hi,',
    arr: ['plague', 'covid-19', 'cold'],
    userList: [
      { id: 1, name: "Lucas" },
      { id: 2, name: "Logic" },
      { id: 3, name: "Luna" },
    ],
  },
  countChange() {
    this.setData({
      count: this.data.count + 1
    })
  },
  btnHandler(e) {
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  inputHandler(e) {
    this.setData({
      msg: e.detail.value
    })
  },
})
