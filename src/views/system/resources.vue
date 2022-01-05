<template>
  <page-header-wrapper :title="false">
    <div class="resources">
      <a-spin tip="加载中..." class="position" v-if="resourcesLoading"> </a-spin>
      <div class="resourcesSearch">
        <div class="resourcesSearchInput">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="64">
                <a-col :md="6" :sm="32">
                  <a-form-item label="资源名称">
                    <a-input allowClear v-model="searchParameters.searchName" placeholder="请输入" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="资源代码">
                    <a-input allowClear v-model="searchParameters.searchCode" placeholder="请输入" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="资源类型">
                    <a-select allowClear v-model="searchParameters.searchType" placeholder="请选择">
                      <a-select-option v-for="item in resourcesTypeArray" :key="item.id">
                        {{ item.name }}
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </div>
        </div>
        <div class="resourcesSearchButton">
          <a-button style="margin-right:20px" type="primary" @click="() => this.searchResourcesTableData()">
            查询
          </a-button>
          <a-button @click="handleReset">重置</a-button>
        </div>
      </div>
      <div class="resourcesTable">
        <div class="resourcesTableAdd">
          <div class="resourcesTableAddTitle">资源列表</div>
          <div class="resourcesTableAddButton">
            <a-button type="primary" @click="() => (this.modleVisible = true)">
              新增资源
            </a-button>
          </div>
        </div>
        <div class="resourcesTableContent">
          <a-table
            :columns="columns"
            :data-source="resourcesTableData"
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
      <div class="resourcesPagination">
        <a-pagination
          v-model="currentPage"
          show-quick-jumper
          :page-size-options="pageSizeOptions"
          :total="resourcesTableTotal"
          :show-total="total => `共 ${resourcesTableTotal} 条`"
          show-size-changer
          :page-size="pageObject.pageSize"
          @change="handlePageNumberChange"
          @showSizeChange="onPageSizeChange"
        >
        </a-pagination>
      </div>
      <a-modal
        width="50%"
        v-model="modleVisible"
        :title="form.id ? '编辑资源' : '新增资源'"
        @cancel="() => (this.clearFormData(), (this.modleVisible = false))"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <div id="modalContent">
          <div class="formAspin" v-if="editWaitFormLoading">
            <a-spin />
          </div>
          <div class="modalContentForm">
            <div class="modalContentFormTitle">基础信息</div>
            <div class="modalContentFormContent">
              <a-form-model
                ref="resourcesRuleForm"
                :model="form"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-form-model-item ref="type" label="资源类型" prop="type">
                  <a-select v-model="form.type" placeholder="请选择资源类型">
                    <a-select-option v-for="item in resourcesTypeArray" :key="item.id">
                      {{ item.name }}
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item ref="name" label="资源名称" prop="name">
                  <a-input v-model="form.name" placeholder="请输入资源名称" />
                </a-form-model-item>
                <a-form-model-item ref="code" label="资源代码" prop="code">
                  <a-input v-model="form.code" placeholder="请输入资源代码" />
                </a-form-model-item>
                <a-form-model-item ref="url" label="服务地址" prop="url">
                  <a-input v-model="form.url" placeholder="请输入服务地址" />
                </a-form-model-item>
              </a-form-model>
            </div>
          </div>
          <div class="modalContentTree">
            <div class="modalContentTreeTitle">
              <div class="title">接口分配</div>
              <div class="icon">
                <span>
                  <a-popover placement="bottomRight">
                    <template slot="content">
                      <p style="cursor: pointer;" @click="() => (this.checkedKeys = this.interfacesAllids)">
                        选择全部
                      </p>
                      <p style="cursor: pointer;" @click="() => (this.checkedKeys = [])">取消选择</p>
                      <p style="cursor: pointer;" @click="() => (this.expandedKeys = this.interfacesAllids)">
                        展开全部
                      </p>
                      <span style="cursor: pointer;" @click="() => (this.expandedKeys = [])">折叠全部</span>
                    </template>
                    <a-icon type="menu-unfold" /> </a-popover
                  ></span>
              </div>
            </div>
            <div class="modalContentTreeContent">
              <a-tree
                :replaceFields="{
                  title: 'name',
                  key: 'id'
                }"
                v-model="checkedKeys"
                checkable
                :expanded-keys.sync="expandedKeys"
                :tree-data="interfacesTreeArray"
              />
            </div>
          </div>
        </div>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>
