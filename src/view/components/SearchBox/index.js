import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import qs from 'qs'
import {Mike, SearchIcon} from "../../../icons/icons";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";
import RippleEffect from "../Effect/RippleEffect";
import {navigate} from "../../../lib/History";
import {useHistory} from "react-router-dom";



const SearchBox = ({mobileSize}) => {

    const {width} = useWindowDimensions()
    const history = useHistory()

    const unit = (width / 100)

    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const qsValue = qs.stringify({
        search_query:value
    },{ignoreQueryPrefix: true})

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/results?${qsValue}`)
    }
    const onClick = (e) => {
        e.preventDefault()
        history.push(`/results?${qsValue}`)
    }
    const onFocus = () => {
        setFocus(true)
    }
    const onBlur = () => {
        setFocus(false)
    }

    return(
        <Container unit={unit}
                   className={cn('searchBox',{isActive:mobileSize})}
                   onClick = {(e)=>{e.stopPropagation()}}
        >
            <Form onSubmit={onSubmit}>
                <Label>
                    <Input
                        className={cn('inputText',{onFocus:focus})}
                        type={'text'}
                        placeholder={"검색"}
                        value={value}
                        onChange={onChange}
                        onFocus = {onFocus}
                        onBlur = {onBlur}
                    />
                    <Button onClick={onClick}>
                        <SearchIcon/>
                    </Button>
                </Label>
            </Form>
            <VoiceSearch className={cn({isActive:mobileSize})}>
                <div className="mike">
                    <RippleEffect>
                        <Icon>
                            <Mike/>
                        </Icon>
                    </RippleEffect>
                </div>
            </VoiceSearch>
        </Container>
    )

}

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 42%;
  left: 50%;
  transform: translateX(-50%);
  margin:0 auto;
  &.isActive{
    position: relative;
    width: 100%;
    left: 0;
    margin-left: 15px;
    transform: none;
    flex: 1;
  }
`

const Form = styled.form`
  flex: 1;
`
const Button = styled.div`
  cursor: pointer;
  height: 100%;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  border-left: solid 1px #c1c1c1;
  &:hover {
    background: #f0f0f0;

    svg {
      fill: #444;
    }
  }
  svg {
    width: 26px;
    height: 26px;
    fill: #888;
    transform: scale(0.8);
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  border: solid 1px #c1c1c1;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
`
const Input = styled.input`
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  padding: 2px 6px;
  border: none;
  position: relative;

  &.onFocus {
    border: solid 1px #111;
  }

  :focus {
    outline: none;
  }
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  position: relative;
  cursor: pointer;
`
const VoiceSearch = styled.div`
  margin-left: 7px;
  &.isActive{
    margin-left: 15px;
  }
  svg{
    width: 28px;
    height: 28px;
    padding-top: 2px;
    padding-left: 2px;
    fill: #606060;
  }
`


export default SearchBox;