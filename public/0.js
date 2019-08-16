(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib??ref--4-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/home */ "./resources/js/api/home.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant */ "./node_modules/_vant@2.1.2@vant/es/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  data: function data() {
    return {
      show: true,
      tabName: ['推荐', '男装', '女装', '鞋类', '母婴儿童', '内衣配件'],
      active: 0,
      count: 0,
      loading: false,
      //控制上拉加载的加载动画
      finished: false,
      //控制在页面往下移动到底部时是否调用接口获取数据
      isLoading: false,
      //控制下拉刷新的加载动画
      iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566444355&di=ee477b2f098c67db9ef553b1cdd7f604&imgtype=jpg&er=1&src=http%3A%2F%2F07imgmini.eastday.com%2Fmobile%2F20190814%2F20190814075255_efd2fd85d0487654f0cf9f884bcd68a5_1.jpeg'
    };
  },
  mounted: function mounted() {
    console.log('test');
    console.log(Object(_api_home__WEBPACK_IMPORTED_MODULE_0__["getActivityList"])());
  },
  methods: {
    onRefresh: function onRefresh() {
      var _this = this;

      setTimeout(function () {
        _this.$toast('刷新成功');

        _this.isLoading = false;
        _this.count++;
      }, 500);
    },
    getImg: function getImg() {
      Object(vant__WEBPACK_IMPORTED_MODULE_1__["ImagePreview"])(['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-1.jpg']);
    },
    onLoad: function onLoad() {
      var _this2 = this;

      var self = this;
      setTimeout(function () {
        var data = {
          pageNumber: self.pageNumber + 1
        };
        _this2.loading = false;
        _this2.finished = true;
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader??ref--6-1!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Detail.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content {\n   /*background-color: #f3f3f3;*/\n    padding: 3px 10px;\n    /*min-height: 1000px;*/\n}\n.detail-container {\n    background: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517945160,456794165&fm=26&gp=0.jpg') no-repeat top;\n    background-color: #f3f3f3;\n    min-height: 1000px;\n    background-size:100% 200px;\n}\n.nav-bar {\n    height: 50px;\n    margin-bottom: 30px;\n    /*background: red*/\n}\n.back-btn {\n    /*background: blue;*/\n    height: 50px;\n    padding: 15px\n}\n.shop-card {\n    /*height: 300px;*/\n    /*padding: 10px;*/\n    background: #fff;\n    border-radius: 10px;\n    padding: 15px;\n    box-shadow: #0a0302;\n}\n.shop-card-icon img {\n    width: 80px;\n    height: 80px;\n    margin-top:-40px;\n    border:1px solid #fff;\n    border-radius: 5px\n}\n.shop-card-desc {\n    font-size:12px;\n    color: #444\n}\n.shop-card-tool-btn {\n    padding: 8px 0;\n}\n.shop-card-detail {\n    padding-top: 10px;\n    /*height: 100px;*/\n    /*background: red;*/\n    border-top: 1px dashed #eee;\n    font-size: 12px\n}\n.shop-card-detail-content {\n    color: #666\n}\n.shop-card-detail-item {\n    margin-bottom: 8px;\n}\n.goods-card {\n    /*height: 300px;*/\n    /*padding: 10px;*/\n    background: #fff;\n    border-radius: 10px;\n    padding: 15px;\n    box-shadow: #0a0302;\n    margin-top:10px\n}\n.goods-card-header {\n    line-height: 30px;\n    font-size: 13px;\n    color: #333;\n    font-weight: bold;\n    /*background: green;*/\n    border-bottom: 1px solid #eee;\n}\n.goods-card-price {\n    line-height: 30px;\n    color: red;\n    font-size: 13px;\n}\n.goods-card-detail-content {\n    padding-top: 5px;\n    font-size: 12px;\n    color: #666\n}\n.goods-card-model {\n    background: #efefef;\n    height: 80px;\n    padding: 10px\n}\n.van-grid-item__content {\n    padding: 3px\n}\n.van-image__img {\n    border: 1px solid #eee;\n    height: 120px;\n    border-radius: 3px\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/index.js!./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader!./node_modules/_css-loader@1.0.1@css-loader??ref--6-1!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Detail.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.1@css-loader??ref--6-1!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Detail.vue?vue&type=template&id=78b841b0& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "detail-container" },
    [
      _c(
        "van-row",
        [
          _c(
            "van-col",
            { staticClass: "nav-bar", attrs: { span: "24" } },
            [
              _c(
                "van-col",
                { staticClass: "back-btn", attrs: { span: "4" } },
                [_c("van-icon", { attrs: { name: "arrow-left" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "van-col",
            { attrs: { span: "24" } },
            [
              _c(
                "van-list",
                {
                  staticClass: "content",
                  attrs: {
                    finished: _vm.finished,
                    "finished-text": "-- 我也是有底线的 --"
                  },
                  on: { load: _vm.onLoad },
                  model: {
                    value: _vm.loading,
                    callback: function($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading"
                  }
                },
                [
                  _c(
                    "van-row",
                    { staticClass: "shop-card" },
                    [
                      _c(
                        "van-col",
                        { staticClass: "shop-card-icon", attrs: { span: "7" } },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775604567,3906412923&fm=26&gp=0.jpg",
                              height: "100%",
                              width: "100%",
                              alt: ""
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        { attrs: { span: "17" } },
                        [
                          _c("van-col", { attrs: { span: "8" } }, [
                            _vm._v("传奇保罗")
                          ]),
                          _vm._v(" "),
                          _c(
                            "van-col",
                            {
                              staticStyle: { "text-align": "right" },
                              attrs: { span: "16" }
                            },
                            [
                              _c(
                                "van-button",
                                {
                                  attrs: {
                                    type: "warning",
                                    size: "small",
                                    icon: "like-o"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                               关注品牌\n                           "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "shop-card-desc",
                          attrs: { span: "24" }
                        },
                        [
                          _c("span", [
                            _vm._v(
                              "品牌活动 |【周五】8月16日09:00开播，8月18日09:00截单，活动共2天。传奇保罗集合优秀的男..."
                            )
                          ]),
                          _vm._v(" "),
                          _c("a", { attrs: { href: "" } }, [_vm._v("详情 >")])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "shop-card-tool-btn",
                          staticStyle: { "text-align": "right" },
                          attrs: { span: "24" }
                        },
                        [
                          _c(
                            "van-button",
                            { attrs: { plain: "", size: "small" } },
                            [_vm._v("提醒我")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-button",
                            { attrs: { plain: "", size: "small" } },
                            [_vm._v("转发活动")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-button",
                            { attrs: { plain: "", size: "small" } },
                            [_vm._v("批量转发")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "shop-card-detail",
                          attrs: { span: "24" }
                        },
                        [
                          _c(
                            "van-col",
                            {
                              staticClass: "shop-card-detail-item",
                              attrs: { span: "24" }
                            },
                            [
                              _c("van-col", { attrs: { span: "3" } }, [
                                _vm._v("发货")
                              ]),
                              _vm._v(" "),
                              _c(
                                "van-col",
                                {
                                  staticClass: "shop-card-detail-content",
                                  attrs: { span: "21" }
                                },
                                [
                                  _vm._v(
                                    "传奇保罗集合优秀的男装设计师，致力于休闲商务领域服饰研发，引进先进服饰生产制作经验，结合世界流行趋势。不断创新，"
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "van-col",
                            {
                              staticClass: "shop-card-detail-item",
                              staticStyle: { "margin-bottom": "0px" },
                              attrs: { span: "24" }
                            },
                            [
                              _c("van-col", { attrs: { span: "3" } }, [
                                _vm._v("邮费")
                              ]),
                              _vm._v(" "),
                              _c(
                                "van-col",
                                {
                                  staticClass: "shop-card-detail-content",
                                  attrs: { span: "21" }
                                },
                                [_vm._v("全场包邮")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "van-row",
                    { staticClass: "goods-card" },
                    [
                      _c(
                        "van-col",
                        {
                          staticClass: "goods-card-header",
                          attrs: { span: "24" }
                        },
                        [
                          _vm._v(
                            "\n                        838115.2005印花商务衬衫男\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "goods-card-price",
                          attrs: { span: "24" }
                        },
                        [
                          _c("van-col", { attrs: { span: "6" } }, [
                            _vm._v("¥83.00")
                          ]),
                          _vm._v(" "),
                          _c(
                            "van-col",
                            {
                              staticStyle: { "text-align": "right" },
                              attrs: { span: "18" }
                            },
                            [_vm._v("建议售价：¥83.00")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "goods-card-image",
                          attrs: { span: "24" }
                        },
                        [
                          _c(
                            "van-grid",
                            { attrs: { border: false, "column-num": 2 } },
                            [
                              _c(
                                "van-grid-item",
                                [
                                  _c("van-image", {
                                    attrs: {
                                      src:
                                        "https://img.yzcdn.cn/vant/apple-1.jpg"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.getImg()
                                      }
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "van-grid-item",
                                [
                                  _c("van-image", {
                                    attrs: {
                                      src:
                                        "https://img.yzcdn.cn/vant/apple-2.jpg"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "van-grid-item",
                                [
                                  _c("van-image", {
                                    attrs: {
                                      src:
                                        "https://img.yzcdn.cn/vant/apple-3.jpg"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "van-grid-item",
                                [
                                  _c("van-image", {
                                    attrs: {
                                      src:
                                        "https://img.yzcdn.cn/vant/apple-2.jpg"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "goods-card-detail",
                          attrs: { span: "24" }
                        },
                        [
                          _c(
                            "van-col",
                            {
                              staticClass: "goods-card-detail-content",
                              attrs: { span: "24" }
                            },
                            [_vm._v("宝贝编号：838114")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-col",
                            {
                              staticClass: "goods-card-detail-content",
                              attrs: { span: "24" }
                            },
                            [
                              _vm._v(
                                "2005印花商务衬衫男2005印花商务衬衫男2005印花商务衬衫男(市场价：338.00)"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "goods-card-model",
                          attrs: { span: "24" }
                        },
                        [
                          _c(
                            "van-tag",
                            { attrs: { plain: "", type: "danger" } },
                            [_vm._v("酒红M/165")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-tag",
                            { attrs: { plain: "", type: "danger" } },
                            [_vm._v("酒红L/170")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-tag",
                            { attrs: { plain: "", type: "danger" } },
                            [_vm._v("酒红XL/175")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-tag",
                            { attrs: { plain: "", type: "danger" } },
                            [_vm._v("酒红M/165")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-tag",
                            { attrs: { plain: "", type: "danger" } },
                            [_vm._v("酒红L/170")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-tag",
                            { attrs: { plain: "", type: "danger" } },
                            [_vm._v("酒红XL/175")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticStyle: {
                            "text-align": "right",
                            "margin-top": "10px"
                          },
                          attrs: { span: "24" }
                        },
                        [
                          _c(
                            "van-button",
                            {
                              attrs: {
                                type: "primary",
                                plain: "",
                                size: "small"
                              }
                            },
                            [_vm._v("客服")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-button",
                            {
                              attrs: {
                                type: "primary",
                                plain: "",
                                size: "small"
                              }
                            },
                            [_vm._v("转发")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/home.js":
/*!**********************************!*\
  !*** ./resources/js/api/home.js ***!
  \**********************************/
/*! exports provided: getActivityList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityList", function() { return getActivityList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./resources/js/utils/request.js");

function getActivityList(params) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/activity',
    params: params
  });
}

/***/ }),

/***/ "./resources/js/utils/request.js":
/*!***************************************!*\
  !*** ./resources/js/utils/request.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js):\nSyntaxError: /Users/liuzhen/Sites/shop/resources/js/utils/request.js: Invalid left-hand side in assignment expression (26:8)\n\n\u001b[0m \u001b[90m 24 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 | \u001b[39m    \u001b[36mif\u001b[39m (response\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mcode \u001b[33m===\u001b[39m \u001b[35m200\u001b[39m) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 26 | \u001b[39m        \u001b[33mDialog\u001b[39m\u001b[33m.\u001b[39malert({\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m            title\u001b[33m:\u001b[39m \u001b[32m'警告'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m            message\u001b[33m:\u001b[39m response\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mmessage\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 | \u001b[39m        })\u001b[33m=\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at Parser.raise (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:6325:17)\n    at Parser.toAssignable (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:7825:18)\n    at Parser.parseMaybeAssign (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8207:47)\n    at Parser.parseExpression (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8135:23)\n    at Parser.parseStatementContent (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9958:23)\n    at Parser.parseStatement (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9829:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:10405:25)\n    at Parser.parseBlockBody (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:10392:10)\n    at Parser.parseBlock (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:10376:10)\n    at Parser.parseStatementContent (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9905:21)\n    at Parser.parseStatement (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9829:17)\n    at Parser.parseIfStatement (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:10183:28)\n    at Parser.parseStatementContent (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9874:21)\n    at Parser.parseStatement (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9829:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:10405:25)\n    at Parser.parseBlockBody (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:10392:10)\n    at Parser.parseBlock (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:10376:10)\n    at Parser.parseFunctionBody (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9424:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9394:10)\n    at withTopicForbiddingContext (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:10535:12)\n    at Parser.withTopicForbiddingContext (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9702:14)\n    at Parser.parseFunction (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:10534:10)\n    at Parser.parseFunctionExpression (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8877:17)\n    at Parser.parseExprAtom (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8790:21)\n    at Parser.parseExprSubscripts (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8412:23)\n    at Parser.parseMaybeUnary (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8392:21)\n    at Parser.parseExprOps (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8267:23)\n    at Parser.parseMaybeConditional (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8240:23)\n    at Parser.parseMaybeAssign (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8187:21)\n    at Parser.parseExprListItem (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:9491:18)\n    at Parser.parseCallExpressionArguments (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8621:22)\n    at Parser.parseSubscript (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8514:29)\n    at Parser.parseSubscripts (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8433:19)\n    at Parser.parseExprSubscripts (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8422:17)\n    at Parser.parseMaybeUnary (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8392:21)\n    at Parser.parseExprOps (/Users/liuzhen/Sites/shop/node_modules/_@babel_parser@7.5.5@@babel/parser/lib/index.js:8267:23)");

/***/ }),

/***/ "./resources/js/views/Detail.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Detail.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_78b841b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=78b841b0& */ "./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/views/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_78b841b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_78b841b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Detail.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.0.6@babel-loader/lib??ref--4-0!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Detail.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Detail.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_style-loader@0.23.1@style-loader!../../../node_modules/_css-loader@1.0.1@css-loader??ref--6-1!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/_style-loader@0.23.1@style-loader/index.js!./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Detail.vue?vue&type=template&id=78b841b0& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_78b841b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=78b841b0& */ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_78b841b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_78b841b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);