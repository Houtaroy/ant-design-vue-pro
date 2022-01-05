<template>
  <page-header-wrapper :title="false">
    <div class="interface">
      <a-spin tip="加载中..." class="position" v-if="interfaceLoading"> </a-spin>
      <div class="interfaceSearch">
        <div class="interfaceSearchInput">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="64">
                <a-col :md="6" :sm="32">
                  <a-form-item label="接口名称">
                    <a-input allowClear v-model="searchParameters.searchName" placeholder="请输入" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="接口代码">
                    <a-input allowClear v-model="searchParameters.searchCode" placeholder="请输入" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="接口地址">
                    <a-input allowClear v-model="searchParameters.searchUrl" placeholder="请输入" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="创建时间">
                    <a-range-picker @change="onChangeData" allowClear v-model="searchParameters.interfaceCreatetime" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </div>
        </div>
        <div class="interfaceSearchButton">
          <a-button style="margin-right:20px" type="primary" @click="() => this.searchInterfaceTableData()">
            查询
          </a-button>
          <a-button @click="handleReset">重置</a-button>
        </div>
      </div>
      <div class="interfaceTable">
        <div class="interfaceTableAdd">
          <div class="interfaceTableAddTitle">接口列表</div>
          <div class="interfaceTableAddButton">
            <a-button type="primary" @click="() => ((this.modleVisible = true))">
              新增接口
            </a-button>
          </div>
        </div>
        <div class="interfaceTableContent">
          <a-table
            :columns="columns"
            :data-source="interfaceTableData"
            :pagination="false"
            size="middle"
            :rowKey="
              (record, index) => {
                return index;
              }
            "
            bordered
          >
            <template slot="action" slot-scope="text, record">
              <!-- <a slot="action" href="javascript:;">{{ record.isEnable == 1 ? '停用' : '启用' }}</a> -->
              <a slot="action" href="javascript:;" style="margin-left:5px" @click="handleEdit(record)">编辑</a>
              <a-popconfirm
                slot="action"
                title="此操作将删除该条数据，是否继续?"
                ok-text="是"
                cancel-text="否"
                @confirm="handleDelete(record)"
              >
                <a href="javascript:;" style="margin-left:5px">删除</a>
              </a-popconfirm>
            </template>
          </a-table>
        </div>
      </div>
      <div class="interfacePagination">
        <a-pagination
          v-model="currentPage"
          show-quick-jumper
          :page-size-options="pageSizeOptions"
          :total="interfaceTableTotal"
          :show-total="total => `共 ${interfaceTableTotal} 条`"
          show-size-changer
          :page-size="pageObject.pageSize"
          @change="handlePageNumberChange"
          @showSizeChange="onPageSizeChange"
        >
        </a-pagination>
      </div>
      <a-modal
        id="modalContent"
        v-model="modleVisible"
        :title="form.id ? '编辑接口' : '新增接口'"
        @cancel="() => (this.clearFormData(), (this.modleVisible = false))"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <a-form-model
          ref="interfaceRuleForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item ref="name" label="接口名称" prop="name">
            <a-input v-model="form.name" placeholder="请输入接口名称" />
          </a-form-model-item>
          <a-form-model-item ref="code" label="接口代码" prop="code">
            <a-input v-model="form.code" placeholder="请输入接口代码" />
          </a-form-model-item>
          <a-form-model-item ref="url" label="接口地址" prop="url">
            <a-input v-model="form.url" placeholder="请输入接口地址" />
          </a-form-model-item>
          <a-form-model-item label="所属资源" prop="resourceId" ref="resourceId">
            <a-select v-model="form.resourceId" placeholder="请选择" allowClear>
              <a-select-option v-for="item in listAllResources" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item ref="method" label="请求方式" prop="method">
            <a-input v-model="form.method" placeholder="请输入请求方式" />
          </a-form-model-item>
          <a-form-model-item label="上级权限" prop="parents">
            <a-tree-select
              :replaceFields="{
                title: 'name',
                value: 'id'
              }"
              v-model="form.parents"
              :dropdown-style="{ width: '275px', maxHeight: '400px', overflow: 'auto' }"
              :tree-data="interfaceTreeData"
              placeholder="请选择上级权限"
              tree-default-expand-all
            >
            </a-tree-select>
          </a-form-model-item>
        </a-form-model>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>
