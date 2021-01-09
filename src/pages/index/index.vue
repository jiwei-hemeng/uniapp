<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
    <uni-pagination title="标题文字" total="20"></uni-pagination>
    <u-button type="success" class="custom-style">成功按钮</u-button>
	</view>
</template>

<script>
  import {uniPagination} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				title: 'Hello'
			}
    },
    components: {
      uniPagination
    },
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
  .custom-style {
    color: #606266;
    width: 400rpx;
  }
</style>
