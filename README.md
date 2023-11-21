# React + Typescript + Vite + Material Tailwind

1. React
2. Typescript
3. Vite
4. Material Tailwind
5. Tailwind

## 기본내용

1. src/components/mt 폴더에 미리 스타일링된 컴포넌트 골라서 사용

## 폰트 변경

1. index.html에 link태그 추가해서 google font 불러오기
2. tailwind.config.js 파일에서 참조중인 font.ts 에서 값 변경

## 테마 변경

| 각 테마 (screens, colors, fontFamilly 등)은 개별 파일에서 관리합니다. src/styles 참고

1. tailwind.config.js 파일에서 테마 변경
2. screens => 반응형 브레이크 포인트
3. colors => 사전 정의할 색상값 입력

## Api 모듈화

1. src/apis/api 아래에 각 api 성격별 폴더 생성 후 예시 처럼 작성
2. api 관련 모든 타입은 src/apis/api 이하 types.ts 파일에 작성
3. src/apis/services 폴더에는 요청 후 받은 데이터를 가공하는 로직을 작성
4. src/apis/utils 폴더에는 api 가공 등을 위해 사용할 유틸 함수 작성

## 코드 품질

> husky로 commit전에 코드 품질 검사 수행

1. eslint
2. prettier
3. husky

- any 타입을 사용할 수 없습니다.
- 화살표 함수만 사용할 수 있습니다.
- 함수의 리턴 타입을 반드시 지정 해야 합니다.
- Interface의 이름은 반드시 접두사 I를 붙혀야 합니다.
- Interface의 이름은 반드시 파스칼 케이스를 따릅니다.
- 파일 확장자는 .ts, .tsx만 사용할 수 있습니다.
- import react from "React" 구문을 입력하지 않아도 됩니다.
- 작은따옴표를 사용하여 문자열을 나타냅니다. ( 자동으로 변경됨 )
- 구문 마지막에 반드시 세미콜론을 입력해야 합니다. ( 자동으로 추가됨 )
