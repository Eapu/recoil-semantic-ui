import Head from 'next/head'
import { Container, Button, Grid, Column, Header, Progress } from 'semantic-ui-react'
import { atom, useRecoilState, useResetRecoilState, selector, useRecoilValue } from 'recoil';
const countAtom = atom({
  key: 'countAtom',
  default: 10,
});

//derived state
const fontSizeSelector = selector({
  key: 'fontSizeSelector',
  get: ({ get }) => {
    const count = get(countAtom);
    const fontSize = count * 4;
    return fontSize;
  },
});

const Main = (props) => {
  const [count, setCount] = useRecoilState(countAtom)
  const resetCount = useResetRecoilState(countAtom)
  const fontSize = useRecoilValue(fontSizeSelector)

  const countValue = useRecoilValue(countAtom)
  const percentage = useRecoilValue(countAtom)
  //global state


  return (
    <Container text>
      <br></br>
      <h2>The count value is : {count} </h2>
      <h3>The font size of potty is : {fontSize} px </h3>

        <Progress percent={percentage} indicating />

        <Button onClick={() => setCount(count + 1)}>Increase count</Button>
        <Button onClick={resetCount}>reset count</Button>

        <Grid>
            <Grid.Column width={4}>
                <p style={{ fontSize: fontSize }}>👾</p>
            </Grid.Column>
        </Grid>
      </Container>

  );
}



export default Main;

