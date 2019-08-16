<template>
        <div class="detail-container">
            <!--<van-nav-bar left-text="返回" style="background-color: rgba(0,0,0,0);" left-arrow >-->
            <!--</van-nav-bar>-->
            <van-row>
                <van-col span="24" class="nav-bar">
                    <van-col span="4" class="back-btn">
                        <van-icon name="arrow-left" />
                    </van-col>
                </van-col>

                <van-col span="24" >
                    <van-list class="content" v-model="loading" :finished="finished"  finished-text="-- 我也是有底线的 --" @load="onLoad">
                       <van-row class="shop-card">
                            <van-col span="7" class="shop-card-icon">
                                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775604567,3906412923&fm=26&gp=0.jpg" height="100%" width="100%" alt="">
                            </van-col>
                           <van-col span="17">
                               <van-col span="8">传奇保罗</van-col>
                               <van-col span="16" style="text-align: right">
                                   <van-button type="warning" size="small" icon="like-o">
                                       关注品牌
                                   </van-button>
                               </van-col>
                           </van-col>
                           <van-col span="24" class="shop-card-desc">
                               <span>品牌活动 |【周五】8月16日09:00开播，8月18日09:00截单，活动共2天。传奇保罗集合优秀的男...</span>
                               <a href="">详情 ></a>
                           </van-col>
                           <van-col span="24" class="shop-card-tool-btn" style="text-align: right">
                               <van-button  plain size="small">提醒我</van-button>
                               <van-button  plain size="small">转发活动</van-button>
                               <van-button  plain size="small">批量转发</van-button>
                           </van-col>
                           <van-col span="24" class="shop-card-detail">
                               <van-col span="24" class="shop-card-detail-item">
                                   <van-col span="3">发货</van-col>
                                   <van-col span="21" class="shop-card-detail-content">传奇保罗集合优秀的男装设计师，致力于休闲商务领域服饰研发，引进先进服饰生产制作经验，结合世界流行趋势。不断创新，</van-col>
                               </van-col>
                               <van-col span="24" class="shop-card-detail-item" style="margin-bottom: 0px">
                                   <van-col span="3">邮费</van-col>
                                   <van-col span="21" class="shop-card-detail-content">全场包邮</van-col>
                               </van-col>
                           </van-col>
                       </van-row>

                        <van-row class="goods-card">
                            <van-col span="24" class="goods-card-header">
                                838115.2005印花商务衬衫男
                            </van-col>
                            <van-col span="24" class="goods-card-price">
                                <van-col span="6">¥83.00</van-col>
                                <van-col span="18" style="text-align:right">建议售价：¥83.00</van-col>
                            </van-col>
                            <van-col span="24" class="goods-card-image">
                                <van-grid :border="false" :column-num="2">
                                    <van-grid-item>
                                        <van-image @click="getImg()" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                                    </van-grid-item>
                                    <van-grid-item>
                                        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                                    </van-grid-item>
                                    <van-grid-item>
                                        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                                    </van-grid-item>
                                    <van-grid-item>
                                        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                                    </van-grid-item>
                                </van-grid>
                            </van-col>
                            <van-col span="24" class="goods-card-detail">
                                <van-col span="24" class="goods-card-detail-content">宝贝编号：838114</van-col>
                                <van-col span="24" class="goods-card-detail-content">2005印花商务衬衫男2005印花商务衬衫男2005印花商务衬衫男(市场价：338.00)</van-col>
                                <!--<van-col span="24" class="goods-card-detail-content">2005印花商务衬衫男2005印花商务衬衫男2005印花商务衬衫男</van-col>-->
                            </van-col>
                            <van-col span="24" class="goods-card-model">
                                <van-tag plain type="danger">酒红M/165</van-tag>
                                <van-tag plain type="danger">酒红L/170</van-tag>
                                <van-tag plain type="danger">酒红XL/175</van-tag>
                                <van-tag plain type="danger">酒红M/165</van-tag>
                                <van-tag plain type="danger">酒红L/170</van-tag>
                                <van-tag plain type="danger">酒红XL/175</van-tag>
                            </van-col>
                            <van-col span="24" style="text-align:right; margin-top: 10px">
                                <van-button type="primary" plain size="small">客服</van-button>
                                <van-button type="primary" plain size="small">转发</van-button>
                            </van-col>
                        </van-row>

                    </van-list>
                </van-col>
            </van-row>

        </div>
