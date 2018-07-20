'use strict'

class PostController {
  index() {
    return `返回控制器内容`
  }

  // 创建资源请求
  store () {
    return `Post has been created.`
  }

  // 显示单个资源请求
  show ({ params }) {
    return `You're watching post ${ params.id }`
  }

  // 更新资源
  update ({ params }) {
    return `Post ${ params.id } has been updated.`
  }

  // 删除资源
  destroy ({ params }) {
    return `Post ${ params.id } has been removed.`
  }

  // 创建资源
  create () {
    return `Create post.`
  }

  // 编辑资源
  edit ( { params }){
    return `Editing post ${ params.id} .`
  }


}

module.exports = PostController
