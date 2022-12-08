import { Component, AnyRecord } from '@uni-helper/uni-app-types';

/**
 * @desc 服务商
 * @desc aliyun 阿里云
 * @desc tencent 腾讯云
 */
type _UnicloudDbSpaceInfoProvider = 'aliyun' | 'tencent';

/**
 * @desc 服务空间信息
 */
interface _UnicloudDbSpaceInfo {
  /**
   * @desc 服务商
   * @desc aliyun 阿里云
   * @desc tencent 腾讯云
   */
  provider: _UnicloudDbSpaceInfoProvider;
  /**
   * @desc 服务空间 ID
   */
  spaceId: string;
  /**
   * @desc 阿里云支持，在控制台服务空间列表中查看
   */
  clientSecret: string;
  /**
   * @desc 服务空间地址，阿里云支持
   */
  endpoint?: string;
}

/**
 * @desc 分页策略
 * @desc add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
 * @desc replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
 */
type _UnicloudDbPageData = 'add' | 'replace';

/**
 * @desc 加载数据时机
 * @desc auto 页面就绪后或属性变化后加载数据
 * @desc onready 页面就绪后不自动加载数据，属性变化后加载，适合在 onready 中接收上个页面的参数作为 where 条件时
 * @desc manual 手动模式，不自动加载数据，如果涉及到分页，需要先手动修改当前页再调用加载数据
 */
type _UnicloudDbLoadtime = 'auto' | 'onready' | 'manual';

interface _UnicloudDbLoadDataOptions {
  /**
   * 是否清空数据和分页信息
   */
  clear: boolean;
}

interface _UnicloudDbLoadDataCallback {
  (): any;
}

/**
 * @desc 手动加载数据
 * @param options.clear 是否清空数据和分页信息，默认为 false
 * @param callback 回调函数，加载数据完或加载失败后触发
 */
interface _UnicloudDbLoadData {
  (options?: _UnicloudDbLoadDataOptions, callback?: _UnicloudDbLoadDataCallback): void;
}

/**
 * @desc 加载更多数据，每加载成功一次，当前页 +1
 */
interface _UnicloudDbLoadMore {
  (): void;
}

/**
 * @desc 清空已加载的数据，但不会重置当前分页信息
 */
interface _UnicloudDbClear {
  (): void;
}

/**
 * @desc 重置当前分页信息，但不会清空已加载的数据
 */
interface _UnicloudDbReset {
  (): void;
}

/**
 * @desc 清空并重新加载当前页面数据
 */
interface _UnicloudDbRefresh {
  (): void;
}

/**
 * @desc 单个数据 id
 */
type _UnicloudDbId = string;

interface _UnicloudDbRemoveOptions {
  /**
   * @desc 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理
   */
  action?: string;
  /**
   * @desc 删除确认框标题
   * @desc 默认为 提示
   */
  confirmTitle?: string;
  /**
   * @desc 删除确认框提示
   */
  confirmContent?: string;
  /**
   * @desc 控制是否有弹出框
   * @desc 默认为 true
   */
  needConfirm?: boolean;
  /**
   * @desc 是否显示 Loading
   * @desc 默认为 true
   */
  needLoading?: boolean;
  /**
   * @desc loading 的标题
   */
  loadingTitle?: string;
  /**
   * @desc 成功回调
   */
  success?: ({ code, message }: { code: string; message: string }) => void | Promise<void>;
  /**
   * @desc 失败回调
   */
  fail?: ({ message: string }) => void | Promise<void>;
  /**
   * @desc 完成回调
   */
  complete?: () => void | Promise<void>;
}

/**
 * @desc 删除一个 item
 */
interface _UnicloudDbRemove {
  (id: _UnicloudDbId | _UnicloudDbId[], options?: _UnicloudDbRemoveOptions): void;
}

