 绑定this 

- 可是使用bind() 或者es6的箭头函数绑定this
  - <div onClick={this.tick.bind(this)}></div>
  - <div onClick={()=>this.tick()}></div>
- 建议在构造行数中绑定事件处理器，这样对于所有势力他们只需绑定一次
    -constructor(props){
     -super(props);
     -this.tick=this.tick.bind(this);
    -}
    -<div onClick={this.tick}></div>
