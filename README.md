<div align="center">
    <h1>WE SOPT Together - Twitch</h1>
</div>

## Introduction

SOPT 29기 클라이언트-디자인 세미나의 Twitch 클론 프로젝트 입니다.

## Directory Structure

## Commit Convention

`종류: 내용` 포맷으로 메시지 작성

- **feat:** 새로운 기능 추가
- **fix:** 버그 수정
- **refactor:** 리팩터링
- **docs:** 설명 문서 변경
- **perf:** 성능 개선
- **test:** 테스트코드 추가
- **chore:** 프로젝트 설정 등 변경

## Tech Stack

- React
- styled-components

## Code Convention

#### 네이밍 컨벤션

- 폴더와 파일은 카멜 케이스를 사용한다.
- 예외적으로 리액트 컴포넌트를 정의한 파일과 폴더는 파스칼 케이스를 사용한다.
- 변수와 함수 이름은 카멜 케이스를 사용한다.
- 클래스와 인터페이스는 카멜 케이스를 사용한다.

#### 함수 구문

특별한 이유가 없는 한 함수 선언식을 사용한다.

```js
function Component() {
  function handleClick() {
    // etc...
  }

  return <button onClick={handleClick}></button>;
}
```

바로 대입해야 하는 람다 함수는 () => {} 구문을 사용한다.

````js
function Component() {
    const [value, setValue] = useState('');

    return <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
}
```

#### 컴포넌트 프롭

- 프롭들은 단일 props 변수로 받는다.
- 프롭들 각각을 사용할 땐 구조분해 할당을 사용한다.
- 받을 프롭이 없을 땐 변수를 받지 않는다.

```js
function Component(props) {
  const { to, from, value, onClick } = props;

  /// etc...
}

function ComponentWithNoProps() {
  /// etc...
}
````

#### 반응형

반응형 코드들이 온갖 컴포넌트에 산재해 있으면 안 된다. 반응형 코드들은 Layout 컴포넌트에만 있어야 한다.

#### CSS

- px 단위는 사용하지 않는다. (em, rem 단위 권장)
- 미디어 쿼리는 직접 작성하지 않고, `styles/responsive` 모듈의 `displaySize()` 함수를 사용한다.
- 색상은 `styles/colors` 모듈의 `colors` 안의 상수를 활용한다.

## Branch Strategy

기능별로 각자 브랜치를 생성해 작업 후, 풀 리퀘스트를 생성해 메인에 머지한다.