interface _UnicloudDbAddOptions {
  /**
   * @desc 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理
   */
  action?: string;
  /**
   * @desc 是否显示更新成功后的提示框
   * @desc 默认为 true
   */
  showToast?: boolean;
  /**
   * @desc 新增成功后的 toast 提示
   * @desc 默认为 新增成功
   */
  toastTitle?: string;
  /**
   * @desc 是否显示 Loading
   * @desc 默认为 true
   */
  needLoading?: boolean;
  /**
   * @desc loading 的标题
   */
  loadingTitle?: string;
  /**
   * @desc 成功回调
   */
  success?: ({ code, message }: { code: string; message: string }) => void | Promise<void>;
  /**
   * @desc 失败回调
   */
  fail?: ({ message: string }) => void | Promise<void>;
  /**
   * @desc 完成回调
   */
  complete?: () => void | Promise<void>;
}

/**
 * @desc 新增一个 item
 */
interface _UnicloudDbAdd {
  (value: AnyRecord, options?: _UnicloudDbAddOptions): void;
}

interface _UnicloudDbUpdateOptions {
  /**
   * @desc 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理
   */
  action?: string;
  /**
   * @desc 是否显示更新成功后的提示框
   * @desc 默认为 true
   */
  showToast?: boolean;
  /**
   * @desc 新增成功后的 toast 提示
   * @desc 默认为 修改成功
   */
  toastTitle?: string;
  /**
   * @desc 控制是否有弹出框
   * @desc 默认为 true
   */
  needConfirm?: boolean;
  /**
   * @desc 是否显示 Loading
   * @desc 默认为 true
   */
  needLoading?: boolean;
  /**
   * @desc loading 的标题
   */
  loadingTitle?: string;
  /**
   * @desc 成功回调
   */
  success?: ({ code, message }: { code: string; message: string }) => void | Promise<void>;
  /**
   * @desc 失败回调
   */
  fail?: ({ message: string }) => void | Promise<void>;
  /**
   * @desc 完成回调
   */
  complete?: () => void | Promise<void>;
}

/**
 * @desc 更新一个 item
 */
interface _UnicloudDbUpdate {
  (id: _UnicloudDbId, value: AnyRecord, options?: _UnicloudDbUpdateOptions): void;
}

/**
 * @desc 成功回调
 * @desc 联网返回结果后，若希望先修改下数据再渲染界面，则在本方法里对 data 进行修改
 * @param data 当前查询结果
 * @param ended 是否有更多数据
 * @param pagination 分页信息
 * @param pagination.size 每页数据量
 * @param pagination.count 数据总量
 */
interface _UnicloudDbLoad {
  (data: any, ended: boolean, pagination: { size: number; count: number }): void;
}

/**
 * @desc 失败回调
 */
interface _UnicloudDbError {
  (event: { message: string }): void;
}

/**
 * @desc 数据库查询组件属性
 */