</template>

<script>
    import { getActivityList } from '../api/home'
    import { ImagePreview } from 'vant'

    export default {
        name: "Home",
        data() {
            return {

                show: true,
                tabName: [
                    '推荐','男装','女装','鞋类', '母婴儿童', '内衣配件'
                ],
                active: 0,
                count: 0,
                loading: false,//控制上拉加载的加载动画
                finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
                isLoading: false,//控制下拉刷新的加载动画

                iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566444355&di=ee477b2f098c67db9ef553b1cdd7f604&imgtype=jpg&er=1&src=http%3A%2F%2F07imgmini.eastday.com%2Fmobile%2F20190814%2F20190814075255_efd2fd85d0487654f0cf9f884bcd68a5_1.jpeg'
            }
        },
        mounted() {
            console.log('test');
            console.log(getActivityList())
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            },
            getImg() {
                ImagePreview([
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-1.jpg'
                ])
            },
            onLoad() {
                let self = this;
                setTimeout(() => {
                    let data = {
                        pageNumber: self.pageNumber + 1,
                    };
                    this.loading = false;
                    this.finished = true
                }, 1000);
            }
        }
    }
</script>

<style>
    .content {
       /*background-color: #f3f3f3;*/
        padding: 3px 10px;
        /*min-height: 1000px;*/
    }
    .detail-container {
        background: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517945160,456794165&fm=26&gp=0.jpg') no-repeat top;
        background-color: #f3f3f3;
        min-height: 1000px;
        background-size:100% 200px;
    }
    .nav-bar {
        height: 50px;
        margin-bottom: 30px;
        /*background: red*/
    }
    .back-btn {
        /*background: blue;*/
        height: 50px;
        padding: 15px
    }
    .shop-card {
        /*height: 300px;*/
        /*padding: 10px;*/
        background: #fff;
        border-radius: 10px;
        padding: 15px;
        box-shadow: #0a0302;
    }
    .shop-card-icon img {
        width: 80px;
        height: 80px;
        margin-top:-40px;
        border:1px solid #fff;
        border-radius: 5px
    }
    .shop-card-desc {
        font-size:12px;
        color: #444
    }
    .shop-card-tool-btn {
        padding: 8px 0;
    }
    .shop-card-detail {
        padding-top: 10px;
        /*height: 100px;*/
        /*background: red;*/
        border-top: 1px dashed #eee;
        font-size: 12px
    }
    .shop-card-detail-content {
        color: #666
    }
    .shop-card-detail-item {
        margin-bottom: 8px;
    }

    .goods-card {
        /*height: 300px;*/
        /*padding: 10px;*/
        background: #fff;
        border-radius: 10px;
        padding: 15px;
        box-shadow: #0a0302;
        margin-top:10px
    }
    .goods-card-header {
        line-height: 30px;
        font-size: 13px;
        color: #333;
        font-weight: bold;
        /*background: green;*/
        border-bottom: 1px solid #eee;
    }
    .goods-card-price {
        line-height: 30px;
        color: red;
        font-size: 13px;
    }
    .goods-card-detail-content {
        padding-top: 5px;
        font-size: 12px;
        color: #666
    }
    .goods-card-model {
        background: #efefef;
        height: 80px;
        padding: 10px
    }
    .van-grid-item__content {
        padding: 3px
    }
    .van-image__img {
        border: 1px solid #eee;
        height: 120px;
        border-radius: 3px
    }

</style>
