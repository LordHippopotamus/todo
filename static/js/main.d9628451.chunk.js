(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(21),s=n.n(o),d=(n(29),n(10)),r=n(11),c=n(7),m=n(14),u=n(13),l=n(35),h=n(8),b=n(37),j=n(34),v=n(1),O=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={name:""},a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(c.a)(a)),a}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),(0,this.props.addTodoListItem)(this.state.name),this.setState({name:""})}},{key:"render",value:function(){var e=this.state.name;return Object(v.jsxs)(b.a,{className:"d-flex",onSubmit:this.handleSubmit,children:[Object(v.jsx)(b.a.Control,{type:"text",placeholder:"What needs to be done?",className:"me-2",name:"name",value:e,onChange:this.handleChange}),Object(v.jsx)(j.a,{variant:"primary",type:"submit",children:"Add"})]})}}]),n}(i.a.Component),f=n(36);function p(e){var t=e.name,n=e.identifier,a=e.removeTodoListItem;return Object(v.jsxs)(f.a.Item,{className:"d-flex align-items-center justify-content-between",children:[t,Object(v.jsx)(j.a,{variant:"outline-success",onClick:function(){return a(n)},children:"Done"})]})}function x(e){var t=e.todos,n=e.removeTodoListItem;return t.length?Object(v.jsx)(f.a,{children:t.map((function(e){return Object(v.jsx)(p,{name:e.name,identifier:e.id,removeTodoListItem:n},e.id)}))}):Object(v.jsx)("div",{children:"Nothing to do"})}var I=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={todos:[],id:0},e.addTodoListItem=e.addTodoListItem.bind(Object(c.a)(e)),e.removeTodoListItem=e.removeTodoListItem.bind(Object(c.a)(e)),e}return Object(r.a)(n,[{key:"addTodoListItem",value:function(e){this.setState((function(t){var n=t.todos.slice();return n.push({id:t.id,name:e}),{todos:n,id:t.id+1}}))}},{key:"removeTodoListItem",value:function(e){this.setState((function(t){var n=t.todos.slice(),a=n.findIndex((function(t){return t.id===e}));return n.splice(a,1),{todos:n}}))}},{key:"render",value:function(){var e=this.state.todos;return Object(v.jsxs)(l.a,{className:"bg-light p-4 my-5",children:[Object(v.jsx)(O,{addTodoListItem:this.addTodoListItem}),Object(v.jsx)("hr",{className:"my-3"}),Object(v.jsx)(x,{todos:e,removeTodoListItem:this.removeTodoListItem})]})}}]),n}(i.a.Component);s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d9628451.chunk.js.map