interface _UnicloudDbProps {
  /**
   * @desc 服务空间信息
   */
  spaceInfo: _UnicloudDbSpaceInfo;
  /**
   * @desc 表名
   */
  collection: string;
  /**
   * @desc 指定要查询的字段，多个字段用 , 分割
   */
  field: string;
  /**
   * @desc 查询条件，过滤记录 */
  where: string;
  /**
   * @desc 排序字段及正序倒序设置
   */
  orderby: string;
  /**
   * @desc 手动指定使用的关联关系
   */
  foreignKey: string;
  /**
   * @desc 分页策略
   * @desc add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
   * @desc replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
   * @desc 默认为 add
   */
  pageData: _UnicloudDbPageData;
  /**
   * @desc 当前页
   */
  pageCurrent: number;
  /**
   * @desc 每页数据数量
   */
  pageSize: number;
  /**
   * @desc 是否查询总数据条数
   * @desc 默认 false
   */
  getcount: boolean;
  /**
   * @desc 指定查询结果是否仅返回数组第一条数据
   * @desc false：结果数据外会再用数组包裹一层，一般用于列表页
   * @desc true：直接返回结果数据，一般用于非列表页
   * @desc 默认 false
   */
  getone: boolean;
  /**
   * @desc 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理
   * @desc 场景：前端无权操作的数据，比如阅读数 +1
   */
  action: string;
  /**
   * @desc 是否查询树状结构数据
   */
  gettree: boolean;
  /**
   * @desc gettree 的第一层级条件
   * @desc 此初始条件可以省略，不传 startWith 时默认从最顶级开始查询
   */
  startwith: string;
  /**
   * @desce gettree查询返回的树的最大层级，超过设定层级的节点不会返回
   * @desc 取值范围为 1 - 15
   * @dsec 默认为 10*/
  limitlevel: number;
  /**
   * @desc 对数据进行分组
   */
  groupby: string;
  /**
   * @desc 对数据进行分组统计
   */
  groupField: string;
  /**
   * @desc 是否对数据查询结果中重复的记录进行去重
   * @desc 默认为 false
   */
  distinct: boolean;
  /**
   * @desc 加载数据时机
   * @desc auto 页面就绪后或属性变化后加载数据
   * @desc onready 页面就绪后不自动加载数据，属性变化后加载，适合在 onready 中接收上个页面的参数作为 where 条件时
   * @desc manual 手动模式，不自动加载数据，如果涉及到分页，需要先手动修改当前页再调用加载数据
   * @desc 默认 auto
   */
  loadtime: _UnicloudDbLoadtime;
  /**
   * @desc 发行 H5 ssr 时有效，用于保证服务器端渲染和前端加载的数据对应
   * @desc 页面同时出现 2 个及以上 unicloud-db 组件需要配置此属性，且要保证值整个应用唯一
   * @desc 默认根据页面路径 + unicloud-db 组件代码中的行号生成唯一值
   */
  ssrKey: string;
  /**
   * @desc 手动加载数据
   * @param param.clear 是否清空数据和分页信息，默认为 false
   * @param callback 回调函数，加载数据完或加载失败后触发
   */
  loadData: _UnicloudDbLoadData;
  /**
   * @desc 加载更多数据，每加载成功一次，当前页 +1
   */
  loadMore: _UnicloudDbLoadMore;
  /**
   * @desc 清空已加载的数据，但不会重置当前分页信息
   */
  clear: _UnicloudDbClear;
  /**
   * @desc 重置当前分页信息，但不会清空已加载的数据
   */
  reset: _UnicloudDbReset;
  /**
   * @desc 清空并重新加载当前页面数据
   */
  refresh: _UnicloudDbRefresh;
  /**
   * @desc 删除一个 item
   */
  remove: _UnicloudDbRemove;
  /**
   * @desc 新增一个 item
   */
  add: _UnicloudDbAdd;
  /**
   * @desc 更新一个 item
   */
  update: _UnicloudDbUpdate;
  /**
   * @desc 获取 data
   */
  dataList: any;
  /**
   * @desc 成功回调
   * @desc 联网返回结果后，若希望先修改下数据再渲染界面，则在本方法里对 data 进行修改
   * @param data 当前查询结果
   * @param ended 是否有更多数据
   * @param pagination 分页信息
   * @param pagination.size 每页数据量
   * @param pagination.count 数据总量
   */
  onLoad: _UnicloudDbLoad;
  /**
   * @desc 失败回调
   */
  onError: _UnicloudDbError;
}

/**
 * @desc 数据库查询组件，对 uni-clientdb 的 js 库的再封装
 */
type _UnicloudDb = Component<Partial<_UnicloudDbProps>>;

