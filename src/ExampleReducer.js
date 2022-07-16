import React, { useReducer } from "react";

export default function ExampleReducer() {
  //reducer => state를 변경하는 로직이 담긴 함수. 인자로 쓰이는 state는 이전 상태이다.
  //reducer를 작성할 땐 dispatch하기 위한 action의 type을 정하고 그 후 reducer에 로직을 추가한다
  const reducer = (state, action) => {
    if (action.type === "PLUS") {
      return {
        count: state.count + 1,
      };
    }
    return state;
  };
  //dispatch => 액션을 발생시키는 것(액션 객체를 넣는 것)
  //action => 객체이며 필수 props는 type이 있음.
  function click() {
    dispatch({ type: "PLUS" });
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p> {state.count}번 클릭 함</p>
      <button onClick={click}>클릭</button>
    </div>
  );
}
// 다수의 하위값을 한번에 관리할 수 있는 useState의 확장판 개념, 이전 state에 의존적인 상태에 쓰이면 베스트.
