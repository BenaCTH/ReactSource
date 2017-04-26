# connect   
- 用于转换UI 和 Store两种容器  
- http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

# 完整API 

- import { connect } from 'react-redux'

- const VisibleTodoList = connect(
   mapStateToProps,
   mapDispatchToProps
  )(TodoList)

- connect 方法接收两个参数，定义了UI组件的业务逻辑
- a> mapStateToProps ：
    - 负责输入逻辑，即将state映射到 UI 组件的参数（props），执行后应该返回一个对象，里面的每一个键值对就是一个映射
    - 会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
    - mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象
    - 注:connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新。
- b> mapDispatchToProps  
    - 负责输出逻辑，即将用户对 UI 组件的操作映射成 Action，定义UI组件的参数怎样发出Action
    - dispatch和ownProps（容器组件的props对象）两个参数 
    - 


