import { Component } from '@uni-helper/uni-app-types';

interface _TemplateProps {}

type _Template = Component<Partial<_TemplateProps>>;

export { _TemplateProps as TemplateProps, _Template as Template };

// declare global {
//   namespace UniHelper {
//     export type TemplateProps = _TemplateProps;
//   }
// }

// declare module '@vue/runtime-core' {
//   export interface GlobalComponents {
//     Template: _Template;
//   }
// }
