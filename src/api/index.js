/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    系统接口文档，如果需要，可以覆盖Swagger配置进行自定义配置
 ==========================================================*/
/**
 * 成功：code=201，失败：code!=201
 * request: createAttachment
 * url: createAttachmentURL
 * method: createAttachment_TYPE
 * raw_url: createAttachment_RAW_URL
 * @param attachment - attachment
 */
export const createAttachment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/attachments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['attachment'] !== undefined) {
    form['attachment'] = parameters['attachment']
  }
  if (parameters['attachment'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: attachment'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createAttachment_RAW_URL = function() {
  return '/api/attachments'
}
export const createAttachment_TYPE = function() {
  return 'post'
}
export const createAttachmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/attachments'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序字段：code,name,description,parent.id,parent.name,organization.id,
 organization.name,sortIndex,isEnable,createTime,
 成功：code=200，data对象为包含分页信息的部门列表，失败：code!=200
 * request: listDepartments
 * url: listDepartmentsURL
 * method: listDepartments_TYPE
 * raw_url: listDepartments_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCode - 查询条件:部门代码，模糊匹配
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDescription - 查询条件:部门描述，模糊匹配
 * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
 * @param searchName - 查询条件:部门名称，模糊匹配
 * @param searchOrganizationId - 查询条件:所属组织机构ID，精确匹配
 * @param searchOrganizationName - 查询条件:所属组织机构名称，模糊匹配
 * @param searchParentId - 查询条件:上级部门ID，精确匹配
 * @param searchParentName - 查询条件:上级部门名称，模糊匹配
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listDepartments = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDepartments_RAW_URL = function() {
  return '/api/departments'
}
export const listDepartments_TYPE = function() {
  return 'get'
}
export const listDepartmentsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createDepartment
 * url: createDepartmentURL
 * method: createDepartment_TYPE
 * raw_url: createDepartment_RAW_URL
 * @param body - 部门实体参数
 */
export const createDepartment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createDepartment_RAW_URL = function() {
  return '/api/departments'
}
export const createDepartment_TYPE = function() {
  return 'post'
}
export const createDepartmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为部门信息，失败：code!=200
 * request: loadDepartmentById
 * url: loadDepartmentByIdURL
 * method: loadDepartmentById_TYPE
 * raw_url: loadDepartmentById_RAW_URL
 * @param id - 部门ID
 */
export const loadDepartmentById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadDepartmentById_RAW_URL = function() {
  return '/api/departments/{id}'
}
export const loadDepartmentById_TYPE = function() {
  return 'get'
}
export const loadDepartmentByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDepartment
 * url: updateDepartmentURL
 * method: updateDepartment_TYPE
 * raw_url: updateDepartment_RAW_URL
 * @param body - 部门实体参数
 * @param id - 部门id
 */
export const updateDepartment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateDepartment_RAW_URL = function() {
  return '/api/departments/{id}'
}
export const updateDepartment_TYPE = function() {
  return 'put'
}
export const updateDepartmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteDepartmentById
 * url: deleteDepartmentByIdURL
 * method: deleteDepartmentById_TYPE
 * raw_url: deleteDepartmentById_RAW_URL
 * @param id - 部门ID
 */
export const deleteDepartmentById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDepartmentById_RAW_URL = function() {
  return '/api/departments/{id}'
}
export const deleteDepartmentById_TYPE = function() {
  return 'delete'
}
export const deleteDepartmentByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDepartmentPatch
 * url: updateDepartmentPatchURL
 * method: updateDepartmentPatch_TYPE
 * raw_url: updateDepartmentPatch_RAW_URL
 * @param body - 部门实体参数
 * @param id - 部门id
 */
export const updateDepartmentPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateDepartmentPatch_RAW_URL = function() {
  return '/api/departments/{id}'
}
export const updateDepartmentPatch_TYPE = function() {
  return 'patch'
}
export const updateDepartmentPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序字段：code,name,description,type,sortIndex,isSystem,isEnable,createTime
 成功：code=200，data对象为包含分页信息的字典列表，失败：code!=200
 * request: listDictionaries
 * url: listDictionariesURL
 * method: listDictionaries_TYPE
 * raw_url: listDictionaries_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCode - 查询条件:字典代码，模糊匹配
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDescription - 查询条件:字典描述，模糊匹配
 * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
 * @param searchIsSystem - 查询条件:是否是系统预置，，1：是，0：否，精确匹配
 * @param searchName - 查询条件:字典名称，模糊匹配
 * @param searchType - 查询条件:字典类型，精确匹配
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listDictionaries = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDictionaries_RAW_URL = function() {
  return '/api/dictionaries'
}
export const listDictionaries_TYPE = function() {
  return 'get'
}
export const listDictionariesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createDictionary
 * url: createDictionaryURL
 * method: createDictionary_TYPE
 * raw_url: createDictionary_RAW_URL
 * @param body - 字典实体参数
 */
export const createDictionary = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createDictionary_RAW_URL = function() {
  return '/api/dictionaries'
}
export const createDictionary_TYPE = function() {
  return 'post'
}
export const createDictionaryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadDictionaryById
 * url: loadDictionaryByIdURL
 * method: loadDictionaryById_TYPE
 * raw_url: loadDictionaryById_RAW_URL
 * @param id - 字典ID
 */
export const loadDictionaryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadDictionaryById_RAW_URL = function() {
  return '/api/dictionaries/{id}'
}
export const loadDictionaryById_TYPE = function() {
  return 'get'
}
export const loadDictionaryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDictionary
 * url: updateDictionaryURL
 * method: updateDictionary_TYPE
 * raw_url: updateDictionary_RAW_URL
 * @param body - 字典实体参数
 * @param id - 字典id
 */
export const updateDictionary = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateDictionary_RAW_URL = function() {
  return '/api/dictionaries/{id}'
}
export const updateDictionary_TYPE = function() {
  return 'put'
}
export const updateDictionaryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteDictionaryById
 * url: deleteDictionaryByIdURL
 * method: deleteDictionaryById_TYPE
 * raw_url: deleteDictionaryById_RAW_URL
 * @param id - 字典ID
 */
export const deleteDictionaryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDictionaryById_RAW_URL = function() {
  return '/api/dictionaries/{id}'
}
export const deleteDictionaryById_TYPE = function() {
  return 'delete'
}
export const deleteDictionaryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDictionaryPatch
 * url: updateDictionaryPatchURL
 * method: updateDictionaryPatch_TYPE
 * raw_url: updateDictionaryPatch_RAW_URL
 * @param body - 字典实体参数
 * @param id - 字典id
 */
export const updateDictionaryPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateDictionaryPatch_RAW_URL = function() {
  return '/api/dictionaries/{id}'
}
export const updateDictionaryPatch_TYPE = function() {
  return 'patch'
}
export const updateDictionaryPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序属性：code,name,description,isSystem,createTim
 成功：code=200，data对象为包含分页信息的字典类型列表，失败：code!=200
 * request: listDictionaryTypes
 * url: listDictionaryTypesURL
 * method: listDictionaryTypes_TYPE
 * raw_url: listDictionaryTypes_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCode - 查询条件:字典代码，模糊匹配
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDescription - 查询条件:字典描述，模糊匹配
 * @param searchIsSystem - 查询条件:是否是系统预置，，1：是，0：否，精确匹配
 * @param searchName - 查询条件:字典名称，模糊匹配
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listDictionaryTypes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDictionaryTypes_RAW_URL = function() {
  return '/api/dictionaryTypes'
}
export const listDictionaryTypes_TYPE = function() {
  return 'get'
}
export const listDictionaryTypesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createDictionaryType
 * url: createDictionaryTypeURL
 * method: createDictionaryType_TYPE
 * raw_url: createDictionaryType_RAW_URL
 * @param body - 字典分类实体参数
 */
export const createDictionaryType = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createDictionaryType_RAW_URL = function() {
  return '/api/dictionaryTypes'
}
export const createDictionaryType_TYPE = function() {
  return 'post'
}
export const createDictionaryTypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含字典类型信息的列表，失败：code!=200
 * request: listDictionaryTypesByCode
 * url: listDictionaryTypesByCodeURL
 * method: listDictionaryTypesByCode_TYPE
 * raw_url: listDictionaryTypesByCode_RAW_URL
 * @param codes - 字典类型代码，逗号分隔
 */
export const listDictionaryTypesByCode = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/codes/{codes}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{codes}', `${parameters['codes']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDictionaryTypesByCode_RAW_URL = function() {
  return '/api/dictionaryTypes/codes/{codes}'
}
export const listDictionaryTypesByCode_TYPE = function() {
  return 'get'
}
export const listDictionaryTypesByCodeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/codes/{codes}'
  path = path.replace('{codes}', `${parameters['codes']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadDictionaryTypeById
 * url: loadDictionaryTypeByIdURL
 * method: loadDictionaryTypeById_TYPE
 * raw_url: loadDictionaryTypeById_RAW_URL
 * @param id - 字典分类ID
 */
export const loadDictionaryTypeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadDictionaryTypeById_RAW_URL = function() {
  return '/api/dictionaryTypes/{id}'
}
export const loadDictionaryTypeById_TYPE = function() {
  return 'get'
}
export const loadDictionaryTypeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDictionaryType
 * url: updateDictionaryTypeURL
 * method: updateDictionaryType_TYPE
 * raw_url: updateDictionaryType_RAW_URL
 * @param body - 字典实体参数
 * @param id - 字典id
 */
export const updateDictionaryType = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateDictionaryType_RAW_URL = function() {
  return '/api/dictionaryTypes/{id}'
}
export const updateDictionaryType_TYPE = function() {
  return 'put'
}
export const updateDictionaryTypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteDictionaryTypeById
 * url: deleteDictionaryTypeByIdURL
 * method: deleteDictionaryTypeById_TYPE
 * raw_url: deleteDictionaryTypeById_RAW_URL
 * @param id - 字典ID
 */
export const deleteDictionaryTypeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDictionaryTypeById_RAW_URL = function() {
  return '/api/dictionaryTypes/{id}'
}
export const deleteDictionaryTypeById_TYPE = function() {
  return 'delete'
}
export const deleteDictionaryTypeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDictionaryTypePatch
 * url: updateDictionaryTypePatchURL
 * method: updateDictionaryTypePatch_TYPE
 * raw_url: updateDictionaryTypePatch_RAW_URL
 * @param body - 字典分类实体参数
 * @param id - 字典id
 */
export const updateDictionaryTypePatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateDictionaryTypePatch_RAW_URL = function() {
  return '/api/dictionaryTypes/{id}'
}
export const updateDictionaryTypePatch_TYPE = function() {
  return 'patch'
}
export const updateDictionaryTypePatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序属性：code,name,description,level,level.code,level.name,sortIndex,isEnable,createTime
 成功：code=200，data对象为包含分页信息的岗位列表，失败：code!=200
 * request: listDuties
 * url: listDutiesURL
 * method: listDuties_TYPE
 * raw_url: listDuties_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCode - 查询条件:岗位代码，模糊匹配
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDescription - 查询条件:岗位描述，模糊匹配
 * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
 * @param searchIsSystem - 查询条件:是否系统预置，，1：是，0：否，精确匹配
 * @param searchLevel - 查询条件:岗位级别，关联岗位级别字典，精确匹配
 * @param searchLevelName - 查询条件:岗位级别名称，模糊匹配
 * @param searchName - 查询条件:岗位名称，模糊匹配
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listDuties = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchLevel'] !== undefined) {
    queryParameters['search_level'] = parameters['searchLevel']
  }
  if (parameters['searchLevelName'] !== undefined) {
    queryParameters['search_levelName'] = parameters['searchLevelName']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDuties_RAW_URL = function() {
  return '/api/duties'
}
export const listDuties_TYPE = function() {
  return 'get'
}
export const listDutiesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchLevel'] !== undefined) {
    queryParameters['search_level'] = parameters['searchLevel']
  }
  if (parameters['searchLevelName'] !== undefined) {
    queryParameters['search_levelName'] = parameters['searchLevelName']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createDuty
 * url: createDutyURL
 * method: createDuty_TYPE
 * raw_url: createDuty_RAW_URL
 * @param body - 岗位实体参数
 */
export const createDuty = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createDuty_RAW_URL = function() {
  return '/api/duties'
}
export const createDuty_TYPE = function() {
  return 'post'
}
export const createDutyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadDutyById
 * url: loadDutyByIdURL
 * method: loadDutyById_TYPE
 * raw_url: loadDutyById_RAW_URL
 * @param id - 岗位ID
 */
export const loadDutyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadDutyById_RAW_URL = function() {
  return '/api/duties/{id}'
}
export const loadDutyById_TYPE = function() {
  return 'get'
}
export const loadDutyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDuty
 * url: updateDutyURL
 * method: updateDuty_TYPE
 * raw_url: updateDuty_RAW_URL
 * @param body - 岗位实体参数
 * @param id - 岗位id
 */
export const updateDuty = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateDuty_RAW_URL = function() {
  return '/api/duties/{id}'
}
export const updateDuty_TYPE = function() {
  return 'put'
}
export const updateDutyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteDutyById
 * url: deleteDutyByIdURL
 * method: deleteDutyById_TYPE
 * raw_url: deleteDutyById_RAW_URL
 * @param id - 岗位ID
 */
export const deleteDutyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDutyById_RAW_URL = function() {
  return '/api/duties/{id}'
}
export const deleteDutyById_TYPE = function() {
  return 'delete'
}
export const deleteDutyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDutyPatch
 * url: updateDutyPatchURL
 * method: updateDutyPatch_TYPE
 * raw_url: updateDutyPatch_RAW_URL
 * @param body - 岗位实体参数
 * @param id - 岗位id
 */
export const updateDutyPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateDutyPatch_RAW_URL = function() {
  return '/api/duties/{id}'
}
export const updateDutyPatch_TYPE = function() {
  return 'patch'
}
export const updateDutyPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含所有枚举类型信息的列表，失败：code!=200
 * request: listEnumTypes
 * url: listEnumTypesURL
 * method: listEnumTypes_TYPE
 * raw_url: listEnumTypes_RAW_URL
 */
export const listEnumTypes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/enums/types'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listEnumTypes_RAW_URL = function() {
  return '/api/enums/types'
}
export const listEnumTypes_TYPE = function() {
  return 'get'
}
export const listEnumTypesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/enums/types'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含枚举信息的列表，失败：code!=200
 * request: listEnumsByType
 * url: listEnumsByTypeURL
 * method: listEnumsByType_TYPE
 * raw_url: listEnumsByType_RAW_URL
 * @param types - 枚举类型代码，逗号分隔
 */
export const listEnumsByType = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/enums/types/{types}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{types}', `${parameters['types']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listEnumsByType_RAW_URL = function() {
  return '/api/enums/types/{types}'
}
export const listEnumsByType_TYPE = function() {
  return 'get'
}
export const listEnumsByTypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/enums/types/{types}'
  path = path.replace('{types}', `${parameters['types']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含枚举信息的列表，失败：code!=200
 * request: enumsAll
 * url: enumsAllURL
 * method: enumsAll_TYPE
 * raw_url: enumsAll_RAW_URL
 */
 export const enumsAll = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/enums/all'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const enumsAll_RAW_URL = function() {
  return '/api/enums/all'
}
export const enumsAll_TYPE = function() {
  return 'get'
}
export const enumsAllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/enums/all'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序属性：stringProperty,longProperty,enumProperty,isEnable,createTime
 成功：code=200，data对象为包含分页信息的示例列表，失败：code!=200
 * request: listExamples
 * url: listExamplesURL
 * method: listExamples_TYPE
 * raw_url: listExamples_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchEnumProperty - 查询条件:枚举属性，0：否，1：是，精确匹配
 * @param searchLongProperty - 查询条件:整形属性，匹配匹配
 * @param searchStringProperty - 查询条件:字符串属性，模糊查询
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listExamples = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchEnumProperty'] !== undefined) {
    queryParameters['search_enumProperty'] = parameters['searchEnumProperty']
  }
  if (parameters['searchLongProperty'] !== undefined) {
    queryParameters['search_longProperty'] = parameters['searchLongProperty']
  }
  if (parameters['searchStringProperty'] !== undefined) {
    queryParameters['search_stringProperty'] = parameters['searchStringProperty']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listExamples_RAW_URL = function() {
  return '/api/examples'
}
export const listExamples_TYPE = function() {
  return 'get'
}
export const listExamplesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchEnumProperty'] !== undefined) {
    queryParameters['search_enumProperty'] = parameters['searchEnumProperty']
  }
  if (parameters['searchLongProperty'] !== undefined) {
    queryParameters['search_longProperty'] = parameters['searchLongProperty']
  }
  if (parameters['searchStringProperty'] !== undefined) {
    queryParameters['search_stringProperty'] = parameters['searchStringProperty']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createExample
 * url: createExampleURL
 * method: createExample_TYPE
 * raw_url: createExample_RAW_URL
 * @param body - 示例实体参数
 */
export const createExample = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createExample_RAW_URL = function() {
  return '/api/examples'
}
export const createExample_TYPE = function() {
  return 'post'
}
export const createExampleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为示例信息，失败：code!=200
 * request: loadExampleById
 * url: loadExampleByIdURL
 * method: loadExampleById_TYPE
 * raw_url: loadExampleById_RAW_URL
 * @param id - 示例ID
 */
export const loadExampleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadExampleById_RAW_URL = function() {
  return '/api/examples/{id}'
}
export const loadExampleById_TYPE = function() {
  return 'get'
}
export const loadExampleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateExample
 * url: updateExampleURL
 * method: updateExample_TYPE
 * raw_url: updateExample_RAW_URL
 * @param body - 示例体参数
 * @param id - 示例id
 */
export const updateExample = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateExample_RAW_URL = function() {
  return '/api/examples/{id}'
}
export const updateExample_TYPE = function() {
  return 'put'
}
export const updateExampleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: deleteExampleById
 * url: deleteExampleByIdURL
 * method: deleteExampleById_TYPE
 * raw_url: deleteExampleById_RAW_URL
 * @param id - 示例ID
 */
export const deleteExampleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteExampleById_RAW_URL = function() {
  return '/api/examples/{id}'
}
export const deleteExampleById_TYPE = function() {
  return 'delete'
}
export const deleteExampleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序字段：code,name,url,method,description,parent.id,parent.code,
 parent.name,sortIndex,isEnable,createTime
 成功：code=200，data对象为包含分页信息的后台接口列表，失败：code!=200
 * request: listApis
 * url: listApisURL
 * method: listApis_TYPE
 * raw_url: listApis_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCode - 查询条件:后台接口代码，模糊匹配
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDescription - 查询条件:后台接口描述，模糊匹配
 * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
 * @param searchMethod - 查询条件:后台接口请求方式，模糊匹配
 * @param searchName - 查询条件:后台接口名称，模糊匹配
 * @param searchParentCode - 查询条件:上级后台接口代码，模糊匹配
 * @param searchParentId - 查询条件:上级后台接口ID，精确匹配
 * @param searchParentName - 查询条件:上级后台接口名称，模糊匹配
 * @param searchUrl - 查询条件:后台接口地址，模糊匹配
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listApis = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchMethod'] !== undefined) {
    queryParameters['search_method'] = parameters['searchMethod']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentCode'] !== undefined) {
    queryParameters['search_parentCode'] = parameters['searchParentCode']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchUrl'] !== undefined) {
    queryParameters['search_url'] = parameters['searchUrl']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listApis_RAW_URL = function() {
  return '/api/interfaces'
}
export const listApis_TYPE = function() {
  return 'get'
}
export const listApisURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchMethod'] !== undefined) {
    queryParameters['search_method'] = parameters['searchMethod']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentCode'] !== undefined) {
    queryParameters['search_parentCode'] = parameters['searchParentCode']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchUrl'] !== undefined) {
    queryParameters['search_url'] = parameters['searchUrl']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createApi
 * url: createApiURL
 * method: createApi_TYPE
 * raw_url: createApi_RAW_URL
 * @param body - 后台接口实体参数
 */
export const createApi = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createApi_RAW_URL = function() {
  return '/api/interfaces'
}
export const createApi_TYPE = function() {
  return 'post'
}
export const createApiURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadApiById
 * url: loadApiByIdURL
 * method: loadApiById_TYPE
 * raw_url: loadApiById_RAW_URL
 * @param id - 后台接口ID
 */
export const loadApiById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadApiById_RAW_URL = function() {
  return '/api/interfaces/{id}'
}
export const loadApiById_TYPE = function() {
  return 'get'
}
export const loadApiByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateApi
 * url: updateApiURL
 * method: updateApi_TYPE
 * raw_url: updateApi_RAW_URL
 * @param body - 后台接口实体参数
 * @param id - 后台接口id
 */
export const updateApi = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateApi_RAW_URL = function() {
  return '/api/interfaces/{id}'
}
export const updateApi_TYPE = function() {
  return 'put'
}
export const updateApiURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteApiById
 * url: deleteApiByIdURL
 * method: deleteApiById_TYPE
 * raw_url: deleteApiById_RAW_URL
 * @param id - 后台接口ID
 */
export const deleteApiById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiById_RAW_URL = function() {
  return '/api/interfaces/{id}'
}
export const deleteApiById_TYPE = function() {
  return 'delete'
}
export const deleteApiByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateApiPatch
 * url: updateApiPatchURL
 * method: updateApiPatch_TYPE
 * raw_url: updateApiPatch_RAW_URL
 * @param body - 后台接口实体参数
 * @param id - 后台接口id
 */
export const updateApiPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateApiPatch_RAW_URL = function() {
  return '/api/interfaces/{id}'
}
export const updateApiPatch_TYPE = function() {
  return 'patch'
}
export const updateApiPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序字段：code,name,description,parent.id,parent.name,sortIndex,isEnable,createTime
 成功：code=200，data对象为包含分页信息的组织机构列表，失败：code!=200
 * request: listOrganizations
 * url: listOrganizationsURL
 * method: listOrganizations_TYPE
 * raw_url: listOrganizations_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCode - 查询条件:组织机构代码，模糊匹配
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDescription - 查询条件:组织机构描述，模糊匹配
 * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
 * @param searchName - 查询条件:组织机构名称，模糊匹配
 * @param searchParentId - 查询条件:级组织机构ID，精确匹配
 * @param searchParentName - 查询条件:上级组织机构名称，模糊匹配
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listOrganizations = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listOrganizations_RAW_URL = function() {
  return '/api/organizations'
}
export const listOrganizations_TYPE = function() {
  return 'get'
}
export const listOrganizationsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createOrganization
 * url: createOrganizationURL
 * method: createOrganization_TYPE
 * raw_url: createOrganization_RAW_URL
 * @param body - 组织机构实体参数
 */
export const createOrganization = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createOrganization_RAW_URL = function() {
  return '/api/organizations'
}
export const createOrganization_TYPE = function() {
  return 'post'
}
export const createOrganizationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为组织机构信息，失败：code!=200
 * request: loadOrganizationById
 * url: loadOrganizationByIdURL
 * method: loadOrganizationById_TYPE
 * raw_url: loadOrganizationById_RAW_URL
 * @param id - 组织机构ID
 */
export const loadOrganizationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadOrganizationById_RAW_URL = function() {
  return '/api/organizations/{id}'
}
export const loadOrganizationById_TYPE = function() {
  return 'get'
}
export const loadOrganizationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateOrganization
 * url: updateOrganizationURL
 * method: updateOrganization_TYPE
 * raw_url: updateOrganization_RAW_URL
 * @param body - 组织机构实体参数
 * @param id - 组织机构id
 */
export const updateOrganization = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateOrganization_RAW_URL = function() {
  return '/api/organizations/{id}'
}
export const updateOrganization_TYPE = function() {
  return 'put'
}
export const updateOrganizationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: deleteOrganizationById
 * url: deleteOrganizationByIdURL
 * method: deleteOrganizationById_TYPE
 * raw_url: deleteOrganizationById_RAW_URL
 * @param id - 组织机构ID
 */
export const deleteOrganizationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteOrganizationById_RAW_URL = function() {
  return '/api/organizations/{id}'
}
export const deleteOrganizationById_TYPE = function() {
  return 'delete'
}
export const deleteOrganizationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateOrganizationPatch
 * url: updateOrganizationPatchURL
 * method: updateOrganizationPatch_TYPE
 * raw_url: updateOrganizationPatch_RAW_URL
 * @param body - 组织机构实体参数
 * @param id - 组织机构id
 */
export const updateOrganizationPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateOrganizationPatch_RAW_URL = function() {
  return '/api/organizations/{id}'
}
export const updateOrganizationPatch_TYPE = function() {
  return 'patch'
}
export const updateOrganizationPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序属性：type,code,name,url,icon,description,parent.id,parent.code,
 parent.name,sortIndex,isEnable,createTime
 成功：code=200，data对象为包含分页信息的权限列表，失败：code!=200
 * request: listPermissions
 * url: listPermissionsURL
 * method: listPermissions_TYPE
 * raw_url: listPermissions_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCode - 查询条件:权限代码，模糊匹配
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDescription - 查询条件:权限描述，模糊匹配
 * @param searchIcon - 查询条件:权限图标，模糊匹配
 * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
 * @param searchName - 查询条件:权限名称，模糊匹配
 * @param searchParentCode - 查询条件:上级权限代码，模糊匹配
 * @param searchParentId - 查询条件:上级权限ID，精确匹配
 * @param searchParentName - 查询条件:上级权限名称，模糊匹配
 * @param searchType - 查询条件:权限类型，精确匹配
 * @param searchUrl - 查询条件:权限地址，模糊匹配
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listPermissions = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIcon'] !== undefined) {
    queryParameters['search_icon'] = parameters['searchIcon']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentCode'] !== undefined) {
    queryParameters['search_parentCode'] = parameters['searchParentCode']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchUrl'] !== undefined) {
    queryParameters['search_url'] = parameters['searchUrl']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listPermissions_RAW_URL = function() {
  return '/api/permissions'
}
export const listPermissions_TYPE = function() {
  return 'get'
}
export const listPermissionsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIcon'] !== undefined) {
    queryParameters['search_icon'] = parameters['searchIcon']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentCode'] !== undefined) {
    queryParameters['search_parentCode'] = parameters['searchParentCode']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchUrl'] !== undefined) {
    queryParameters['search_url'] = parameters['searchUrl']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createPermission
 * url: createPermissionURL
 * method: createPermission_TYPE
 * raw_url: createPermission_RAW_URL
 * @param body - 权限实体参数
 */
export const createPermission = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createPermission_RAW_URL = function() {
  return '/api/permissions'
}
export const createPermission_TYPE = function() {
  return 'post'
}
export const createPermissionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含分页信息的权限列表，失败：code!=200
 * request: listPermissionsTree
 * url: listPermissionsTreeURL
 * method: listPermissionsTree_TYPE
 * raw_url: listPermissionsTree_RAW_URL
 * @param searchType - 查询条件:权限类型，精确匹配
 */
export const listPermissionsTree = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/tree'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listPermissionsTree_RAW_URL = function() {
  return '/api/permissions/tree'
}
export const listPermissionsTree_TYPE = function() {
  return 'get'
}
export const listPermissionsTreeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/tree'
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadPermissionById
 * url: loadPermissionByIdURL
 * method: loadPermissionById_TYPE
 * raw_url: loadPermissionById_RAW_URL
 * @param id - 权限ID
 */
export const loadPermissionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadPermissionById_RAW_URL = function() {
  return '/api/permissions/{id}'
}
export const loadPermissionById_TYPE = function() {
  return 'get'
}
export const loadPermissionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updatePermission
 * url: updatePermissionURL
 * method: updatePermission_TYPE
 * raw_url: updatePermission_RAW_URL
 * @param body - 权限实体参数
 * @param id - 权限id
 */
export const updatePermission = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updatePermission_RAW_URL = function() {
  return '/api/permissions/{id}'
}
export const updatePermission_TYPE = function() {
  return 'put'
}
export const updatePermissionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deletePermissionById
 * url: deletePermissionByIdURL
 * method: deletePermissionById_TYPE
 * raw_url: deletePermissionById_RAW_URL
 * @param id - 权限ID
 */
export const deletePermissionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePermissionById_RAW_URL = function() {
  return '/api/permissions/{id}'
}
export const deletePermissionById_TYPE = function() {
  return 'delete'
}
export const deletePermissionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updatePermissionPatch
 * url: updatePermissionPatchURL
 * method: updatePermissionPatch_TYPE
 * raw_url: updatePermissionPatch_RAW_URL
 * @param body - 权限实体参数
 * @param id - 权限id
 */
export const updatePermissionPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updatePermissionPatch_RAW_URL = function() {
  return '/api/permissions/{id}'
}
export const updatePermissionPatch_TYPE = function() {
  return 'patch'
}
export const updatePermissionPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为user信息，失败：code!=0
 * request: principal
 * url: principalURL
 * method: principal_TYPE
 * raw_url: principal_RAW_URL
 */
export const principal = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/principal'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const principal_RAW_URL = function() {
  return '/api/principal'
}
export const principal_TYPE = function() {
  return 'get'
}
export const principalURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/principal'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序属性：objectType,objectName,stringName1,stringName2,stringName3,longName1,longName2,longName3,doubleName1,doubleName2,doubleName3,dateName1,dateName2,dateName3,isEnable,createTime
 成功：code=200，data对象为包含分页信息的保留字段配置列表，失败：code!=200
 * request: listReservableConfigs
 * url: listReservableConfigsURL
 * method: listReservableConfigs_TYPE
 * raw_url: listReservableConfigs_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDateName1 - 查询条件:日期字段1名称，模糊匹配
 * @param searchDateName2 - 查询条件:日期字段2名称，模糊匹配
 * @param searchDateName3 - 查询条件:日期字段3名称，模糊匹配
 * @param searchDoubleName1 - 查询条件:小数字段1名称，模糊匹配
 * @param searchDoubleName2 - 查询条件:小数字段2名称，模糊匹配
 * @param searchDoubleName3 - 查询条件:小数字段3名称，模糊匹配
 * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
 * @param searchLongName1 - 查询条件:整型字段1名称，模糊匹配
 * @param searchLongName2 - 查询条件:整型字段2名称，模糊匹配
 * @param searchLongName3 - 查询条件:整型字段3名称，模糊匹配
 * @param searchObjectName - 查询条件:配置对象名称，模糊匹配
 * @param searchObjectType - 查询条件:配置对象类型，模糊匹配
 * @param searchStringName1 - 查询条件:字符字段1名称，模糊匹配
 * @param searchStringName2 - 查询条件:字符字段2名称，模糊匹配
 * @param searchStringName3 - 查询条件:字符字段3名称，模糊匹配
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listReservableConfigs = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDateName1'] !== undefined) {
    queryParameters['search_dateName1'] = parameters['searchDateName1']
  }
  if (parameters['searchDateName2'] !== undefined) {
    queryParameters['search_dateName2'] = parameters['searchDateName2']
  }
  if (parameters['searchDateName3'] !== undefined) {
    queryParameters['search_dateName3'] = parameters['searchDateName3']
  }
  if (parameters['searchDoubleName1'] !== undefined) {
    queryParameters['search_doubleName1'] = parameters['searchDoubleName1']
  }
  if (parameters['searchDoubleName2'] !== undefined) {
    queryParameters['search_doubleName2'] = parameters['searchDoubleName2']
  }
  if (parameters['searchDoubleName3'] !== undefined) {
    queryParameters['search_doubleName3'] = parameters['searchDoubleName3']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchLongName1'] !== undefined) {
    queryParameters['search_longName1'] = parameters['searchLongName1']
  }
  if (parameters['searchLongName2'] !== undefined) {
    queryParameters['search_longName2'] = parameters['searchLongName2']
  }
  if (parameters['searchLongName3'] !== undefined) {
    queryParameters['search_longName3'] = parameters['searchLongName3']
  }
  if (parameters['searchObjectName'] !== undefined) {
    queryParameters['search_objectName'] = parameters['searchObjectName']
  }
  if (parameters['searchObjectType'] !== undefined) {
    queryParameters['search_objectType'] = parameters['searchObjectType']
  }
  if (parameters['searchStringName1'] !== undefined) {
    queryParameters['search_stringName1'] = parameters['searchStringName1']
  }
  if (parameters['searchStringName2'] !== undefined) {
    queryParameters['search_stringName2'] = parameters['searchStringName2']
  }
  if (parameters['searchStringName3'] !== undefined) {
    queryParameters['search_stringName3'] = parameters['searchStringName3']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listReservableConfigs_RAW_URL = function() {
  return '/api/reservableConfigs'
}
export const listReservableConfigs_TYPE = function() {
  return 'get'
}
export const listReservableConfigsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDateName1'] !== undefined) {
    queryParameters['search_dateName1'] = parameters['searchDateName1']
  }
  if (parameters['searchDateName2'] !== undefined) {
    queryParameters['search_dateName2'] = parameters['searchDateName2']
  }
  if (parameters['searchDateName3'] !== undefined) {
    queryParameters['search_dateName3'] = parameters['searchDateName3']
  }
  if (parameters['searchDoubleName1'] !== undefined) {
    queryParameters['search_doubleName1'] = parameters['searchDoubleName1']
  }
  if (parameters['searchDoubleName2'] !== undefined) {
    queryParameters['search_doubleName2'] = parameters['searchDoubleName2']
  }
  if (parameters['searchDoubleName3'] !== undefined) {
    queryParameters['search_doubleName3'] = parameters['searchDoubleName3']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchLongName1'] !== undefined) {
    queryParameters['search_longName1'] = parameters['searchLongName1']
  }
  if (parameters['searchLongName2'] !== undefined) {
    queryParameters['search_longName2'] = parameters['searchLongName2']
  }
  if (parameters['searchLongName3'] !== undefined) {
    queryParameters['search_longName3'] = parameters['searchLongName3']
  }
  if (parameters['searchObjectName'] !== undefined) {
    queryParameters['search_objectName'] = parameters['searchObjectName']
  }
  if (parameters['searchObjectType'] !== undefined) {
    queryParameters['search_objectType'] = parameters['searchObjectType']
  }
  if (parameters['searchStringName1'] !== undefined) {
    queryParameters['search_stringName1'] = parameters['searchStringName1']
  }
  if (parameters['searchStringName2'] !== undefined) {
    queryParameters['search_stringName2'] = parameters['searchStringName2']
  }
  if (parameters['searchStringName3'] !== undefined) {
    queryParameters['search_stringName3'] = parameters['searchStringName3']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createReservableConfig
 * url: createReservableConfigURL
 * method: createReservableConfig_TYPE
 * raw_url: createReservableConfig_RAW_URL
 * @param body - 预留字段配置实体参数
 */
export const createReservableConfig = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createReservableConfig_RAW_URL = function() {
  return '/api/reservableConfigs'
}
export const createReservableConfig_TYPE = function() {
  return 'post'
}
export const createReservableConfigURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadReservableConfigByObjectType
 * url: loadReservableConfigByObjectTypeURL
 * method: loadReservableConfigByObjectType_TYPE
 * raw_url: loadReservableConfigByObjectType_RAW_URL
 * @param objectType - 预留字段配置类型
 */
export const loadReservableConfigByObjectType = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/objectType/{objectType}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{objectType}', `${parameters['objectType']}`)
  if (parameters['objectType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: objectType'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadReservableConfigByObjectType_RAW_URL = function() {
  return '/api/reservableConfigs/objectType/{objectType}'
}
export const loadReservableConfigByObjectType_TYPE = function() {
  return 'get'
}
export const loadReservableConfigByObjectTypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/objectType/{objectType}'
  path = path.replace('{objectType}', `${parameters['objectType']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadReservableConfigById
 * url: loadReservableConfigByIdURL
 * method: loadReservableConfigById_TYPE
 * raw_url: loadReservableConfigById_RAW_URL
 * @param id - 预留字段配置ID
 */
export const loadReservableConfigById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadReservableConfigById_RAW_URL = function() {
  return '/api/reservableConfigs/{id}'
}
export const loadReservableConfigById_TYPE = function() {
  return 'get'
}
export const loadReservableConfigByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateReservableConfig
 * url: updateReservableConfigURL
 * method: updateReservableConfig_TYPE
 * raw_url: updateReservableConfig_RAW_URL
 * @param body - 预留字段配置实体参数
 * @param id - 预留字段配置ID
 */
export const updateReservableConfig = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateReservableConfig_RAW_URL = function() {
  return '/api/reservableConfigs/{id}'
}
export const updateReservableConfig_TYPE = function() {
  return 'put'
}
export const updateReservableConfigURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为预留字段配置信息，失败：code!=0
 * request: deleteReservableConfigById
 * url: deleteReservableConfigByIdURL
 * method: deleteReservableConfigById_TYPE
 * raw_url: deleteReservableConfigById_RAW_URL
 * @param id - 预留字段配置ID
 */
export const deleteReservableConfigById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteReservableConfigById_RAW_URL = function() {
  return '/api/reservableConfigs/{id}'
}
export const deleteReservableConfigById_TYPE = function() {
  return 'delete'
}
export const deleteReservableConfigByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateReservableConfigPatch
 * url: updateReservableConfigPatchURL
 * method: updateReservableConfigPatch_TYPE
 * raw_url: updateReservableConfigPatch_RAW_URL
 * @param body - 预留字段配置实体参数
 * @param id - 预留字段配置id
 */
export const updateReservableConfigPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateReservableConfigPatch_RAW_URL = function() {
  return '/api/reservableConfigs/{id}'
}
export const updateReservableConfigPatch_TYPE = function() {
  return 'patch'
}
export const updateReservableConfigPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序属性：code,name,description,level.code,level.name,isSystem,isEnable,createTime
 成功：code=200，data对象为包含分页信息的角色列表，失败：code!=200
 * request: listRoles
 * url: listRolesURL
 * method: listRoles_TYPE
 * raw_url: listRoles_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCode - 查询条件:角色代码，模糊匹配
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDescription - 查询条件:角色描述，模糊匹配
 * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
 * @param searchIsSystem - 查询条件:是否系统角色，1：是，0：否，精确匹配
 * @param searchLevel - 查询条件:角色级别，对应角色字典，精确匹配
 * @param searchLevelName - 查询条件:角色级别名称，模糊匹配
 * @param searchName - 查询条件:角色名称，模糊匹配
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listRoles = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchLevel'] !== undefined) {
    queryParameters['search_level'] = parameters['searchLevel']
  }
  if (parameters['searchLevelName'] !== undefined) {
    queryParameters['search_levelName'] = parameters['searchLevelName']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listRoles_RAW_URL = function() {
  return '/api/roles'
}
export const listRoles_TYPE = function() {
  return 'get'
}
export const listRolesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchLevel'] !== undefined) {
    queryParameters['search_level'] = parameters['searchLevel']
  }
  if (parameters['searchLevelName'] !== undefined) {
    queryParameters['search_levelName'] = parameters['searchLevelName']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createRole
 * url: createRoleURL
 * method: createRole_TYPE
 * raw_url: createRole_RAW_URL
 * @param body - 角色实体参数
 */
export const createRole = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createRole_RAW_URL = function() {
  return '/api/roles'
}
export const createRole_TYPE = function() {
  return 'post'
}
export const createRoleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadRoleById
 * url: loadRoleByIdURL
 * method: loadRoleById_TYPE
 * raw_url: loadRoleById_RAW_URL
 * @param id - 角色ID
 */
export const loadRoleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadRoleById_RAW_URL = function() {
  return '/api/roles/{id}'
}
export const loadRoleById_TYPE = function() {
  return 'get'
}
export const loadRoleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateRole
 * url: updateRoleURL
 * method: updateRole_TYPE
 * raw_url: updateRole_RAW_URL
 * @param body - 角色实体参数
 * @param id - 角色id
 */
export const updateRole = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateRole_RAW_URL = function() {
  return '/api/roles/{id}'
}
export const updateRole_TYPE = function() {
  return 'put'
}
export const updateRoleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteRoleById
 * url: deleteRoleByIdURL
 * method: deleteRoleById_TYPE
 * raw_url: deleteRoleById_RAW_URL
 * @param id - 角色ID
 */
export const deleteRoleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteRoleById_RAW_URL = function() {
  return '/api/roles/{id}'
}
export const deleteRoleById_TYPE = function() {
  return 'delete'
}
export const deleteRoleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateRolePatch
 * url: updateRolePatchURL
 * method: updateRolePatch_TYPE
 * raw_url: updateRolePatch_RAW_URL
 * @param body - 角色实体参数
 * @param id - 角色ID
 */
export const updateRolePatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateRolePatch_RAW_URL = function() {
  return '/api/roles/{id}'
}
export const updateRolePatch_TYPE = function() {
  return 'patch'
}
export const updateRolePatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: setPermissions
 * url: setPermissionsURL
 * method: setPermissions_TYPE
 * raw_url: setPermissions_RAW_URL
 * @param body - 权限信息列表
 * @param id - 角色id
 */
export const setPermissions = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}/permissions'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const setPermissions_RAW_URL = function() {
  return '/api/roles/{id}/permissions'
}
export const setPermissions_TYPE = function() {
  return 'put'
}
export const setPermissionsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}/permissions'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为user信息，失败：code!=0
 * request: userInfo
 * url: userInfoURL
 * method: userInfo_TYPE
 * raw_url: userInfo_RAW_URL
 */
export const userInfo = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/user'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const userInfo_RAW_URL = function() {
  return '/api/user'
}
export const userInfo_TYPE = function() {
  return 'get'
}
export const userInfoURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/user'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 排序属性：username,name,gender.code,gender.name,email,mobile,title.code,
 title.name,organization.id,organization.name,department.id,
 department.name,isEnable,createTime
 成功：code=200，data对象为包含分页信息的用户列表，失败：code!=200
 * request: listUsers
 * url: listUsersURL
 * method: listUsers_TYPE
 * raw_url: listUsers_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchDepartmentId - 查询条件:所属部门ID，精确匹配
 * @param searchDepartmentName - 查询条件:所属部门名称，模糊匹配
 * @param searchEmail - 查询条件:邮箱，模糊匹配
 * @param searchGender - 查询条件:性别代码，对应性别字典，精确匹配
 * @param searchIsEnable - 查询条件:是否启用，0：否，1：是，精确匹配
 * @param searchMobile - 查询条件:手机号码，模糊匹配
 * @param searchName - 查询条件:姓名，模糊查询
 * @param searchOrganizationId - 查询条件:所属组织机构ID，精确匹配
 * @param searchOrganizationName - 查询条件:所属组织机构名称，模糊匹配
 * @param searchTitle - 查询条件:岗位代码，对应岗位字典，精确匹配
 * @param searchUsername - 查询条件:用户名称，模糊查询
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listUsers = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDepartmentId'] !== undefined) {
    queryParameters['search_departmentId'] = parameters['searchDepartmentId']
  }
  if (parameters['searchDepartmentName'] !== undefined) {
    queryParameters['search_departmentName'] = parameters['searchDepartmentName']
  }
  if (parameters['searchEmail'] !== undefined) {
    queryParameters['search_email'] = parameters['searchEmail']
  }
  if (parameters['searchGender'] !== undefined) {
    queryParameters['search_gender'] = parameters['searchGender']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchMobile'] !== undefined) {
    queryParameters['search_mobile'] = parameters['searchMobile']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUsername'] !== undefined) {
    queryParameters['search_username'] = parameters['searchUsername']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsers_RAW_URL = function() {
  return '/api/users'
}
export const listUsers_TYPE = function() {
  return 'get'
}
export const listUsersURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDepartmentId'] !== undefined) {
    queryParameters['search_departmentId'] = parameters['searchDepartmentId']
  }
  if (parameters['searchDepartmentName'] !== undefined) {
    queryParameters['search_departmentName'] = parameters['searchDepartmentName']
  }
  if (parameters['searchEmail'] !== undefined) {
    queryParameters['search_email'] = parameters['searchEmail']
  }
  if (parameters['searchGender'] !== undefined) {
    queryParameters['search_gender'] = parameters['searchGender']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchMobile'] !== undefined) {
    queryParameters['search_mobile'] = parameters['searchMobile']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUsername'] !== undefined) {
    queryParameters['search_username'] = parameters['searchUsername']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createUser
 * url: createUserURL
 * method: createUser_TYPE
 * raw_url: createUser_RAW_URL
 * @param body - 用户实体参数
 */
export const createUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUser_RAW_URL = function() {
  return '/api/users'
}
export const createUser_TYPE = function() {
  return 'post'
}
export const createUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadUserById
 * url: loadUserByIdURL
 * method: loadUserById_TYPE
 * raw_url: loadUserById_RAW_URL
 * @param id - 用户ID
 */
export const loadUserById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadUserById_RAW_URL = function() {
  return '/api/users/{id}'
}
export const loadUserById_TYPE = function() {
  return 'get'
}
export const loadUserByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateUser
 * url: updateUserURL
 * method: updateUser_TYPE
 * raw_url: updateUser_RAW_URL
 * @param body - 用户实体参数
 * @param id - 用户ID
 */
export const updateUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUser_RAW_URL = function() {
  return '/api/users/{id}'
}
export const updateUser_TYPE = function() {
  return 'put'
}
export const updateUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteUserById
 * url: deleteUserByIdURL
 * method: deleteUserById_TYPE
 * raw_url: deleteUserById_RAW_URL
 * @param id - 用户ID
 */
export const deleteUserById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUserById_RAW_URL = function() {
  return '/api/users/{id}'
}
export const deleteUserById_TYPE = function() {
  return 'delete'
}
export const deleteUserByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateUserPatch
 * url: updateUserPatchURL
 * method: updateUserPatch_TYPE
 * raw_url: updateUserPatch_RAW_URL
 * @param body - 用户实体参数
 * @param id - 用户ID
 */
export const updateUserPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateUserPatch_RAW_URL = function() {
  return '/api/users/{id}'
}
export const updateUserPatch_TYPE = function() {
  return 'patch'
}
export const updateUserPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}