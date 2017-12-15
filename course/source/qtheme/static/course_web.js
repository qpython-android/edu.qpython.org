var STATUS = false;

var vm = new Vue({
  el: '#app',
  data: {
    content: {
      'new': {},
      'featured': {}
    },
    tag: 'new',
    c_page: {
      new: 1,
      featured: 1
    },
    page_size:9,
    new_page: false,
    new_page_data: {},
    is_zh: navigator.language == 'zh-CN'  ? true : navigator.language == 'zh' ? true : false
  },
  created: function () {
    var that = this;
    var _url = this.is_zh === true ? '/index/zh.json' :  '/index/default.json';
    $.get(_url, function(data){
      var _new = [];
        var _featured = [];
        $.each(data, function(k, v){
          v.is_open = false;
          if (v.cat == 'new') {
            _new.push(v);
          }else if (v.cat == 'featured') {
            _featured.push(v);
          }
        })
        that.content = {
          new: _new,
          featured: _featured
        };
    })
  },
  methods: {
    toggle_tag: function(tag) {
      this.tag = tag;
    },
    change_page: function(p) {
      if (this.tag == 'featured') {
        this.c_page.featured = p;
      }else if (this.tag == 'new') {
        this.c_page.new = p;
      }
    },
    is_has_next: function() {
      return this.content[this.tag] ? this.content[this.tag].length/this.page_size > this.c_page[this.tag] : false;
    },
    if_has_many_page:  function() {
      return this.content[this.tag].length/this.page_size >1 ? true : false;
    },
    course_desc: function(data) {
      this.new_page_data = data;
      this.new_page = true;
      window.STATUS = true;
    },
    go_back: function () {
      this.new_page = false;
      window.STATUS = false;
    }
  }
})

window.onload = function (){
  var h = $(window).height();
  $('#app').css("minHeight", h+'px');
}
window.onresize = function (){
  var h = $(window).height();
  $('#app').css("minHeight", h+'px');
}

history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
  if (window.STATUS){
    history.pushState(null, null, document.URL);
    vm.go_back();
  }else {
    history.go(-1);
  }
});

$(function(){
  $('.hot-search a').bind('click', function(){
    var t = $(this).text();
    $('#index_search').val(t);
    $('#index_search').parent().submit();
  })
})