<script>
import { listPermissionsTree, listApis, createApi, updateApi, deleteApiById, listAllResources } from '@/api/api';
import moment from 'moment';
const columns = [
  {
    title: '接口名称',
    dataIndex: 'name',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '接口代码',
    dataIndex: 'code',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '接口地址',
    dataIndex: 'url',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '请求方式',
    dataIndex: 'method',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
    width: '16.6%',
    ellipsis: true
  }
];
export default {
  name: 'Role',
  data() {
    return {
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      interfaceLoading: false, // 加载表格的loading
      searchParameters: {}, // 表格搜索条件值
      modleVisible: false, // 控制弹框
      columns, // 表格头部
      interfaceTableData: [], // 表格数据
      pageSizeOptions: this.$store.state.user.defaultPaginationOptions, // 分页下拉
      currentPage: 1, // 默认分页当前页
      pageObject: {
        pageNumber: 0,
        pageSize: this.$store.state.user.defaultPaginationPagesize // 一页展示多少条数据
      },
      interfaceTableTotal: 0, // 表格数据总数
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        name: undefined,
        code: undefined,
        url: undefined,
        method: undefined,
        parents: undefined,
        parent: undefined,
        resourceId: undefined
      },
      rules: {
        // 规则验证
        name: [{ required: true, message: '请输入接口名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入接口代码', trigger: 'blur' }],
        url: [{ required: true, message: '请输入接口地址', trigger: 'blur' }],
        resourceId: [{ required: true, message: '请选择所属资源', trigger: 'change' }]
      },
      interfaceTreeData: [], // 表单上级接口数组数据
      listAllResources: [] // 表单资源数组
    };
  },
  watch: {
    /**
     * @description: 解决删除分页最后一条没数据的BUG
     * 思路：先获取当前的表格数据总数this.interfaceTableTotal
     * 在获取除了当前页数据外的表格总数this.getExceptCurrentPageTableTotalData
     * 如果这两个数相等 说明删除的是当前页最后一条数据 然后使当前页-1 请求数据就可以了
     */

    interfaceTableTotal() {
      if (this.interfaceTableTotal === this.getExceptCurrentPageTableTotalData && this.interfaceTableTotal !== 0) {
        this.currentPage -= 1;
         this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.getInterfaceTableData(this.pageObject, this.searchParameters);
      }
    }
  },
  computed: {
    /**
     * @description: 获取去掉当前页的表格总数
     */
    getExceptCurrentPageTableTotalData: function() {
      return (this.currentPage - 1) * this.pageObject.pageSize;
    }
  },
  created() {
    this.interfaceLoading = true;
    this.getInterfaceTableData(this.pageObject, this.searchParameters); // 获取表格数据
    this.interfaceTree(); // 表单的接口树
    this.getListAllResources(); // 获取资源数组
  },
  methods: {

    getListAllResources() {
      listAllResources().then(res => {
        this.listAllResources = res.data;
      });
    },
    /**
     * @description: 重置搜索条件
     */
    handleReset() {
      this.searchParameters = {};
      this.searchInterfaceTableData();
    },

    /**
     * @description:表单的接口树
     */
    interfaceTree() {
      listPermissionsTree().then(res => {
        if (res.code === 200) {
          this.interfaceTreeData = res.data;
        }
      });
    },

    /**
     * @description: 获取接口表格数据
     */
    getInterfaceTableData(page, params) {
        this.interfaceLoading = true;
      listApis(Object.assign({}, page, params)).then(res => {
        if (res.code === 200 && res.data.content) {
          this.interfaceTableData = res.data.content;
          this.interfaceTableData.forEach(res => {
            res.createTime = moment(res.createTime).format('YYYY-MM-DD HH:mm');
          });
          this.interfaceTableTotal = res.data.totalElements;
        } else {
          this.interfaceTableTotal = res.data.totalElements;
          this.interfaceTableData = [];
        }
      }).finally(() => {
          this.interfaceLoading = false;
        });
    },

    /**
     * @description: 点击表格搜索条件的查询
     */
    searchInterfaceTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
      this.getInterfaceTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 表单提交
     */
    onSubmit() {
      this.$refs.interfaceRuleForm.validate(valid => {
        if (valid) {
            this.formButtonDisableFlag = true;
            this.form.parent = { id: this.form.parents };
            this.form.resource = { id: this.form.resourceId };
            if (this.form.id) {
                this.editInterface(this.form);
            } else {
                this.interfaceAdd(this.form);
            }
        } else {
          return false;
        }
      });
    },

    /**
     * @description: 新增接口
     * @param {object} addPermission 表单参数
     */
    interfaceAdd(addPermission) {
      createApi({ body: addPermission })
        .then(res => {
          if (res.code === 201) {
            this.formSuccessOperation(res);
          }
        })
        .finally(() => {
          this.formButtonDisableFlag = false;
        });
    },

    /**
     * @description: 编辑接口
     * @param {object} addOrEditParam 表单参数
     */
    editInterface(editPermission) {
      updateApi({ body: editPermission, id: editPermission.id })
        .then(res => {
          if (res.code === 200) {
            this.formSuccessOperation(res);
          }
        })
        .finally(() => {
          this.formButtonDisableFlag = false;
        });
    },

    /**
     * @description: 表单新增编辑成功后的公共的代码 （消息提示 搜索框重置 请求表格数据）
     * @param {object} successFormData 表单请求成功后返回的对象
     */
    formSuccessOperation(successFormData) {
      this.$message.success(successFormData.message);
      this.modleVisible = false;
      this.clearFormData();
      this.getInterfaceTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 重置表单
     */
    clearFormData() {
      this.$refs.interfaceRuleForm.resetFields();
      this.form = this.$options.data.call(this).form;
    },

    /**
     * @description: 编辑角色
     * @param {object} interfaceTableRowData 表格某一行的数据对象
     */
    handleEdit(interfaceTableRowData) {
      this.modleVisible = true;
    },

    /**
     * @description: 点击删除
     * @param {object} roleTableRowData 格某一行的数据对象
     */
    handleDelete(interfaceTableRowData) {
      deleteApiById({ id: interfaceTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.getInterfaceTableData(this.pageObject, this.searchParameters);
        }
      });
    },

    /**
     * @description:  获取分页下拉第几页展示几个
     * @param {string} current 当前页
     * @param {string} pageSize 当前页展示几条
     */
    onPageSizeChange(current, pageSize) {
      this.currentPage = current;
      this.pageObject.pageSize = pageSize;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getInterfaceTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getInterfaceTableData(this.pageObject, this.searchParameters);
    },

       /**
     * @description: 日期选择器改变
     * @param {array} date UI框架自带
     * @param {array} dateString UI框架自带 时间区间
     */
    onChangeData(date, dateString) {
      this.searchParameters.searchCreateDateBegin = dateString[0];
      this.searchParameters.searchCreateDateEnd = dateString[1];
    }
  }
};
</script>

