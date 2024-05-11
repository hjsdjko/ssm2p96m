import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import liuyan from '@/views/modules/liuyan/list'
    import maijia from '@/views/modules/maijia/list'
    import shangpinqiugou from '@/views/modules/shangpinqiugou/list'
    import discussershoushangpin from '@/views/modules/discussershoushangpin/list'
    import storeup from '@/views/modules/storeup/list'
    import tuihuo from '@/views/modules/tuihuo/list'
    import kuaididingdan from '@/views/modules/kuaididingdan/list'
    import tongxin from '@/views/modules/tongxin/list'
    import yonghutongzhi from '@/views/modules/yonghutongzhi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussshangpinqiugou from '@/views/modules/discussshangpinqiugou/list'
    import ershoushangpin from '@/views/modules/ershoushangpin/list'
    import orders from '@/views/modules/orders/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '通知',
        component: news
      }
      ,{
	path: '/liuyan',
        name: '留言',
        component: liuyan
      }
      ,{
	path: '/maijia',
        name: '卖家',
        component: maijia
      }
      ,{
	path: '/shangpinqiugou',
        name: '商品求购',
        component: shangpinqiugou
      }
      ,{
	path: '/discussershoushangpin',
        name: '二手商品评论',
        component: discussershoushangpin
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/tuihuo',
        name: '退货',
        component: tuihuo
      }
      ,{
	path: '/kuaididingdan',
        name: '快递订单',
        component: kuaididingdan
      }
      ,{
	path: '/tongxin',
        name: '通信',
        component: tongxin
      }
      ,{
	path: '/yonghutongzhi',
        name: '用户通知',
        component: yonghutongzhi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discussshangpinqiugou',
        name: '商品求购评论',
        component: discussshangpinqiugou
      }
      ,{
	path: '/ershoushangpin',
        name: '二手商品',
        component: ershoushangpin
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
