<template>
    <div class="list_body">
        <div class="el-card">
            <div style="text-align: center;padding-top: 10px">
                <span v-for="(item,index) in typeOptions" :style="index>0?'margin-left:20px;':''"
                      :class="type==item?'tabName selectTabName ':'tabName'">
                    {{item}}
                </span>
            </div>
        </div>

        <el-container style="margin: 20px">
            <el-aside width="70%">
                <el-card>
                    <paper-list @updatePaperInfo="updatePaperInfo"></paper-list>
                </el-card>
            </el-aside>
            <el-main style="margin-top: -20px">
                <el-card>
                    <paper-info ref="paperInfoDom"></paper-info>
                </el-card>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    import paperList from '@/components/Paper/PaperList'
    import paperInfo from '@/components/Paper/PaperInfo'

    export default {
        components: {
            paperList,
            paperInfo
        },
        data() {
            return {
                typeOptions: ["简略模式", "列表模式"],
                type: '列表模式',
                paper: null
            }
        },
        methods: {
            updatePaperInfo(paper) {
                this.paper = paper;
                this.$refs.paperInfoDom.paper = paper;
            }
        }
    }
</script>

<style scoped>
    .list_body {
        background: rgb(240, 242, 245);
        height: 93vh;
    }

    .tabName {

        font-size: 14px;
        font-weight: bold;
        display: inline-block;
        border: 0px solid red;
        height: 29px;
    }


    .selectTabName {
        font-family: PingFangSC-Medium;
        color: #0091FF;
        border-bottom: 1px solid #0091FF;
    }
</style>