import React from 'react'

export default function withHasMounted(Component) {
  class NewComponent extends React.Component {
    state = {
      hasMounted : false,
    }
    render() {
      const {hasMounted} = this.state;
      return <Component {...this.props} hasMounted={hasMounted} />
    }
    componentDidMount() {
      this.setState({hasMounted : true})
    }
  }

  NewComponent.disPlayName = `withHasMounted ${Component.name}}`

  return NewComponent
}
// 초기값이 false인 상태로 렌더 되었다가 디드 마운트 시 true로 변한 뒤 props가 변해서 한번 더 렌더 됨