<template>
  <page-header-wrapper :title="false">
    <div class="registeredClients">
      <a-spin tip="加载中..." class="position" v-if="registeredClientsLoading"> </a-spin>
      <div class="registeredClientsSearch">
        <div class="registeredClientsSearchInput">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="64">
                <a-col :md="6" :sm="32">
                  <a-form-item label="客户端名称">
                    <a-input allowClear v-model="searchParameters.searchClientName" placeholder="请输入客户端名称" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="客户端ID">
                    <a-input allowClear v-model="searchParameters.searchClientId" placeholder="客户端ID" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </div>
        </div>
        <div class="registeredClientsSearchButton">
          <a-button style="margin-right:20px" @click="() => (this.searchParameters = {})">重置</a-button>
          <a-button type="primary" @click="() => this.searchRegisteredClientsTableData()">
            查询
          </a-button>
        </div>
      </div>
      <div class="registeredClientsTable">
        <div class="registeredClientsTableAdd">
          <div class="registeredClientsTableAddTitle">客户端列表</div>
          <div class="registeredClientsTableAddButton">
            <a-button type="primary" @click="() => (this.modleVisible = true)">
              新增客户端
            </a-button>
          </div>
        </div>
        <div class="registeredClientsTableContent">
          <a-table
            :columns="columns"
            :data-source="registeredClientsTableData"
            :pagination="false"
            size="middle"
            :rowKey="
              (record, index) => {
                return index;
              }
            "
            bordered
          >
            <template slot="authorizationGrantTypes" slot-scope="authorizationGrantTypes">
              <span v-for="(item, index) in authorizationGrantTypes" :key="index">
                {{ item.value }} <span v-if="index != authorizationGrantTypes.length - 1">/</span></span
              >
            </template>
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
      <div class="registeredClientsPagination">
        <a-pagination
          v-model="currentPage"
          show-quick-jumper
          :page-size-options="pageSizeOptions"
          :total="registeredClientsTableTotal"
          show-size-changer
          :page-size="pageObject.pageSize"
          @change="handlePageNumberChange"
          @showSizeChange="onPageSizeChange"
        >
        </a-pagination>
      </div>
      <a-modal
        v-model="modleVisible"
        :title="form.id ? '编辑客户端' : '新增客户端'"
        @cancel="() => (this.clearFormData(), (this.modleVisible = false))"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <div id="modalContent">
          <div class="modalContentForm">
            <div class="modalContentFormContent">
              <a-form-model
                ref="registeredClientsRuleForm"
                :model="form"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-form-model-item ref="clientName" label="客户端名称" prop="clientName">
                  <a-input v-model="form.clientName" placeholder="请输入客户端名称" />
                </a-form-model-item>
                <a-form-model-item ref="clientSecret" label="客户端密钥" prop="clientSecret">
                  <a-input v-model="form.clientSecret" placeholder="请输入客户端密钥" />
                </a-form-model-item>
                <a-form-model-item ref="authorizationGrantType" label="授权类型" prop="authorizationGrantType">
                  <a-select @change="changeAuthorizationGrantType" v-model="form.authorizationGrantType" mode="multiple" size="default" placeholder="请选择授权类型">
                    <a-select-option key="authorization_code">
                      测试1
                    </a-select-option>
                    <a-select-option key="password">
                      测试2
                    </a-select-option>
                    <a-select-option key="ceshi">
                      测试3
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item ref="applicationId" label="应用名称" prop="applicationId" >
                  <a-select allowClear v-model="form.applicationId" size="default" placeholder="请选择应用名称">
                    <a-select-option v-for="item in applicationArray" :key="item.id">
                      {{ item.name }}
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item ref="redirectUris" label="回调地址" prop="redirectUris">
                  <a-select v-model="form.redirectUris" mode="multiple" size="default" placeholder="请选择回调地址">
                    <a-select-option key="11-1">
                      回调地址1
                    </a-select-option>
                    <a-select-option key="11-2">
                      回调地址2
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
              </a-form-model>
            </div>
          </div>
        </div>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>
