import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const RippleEffect = ({children}) => {

    const [effect, setEffect] = useState(false)

    return(
        <Container
            className={cn({effect:effect})}
            onMouseDown={() => setEffect(true)}
            onMouseUp={() => setEffect(false)}
        >
            <EffectBlock/>
            {children}
        </Container>
    )

}

const Container = styled.div`
  position: relative;
`

const EffectBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
  background: #000;
  transform: scale(0.8);
  transition: opacity 0.4s, transform 0.4s 0.4s;
  opacity: 0;
  .effect &{
    transform: none;
    opacity: 0.2;
    transition: 0.1s;
  }
`

export default RippleEffect;