<template>
    <div class="home_body">
        <div style="width: 50%;margin-left: 25%;padding-top: 150px;">
            <div style="text-align: center; overflow: hidden;">
                <svg-icon icon-class="sousuo" style="color: rgb(22,115,255);width: 30px;height: 30px;"></svg-icon>
                <span style="color: rgb(22,115,255);margin-left: 20px;font-size: 30px;">一键检索</span>
            </div>
            <el-card style="margin-top: 20px;">
                <el-input v-model="searchValue" placeholder="请输入查询关键字"></el-input>
            </el-card>
            <el-card style="margin-top: 20px;">
                <el-row>
                    <el-col :span="3" :offset="1">
                        <div style="margin-top: 8px;">
                            论文：
                        </div>
                    </el-col>

                    <el-col :span="20">
                        <el-radio-group v-model="selectPaperType">
                            <el-radio-button v-for="type in paperTypeList" :key="type" :label="type"></el-radio-button>
                        </el-radio-group>
                    </el-col>
                </el-row>
            </el-card>
            <div style="width: 10%;margin-left: 45%;margin-top: 30px;">
                <el-button style="width: 100%;" type="primary" round>查询</el-button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                searchValue: '',
                paperTypeList: ['Paper Title', 'Arxiv URL', 'DOI', 'Keywords'],
                selectPaperType: 'Paper Title'
            }
        }

    }
</script>

<style scoped>
    .home_body {
        background-image: url("/images/home_bg.png");
        height: 95vh;
    }
</style>