export {
  _UnicloudDbSpaceInfoProvider as UnicloudDbSpaceInfoProvider,
  _UnicloudDbSpaceInfo as UnicloudDbSpaceInfo,
  _UnicloudDbPageData as UnicloudDbPageData,
  _UnicloudDbLoadtime as UnicloudDbLoadtime,
  _UnicloudDbLoadDataOptions as UnicloudDbLoadDataOptions,
  _UnicloudDbLoadDataCallback as UnicloudDbLoadDataCallback,
  _UnicloudDbLoadData as UnicloudDbLoadData,
  _UnicloudDbLoadMore as UnicloudDbLoadMore,
  _UnicloudDbClear as UnicloudDbClear,
  _UnicloudDbReset as UnicloudDbReset,
  _UnicloudDbRefresh as UnicloudDbRefresh,
  _UnicloudDbId as UnicloudDbId,
  _UnicloudDbRemoveOptions as UnicloudDbRemoveOptions,
  _UnicloudDbRemove as UnicloudDbRemove,
  _UnicloudDbAddOptions as UnicloudDbAddOptions,
  _UnicloudDbAdd as UnicloudDbAdd,
  _UnicloudDbUpdateOptions as UnicloudDbUpdateOptions,
  _UnicloudDbUpdate as UnicloudDbUpdate,
  _UnicloudDbLoad as UnicloudDbLoad,
  _UnicloudDbError as UnicloudDbError,
  _UnicloudDbProps as UnicloudDbProps,
  _UnicloudDb as UnicloudDb,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 服务商
     * @desc aliyun 阿里云
     * @desc tencent 腾讯云
     */
    export type UnicloudDbSpaceInfoProvider = _UnicloudDbSpaceInfoProvider;
    /**
     * @desc 服务空间信息
     */
    export interface UnicloudDbSpaceInfo extends _UnicloudDbSpaceInfo {}
    /**
     * @desc 分页策略
     * @desc add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
     * @desc replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
     */
    export type UnicloudDbPageData = _UnicloudDbPageData;
    /**
     * @desc 加载数据时机
     * @desc auto 页面就绪后或属性变化后加载数据
     * @desc onready 页面就绪后不自动加载数据，属性变化后加载，适合在 onready 中接收上个页面的参数作为 where 条件时
     * @desc manual 手动模式，不自动加载数据，如果涉及到分页，需要先手动修改当前页再调用加载数据
     */
    export type UnicloudDbLoadtime = _UnicloudDbLoadtime;
    export interface UnicloudDbLoadDataOptions extends _UnicloudDbLoadDataOptions {}
    export interface UnicloudDbLoadDataCallback extends _UnicloudDbLoadDataCallback {}
    /**
     * @desc 手动加载数据
     * @param param.clear 是否清空数据和分页信息，默认为 false
     * @param callback 回调函数，加载数据完或加载失败后触发
     */
    export interface UnicloudDbLoadData extends _UnicloudDbLoadData {}
    /**
     * @desc 加载更多数据，每加载成功一次，当前页 +1
     */
    export interface UnicloudDbLoadMore extends _UnicloudDbLoadMore {}
    /**
     * @desc 清空已加载的数据，但不会重置当前分页信息
     */
    export interface UnicloudDbClear extends _UnicloudDbClear {}
    /**
     * @desc 重置当前分页信息，但不会清空已加载的数据
     */
    export interface UnicloudDbReset extends _UnicloudDbReset {}
    /**
     * @desc 清空并重新加载当前页面数据
     */
    export interface UnicloudDbRefresh extends _UnicloudDbRefresh {}
    /**
     * @desc 单个数据 id
     */
    export type UnicloudDbId = _UnicloudDbId;
    export interface UnicloudDbRemoveOptions extends _UnicloudDbRemoveOptions {}
    /**
     * @desc 删除一个 item
     */
    export interface UnicloudDbRemove extends _UnicloudDbRemove {}
    export interface UnicloudDbAddOptions extends _UnicloudDbAddOptions {}
    /**
     * @desc 新增一个 item
     */
    export interface UnicloudDbAdd extends _UnicloudDbAdd {}
    export interface UnicloudDbUpdateOptions extends _UnicloudDbUpdateOptions {}
    /**
     * @desc 更新一个 item
     */
    export interface UnicloudDbUpdate extends _UnicloudDbUpdate {}
    /**
     * @desc 成功回调
     * @desc 联网返回结果后，若希望先修改下数据再渲染界面，则在本方法里对 data 进行修改
     * @param data 当前查询结果
     * @param ended 是否有更多数据
     * @param pagination 分页信息
     * @param pagination.size 每页数据量
     * @param pagination.count 数据总量
     */
    export interface UnicloudDbLoad extends _UnicloudDbLoad {}
    /**
     * @desc 失败回调
     */
    export interface UnicloudDbError extends _UnicloudDbError {}
    /**
     * @desc 数据库查询组件属性
     */
    export interface UnicloudDbProps extends _UnicloudDbProps {}
    /**
     * @desc 数据库查询组件，对 uni-clientdb 的 js 库的再封装
     */
    export type UnicloudDb = _UnicloudDb;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 数据库查询组件，对 uni-clientdb 的 js 库的再封装
     */
    UnicloudDb: _UnicloudDb;
  }
}