<script>
import {
  listResources,
  createResource,
  updateResource,
  deleteResourceById,
  apiTree,
  loadResourceById
} from '@/api/api';
import moment from 'moment';
const columns = [
  {
    title: '权限名称',
    dataIndex: 'name',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '权限代码',
    dataIndex: 'code',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '权限类型',
    dataIndex: 'typeName',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '服务地址',
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
    title: '操作',
    scopedSlots: { customRender: 'action' },
    width: '16.6%',
    ellipsis: true
  }
];
export default {
  name: 'Resources',
  data() {
    return {
      editWaitFormLoading: false, // 加载编辑回显数据等待Loading
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      resourcesLoading: false, // 加载表格的loading
      searchParameters: {}, // 表格搜索条件值
      modleVisible: false, // 控制弹框
      columns, // 表格头部
      resourcesTableData: [], // 表格数据
      pageSizeOptions: this.$store.state.user.defaultPaginationOptions, // 分页下拉
      currentPage: 1, // 默认分页当前页
      pageObject: {
        pageNumber: 0,
        pageSize: this.$store.state.user.defaultPaginationPagesize // 一页展示多少条数据
      },
      resourcesTableTotal: 0, // 表格数据总数
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        type: undefined,
        code: undefined,
        name: undefined,
        url: undefined,
        apis: [],
        isSystem: '1',
        sortIndex: 9010,
        isEnable: '1'
      },
      rules: {
        // 规则验证
        type: [{ required: true, message: '请输入资源类型', trigger: 'change' }],
        code: [{ required: true, message: '请输入资源代码', trigger: 'blur' }],
        name: [{ required: true, message: '请输入资源名称', trigger: 'blur' }],
        url: [{ required: true, message: '请输入服务地址', trigger: 'blur' }]
      },
      resourcesTypeArray: [], // 资源类型数组数据
      interfacesTreeArray: [], // 表单接口的树形下拉数据
      expandedKeys: [], // 控制树形下拉 展开收起全选取消全选 功能
      checkedKeys: [], // 树形下拉选中的数据
      interfacesAllids: [] // 获取所有的接口ID
    };
  },
  watch: {
    /**
     * @description: 解决删除分页最后一条没数据的BUG
     * 思路：先获取当前的表格数据总数this.resourcesTableTotal
     * 在获取除了当前页数据外的表格总数this.getExceptCurrentPageTableTotalData
     * 如果这两个数相等 说明删除的是当前页最后一条数据 然后使当前页-1 请求数据就可以了
     */

    resourcesTableTotal() {
      if (this.resourcesTableTotal === this.getExceptCurrentPageTableTotalData && this.resourcesTableTotal !== 0) {
        this.currentPage -= 1;
         this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.getResourcesTableData(this.pageObject, this.searchParameters);
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
    this.resourcesTypeArray = [{ name: 'Spring Cloud资源', id: 1 }, { name: 'HTTP资源', id: 0 }]; // 获取权限类型
    this.getResourcesTableData(this.pageObject, this.searchParameters); // 获取表格数据
    this.getInterfacesTree(); // 表单的接口权限树
  },
  methods: {
    /**
     * @description: 获取接口树
     */
    getInterfacesTree() {
      apiTree().then(res => {
        if (res.code === 200) {
          this.interfacesTreeArray = res.data;
          this.getTreeData(this.interfacesTreeArray);
        }
      });
    },
    /**
     * @description: 利用递归获取到所有的节点id
     * @param {array} interfacesTreeArray 树形下拉的数据
     */
    getTreeData(interfacesTreeArray) {
      interfacesTreeArray.forEach(item => {
        this.interfacesAllids.push(item.id);
        if (item.children) {
          this.getTreeData(item.children);
        }
      });
    },
    /**
     * @description: 获取表格数据
     * @param {object} page 分页参数
     * @param {object} params 搜索参数
     */
    getResourcesTableData(page, params) {
      this.resourcesLoading = true;
      listResources(Object.assign({}, page, params))
        .then(res => {
          if (res.code === 200 && res.data.content) {
            this.resourcesTableData = res.data.content;
            this.resourcesTableData.forEach(res => {
              res.createTime = moment(res.createTime).format('YYYY-MM-DD HH:mm');
                this.resourcesTypeArray.forEach(item => {
                    if (item.id === res.type) {
                    res.typeName = item.name;
                    }
                });
            });

            this.resourcesTableTotal = res.data.totalElements;
          } else {
            this.resourcesTableTotal = res.data.totalElements;
            this.resourcesTableData = [];
          }
        })
        .finally(() => {
          this.resourcesLoading = false;
        });
    },

    /**
     * @description: 点击表格搜索条件的查询
     */
    searchResourcesTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
      this.getResourcesTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 新增编辑权限表单提交
     */
    onSubmit() {
      this.$refs.resourcesRuleForm.validate(valid => {
        if (valid) {
          this.form.apis = this.checkedKeys.map(item => {
            return {
              id: item
            };
          });
          // 判断是否至少选择了一个接口
          if (this.form.apis.length === 0) {
            this.$message.error('请选择接口列表');
            return false;
          }
          this.formButtonDisableFlag = true;
          if (this.form.id) {
            this.editResources(this.form);
          } else {
            this.addResources(this.form);
          }
        } else {
          return false;
        }
      });
    },

    /**
     * @description: 新增权限
     * @param {object} addPermission 表单参数
     */
    addResources(addPermission) {
      createResource({ body: addPermission })
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
     * @description: 编辑权限
     * @param {object} editPermission 表单参数
     */
    editResources(editPermission) {
      updateResource({ body: editPermission, id: editPermission.id })
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
      this.getResourcesTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 重置表单
     */
    clearFormData() {
      this.$refs.resourcesRuleForm.resetFields();
      this.form = this.$options.data.call(this).form;
      this.checkedKeys = [];
    },

    /**
     * @description: 编辑权限
     * @param {object} permissionTableRowData 表格某一行的数据对象
     */
    handleEdit(permissionTableRowData) {
      this.editWaitFormLoading = true;
      this.modleVisible = true;

      loadResourceById({ id: permissionTableRowData.id })
        .then(res => {
          if (res.code === 200) {
            this.form = Object.assign({}, this.form, res.data);
            this.form.isEnable = String(this.form.isEnable);
            // this.checkedKeys = res.data.apis.map(item => {
            //   return item.id;
            // });
          }
        })
        .finally(() => {
          this.editWaitFormLoading = false;
        });
    },

    /**
     * @description: 点击删除
     * @param {object} roleTableRowData 格某一行的数据对象
     */
    handleDelete(roleTableRowData) {
      deleteResourceById({ id: roleTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.getResourcesTableData(this.pageObject, this.searchParameters);
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
      this.getResourcesTableData(this.pageObject, this.searchParameters);
    },
        /**
     * @description: 日期选择器改变
     * @param {array} date UI框架自带
     * @param {array} dateString UI框架自带 时间区间
     */
    onChangeData(date, dateString) {
      this.searchParameters.searchCreateDateBegin = dateString[0];
      this.searchParameters.searchCreateDateEnd = dateString[1];
    },

    /**
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getResourcesTableData(this.pageObject, this.searchParameters);
    },
        /**
     * @description: 重置搜索条件
     */
    handleReset() {
      this.searchParameters = {};
      this.searchResourcesTableData();
    }
  }
};
</script>

<style lang="less" scoped>
.table-page-search-wrapper /deep/ .ant-form-inline .ant-form-item > .ant-form-item-label {
  line-height: 32px;
  padding-right: 8px;
  width: 77px;
}
.resources {
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
  .resourcesSearch {
    width: 100%;
    height: 64px;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px 20px;
    display: flex;
    .resourcesSearchInput {
      width: 85%;
      height: 100%;
    }
    .resourcesSearchButton {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .resourcesTable {
    flex: 1;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .resourcesTableAdd {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ececec;
      padding: 0 20px;
      .resourcesTableAddTitle {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 550;
      }
      .resourcesTableAddButton {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .resourcesTableContent {
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
    .resourcesTableContent /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
      background: #fafafa;
    }
    .resourcesTableContent::-webkit-scrollbar {
      display: none;
    }
  }
  .resourcesPagination {
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
#modalContent {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  .formAspin {
    position: absolute;
    width: 100%;
    height: 400px;
    background: #ececec;
    border-radius: 4px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modalContentForm {
    width: 50%;
    height: 100%;
    border-right: 1px solid #ececec;
    display: flex;
    flex-direction: column;
    .modalContentFormTitle {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    .modalContentFormContent {
      padding: 0 0 0 20px;
      flex: 1;
    }
    .modalContentFormContent /deep/ .ant-form-item-label {
      display: inline-block;
      overflow: hidden;
      line-height: 39.9999px;
      white-space: nowrap;
      text-align: right;
      vertical-align: middle;
      width: 100px;
      overflow:hidden;
    }
  }
  .modalContentTree {
    width: 50%;
    height: 100%;
    max-height: 500px;
    .modalContentTreeTitle {
      width: 100%;
      height: 64px;
      display: flex;
      font-size: 16px;
      .title {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
    .modalContentTreeContent {
      width: 100%;
      height: 334px;
      overflow: scroll;
      display: flex;
      margin-left: 30%;
    }
    .modalContentTreeContent /deep/ .ant-tree li .ant-tree-node-content-wrapper {
    display: inline-block;
    height: 24px;
    margin: 0;
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 24px;
    text-decoration: none;
    vertical-align: top;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 140px;
  }
    .modalContentTreeContent::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
