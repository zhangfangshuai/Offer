
### React和ReactDOM什么关系

##### react 负责描述特性，提供React API。

类组件、函数组件、hooks、contexts、refs...这些都是React特性，而 react 模块只描述特性长什么样、该怎么用，并不负责特性的具体实现。

##### react-dom 负责实现特性。

react-dom、react-native 称为渲染器，负责在不同的宿主载体上实现特性，达到与描述相对应的真实效果。比如在浏览器上，渲染出DOM树、响应点击事件等。

&emsp;

### 模块和组件什么区别

随着应用的开发或项目的迭代，项目文件可能越来越庞大，上千行甚至上万行。

##### 模块（名词）

模块的概念就是将一个庞大的JS文件，根据功能将文件内的JS代码归类，拆分出不同功能倾向的多个JS文件，再通过模块化标准，引入回到原JS文件中的思想。

##### 组件（名词）
模块仅仅是停留在将JS文件进行分割拆分，而组件更彻底，将前端的三驾马车`HTML、CSS、JS`全部拆分，一拆到底，从而形成一个个相对独立的小“页面”，再通过组件化规则，引入回到原页面上的思想。


##### 模块化（形容词）
当应用都以JS模块来编写的，那么就称这个应用为模块化应用

##### 组件化（形容词）
当应用都是以多组建的方式来编写的，那么就称这个应用为组件化应用