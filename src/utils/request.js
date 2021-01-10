export default function(Vue) {
  const baseUrl = "https://www.baidu.com";
  Vue.prototype.$http = async function(opts) {
    const { url } = opts;
    uni.showLoading({
      title: "数据加载中...",
      mask: true
    });
    opts.url = baseUrl + opts.url
    const [err, res] = await uni.request(opts)
    uni.hideLoading();
    return res.data;
  }
}