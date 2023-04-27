# 改动日志

## 0.5.2 (2023-04-27)

- revert: 回滚 0.5.1，因为 1.6.0 不影响该库

## 0.5.1 (2023-04-27)

- fix: 支持 `Vue Language Features (Volar)` & `vue-tsc` 1.6.0

## 0.5.0 (2023-03-06)

- build: 现在使用 `rollup` 打包生成类型文件
- fix: 修复类型错误
- feat!: 现在需要 `@uni-helper/uni-app-types@^0.5.1`

## 0.4.0 (2023-02-09)

- feat: 提供实例类型

之前：

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { UnicloudDb } from '@uni-helper/uni-app-types';

// 你必须手动构造组件实例类型
type UnicloudDbInstance = InstanceOf<UnicloudDb>;

const UnicloudDbRef = ref<UnicloudDbInstance | null>();
</script>

<template>
  <unicloud-db ref="unicloudDbRef">unicloud-db</unicloud-db>
</template>
```

现在：

```vue
<script setup lang="ts">
import { ref } from 'vue';
// 你无需手动构造，导入即可使用
import type { UnicloudDbInstance } from '@uni-helper/uni-app-types';

const unicloudDbRef = ref<UnicloudDbInstance | null>();

// 也可以直接使用全局命名空间下的组件实例类型
// const unicloudDbRef = ref<UniHelper.UnicloudDbInstance | null>();
</script>

<template>
  <unicloud-db ref="unicloudDbRef">unicloud-db</unicloud-db>
</template>
```

- feat: 现在 Props 类型下的属性是可选的，使用 `v-bind` 直接绑定一个对象更为方便

之前：

```vue
<script setup lang="ts">
import type { UnicloudDbProps } from '@uni-helper/uni-app-types';

// 你必须手动设置 Partial
// 否则你需要设置所有属性或禁用检查
const unicloudDbProps: Partial<UnicloudDbProps> = { ... };
</script>

<template>
  <unicloud-db v-bind="unicloudDbProps">unicloud-db</unicloud-db>
</template>
```

现在：

```vue
<script setup lang="ts">
import type { UnicloudDbProps } from '@uni-helper/uni-app-types';

// 不需要设置 Partial，也不需要设置所有属性
const unicloudDbProps: UnicloudDbProps = { ... };
</script>

<template>
  <unicloud-db v-bind="unicloudDbProps">unicloud-db</unicloud-db>
</template>
```

## 0.3.1 (2023-01-31)

- fix: 修复大小写

## 0.3.0 (2022-12-14)

## 0.3.0-1 (2022-12-12)

- feat!: 调整事件类型命名
- feat: 增加基本测试

## 0.3.0-0 (2022-12-08)

- feat!: 要求 `node >= 14.18`，这是为了对标 `rollup` 和 `vite`
- feat: 增加导出
- feat: 增加 `UniHelper` 命名空间

## 0.2.0 (2022-12-02)

升级 `@uni-helper/uni-app-types`，理论上无破坏性更新，但值得留意。

## 0.1.8 (2022-11-16)

- perf: 优化类型

## 0.1.7 (2022-11-16)

- 调整为 `@uni-helper/uni-cloud-types`

## 0.1.5 (2022-08-16)

## 0.1.4 (2022-08-15)

## 0.1.3 (2022-08-15)

- fix: 修复导出
- perf: 移除多余代码

## 0.1.2 (2022-07-24)

## 0.1.1 (2022-07-18)

- fix: 修复类型

## 0.1.0 (2022-07-18)

初次发布。
