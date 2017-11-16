var comm=require('../../utils/comm.js')

Page({
  data:{
    name:"cyf",
    array:[{msg:"1"},{msg:"2"}],
    flag:false,
    array:[{msg:"cyf"},{msg:"hei"}]
  },
  onLoad:function(options){

  },
  onPullDownRefresh:function(){
    this.setData({
      name:"hei"
    })
  },
  clickMe(){
    this.setData({
      name: comm.sayhello(),
      flag:true
    })
  }
})