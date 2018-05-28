const chai = require('chai')
const expect = chai.expect

// 引入模块文件，返回计算结果
const BoloogDemo = require('../lib/boloog-demo')

var demo = new BoloogDemo()



describe('BoloogDemo', function(){

  it('给汽车引擎里面加水是不能接受的事情', function(done) {
    expect( demo.engine.bind(demo, 'water') ).to.throw('not accept')

    // expect(function(){
    //   demo.engine('water')
    // }).to.throw('not accept')
  })


  it('加载豆瓣 API 返回的内容里应该包含 subjects 属性', function(done) {
    demo.fetchData('top250', function(data){
      expect(data).to.have.property('subjects')
      done()
    })
  })





  // this.timeout(5000)
  // it('异步返回数据', function(done) {
  //   demo.waitTwoSecond('hello', function(data){
  //     expect(data).to.equal('hello')
  //     done()
  //   })
  // })


  // it('单价是 10 块钱的 3 件商品小计应该是 30 块', function() {
  //   var subtotal = demo.subtotal(10, 3)
  //   expect(subtotal).to.equal(30)
  // })
})


// mocha test/boloog-demo.js