
import styled from 'styled-components'

export const TagContainer = styled.div`
  .tag-element {
      display: inline-block;
      font-style: normal;
      padding: 5px 15px;
      border-radius: 5px;
      border: 1px solid red;
      margin-right: 5px;
      margin-bottom: 5px;
      
      filter: brightness(1);
      transition: filter 300ms ease-out;
      
      &:hover {
        filter: brightness(1.1);
      }
      
      &:last-child {
        margin-right: 0;
      }
      
      &--grass {
        background: rgba(180,245,0,1);
        background: linear-gradient(to bottom, rgba(180,245,0,1) 0%, rgba(104,191,24,1) 100%);
        border: 1px solid #197500;
      }
      
      &--poison {
        background: rgba(195,147,220,1);
        background: linear-gradient(to bottom, rgba(195,147,220,1) 0%, rgba(201,108,229,1) 100%);
        border: 1px solid #d286ea;
      }
      
      &--fire {
        background: rgba(245,0,12,1);
        background: linear-gradient(to bottom, rgba(255,128,134,1) 0%, rgba(236,128,101,1) 100%);
        border: 1px solid #e73827;
      }
          
      &--electric {
        background: rgba(252,234,187,1);
        background: linear-gradient(to bottom, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);
        border: 1px solid #f8b600;
      }
          
      &--water {
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(46,168,203,1) 100%);
      }
          
      &--flying {
        background: rgb(38,155,255);
        background: linear-gradient(0deg, rgba(38,155,255,1) 0%, rgba(46,168,203,1) 100%);
      }
          
      &--bug {
        background: rgb(47,190,85);
        background: linear-gradient(0deg, rgba(47,190,85,1) 0%, rgba(27,208,60,1) 34%);
      }
          
      &--normal {
        background: rgb(214,214,212);
        background: linear-gradient(0deg, rgba(214,214,212,1) 0%, rgba(135,127,120,1) 100%);
      }
      
      &--ground {
        background: rgb(214,214,212);
        background: linear-gradient(0deg, rgba(214,214,212,1) 0%, rgba(138,39,0,1) 100%);
      }
      
      &--fairy {
        background: rgb(214,214,212);
        background: linear-gradient(0deg, rgba(214,214,212,1) 0%, rgba(1,204,154,1) 100%);
      }
      
      &--fighting {
        background: rgb(214,214,212);
        background: linear-gradient(0deg, rgba(214,214,212,1) 0%, rgba(204,1,33,1) 100%);
      }
      
      &--psychic {
        background: rgb(214,214,212);
        background: linear-gradient(0deg, rgba(214,214,212,1) 0%, rgba(131,204,1,1) 100%);
      }
  }
`