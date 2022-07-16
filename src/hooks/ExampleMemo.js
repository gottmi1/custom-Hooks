import React, { useCallback, useMemo, useState } from "react";

export default function ExampleMemo() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "kim", age: 27 },
    { name: "lee", age: 27 },
    { name: "hong", age: 27 },
    { name: "park", age: 27 },
  ]);

  const sum = (persons) => {
    console.log(persons);
    return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
  };
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const change = (e) => {
    setValue(e.target.value);
  };

  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>클릭</button>
    </div>
  );
}
// 한 컴포넌트 내에 여러개의 상태를 관리하면 A의 상태가 변하지 않고 B만 변해도 전체가 리렌더링되서 낭비가 심하다. useMemo를 사용하면 이 낭비를 없앨 수 있음. useEffect처럼 뒤에 어펜던시 배열을 주면 된다.
// useCallback 컴포넌트의 최적화를 위해 사용함. 어펜던시가 바뀔 때만 생성되는 함수를 만든다.
// useRef
