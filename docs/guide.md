# React 코딩 규약 쉽게 배우기
## 0. 초급
### 0.1. 프로젝트 디렉토리 구성

```
myComponent
├─ public
├─ src
│   ├─ assets
│   ├─ components
│   │   └─ ChildComponent.tsx
│   ├─ hooks
│   │   └─ useOnClick.ts
│   ├─ utils
│   │   └─ openlayers
│   ├─ views
│   ├─ App.css
│   ├─ App.tsx
│   ├─ index.css
│   └─ main.tsx
├─ test
│   ├─ TestCode.test.tsx
│   └─ tsconfig.test.json
├─ .env
├─ .elsintrc.cjs
├─ babel.config.js
├─ index.html
├─ jest.config.cjs
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
### 0.2. src 디렉토리 구성
```
src
 ├─ assets
 ├─ components
 ├─ hooks
 ├─ utils
 ├─ views
 ├─ App.css
 ├─ App.tsx
 ├─ index.css
 └─ main.tsx
```

### `assets`
- **개념**: 이미지, 폰트, 아이콘과 같은 정적 파일들의 집합.
- **팁**: `images`, `styles`, `fonts`와 같이 세부 카테고리별로 폴더를 나누어 정리.

### `components`
- **개념**:재사용 가능한 UI 컴포넌트 집합.
- **예시**: 단순한 컴포넌트(`Button`, `Header`, `Footer`, `InputField` 등), 조합된 컴포넌트 (`Card`, `Modal`, `Form`)
- **팁**: 컴포넌트는 애플리케이션 전반에 걸쳐 다른 컴포넌트와 조합되어 사용되며, 각각 독립적인 기능을 수행함. 컴포넌트의 수가 많아질 경우, `UI`, `Forms`, `Navigation`과 같이 기능별 또는 페이지별로 폴더를 추가 구성하여 체계적으로 관리하는 것이 효과적임.

### `hooks`
- **개념**: React의 기능을 재사용 가능한 형태로 묶은 커스텀 훅을 정의하여 사용.
- **예시**: `useOnClickFeature`, `useOnCoordinate`, `useFetch` 등
- **팁**: `hooks`를 사용하여여러 컴포넌트 간의 공통 로직을 효율적으로 공유할 수 있음. 커스텀 훅은 한 가지 기능에 집중하도록 구성해야 하며, 훅의 이름은 `use`로 시작하는 관례를 따름.

### `utils`
- **개념**: 데이터 포맷팅, 유효성 검사, API 호출 등의 공통적으로 사용되는 JavaScript 함수들의 집합.
- **예시**: 날짜를 변환하는 함수, 비밀번호의 유효성을 검사하는 함수, 외부 API를 호출하는 함수 등
- **팁**: utils의 함수는 애플리케이션 전반의 비즈니스 로직이나 유틸리티 로직을 담당. 디렉토리 내에서도 `openlayers`, `api`와 같이 기능별로 파일을 나누어 관리하는 것이 유지보수에 용이함.

### `views`
- **개념**: 애플리케이션의 각 페이지를 구성하는 컴포넌트들의 집합.
- **예시**: `HomePage`, `AboutPage`, `ContactPage` 등
- **팁**: `views`의 컴포넌트들은 주로 라우팅에 사용되며, 사용자에게 직접 노출되는 페이지 단위임. 페이지의 구성이 복잡해지는 경우, 해당 페이지 내에서만 사용되는 하위 컴포넌트들을 관리하기 위해 별도의 폴더를 구성.

### 0.3. 변수 및 파일 명명규칙
| 구분        | 규칙               | 예시                                      |
|-----------|------------------|-----------------------------------------|
| 컴포넌트 파일명 | `PascalCase`   | `UserProfile.jsx`, `NavigationMenu.jsx` |
| JavaScript 파일명 | `camelCase` | `useFetch.js`, `apiUtils.js`            |
| 변수명 및 함수명 | `camelCase` | `const userName`, `function getUserData()` |
| 상수명       | `UPPER_CASE`  | `const MAX_USER_COUNT = 100;`           |
| 폴더명       | `camelCase` | `components/`, `user-profile/`          |

※ 명명규칙의 핵심은 **일관성**입니다. 프로젝트 초기에 규칙을 정하고, 프로젝트 전반에 걸쳐 일관되게 적용해야 합니다. 이는 코드의 가독성을 높일 뿐만 아니라, 오류를 쉽게 발견하고 수정을 용이하게 합니다.

**1. 컴포넌트 파일명**
   - 모든 React 컴포넌트 파일명은 대문자로 시작하는 `PascalCase`를 사용함. 이는 컴포넌트가 클래스나 생성자 함수를 의미하는 JavaScript의 관례를 따르는 것으로, React 컴포넌트가 재사용 가능한 UI 구성 요소임을 명확하게 함.

**2. JavaScript 파일명**
   - 일반 JavaScript 파일명은 `camelCase`를 사용함. 이는 함수, 변수와 일관성을 유지하기 위한 관례임. React 컴포넌트가 아닌 모든 파일(예: 훅, 유틸리티 함수, 설정 파일 등)에 적용됨.

**3. 변수명 및 함수명**
   - JavaScript에서는 변수와 함수명에 `camelCase`를 사용함. 이는 첫 단어를 소문자로 시작하고, 이후 각 단어의 첫 글자를 대문자로 표기하는 방식임. React에서도 동일한 규칙을 따름, 가독성과 일관성을 위해 중요함.

**4. 상수명**
   - 애플리케이션 내에서 변하지 않는 값(상수)은 `UPPER_CASE`로 명명함. 각 단어는 밑줄(`_`)로 구분함. 이는 상수의 가치와 불변성을 명확하게 하기 위한 관례임.

**5. 폴더명**
   - 폴더명에는 주로 `kebab-case` 사용하지만 React 커뮤니티에서는 `camelCase`를 사용하는 경우가 많음.

### 0.4. eslint 및 stylelint 설정법
※ ESLint와 Stylelint는 코드의 일관성을 유지하고, 잠재적인 오류를 사전에 발견하기 위한 도구입니다. 
- ESLint: `.eslintrc.cjs`에서 설정. JavaScript 코드의 문법적 오류와 스타일 규칙을 검사하는 린터 도구
- stylelint: `.stylelintrc.json`에서 설정. CSS, SCSS, Sass 등의 스타일 시트 코드를 위한 린터 및 포맷터 도구

아래는 현재 template의 lint에 대한 코드 설명입니다.

```javascript
// .eslintrc.cjs 파일

