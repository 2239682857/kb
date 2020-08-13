<template>
    <div>
        <el-card>
            <div style="overflow: hidden; margin-left: 5%">
                <div style="float: left;width: 700px;">
                    <div style="float:left;">
                        <svg-icon icon-class="menu" style="color: rgb(22,115,255);width: 25px;height: 25px"></svg-icon>
                    </div>
                    <div style="float: left; margin-left:1%;margin-top: -5px">
                        <span style="font-weight: bold;font-size: 25px">知识图谱</span>
                    </div>
                </div>
                <div style="float:right;margin-right: 5%">
                    <div style="float:left;">
                        <svg-icon icon-class="DingDang" style="width: 25px;height: 25px;"></svg-icon>
                    </div>
                    <div style="float:left;margin-left: 20px">
                        <div style="float: left;">
                            <img src="public/favicon.ico" width="25px" height="25px"/>
                        </div>
                        <div style="float: left; margin-left: 10px">
                            username
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
</style>



