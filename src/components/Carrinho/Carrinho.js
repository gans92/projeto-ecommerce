import React from 'react'
import { Container, Main, P, Button } from './style'

const Carrinho = (props) => {
  const listCarrinho = props.carrinho.map((e) => {
    return (
      <Main>
        <P>{e.quantidade}x  {e.titulo}</P>
        <Button onClick={() => props.removerProduto(e.id)}>Remover</Button>
      </Main>
    )
  })

  let soma = 0
  for (let i of props.carrinho) {
    soma += i.quantidade * i.preco
  }

  return (
    <Container>
      {props.guardaDados}
      <h3>Carrinho:</h3>
      {listCarrinho}
      <p>Valor total: {soma},00</p>
    </Container>
  )
}

export default Carrinho