import React from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import { motion } from "framer-motion";
function App() {
  const [value, setValue] = React.useState(0);
  const [toggle, setToggle] = React.useState(1);
  return (
    <motion.div  
      initial={{
        opacity: 0,
      }} 
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2
      }}
      >

      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <motion.h2 animate={{ x: parseInt(value * 2), opacity: toggle }}>Super Cool</motion.h2>
        <input type="range" min="-100" max="100" value={value} onChange={(e) => setValue(e.target.value)} />
        <div>
          <button onClick={() => toggle === 0 ? setToggle(1) : setToggle(0)}>Click Me</button>
        </div>
        <br></br>
        <motion.div>
          <CardGrid>
            <Card style={{ background: "var(--purp)" }}>
              <h3>Some card</h3>
              <img src={purp} />
            </Card>
            <Card style={{ background: "var(--blue)" }}>
              <h3>Some card</h3>
              <img src={blue} />
            </Card>
            <Card style={{ background: "var(--black)" }}>
              <h3>Some card</h3>
              <img src={black} />
            </Card>
            <Card style={{ background: "var(--green)" }}>
              <h3>Some card</h3>
              <img src={green} />
            </Card>
          </CardGrid>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default App;
