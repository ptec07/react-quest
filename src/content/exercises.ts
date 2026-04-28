import type { Exercise } from '../features/lessons/types'

export const exercises: Exercise[] = [
  {
    id: 'compose-welcome-panel',
    lessonId: 'react-intro',
    title: 'React 컴포넌트로 환영 패널 만들기',
    type: 'build-small-ui',
    prompt: 'React가 UI를 작은 컴포넌트로 나눈다는 점을 느낄 수 있도록 WelcomePanel 컴포넌트를 만들고 App에서 렌더링하세요.',
    starterCode: `export default function App() {
  return (
    <main>
      <h1>React Quest 시작하기</h1>
      <p>이 화면을 WelcomePanel 컴포넌트로 분리해보세요.</p>
    </main>
  );
}`,
    solutionCode: `function WelcomePanel() {
  return (
    <section>
      <h1>React Quest 시작하기</h1>
      <p>UI를 작은 컴포넌트로 나누면 읽고 조합하기 쉬워집니다.</p>
    </section>
  );
}

export default function App() {
  return <WelcomePanel />;
}`,
    hints: ['React 앱은 컴포넌트들의 조합으로 만들어집니다.', '컴포넌트 함수 이름은 대문자로 시작합니다.', 'App 컴포넌트에서 <WelcomePanel />처럼 사용할 수 있습니다.'],
    explanation: 'React 공식 문서의 Quick Start 흐름처럼, 먼저 UI를 컴포넌트라는 작은 조각으로 바라보는 감각을 익히는 실습입니다.',
  },
  {
    id: 'build-profile-card-component',
    lessonId: 'first-component',
    title: '프로필 카드를 컴포넌트로 만들기',
    type: 'build-small-ui',
    prompt: '반복될 수 있는 프로필 UI를 ProfileCard 컴포넌트로 분리하고 App에서 렌더링하세요.',
    starterCode: `export default function App() {
  return (
    <article>
      <h2>Ada Lovelace</h2>
      <p>첫 번째 프로그래머</p>
    </article>
  );
}`,
    solutionCode: `function ProfileCard() {
  return (
    <article>
      <h2>Ada Lovelace</h2>
      <p>첫 번째 프로그래머</p>
    </article>
  );
}

export default function App() {
  return <ProfileCard />;
}`,
    hints: ['컴포넌트는 JSX를 반환하는 JavaScript 함수입니다.', '컴포넌트 이름은 반드시 대문자로 시작해야 합니다.', 'App 안에서는 <ProfileCard />처럼 JSX 태그로 호출합니다.'],
    explanation: 'React 공식 문서의 “첫 번째 컴포넌트”처럼, UI 조각을 함수로 분리하고 조합하는 기본 패턴을 연습합니다.',
  },
  {
    id: 'fix-jsx-expression',
    lessonId: 'jsx-basics',
    title: 'JSX 표현식 고치기',
    type: 'fix-bug',
    prompt: 'JSX 안에서 JavaScript 값을 문자열이 아니라 중괄호 표현식으로 표시하도록 고치세요.',
    starterCode: `const learner = 'React Explorer';

export default function App() {
  return <h1>안녕하세요, learner</h1>;
}`,
    solutionCode: `const learner = 'React Explorer';

export default function App() {
  return <h1>안녕하세요, {learner}</h1>;
}`,
    hints: ['JSX에서 따옴표 안의 값은 그대로 문자열로 표시됩니다.', 'JavaScript 변수나 표현식을 렌더링하려면 { }를 사용합니다.', 'learner라는 글자 대신 변수 값을 보여줘야 합니다.'],
    explanation: 'JSX로 마크업을 작성할 때 동적인 JavaScript 값은 중괄호 안에 넣는다는 React 공식 문서의 핵심 규칙을 연습합니다.',
  },
  {
    id: 'pass-avatar-props',
    lessonId: 'props',
    title: 'Props로 아바타 정보 전달하기',
    type: 'complete-code',
    prompt: 'Avatar 컴포넌트가 name과 role props를 받아 다른 사람 카드도 재사용할 수 있게 만드세요.',
    starterCode: `function Avatar() {
  return (
    <article>
      <h2>Grace Hopper</h2>
      <p>컴파일러 개척자</p>
    </article>
  );
}

export default function App() {
  return <Avatar />;
}`,
    solutionCode: `function Avatar({ name, role }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
    </article>
  );
}

export default function App() {
  return <Avatar name="Grace Hopper" role="컴파일러 개척자" />;
}`,
    hints: ['부모 컴포넌트는 JSX 속성으로 데이터를 넘깁니다.', '자식 컴포넌트는 함수 매개변수에서 props를 받습니다.', 'props 값은 JSX에서 {name}, {role}처럼 사용할 수 있습니다.'],
    explanation: 'React 공식 문서의 props 전달 흐름처럼, 같은 컴포넌트에 다른 데이터를 주입해 재사용성을 높이는 실습입니다.',
  },
  {
    id: 'conditional-packing-list',
    lessonId: 'conditional-rendering',
    title: '준비 완료 항목에 체크 표시하기',
    type: 'complete-code',
    prompt: 'packed 값이 true인 항목에만 체크 표시가 보이도록 조건부 렌더링을 완성하세요.',
    starterCode: `function Item({ name, packed }) {
  return <li>{name}</li>;
}

export default function App() {
  return (
    <ul>
      <Item name="여권" packed={true} />
      <Item name="충전기" packed={false} />
    </ul>
  );
}`,
    solutionCode: `function Item({ name, packed }) {
  return <li>{name} {packed ? '✅' : ''}</li>;
}

export default function App() {
  return (
    <ul>
      <Item name="여권" packed={true} />
      <Item name="충전기" packed={false} />
    </ul>
  );
}`,
    hints: ['JSX 안에서는 삼항 연산자를 사용할 수 있습니다.', '조건이 true일 때만 추가 UI를 보여주면 됩니다.', 'packed ? A : B 형태를 li 안에 넣어보세요.'],
    explanation: 'React 공식 문서의 조건부 렌더링처럼 props나 state 값에 따라 다른 JSX를 반환하는 법을 연습합니다.',
  },
  {
    id: 'render-people-list-with-keys',
    lessonId: 'rendering-lists',
    title: '사람 목록을 key와 함께 렌더링하기',
    type: 'complete-code',
    prompt: 'people 배열을 map으로 순회해 li 목록으로 렌더링하고, 각 항목에 안정적인 key를 부여하세요.',
    starterCode: `const people = [
  { id: 1, name: 'Katherine Johnson', profession: '수학자' },
  { id: 2, name: 'Mary Jackson', profession: '엔지니어' },
  { id: 3, name: 'Dorothy Vaughan', profession: '프로그래머' },
];

export default function App() {
  return <ul><li>목록을 여기에 렌더링하세요</li></ul>;
}`,
    solutionCode: `const people = [
  { id: 1, name: 'Katherine Johnson', profession: '수학자' },
  { id: 2, name: 'Mary Jackson', profession: '엔지니어' },
  { id: 3, name: 'Dorothy Vaughan', profession: '프로그래머' },
];

export default function App() {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>{person.name} — {person.profession}</li>
      ))}
    </ul>
  );
}`,
    hints: ['배열을 JSX 목록으로 바꿀 때는 map을 사용합니다.', '각 li에는 형제 사이에서 고유한 key가 필요합니다.', '배열 index보다 데이터의 id를 key로 쓰는 편이 안전합니다.'],
    explanation: 'React 공식 문서의 리스트 렌더링과 key 개념에 맞춰, 배열 데이터에서 UI 목록을 만드는 실습입니다.',
  },
  {
    id: 'wire-click-event-handler',
    lessonId: 'events',
    title: '클릭 이벤트 핸들러 연결하기',
    type: 'fix-bug',
    prompt: '버튼이 렌더링될 때 바로 실행되지 않고, 클릭했을 때 handleClick 함수가 실행되도록 고치세요.',
    starterCode: `export default function App() {
  function handleClick() {
    alert('알림 열기');
  }

  return <button onClick={handleClick()}>알림 열기</button>;
}`,
    solutionCode: `export default function App() {
  function handleClick() {
    alert('알림 열기');
  }

  return <button onClick={handleClick}>알림 열기</button>;
}`,
    hints: ['이벤트 prop 이름은 onClick처럼 camelCase를 사용합니다.', 'onClick에는 함수 호출 결과가 아니라 함수 자체를 전달합니다.', 'handleClick()이 아니라 handleClick을 넘겨야 클릭 시점에 실행됩니다.'],
    explanation: 'React 공식 문서의 이벤트 응답하기처럼, 이벤트 핸들러를 JSX prop으로 전달하는 기본 규칙을 연습합니다.',
  },
  {
    id: 'fix-counter-state',
    lessonId: 'state-usestate',
    title: '깨진 카운터를 state로 고치기',
    type: 'fix-bug',
    prompt: '버튼을 눌러도 숫자가 화면에서 바뀌지 않는 카운터를 useState로 고쳐보세요.',
    starterCode: `export default function App() {
  let count = 0;

  function handleClick() {
    count = count + 1;
  }

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}`,
    solutionCode: `import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}`,
    hints: ['일반 변수 변경은 React에게 다시 렌더링하라고 알려주지 않습니다.', '컴포넌트가 기억해야 하는 값에는 useState를 사용합니다.', 'count = count + 1 대신 setCount(count + 1)를 호출하세요.'],
    explanation: 'React 공식 문서의 “State: 컴포넌트의 기억”처럼, state가 렌더링 사이의 값을 기억하고 UI 갱신을 트리거한다는 점을 연습합니다.',
  },
  {
    id: 'update-form-object-state',
    lessonId: 'state-objects-arrays',
    title: '객체 state를 복사해서 업데이트하기',
    type: 'fix-bug',
    prompt: 'form 객체를 직접 수정하지 말고 spread 문법으로 새 객체를 만들어 이름 입력을 업데이트하세요.',
    starterCode: `import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ firstName: 'Barbara', lastName: 'Hepworth' });

  function handleFirstNameChange(e) {
    form.firstName = e.target.value;
    setForm(form);
  }

  return (
    <label>
      이름: <input value={form.firstName} onChange={handleFirstNameChange} />
      <p>{form.firstName} {form.lastName}</p>
    </label>
  );
}`,
    solutionCode: `import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ firstName: 'Barbara', lastName: 'Hepworth' });

  function handleFirstNameChange(e) {
    setForm({
      ...form,
      firstName: e.target.value,
    });
  }

  return (
    <label>
      이름: <input value={form.firstName} onChange={handleFirstNameChange} />
      <p>{form.firstName} {form.lastName}</p>
    </label>
  );
}`,
    hints: ['state 객체를 직접 수정하면 이전 객체와 같은 참조가 유지됩니다.', '기존 필드는 ...form으로 복사하세요.', '바뀌는 필드만 뒤에서 덮어쓰면 됩니다.'],
    explanation: 'React 공식 문서의 객체/배열 state 업데이트처럼, state를 직접 mutation하지 않고 새 객체로 교체하는 패턴을 연습합니다.',
  },
  {
    id: 'split-filterable-product-table',
    lessonId: 'thinking-in-react',
    title: '상품 테이블을 컴포넌트 계층으로 나누기',
    type: 'build-small-ui',
    prompt: '검색 영역과 상품 테이블을 SearchBar, ProductTable, FilterableProductTable 컴포넌트로 나누세요.',
    starterCode: `const PRODUCTS = [
  { category: '과일', price: '₩1,000', stocked: true, name: '사과' },
  { category: '채소', price: '₩2,000', stocked: false, name: '호박' },
];

export default function App() {
  return (
    <div>
      <input placeholder="검색" />
      <table>
        <tbody>
          <tr><td>사과</td><td>₩1,000</td></tr>
          <tr><td>호박</td><td>₩2,000</td></tr>
        </tbody>
      </table>
    </div>
  );
}`,
    solutionCode: `const PRODUCTS = [
  { category: '과일', price: '₩1,000', stocked: true, name: '사과' },
  { category: '채소', price: '₩2,000', stocked: false, name: '호박' },
];

function SearchBar() {
  return <input placeholder="검색" />;
}

function ProductTable({ products }) {
  return (
    <table>
      <tbody>
        {products.map((product) => (
          <tr key={product.name}>
            <td>{product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}`,
    hints: ['먼저 정적인 UI를 컴포넌트 계층으로 나누세요.', '데이터는 상위 컴포넌트에서 하위 컴포넌트로 props로 내려보냅니다.', 'Thinking in React의 첫 단계는 컴포넌트 경계를 찾는 것입니다.'],
    explanation: 'React 공식 문서의 “React로 사고하기”처럼, UI를 컴포넌트 계층으로 나누고 데이터 흐름을 props로 연결하는 실습입니다.',
  },
  {
    id: 'compose-dashboard-widgets',
    lessonId: 'react-intro',
    title: '대시보드를 작은 컴포넌트로 조립하기',
    type: 'build-small-ui',
    prompt: '반복되는 요약 UI를 StatCard 컴포넌트로 분리해 React가 UI를 조립하는 방식을 연습하세요.',
    starterCode: `export default function App() {
  return (
    <main>
      <h1>오늘의 학습</h1>
      <section><strong>3</strong><span>완료한 퀘스트</span></section>
      <section><strong>42분</strong><span>학습 시간</span></section>
    </main>
  );
}`,
    solutionCode: `function StatCard({ value, label }) {
  return <section><strong>{value}</strong><span>{label}</span></section>;
}

export default function App() {
  return (
    <main>
      <h1>오늘의 학습</h1>
      <StatCard value="3" label="완료한 퀘스트" />
      <StatCard value="42분" label="학습 시간" />
    </main>
  );
}`,
    hints: ['반복되는 UI 패턴을 먼저 찾으세요.', '컴포넌트는 여러 번 재사용할 수 있습니다.', '다른 값은 props로 넘기면 됩니다.'],
    explanation: 'React 공식 문서의 시작 흐름처럼, UI를 재사용 가능한 컴포넌트 조각으로 바라보는 연습입니다.',
  },
  {
    id: 'nest-gallery-components',
    lessonId: 'first-component',
    title: '갤러리 안에 여러 컴포넌트 배치하기',
    type: 'complete-code',
    prompt: 'Scientist 컴포넌트를 만들고 Gallery 컴포넌트 안에서 여러 번 렌더링하세요.',
    starterCode: `function Gallery() {
  return (
    <section>
      <h1>과학자 갤러리</h1>
      <p>Rosalind Franklin</p>
      <p>Chien-Shiung Wu</p>
    </section>
  );
}

export default function App() {
  return <Gallery />;
}`,
    solutionCode: `function Scientist({ name }) {
  return <p>{name}</p>;
}

function Gallery() {
  return (
    <section>
      <h1>과학자 갤러리</h1>
      <Scientist name="Rosalind Franklin" />
      <Scientist name="Chien-Shiung Wu" />
    </section>
  );
}

export default function App() {
  return <Gallery />;
}`,
    hints: ['컴포넌트는 다른 컴포넌트 안에 중첩할 수 있습니다.', '대문자로 시작하는 함수만 JSX 컴포넌트로 인식됩니다.', '여러 번 쓰는 UI는 별도 컴포넌트 후보입니다.'],
    explanation: 'React 공식 문서의 컴포넌트 중첩 예제 흐름에 맞춰, 컴포넌트를 정의하고 다른 컴포넌트에서 사용하는 연습입니다.',
  },
  {
    id: 'fix-jsx-style-object',
    lessonId: 'jsx-basics',
    title: 'JSX 스타일 객체와 className 고치기',
    type: 'fix-bug',
    prompt: 'JSX 문법에 맞게 class를 className으로, style 문자열을 객체 표현식으로 고치세요.',
    starterCode: `export default function App() {
  return <h1 class="title" style="color: tomato">JSX 규칙 연습</h1>;
}`,
    solutionCode: `export default function App() {
  return <h1 className="title" style={{ color: 'tomato' }}>JSX 규칙 연습</h1>;
}`,
    hints: ['JSX에서는 HTML의 class 대신 className을 사용합니다.', 'style은 문자열이 아니라 객체를 받습니다.', '객체를 JSX에 넣으려면 중괄호가 두 겹처럼 보일 수 있습니다.'],
    explanation: 'React 공식 문서의 JSX 규칙처럼, HTML과 비슷하지만 더 엄격한 JSX 문법 차이를 연습합니다.',
  },
  {
    id: 'compose-card-with-children',
    lessonId: 'props',
    title: 'children으로 카드 감싸기',
    type: 'complete-code',
    prompt: 'Card 컴포넌트가 children prop을 받아 내부 내용을 감싸도록 완성하세요.',
    starterCode: `function Card() {
  return <section className="card">알림 카드</section>;
}

export default function App() {
  return (
    <Card>
      <h2>알림 카드</h2>
      <p>props.children으로 이 내용을 보여주세요.</p>
    </Card>
  );
}`,
    solutionCode: `function Card({ children }) {
  return <section className="card">{children}</section>;
}

export default function App() {
  return (
    <Card>
      <h2>알림 카드</h2>
      <p>props.children으로 이 내용을 보여주세요.</p>
    </Card>
  );
}`,
    hints: ['JSX 태그 사이의 내용은 children prop으로 전달됩니다.', '컴포넌트 매개변수에서 { children }을 받을 수 있습니다.', '감싸는 컴포넌트는 {children}을 원하는 위치에 렌더링합니다.'],
    explanation: 'React 공식 문서의 props 개념을 확장해, children으로 컴포넌트를 조합하는 패턴을 연습합니다.',
  },
  {
    id: 'conditional-sold-out-label',
    lessonId: 'conditional-rendering',
    title: '품절 상품만 흐리게 표시하기',
    type: 'complete-code',
    prompt: '재고가 없는 상품에는 품절 문구와 취소선을 조건부로 표시하세요.',
    starterCode: `function Product({ name, inStock }) {
  return <li>{name}</li>;
}

export default function App() {
  return <ul><Product name="키보드" inStock={true} /><Product name="마우스" inStock={false} /></ul>;
}`,
    solutionCode: `function Product({ name, inStock }) {
  if (!inStock) {
    return <li><del>{name}</del> 품절</li>;
  }
  return <li>{name}</li>;
}

export default function App() {
  return <ul><Product name="키보드" inStock={true} /><Product name="마우스" inStock={false} /></ul>;
}`,
    hints: ['조건이 복잡해지면 if와 early return을 써도 됩니다.', '품절일 때와 아닐 때 다른 JSX를 반환하세요.', 'JSX 변수나 early return 모두 조건부 렌더링 방법입니다.'],
    explanation: 'React 공식 문서의 조건부 렌더링처럼, 조건에 따라 서로 다른 JSX 트리를 반환하는 연습입니다.',
  },
  {
    id: 'filter-list-before-map',
    lessonId: 'rendering-lists',
    title: '목록을 필터링한 뒤 렌더링하기',
    type: 'complete-code',
    prompt: '완료되지 않은 퀘스트만 filter로 고른 뒤 map으로 렌더링하세요.',
    starterCode: `const quests = [
  { id: 'q1', title: 'JSX 읽기', done: true },
  { id: 'q2', title: 'Props 연습', done: false },
  { id: 'q3', title: 'State 실습', done: false },
];

export default function App() {
  return <ul>{quests.map((quest) => <li key={quest.id}>{quest.title}</li>)}</ul>;
}`,
    solutionCode: `const quests = [
  { id: 'q1', title: 'JSX 읽기', done: true },
  { id: 'q2', title: 'Props 연습', done: false },
  { id: 'q3', title: 'State 실습', done: false },
];

export default function App() {
  return (
    <ul>
      {quests
        .filter((quest) => !quest.done)
        .map((quest) => <li key={quest.id}>{quest.title}</li>)}
    </ul>
  );
}`,
    hints: ['렌더링 전 배열 메서드로 데이터를 가공할 수 있습니다.', 'filter는 조건에 맞는 항목만 남깁니다.', 'filter 뒤에 map을 이어 붙여 JSX 배열을 만들 수 있습니다.'],
    explanation: 'React 공식 문서의 리스트 렌더링 흐름처럼, 배열을 필터링하고 key가 있는 JSX 목록으로 변환하는 연습입니다.',
  },
  {
    id: 'pass-event-handler-prop',
    lessonId: 'events',
    title: '자식 버튼에 이벤트 핸들러 전달하기',
    type: 'complete-code',
    prompt: '부모의 handlePlay 함수를 PlayButton에 onPlay prop으로 전달하고 버튼 클릭에 연결하세요.',
    starterCode: `function PlayButton() {
  return <button>재생</button>;
}

export default function App() {
  function handlePlay() {
    alert('재생 시작');
  }

  return <PlayButton />;
}`,
    solutionCode: `function PlayButton({ onPlay }) {
  return <button onClick={onPlay}>재생</button>;
}

export default function App() {
  function handlePlay() {
    alert('재생 시작');
  }

  return <PlayButton onPlay={handlePlay} />;
}`,
    hints: ['이벤트 핸들러도 props로 전달할 수 있습니다.', '자식 컴포넌트는 받은 함수를 onClick에 연결합니다.', '호출하지 말고 함수 자체를 전달하세요.'],
    explanation: 'React 공식 문서의 이벤트 응답하기에서 다루는 패턴처럼, 이벤트 핸들러를 props로 내려보내는 연습입니다.',
  },
  {
    id: 'fix-batched-counter-update',
    lessonId: 'state-usestate',
    title: '연속 state 업데이트를 함수형으로 고치기',
    type: 'fix-bug',
    prompt: '+3 버튼이 실제로 3씩 증가하도록 setState의 updater 함수를 사용하세요.',
    starterCode: `import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  function addThree() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  return <button onClick={addThree}>Count: {count}</button>;
}`,
    solutionCode: `import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  function addThree() {
    setCount((n) => n + 1);
    setCount((n) => n + 1);
    setCount((n) => n + 1);
  }
  return <button onClick={addThree}>Count: {count}</button>;
}`,
    hints: ['렌더링 중의 state 값은 스냅샷처럼 고정되어 있습니다.', '이전 state를 기준으로 업데이트하려면 updater 함수를 사용합니다.', 'setCount((n) => n + 1) 형태를 세 번 호출해보세요.'],
    explanation: 'React 공식 문서의 state 스냅샷/업데이트 큐 개념에 맞춰, 연속 state 업데이트에서 updater 함수를 쓰는 연습입니다.',
  },
  {
    id: 'add-item-to-array-state',
    lessonId: 'state-objects-arrays',
    title: '배열 state에 새 항목 추가하기',
    type: 'fix-bug',
    prompt: '배열을 push로 직접 수정하지 말고 새 배열을 만들어 퀘스트를 추가하세요.',
    starterCode: `import { useState } from 'react';

let nextId = 3;

export default function App() {
  const [quests, setQuests] = useState([
    { id: 1, title: 'JSX' },
    { id: 2, title: 'Props' },
  ]);

  function addQuest() {
    quests.push({ id: nextId++, title: 'State' });
    setQuests(quests);
  }

  return <><button onClick={addQuest}>추가</button><ul>{quests.map((quest) => <li key={quest.id}>{quest.title}</li>)}</ul></>;
}`,
    solutionCode: `import { useState } from 'react';

let nextId = 3;

export default function App() {
  const [quests, setQuests] = useState([
    { id: 1, title: 'JSX' },
    { id: 2, title: 'Props' },
  ]);

  function addQuest() {
    setQuests([...quests, { id: nextId++, title: 'State' }]);
  }

  return <><button onClick={addQuest}>추가</button><ul>{quests.map((quest) => <li key={quest.id}>{quest.title}</li>)}</ul></>;
}`,
    hints: ['배열 state에는 push 대신 새 배열을 전달하세요.', 'spread 문법으로 기존 항목을 복사할 수 있습니다.', 'setQuests([...quests, newQuest]) 형태를 사용해보세요.'],
    explanation: 'React 공식 문서의 배열 state 업데이트처럼, 기존 배열을 직접 변경하지 않고 새 배열로 교체하는 연습입니다.',
  },
  {
    id: 'find-minimal-state',
    lessonId: 'thinking-in-react',
    title: '최소 state만 남기기',
    type: 'fix-bug',
    prompt: '전체 이름은 firstName과 lastName에서 계산할 수 있으므로 별도 state로 저장하지 않도록 고치세요.',
    starterCode: `import { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');
  const [fullName] = useState(firstName + ' ' + lastName);

  return <h1>{fullName}</h1>;
}`,
    solutionCode: `import { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');
  const fullName = firstName + ' ' + lastName;

  return <h1>{fullName}</h1>;
}`,
    hints: ['다른 state나 props에서 계산 가능한 값은 보통 state가 아닙니다.', '렌더링 중 계산할 수 있는 값은 변수로 두세요.', '최소 state를 찾는 것은 Thinking in React의 핵심 단계입니다.'],
    explanation: 'React 공식 문서의 “React로 사고하기”처럼, 중복 state를 제거하고 필요한 최소 state만 남기는 연습입니다.',
  },
]

export function getExercisesForLesson(lessonId: string) {
  return exercises.filter((exercise) => exercise.lessonId === lessonId)
}

export function getExerciseForLesson(lessonId: string) {
  return getExercisesForLesson(lessonId)[0]
}