<style lang="less" scoped>
  #modalContent /deep/.table-page-search-wrapper .ant-form-inline .ant-form-item .ant-form-item-control-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}
.table-page-search-wrapper /deep/ .ant-form-inline .ant-form-item > .ant-form-item-label {
  line-height: 32px;
  padding-right: 8px;
  width: 77px;
}
.interface {
  width: 100%;
  height: calc(100vh - 150px);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  .position {
    width: 100%;
    height: 100%;
    background: white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .interfaceSearch {
    width: 100%;
    height: 64px;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    padding: 15px 20px;
    .interfaceSearchInput {
      width: 85%;
      height: 100%;
    }
    .interfaceSearchButton {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .interfaceTable {
    flex: 1;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .interfaceTableAdd {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ececec;
      padding: 0 20px;
      .interfaceTableAddTitle {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 550;
      }
      .interfaceTableAddButton {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .interfaceTableContent {
      max-height: calc(100vh - 380px);
      padding: 10px;
      overflow: scroll;
      .position {
        width: 100%;
        height: calc(100vh - 380px);
        background: white;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
      }
    }
    .interfaceTableContent /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
      background: #fafafa;
    }
    .interfaceTableContent::-webkit-scrollbar {
      display: none;
    }
  }
  .interfacePagination {
    width: 100%;
    height: 47px;
    border-radius: 5px;
    background: white;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px 0 0;
  }
}
</style>
