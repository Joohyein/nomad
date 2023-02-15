// 우리가 이전에 설치해 놓은 파일을 override(덮어쓰기)
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        textColor:string;
        bgColor:string;
        btnColor:string;
    }
}