// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showModal(evt ){
    this.setData({
      modalName: evt.currentTarget.dataset.target
    })
  },
  hideModal(evt ){
    this.setData({
      modalName: null
    })
  },
  call(evt){
    wx.makePhoneCall({
      phoneNumber: '123456789',
    })
  },
  save(evt){
    wx.addPhoneContact({
      firstName:'虚鲲',
      nickName:'鲲鲲',
      lastName:'菜',
      remark:'擅长唱、跳、rap、篮球、music',
      mobilePhoneNumber:'123456789',
      weChatNumber:'123456789',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})