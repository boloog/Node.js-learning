const chai = require('chai')

const assert = chai.assert
const should = chai.should()
const expect = chai.expect



describe('demo', function() {
  // 断言风格3
  it('使用 expect 风格的断言测试', function() {
    var value = 'hello'
    var number =  3
    // number 最多是5
    expect(number).to.be.at.most(5)
    expect(number).to.be.at.least(3)
    // 1 - 3 之间
    expect(number).to.be.within(1, 3)



    expect(value).to.exist
    expect(value).to.be.a('string')
    expect(value).be.equal('hello')
    expect(value).not.equal('您好')
    expect(value).have.length(5)
 
  })
  // 断言风格2
  // it('使用 should 风格的断言测试', function() {
  //   var value = 'hello'
  //   // and.
  //   value.should.exist.and.be.equal('hello').and.have.length(5)
    
    
  //   // value.should.be.a('strig')
  //   // value.should.be.equal('hello')
  //   // value.should.not.equal('您好')
  //   // value.should.have.length(5)

 
  // })


  // // 断言风格1
  // it('使用 assert 风格的断言测试', function() {
  //   var value = 123
  //   // assert.typeOf(value, 'string')
  //   assert.typeOf(value, 'number')

  //   assert.equal(value, '123')
 
  // })

  describe('方法 1', function() {

    before(function(){
      console.log('-- 测试之前')
    })

    after(function(){
      console.log('-- 测试之后')
    })

    beforeEach(function(){
      console.log('-- 每条测试之前')
    })
    afterEach(function(){
      console.log('-- 每条测试之后')
    })



    context('情境 1', function() {
      it('测试 1', function() {

      })

      it('测试 2', function() {
        
      })
    })
  })
})