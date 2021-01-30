/*
 * @Author: your name
 * @Date: 2021-01-30 20:24:01
 * @LastEditTime: 2021-01-30 21:11:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020\practice\static\js\todo_list.js
 */
Vue.component('item',{
    props:['todo'], 
    template:'\
        <div id="thing">\
            <div v-if="todo.state">\
                <li id="list"><slot></slot>{{todo.content}}</li>\
                <button id="button" v-on:click="$emit(\'edit\')">修改</button>\
                <button id="button" v-on:click="$emit(\'del_single\')">删除</button>\
            </div>\
            <div id="thing" v-else>\
                <slot></slot><input id="revise" v-model="todo.content" maxlength="100" placeholder="修改内容不能为空！">\
                <button class="edit_button" id="ok" v-on:click="$emit(\'edit_done\')">修改完成{{todo.content.length}}/100</button>\
            </div>\
        </div>'
})
var _Add=new Vue({
    el:'#Add',
    data:{message:''},
    methods:{
        //添加待办事件
        add:function (todo) {
            if(todo=='')
            alert("输入不能为空！");
            else
            {
                var a={content:todo,state:true};
                _List.items.push(a);
                _Add.message='';
                }
        },
        //删除全部待办事件
        del_all:function () {
            _List.items=new Array();
        }
    }
})
var _List=new Vue({
    el:'#todo_list',
    data:{
        items: [],
    },
    methods:{
        //修改操作
        _edit:function(index){
            _List.items[index].state=false;
        },
        //修改完成
        _edit_done:function(index){
            if(_List.items[index].content=='')
            {
                return;
            }
            _List.items[index].state=true;
        }
    }
})