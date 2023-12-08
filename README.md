### Atomic Pattern

```
- `Atoms`
  - 디자인만 담당
  - 고정 텍스트가 들어가면 안됨
  - 모든 텍스트는 props로 받아야 함
  - 색상, 크기 등도 동적으로 사용 가능하게
  - ex) Button, Input
- `Molecules`
  - 디자인 묶음
  - 여러 Atom 들과 각 요소들의 간격을 결정
  - 고정 텍스트가 들어갈 수 있음
  - ex) InputForm, CheckForm
- `Organisms`
  - 하나의 큰 블록, 레이아웃
  - Molecules와 Atoms 컴포넌트 배치, 간격은 이곳에서 함
  - Pages나 Template에서 props로 내려 받은 기능 함수들을 각 버튼에 연결
  - ex) Navbar, Sidebar
- `Template`
  - 비즈니스 로직
- `Pages`
  - 뷰 컴포넌트
  - 기능 및 로직 포함 X
```

### 📗 프레임워크 및 라이브러리

```
- React v18
- Typescript
- React-Query
- Recoil
- React-hook-form
- apexcharts
- TailWindCSS
```

### ✔ Branch 관리

```
✔ master
  - 배포
✔ release
  - 릴리즈 브랜치
✔ develop
  - 개발 브랜치
✔ feature
  - 개인 개발 브랜치
```