<script>
import {
  listApplications,
  createApplication,
  updateApplication,
  loadApplicationById,
  deleteApplicationById,
  listAllApplications
} from '@/api/api';
// import moment from 'moment';
const columns = [
  {
    title: '客户端名称',
    dataIndex: 'clientName'
  },
  {
    title: '客户端ID',
    dataIndex: 'clientId'
  },
  {
    title: '客户端密钥',
    dataIndex: 'clientSecret'
  },
  {
    title: '客户端类型',
    dataIndex: 'authorizationGrantTypes',
    scopedSlots: { customRender: 'authorizationGrantTypes' }
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
    width: '200px'
  }
];
export default {
  name: 'RegisteredClients',
  data() {
    return {
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      registeredClientsLoading: false, // 加载表格的loading
      searchParameters: {}, // 表格搜索条件值
      modleVisible: false, // 控制弹框
      columns, // 表格头部
      registeredClientsTableData: [], // 表格数据
      pageSizeOptions: this.$store.state.user.defaultPaginationOptions, // 分页下拉
      currentPage: 1, // 默认分页当前页
      pageObject: {
        pageNumber: 0,
        pageSize: this.$store.state.user.defaultPaginationPagesize // 一页展示多少条数据
      },
      registeredClientsTableTotal: 0, // 表格数据总数
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
      applicationArray: [], // 应用下拉数组数据
      form: {
        // 表单数据
        clientName: undefined,
        clientSecret: undefined,
        authorizationGrantType: [],
        authorizationGrantTypes: [],
        applicationId: undefined,
        redirectUris: [],
        isEnable: '1',
        isSystem: '0',
        sortIndex: 10
      },
      rules: {
        // 规则验证
        clientName: [{ required: true, message: '请输入客户端名称', trigger: 'blur' }],
        clientSecret: [{ required: true, message: '请输入客户端密钥', trigger: 'blur' }],
        authorizationGrantType: [{ required: true, message: '请选择授权类型', trigger: 'change' }],
        applicationId: [{ required: false, message: '请选择应用名称', trigger: 'change' }],
        redirectUris: [{ required: false, message: '请选择回调地址', trigger: 'change' }]
      }
    };
  },
  watch: {
    /**
     * @description: 解决删除分页最后一条没数据的BUG
     * 思路：先获取当前的表格数据总数this.registeredClientsTableTotal
     * 在获取除了当前页数据外的表格总数this.getExceptCurrentPageTableTotalData
     * 如果这两个数相等 说明删除的是当前页最后一条数据 然后使当前页-1 请求数据就可以了
     */

    registeredClientsTableTotal() {
      if (this.registeredClientsTableTotal === this.getExceptCurrentPageTableTotalData && this.registeredClientsTableTotal !== 0) {
        this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.currentPage -= 1;
        this.getRegisteredClientsTableData(this.pageObject, this.searchParameters);
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
    this.getRegisteredClientsTableData(this.pageObject, this.searchParameters); // 获取表格数据
    this.getApplication(); // 获取应用数据
  },
  methods: {
      /**
       * @description: 根据授权类型判断应用 回调地址是否必填
       * @param {array} selectArray 选中的数组
       */
      changeAuthorizationGrantType(selectArray) {
        this.seteFromStatus(selectArray);
      },
    /**
     * @description: 获取应用数据
     */
    getApplication() {
      listAllApplications().then(res => {
        this.applicationArray = res.data;
      });
    },
    /**
     * @description: 获取表格数据
     * @param {object} page 分页参数
     * @param {object} params 搜索参数
     */
    getRegisteredClientsTableData(page, params) {
      this.registeredClientsLoading = true;
      listApplications(Object.assign({}, page, params)).then(res => {
        if (res.code === 200 && res.data.content) {
        //   this.registeredClientsTableData = res.data.content;
        //   this.registeredClientsTableTotal = res.data.totalElements;
            this.registeredClientsTableTotal = 2;
            this.registeredClientsTableData = [
                    {
                        'accessTokenTimeToLive': 0,
                        'applicationId': '1',
                        'authorizationGrantTypes': [
                            {
                                'value': '测试1',
                                id: 'authorization_code'
                            },
                            {
                                'value': '测试2',
                                id: 'password'
                            }
                        ],
                        'clientAuthenticationMethods': [
                        {
                            'value': 'string'
                        }
                        ],
                        'clientId': '1-1',
                        'clientName': '客户端名称1',
                        'clientSecret': '123456',
                        'id': '1156516651665156',
                        'redirectUris': [
                        'string'
                        ],
                        'scopes': [
                        'string'
                        ]
                    },
                    {
                        'accessTokenTimeToLive': 0,
                        'applicationId': '1',
                        'authorizationGrantTypes': [
                            {
                                'value': '测试1',
                                id: 'authorization_code'
                            }
                        ],
                        'clientAuthenticationMethods': [
                        {
                            'value': 'string'
                        }
                        ],
                        'clientId': '1-2',
                        'clientName': '客户端名称2',
                        'clientSecret': '123456',
                        'id': '11651616516516161656',
                        'redirectUris': [
                        'string'
                        ],
                        'scopes': [
                        'string'
                        ]
                    }
                    ];
        } else {
          this.registeredClientsTableTotal = 2;
          this.registeredClientsTableData = [];
        }
      }).finally(() => {
        this.registeredClientsLoading = false;
      });
    },

    /**
     * @description: 点击表格搜索条件的查询
     */
    searchRegisteredClientsTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
      this.getRegisteredClientsTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 新增编辑客户端表单提交
     */
    onSubmit() {
      this.$refs.registeredClientsRuleForm.validate(valid => {
        if (valid) {
            this.form.authorizationGrantTypes = this.form.authorizationGrantType.map(item => {
                return { value: item };
          });
        //   this.formButtonDisableFlag = true;
        //   if (this.form.id) {
        //     this.registeredClientsUpdate(this.form);
        //   } else {
        //     this.registeredClientsAdd(this.form);
        //   }
        } else {
          return false;
        }
      });
    },

    /**
     * @description: 新增客户端
     * @param {object} addApplicationParam 表单参数
     */
    registeredClientsAdd(addApplicationParam) {
      createApplication({ body: addApplicationParam })
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
     * @description: 编辑客户端
     * @param {object} editApplicationParam 表单参数
     */
    registeredClientsUpdate(editApplicationParam) {
      updateApplication({ body: editApplicationParam, id: editApplicationParam.id })
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
      this.getRegisteredClientsTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 编辑客户端
     * @param {object} applicationTableRowData 表格某一行的数据对象
     */
    handleEdit(registeredClientsTableRowData) {
      this.modleVisible = true;
      // 根据ID请求相应应用的权限 进行回显
      loadApplicationById({ id: registeredClientsTableRowData.id })
        .then(res => {
          if (res.code === 200) {
            // this.form = Object.assign({}, this.form, res.data);
            // this.form.isEnable = String(this.form.isEnable);
            this.form = registeredClientsTableRowData;
            this.form.authorizationGrantType = this.form.authorizationGrantTypes.map(item => {
              return item.id;
            });
            this.seteFromStatus(this.form.authorizationGrantType);
          }
        });
    },

    /**
     * @description: 设置表单的必填状态
     * @param {*} authorizationGrantTypeAyy 选中授权类型数组
     */
    seteFromStatus(authorizationGrantTypeAyy) {
        if (authorizationGrantTypeAyy.indexOf('authorization_code') !== -1) {
            this.rules.applicationId[0].required = true;
        } else {
            this.rules.applicationId[0].required = false;
        }
        if (authorizationGrantTypeAyy.indexOf('authorization_code') !== -1 && authorizationGrantTypeAyy.indexOf('password') !== -1) {
            this.rules.redirectUris[0].required = true;
        } else {
            this.rules.redirectUris[0].required = false;
        }
    },

    /**
     * @description: 重置表单
     */
    clearFormData() {
      this.$refs.registeredClientsRuleForm.resetFields();
      this.form = this.$options.data.call(this).form;
      this.rules.applicationId[0].required = false;
      this.rules.redirectUris[0].required = false;
    },

    /**
     * @description: 点击删除
     * @param {object} registeredClientsTableRowData 格某一行的数据对象
     */
    handleDelete(registeredClientsTableRowData) {
      deleteApplicationById({ id: registeredClientsTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.getRegisteredClientsTableData(this.pageObject, this.searchParameters);
        }
      });
    },
    /**
     * @description:  获取分页下拉第几页展示几个
     * @param {string} currentPage 当前页
     * @param {string} pageSize 当前页展示几条
     */
    onPageSizeChange(currentPage, pageSize) {
      this.currentPage = currentPage;
      this.pageObject.pageSize = pageSize;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getRegisteredClientsTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getRegisteredClientsTableData(this.pageObject, this.searchParameters);
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
.registeredClients {
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
  .registeredClientsSearch {
    width: 100%;
    height: 64px;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    padding: 15px 20px;
    .registeredClientsSearchInput {
      width: 85%;
      height: 100%;
    }
    .registeredClientsSearchButton {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .registeredClientsTable {
    flex: 1;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .registeredClientsTableAdd {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ececec;
      padding: 0 20px;
      .registeredClientsTableAddTitle {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 550;
      }
      .registeredClientsTableAddButton {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .registeredClientsTableContent {
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
    .registeredClientsTableContent /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
      background: #fafafa;
    }
    .registeredClientsTableContent::-webkit-scrollbar {
      display: none;
    }
  }
  .registeredClientsPagination {
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
    width: 100%;
    height: 100%;
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
    }
  }
}
</style>
