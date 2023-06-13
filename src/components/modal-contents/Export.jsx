import styled from 'styled-components'
import { useState, useContext } from 'react'
import { ColorContext } from '../../utils/Context'

function Export() {
  const {
    colorPrimaire1,
    colorPrimaire,
    colorPrimaire2,
    colorSecondaire1,
    colorSecondaire,
    colorSecondaire2,
    colorClair,
    colorClair2,
  } = useContext(ColorContext)

  const [selectCopyHover, setSelectCopyHover] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const elementToCopy = document.querySelector('.copy-clipboard')
  function copyColors(toCopy) {
    setIsCopied(true)
    const stringToCopy = toCopy.innerText
    navigator.clipboard.writeText(stringToCopy)
  }

  return (
    <>
      <WrapperExport>
        <Paragraph>
          Vous pouvez copier/coller ces variables dans le fichier variables.scss
          de votre Nanosite :
        </Paragraph>
        <SelectCopy
          onMouseEnter={() => setSelectCopyHover(true)}
          onMouseLeave={() => setSelectCopyHover(false)}
          onClick={() => copyColors(elementToCopy)}
        >
          <IconCopy>
            {selectCopyHover &&
              (!isCopied ? (
                <p>
                  Cliquer <br />
                  pour copier
                </p>
              ) : (
                <p>
                  C&apos;est <br />
                  copié !
                </p>
              ))}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
            </svg>
          </IconCopy>
          <div className="copy-clipboard">
            <p>
              <ColorCircle
                style={{ backgroundColor: colorPrimaire1 }}
              ></ColorCircle>
              <ColorName>$primaire1:</ColorName> {colorPrimaire1};
            </p>
            <p>
              <ColorCircle
                style={{ backgroundColor: colorPrimaire }}
              ></ColorCircle>
              <ColorName>$primaire:</ColorName> {colorPrimaire};
            </p>
            <p>
              <ColorCircle
                style={{ backgroundColor: colorPrimaire2 }}
              ></ColorCircle>
              <ColorName>$primaire2:</ColorName> {colorPrimaire2};
            </p>
            <p>
              <ColorCircle
                style={{ backgroundColor: colorSecondaire1 }}
              ></ColorCircle>
              <ColorName>$secondaire1:</ColorName> {colorSecondaire1};
            </p>
            <p>
              <ColorCircle
                style={{ backgroundColor: colorSecondaire }}
              ></ColorCircle>
              <ColorName>$secondaire:</ColorName> {colorSecondaire};
            </p>
            <p>
              <ColorCircle
                style={{ backgroundColor: colorSecondaire2 }}
              ></ColorCircle>
              <ColorName>$secondaire2:</ColorName> {colorSecondaire2};
            </p>
            <p>
              <ColorCircle
                style={{ backgroundColor: colorClair }}
              ></ColorCircle>
              <ColorName>$clair:</ColorName> {colorClair};
            </p>
            <p>
              <ColorCircle
                style={{ backgroundColor: colorClair2 }}
              ></ColorCircle>
              <ColorName>$clair2:</ColorName> {colorClair2};
            </p>
          </div>
        </SelectCopy>
      </WrapperExport>
    </>
  )
}

export default Export

const WrapperExport = styled.div`
  padding: 40px;
`
const Paragraph = styled.p`
  color: rgba(255, 255, 255, 0.6);
  padding-bottom: 20px;
`
const SelectCopy = styled.div`
  position: relative;
  border: 2px solid #222;
  background-color: #000;
  border-radius: 5px;
  padding: 20px;
  transition: 0.1s border-color ease-in-out;
  cursor: pointer;
  &:hover {
    border: 2px solid #444;
    transition: 0.1s border-color ease-in-out;
  }
  & p {
    line-height: 1.7;
    color: #fff;
    font-size: 16px;
  }
`
const IconCopy = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 100px;
  display: flex;
  justify-content: flex-end;
  & p {
    position: absolute;
    color: #888;
    font-size: 11px;
    line-height: 14px;
    text-align: right;
    right: 40px;
    top: 5px;
  }
  & svg {
    opacity: 0.5;
    width: 30px;
    transition: 0.1s opacity ease-in-out;
    &.hover {
      opacity: 1;
      transition: 0.1s opacity ease-in-out;
    }
    & path {
      fill: #666;
    }
  }
`
const ColorCircle = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 6px;
`
const ColorName = styled.span`
  color: rgba(255, 255, 255, 0.6);
`
