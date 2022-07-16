import React, { createRef, useRef, useState } from "react";

export default function ExampleRef() {
  const [value, setValue] = useState("");
  const inputRef = createRef();
  const inputUseRef = useRef();

  console.log(inputRef.current, inputUseRef.current);

  const change = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={inputRef} />
      <input ref={inputUseRef} />
    </div>
  );
}
// 한 컴포넌트 내에 여러개의 상태를 관리하면 A의 상태가 변하지 않고 B만 변해도 전체가 리렌더링되서 낭비가 심하다. useMemo를 사용하면 이 낭비를 없앨 수 있음. useEffect처럼 뒤에 어펜던시 배열을 주면 된다.
// useCallback 컴포넌트의 최적화를 위해 사용함. 어펜던시가 바뀔 때만 생성되는 함수를 만든다.
// useRef 렌더 사이 상태 유지를 위한 기능.
// createRef는 항상 레퍼런스를 생성해서 렌더 될 때 넣어줌. useRef는 렌더 사이 상태 유지..?
