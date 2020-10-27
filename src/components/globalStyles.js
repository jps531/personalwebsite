import {createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Catamaran', sans-serif;
    transition: all 0.50s linear;
  }
  .MuiPaper-root {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Catamaran', sans-serif;
  }
  .MuiListItemIcon-root, .MuiTypography-h6 {
    color: ${({ theme }) => theme.text};
    font-family: 'Catamaran', sans-serif;
  }
  .MuiListItemText-root, .MuiTypography-body1 {
    color: ${({ theme }) => theme.text};
    font-family: 'Lexend Deca', sans-serif;
  }
  .MuiTypography-colorTextSecondary {
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Lexend Deca', sans-serif;
  }
  .makeStyles-menuButton-4{
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.buttonBack};
    padding: 6px;
    margin-left: -8px;
  }
  .makeStyles-menuButton-4:hover{
    background-color: ${({ theme }) => theme.buttonBackFocus};
    padding: 6px;
    margin-left: -8px;
  }
  .MuiToolbar-regular {
    min-height: 60px;
    background-color: ${({ theme }) => theme.buttonBack};
  }
  .secondaryText{
    margin: 0;
    text-align: center;
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Lexend Deca', sans-serif;
  }
  .makeStyles-toolbar-5 {
    min-height: 50px;
  }
  .makeStyles-content-5 {
    padding-left: 14px;
    padding-right: 14px;
  }
  .introBox{
    background-color: ${({ theme }) => theme.buttonBack};
    border-radius: 10px;
    padding-bottom: 1px;
    margin-bottom: 20px;
  }
  .secondaryTextBody{
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 0px;
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Lexend Deca', sans-serif;
  }
  #cardLink{
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Lexend Deca', sans-serif;
  }
  .MuiIcon-root{
    overflow: visible;
    padding-right: 5px;
  }
  .MuiSvgIcon-root{
      margin-bottom: -4px;
  }
  .makeStyles-content-7, .MuiCardContent-root{
      padding-left: 10px;
      padding-right: 10px;
  }
  .jss7{
    padding: 10px;
  }
  #headerPic{
    max-width: 800px;
    width:100%;
    height:100%;
  }
  #headerPicDiv{
    margin-bottom: 20px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.buttonBack};
    border-radius: 10px;
  }
`