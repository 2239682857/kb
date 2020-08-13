<template>
    <div>
        <div>
            <svg-icon icon-class="resultList" style="color: #70DAAD"></svg-icon>
            <span>
                查询结果
            </span>
        </div>
        <div style="padding: 10px;margin-top: 10px">
            <el-table :data="tableData"
                      style="width: 100%">

                <el-table-column
                        prop="title"
                        label="标题">
                    <template slot-scope="scope">
                        <span class="paper_title" @click="updatePaperInfo(scope.row)">{{scope.row.title}}</span>
                    </template>
                </el-table-column>

                <el-table-column
                        prop="author"
                        label="作者">
                </el-table-column>

                <el-table-column
                        prop="years"
                        label="发表年份">
                </el-table-column>

                <el-table-column
                        prop="number"
                        label="引用次数">
                </el-table-column>

                <el-table-column
                        prop="similarity"
                        label="相似度">
                </el-table-column>

                <el-table-column
                        prop="datasetOrCode"
                        label="数据集/代码">
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px;text-align: center;">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        title: '这个是一篇文章的标题',
                        author: '这个是文章的作者',
                        years: '2020',
                        number: 0,
                        similarity: '0%',
                        datasetOrCode: '有'
                    }, {
                        title: '这个是一篇文章的标题',
                        author: '这个是文章的作者',
                        years: '2020',
                        number: 0,
                        similarity: '0%',
                        datasetOrCode: '有'

                    }, {
                        title: '这个是一篇文章的标题',
                        author: '这个是文章的作者',
                        years: '2020',

                        number: 0,
                        similarity: '0%',
                        datasetOrCode: '有'
                    }, {
                        title: '这个是一篇文章的标题',
                        author: '这个是文章的作者',
                        years: '2020',
                        number: 0,
                        similarity: '0%',
                        datasetOrCode: '有'

                    }, {
                        title: '这个是一篇文章的标题',
                        author: '这个是文章的作者',
                        years: '2020',
                        number: 0,
                        similarity: '0%',
                        datasetOrCode: '有'

                    }, {
                        title: '这个是一篇文章的标题',
                        author: '这个是文章的作者',
                        years: '2020',
                        number: 0,
                        similarity: '0%',
                        datasetOrCode: '有'

                    }, {
                        title: '这个是一篇文章的标题',
                        author: '这个是文章的作者',
                        years: '2020',
                        number: 0,
                        similarity: '0%',
                        datasetOrCode: '有'

                    }, {
                        title: '这个是一篇文章的标题',
                        author: '这个是文章的作者',
                        years: '2020',
                        number: 0,
                        similarity: '0%',
                        datasetOrCode: '有'

                    }, {
                        title: '这个是一篇文章的标题',
                        author: '这个是文章的作者',
                        years: '2020',
                        number: 0,
                        similarity: '0%',
                        datasetOrCode: '有'

                    }
                ]
            }
        },
        methods: {
            updatePaperInfo(paper) {
                this.$emit("updatePaperInfo", paper)
            }
        }
    }
</script>

<style scoped>

    .paper_title {
        color: #0091FF;
        cursor: pointer;
    }

    .paper_title:hover {
        text-decoration: underline;
    }
</style>