module.exports = {
  root: true, 
  // 실행 환경 정의. 여기서는 브라우저와 ES2020 문법을 사용할 수 있음을 명시함
  env: { 
    browser: true,
    es2020: true,
  },
  // ESLint의 규칙을 확장함. 
  //여기에는 ESLint 기본 규칙, TypeScript 규칙, React Hooks 규칙을 포함
  extends: [ 
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  // ESLint 검사에 추가적인 규칙이나 기능을 제공하는 플러그인을 지정
  plugins: [ 
    'react-refresh',
    '@stylistic'
  ],
  // 실질적인 lint rules
  rules: {
    'react-refresh/only-export-components': [
      'warn', // React 컴포넌트만 export하도록 경고를 띄움
      { allowConstantExport: true }, // 상수 export를 허용하는 옵션
    ],
      // 사용하지 않는 변수가 있을 때 오류를 표시함
    "@typescript-eslint/no-unused-vars": ["error", { 
      "vars": "all", 
      "args": "after-used", 
      "ignoreRestSiblings": false 
    }],
    // 다중 라인에서 쉼표 뒤에 항상 사용함을 강제함
    'comma-dangle': ['error', 'always-multiline'], 
    // 세미콜론을 항상 사용함을 강제함
    'semi': ['error', 'always'], 
    // 객체 리터럴의 중괄호 안에 공백을 항상 넣음
    '@stylistic/object-curly-spacing': ['error', 'always'], 
    // 줄 끝의 불필요한 공백을 금지함
    '@stylistic/no-trailing-spaces': 'error', 
    // 연산자 사이에 공백을 넣음
    '@stylistic/space-infix-ops': ['error', { "int32Hint": false }], 
    // 여러 개의 공백을 금지함
    '@stylistic/no-multi-spaces': 'error', 
    // 쉼표 뒤에 공백을 넣음
    '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }], 
    // 문자열에 작은따옴표를 사용함
    '@stylistic/quotes': ['error', 'single'], 
    // 화살표 함수의 화살표 앞뒤에 공백을 넣음
    '@stylistic/arrow-spacing': ['error', { 'before': true, 'after': true }] 
  }
}
```
```javascript
// .stylelintrc.json 파일

{
  // styled-components와 같은 CSS-in-JS 문법을 파싱하기 위해 사용되는 구문 분석기를 지정함
  "customSyntax": "postcss-styled-syntax", 
  "extends": [
    // Stylelint의 표준 설정을 확장함
    "stylelint-config-standard", 
    // Recess 기반의 속성 순서 규칙을 적용함
    "stylelint-config-recess-order", 
    // Idiomatic CSS 순서 규칙을 적용함
    "stylelint-config-idiomatic-order", 
    // 추가적인 속성 순서 규칙을 제공하는 설정을 적용함
    "stylelint-config-clean-order" 
  ],  
  // 속성 순서를 관리하기 위한 플러그인을 적용함
  "plugins": ["stylelint-order"] 
}
```
더 자세한 속성은 구글링..!

### 0.5. `.env`를 이용한 환경변수 설정
React에서 `.env` 파일을 이용한 환경변수 설정은 애플리케이션의 구성을 외부에서 정의할 수 있게 해주며, 개발과 운영 환경을 구분하는 데 유용합니다. 이 방법은 API 키나 데이터베이스 주소와 같이 공개되어서는 안 되는 중요한 정보를 안전하게 관리할 수 있도록 도와줍니다. 

현재 프로젝트에서는 Vite를 사용하기 때문에 `.env`설정은 다음과 같습니다.

**1. 환경변수 설정** : 변수명은 'VITE_'로 시작하는 게 일반적
    ```javascript
    // .env파일
    VITE_API_URL=http://your-api-url.com
    VITE_BASE_MAP_URL=http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png
    ...
    ```

**2. 환경변수 접근** : `import.meta.env.변수명`
    ```javascript
    // js파일
    const apiUrl = import.meta.env.VITE_API_URL;
    const mapUrl = import.meta.env.VITE_BASE_MAP_URL
    ```



## 1. 중급
### 1.1. typescript의 엄격한 사용
**1. 강제 설정(`strict` 모드 활성화)** : `tscofig.json`에서 `"strict": true,`로 설정한 경우, 다음 옵션들을 모두 활성화 합니다.
```javascript
"noImplicitAny": true, // any type 금지
"strictNullChecks": true, // null, undefined 할당 불가
"strictFunctionTypes": true, // 함수 매개변수 확인
"strictBindCallApply": true, // bind, call, apply 매서드에 대한 엄격한 타입검사
"strictPropertyInitialization": true, // 클래스의 인스턴스 속성이 생성자에서 초기화되었는지 체크
"noImplicitThis": true, // this의 타입이 any로 처리 불가
"alwaysStrict": true, // 모든 소스파일에 대해 위 내용을 어기면 오류 발생 
```
※아래는 옵션에 대한 예시 두 가지입니다. 나머지는 구글링합시다.(참고: https://www.typescriptlang.org/tsconfig#strict)
- `noImplicitAny` : 타입을 명시해야 함. (`any` 타입 추론 금지)
  ```javascript
  // noImplicitAny = false
  function multiply(a, b) {
    return a * b;
  }

  // noImplicitAny = true
  function multiply(a: number, b: number): number {
    return a * b;
  }
  ```
- `strictNullChecks` : 모든 타입에 대해 null과 undefined를 (명시적으로 허용하지 않는 한) 할당할 수 없게 됩니다
  ```javascript
  // strictNullChecks = false
  let myName: string;
  myName = null; // 오류 없음

  // strictNullChecks = true
  let myName: string;
  myName = null; // 타입 오류: null을 string에 할당할 수 없음
  ```

**2. 개인이 주의할 점**
   - `any`를 **절대,절대** 사용하지 않는다.
   - 가능한 모든 것에 **명시적으로 타입**을 선언한다. (변수, 상수, 매개변수, 함수 반환값 등)
   - `null`이나 `undefined`를 가질 수 있는 변수는 반드시 처리 로직을 추가한다.
   - 타입을 파라미터로 받는 `제네릭`을 활용한다. (재사용 가능한 컴포넌트나 함수 작성 시)
   - `리터럴 타입`을 활용한다. (특정 값만 가질 수 있는 변수 정의)
   - `타입 가드`를 활용한다. (특정 범위 내에서 변수의 타입을 좁힘)

### 1.2. `emotion` 사용시 주의할 점



1. `emotion`이란?<br/>
  `CSS-in-JS` 라이브러리 중 하나로, JavaScript를 사용해 CSS를 작성하고 컴포넌트에 스타일을 적용할 수 있게 해줍니다. `Emotion`을 사용하면 스타일 시트가 아닌 JavaScript 파일 내에서 CSS를 정의할 수 있어, 스타일과 컴포넌트 로직이 밀접하게 연결됩니다. 이는 스타일의 재사용, 동적 스타일링, 테마 적용 같은 작업을 용이하게 합니다.
2. emotion의 두 가지 사용법
   - `styled` **컴포넌트 방식** : CSS와 비슷한 문법을 사용하여 React 컴포넌트에 스타일을 적용합니다.

      ```javascript
      import styled from '@emotion/styled';

      // 버튼 스타일을 정의한 컴포넌트 생성
      const Button = styled.button`
        background-color: blue;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background-color: darkblue;
        }
      `;

      // 사용 예시
      const App = () => (
        <div>
          <Button>Click Me</Button>
        </div>
      );
      ```

   - `css` **prop 방식** : Emotion이 제공하는 `css` 함수를 사용하여 인라인 스타일처럼 컴포넌트에 스타일을 적용하는 방식입니다. 이 방식은 `@emotion/react` 패키지가 필요합니다.

      ```javascript
      /** @jsxImportSource @emotion/react */
      import { css } from '@emotion/react';

      // 사용 예시
      const App = () => (
        <div
          css={css`
            background-color: pink;
            padding: 20px;
            text-align: center;
          `}
        >
          Hello, Emotion!
        </div>
      );
      ```
3. 주의할 점
   - `styled` 컴포넌트 방식 사용 : `css` prop 방식에 비해 재사용이 용이하고, 리렌더링 시 성능 저하가 적은 편
   - 중복된 스타일을 별도의 컴포넌트나 함수로 분리하기(중복 정의 피하기)
      ```javascript
      // 공통 스타일 정의
      const commonStyle = css`
        font-size: 16px;
        padding: 8px;
      `;

      // 재사용
      const Button = styled.button`
        ${commonStyle}
        background-color: blue;
      `;

      ```
    - `styled` 컴포넌트의 props를 명시적으로 타입 지정하기
      ```javascript
      // styled 컴포넌트의 props 타입 정의
      type ButtonProps = {
        primary: boolean;
      };

      const Button = styled.button<ButtonProps>`
        background-color: ${props => (props.primary ? 'blue' : 'gray')};
        color: white;
      `;

      // 사용 시
      <Button primary={true}>Primary Button</Button>
      ```

### 1.3. `components`와 `views`의 차이점

| |  components | views |
|---|---|---|
| **목적** | 재사용 가능한 UI 구성 요소를 포함 | 애플리케이션의 각 페이지 또는 화면을 구성 |
| **특징** | 작고 독립적인 기능을 가진 UI 요소들 | 여러 `components`를 조합하여 구성된 페이지 또는 화면 |
| **재사용성** | 높음, 다양한 위치에서 사용 | 낮음, 특정 페이지나 화면에 한정 |
| **연결성** | `views` 내부 또는 다른 컴포넌트에서 사용 | 애플리케이션의 라우팅과 밀접하게 연결 |
| **기능성** | 한 가지 기능에 집중 | 여러 기능과 컴포넌트들을 조합 |
| **예시** | `Button`, `InputField`, `Navbar` | `HomePage`, `ProfilePage`, `Dashboard` |

### 1.4. `hooks`와 `utils`의 차이점
| | hooks | utils |
|---|---|---|
| **목적** | 컴포넌트 간의 상태 로직을 재사용하기 위한 함수 | 일반적인 JavaScript/TypeScript 함수로, 반복되는 로직을 재사용하기 위함 |
| **특징** | React의 상태와 생명주기 기능을 함수 컴포넌트에서 사용할 수 있게 함 | 순수한 함수나, 특정 작업을 수행하는 도우미(helper) 함수들로 구성됨 |
| **사용성** | 컴포넌트 내에서 상태 관리, 부작용 처리 등의 React 관련 로직을 재사용 | 프로젝트 전반에서 사용되는 날짜 포맷팅, 데이터 변환 등의 공통 기능 제공 |
| **컨텍스트** | React 컴포넌트 내부에서만 사용됨 | 어떤 JavaScript 환경에서도 사용될 수 있음 (React 포함) |
| **상태 관련성** | 상태 관련 로직을 다룸 | 대체로 상태와 무관한 로직을 다룸 |
| **예시** | `useEffect`, `useState`, `useContext` | `formatDate`, `calculateTotal`, `validateForm` |

`Hooks`와 `Utils`는 모두 재사용 가능한 코드 조각을 제공하지만, 사용 목적과 적용 범위에서 차이를 보입니다. `Hooks`는 React의 기능을 활용한 컴포넌트 간의 상태 로직 재사용에 초점을 맞춘 반면, `Utils`는 일반적인 로직을 재사용하기 위한 도우미 함수들을 의미합니다.

### 1.5. 작성한 코드에 대한 단위 테스트(`Jest`)
Jest는 Facebook에서 개발한 JavaScript 테스팅 프레임워크로, 주로 프로젝트에서 유닛 테스트를 위해 사용됩니다. 다음은 프로젝트 내 `CheckboxWithLabel.test.tsx` 파일 설명입니다.
```javascript
import React from 'react'; 
// 테스팅 라이브러리에서 cleanup, fireEvent, render 함수를 임포트합니다.
import { cleanup, fireEvent, render } from '@testing-library/react'; 
// 테스트할 CheckboxWithLabel 컴포넌트를 임포트합니다.
import CheckboxWithLabel from '../src/components/CheckboxWithLabel'; 

// afterEach는 각 테스트가 끝난 후 실행될 콜백 함수를 등록합니다. 여기서는 cleanup 함수를 호출하여 DOM을 정리합니다.
afterEach(cleanup); 

  // it 함수는 하나의 테스트 케이스를 정의합니다. 첫 번째 인자는 테스트의 설명이고, 두 번째 인자는 테스트를 실행할 함수입니다.
it('CheckboxWithLabel changes the text after click', () => {
  // render 함수로 CheckboxWithLabel 컴포넌트를 렌더링하고, 렌더링 결과에서 필요한 함수들을 구조 분해 할당으로 추출합니다.
  const { queryByLabelText, getByLabelText } = render(
    // labelOn과 labelOff 프로퍼티를 이용해 컴포넌트 초기화
    <CheckboxWithLabel labelOn="On" labelOff="Off" />, 
  );

  // queryByLabelText 함수로 'Off' 라벨을 가진 엘리먼트가 DOM에 있는지 확인하고, expect의 toBeTruthy 메서드로 존재 여부를 검증합니다.
  expect(queryByLabelText(/off/i)).toBeTruthy();

  // getByLabelText 함수로 'Off' 라벨을 가진 엘리먼트를 찾아 fireEvent.click 함수로 클릭 이벤트를 발생시킵니다.
  fireEvent.click(getByLabelText(/off/i));

  // 클릭 이벤트 후 'On' 라벨을 가진 엘리먼트가 DOM에 있는지 확인하고, 이 역시 toBeTruthy 메서드로 존재 여부를 검증합니다.
  expect(queryByLabelText(/on/i)).toBeTruthy();
});
```
```
// test 코드 작성 후 터미널에서 다음 명령어 입력
$ npm test
```
![alt text](./src/assets/images/jest_example.png)

jest에 대한 추가적인 기능과 명령은 구글링합시다..!(참고: https://inpa.tistory.com/tag/jest)

## 2. 고급
### 2.1. closure와 hooks란 무엇인가
1. closure란?<br/>
  closure는 javascript의 함수형 문법으로 OOP를 구현하는 방법입니다. 근래 들어 prototype을 이용하는 방법과 Class를 이용하는 방법보다 더 자주, 그리고 폭넓게 이용되고 있습니다.
2. closure의 예시<br/>
  ```ts
  // Example of a simple closure
  function createCounter() {
    let count = 0;
    const incrementCount = () => {
      count++;
    }
    return {
      count, incrementCount
    }
  }
  const { count, incrementCount } = createCounter();
  console.log(count); // output: 0
  incrementCount();
  console.log(count); // output: 1
  ```
3. hooks(React Hooks)란<br/>
  hooks는 함수형 컴포넌트에서의 React 문법 중 가장 중요한 요소로서, React 컴파일러가 가상 DOM(실제 DOM을 효과적으로 업데이트 하기 위해 만든 개념)을 조작하는 상태관리 방법입니다.<br/>
  React의 함수형 컴포넌트에서 hooks가 선언되고 그 안의 함수가 호출되었을 때, React는 함수형 컴포넌트를 다시 호출하여 그 컴포넌트를 재렌더링합니다.<br/>
  React의 가장 기본적인 hooks인 useState의 예시를 보겠습니다.

  ```tsx
  import React, { useState } from 'react';

  function ExampleComponent() {
    // "count"라는 새로운 상태 변수를 선언합니다. "setCount"는 이 변수를 갱신할 수 있는 함수입니다.
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ```
  위의 예시에서 setCount가 호출되어 count가 변화되면, 컴포넌트는 다시 렌더링됩니다.

4. custom hooks란<br/>
  custom hooks는 개발자가 직접 만든 hooks로, 여러 컴포넌트에서 재사용 가능한 상태 로직을 추출하는 방법입니다. custom hooks는 이름이 "use"로 시작하는 JavaScript 함수이며, . 이 함수 내부에서 다른 hooks를 호출할 수 있습니다.

  custom hooks의 예시를 보겠습니다.
  ```tsx
  // useCounter.ts
  import { useState } from 'react';

  function useCounter(initialValue: number) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return { count, increment, decrement };
  }

  export default useCounter;
  ```
  위의 hooks는 컴포넌트에서 import하여 사용할 수 있습니다.

### 2.2. store
1. store란<br/>
  frontend에서의 "store"는 상태 관리를 위한 중앙 저장소입니다. React 애플리케이션에서 상태를 효율적으로 관리하기 위해 사용됩니다.<br/>
  Redux와 같은 상태 관리 라이브러리를 사용하면, 애플리케이션의 상태를 하나의 전역 객체로 관리할 수 있습니다. 이 객체는 애플리케이션의 **모든 컴포넌트에서 접근 가능**하며, 상태 변경을 추적하고 업데이트할 수 있습니다.<br/>
  store는 일반적으로 애플리케이션의 상태를 저장하는데 사용되는 JavaScript 객체입니다. 이 객체는 불변성을 유지하며, 상태 변경을 위해 액션(action)을 디스패치(dispatch)하는 방식으로 업데이트됩니다. 액션은 상태 변경에 대한 설명이며, store에 전달되어 상태를 업데이트하는데 사용됩니다.<br/>
  우리의 애플리케이션에서 store는 `/src/store`에 구현되어 있습니다. 다만, GIS 애플리케이션 특성상, 전역 상태관리를 적극적으로 채용하는 경우는 거의 없으리라 생각합니다. 대부분의 전역 상태관리는 데이터 페칭으로 인하여 이루어질 것입니다.

### 2.3. RTK query로 데이터 페칭하는 이유와 방법
1. RTK query란<br/>
  RTK query는 데이터 페칭을 통한 상태관리를 단순하게 만들어주는 라이브러리로, TanStack query(구 Reqct Query)와 함께 업계의 표준으로 인정받고 있습니다. 특히, 비동기적 통신이 반드시 필요한 javascript 생태계의 특성상 관련된 상태관리를 쉽게 구현하기 위해서 채용하고 있습니다. RTK query의 특징은 다음과 같습니다.
    * 데이터 페칭이 성공한 시점과 성공 여부를 상태로 관리함
    * 데이터를 자동으로 갱신하고 필요한 경우 caching함
2. RTK query로 데이터를 페칭하는 단계는 다음과 같습니다.
    1. `/src/api/`에 api getter 함수를 정의한다.
    2. `/src/store/`에 있는 store에 api getter 함수를 등록한다.
    3. 컴포넌트에서 api getter 함수를 사용하여 데이터를 페칭한다.<br/>
  `Content.tsx`의 overlayCoverContentApi 함수 사용 부분 참고
