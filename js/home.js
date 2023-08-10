import styled from "styled-components";
import { FormStyled } from "./form";





export const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: hidden;
  -webkit-animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
    both;
  animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  .Home {
    display: flex;
    justify-content: space-between;
    width: 100%;
    cursor: none;
    padding: 0 5%;
    padding-top: 5%;
    :hover .Cursor {
      display: flex;
    }
    img {
      max-width: 100%;
    }
    .HomeImg {
      animation: float 6s ease-in-out infinite;
      width: 630px;
      max-width: 100%;
    }

    .myName {
      max-width: 100%;
      font-size: 8rem;
      font-family: "glitchFont";
      animation: flicker-in-1 3s linear both;
      background: #48caf1;
      background: linear-gradient(to top right, #48caf1 22%, #9466fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 1px -2px 45px rgba(148, 102, 252, 0.3);
    }
    .InfoDiv {
      padding-top: 190px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-width: 100%;
      h2 {
        font-family: "Source Code Pro", monospace;
        font-size: 45px;
        color: #dcd4f0;
      }
      span {
        font-family: "Source Code Pro", monospace;
        font-size: 40px;
        color: #dcd4f0;
        max-width: 100%;
      }
      .buttons {
        display: flex;
        gap: 25px;
        margin-top: 70px;
        max-width: 100%;
        z-index: 999;
        a {
          border: 3px solid #95e0f1;
          border-radius: 5px;
          padding: 6px 10px;
          -webkit-box-shadow: 0px 10px 13px -7px #000000,
            0px -1px 30px -7px #019cc0;
          box-shadow: 0px 10px 13px -7px #000000, 0px -1px 30px -7px #019cc0;
          z-index: 999;

          img {
            width: 180px;
          }
        }
        .border2 {
          border: 3px solid #9466fc;
          -webkit-box-shadow: 0px 10px 13px -7px #000000,
            0px -1px 30px -7px #6739cf;
          box-shadow: 0px 10px 13px -7px #000000, 0px -1px 30px -7px #6739cf;
          z-index: 999;
        }
      }
    }
    @media (max-width: 850px) {
      align-items: center;
      flex-direction: column;
      .InfoDiv {
        order: 2;
        padding-top: 0px;
      }
      .HomeImg {
        margin-top: 80px;
        max-width: 90%;
      }
      .myName {
        font-size: 4rem;
      }
    }
  }

  .Sobre {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 120px;
    padding: 0 5%;

    .mainSobre {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;
      max-width: 100%;
      margin-bottom: 50px;
      .imgSobre {
        width: 500px;
        max-width: 100%;
        height: 360px;
        padding: 5px;
        background: linear-gradient(90deg, #019cc0, #6739cf, #bd59e1);
        background-size: 600% 600%;

        -webkit-animation: gradientAnimetion 3s ease infinite;
        -moz-animation: gradientAnimetion 3s ease infinite;
        -o-animation: gradientAnimetion 3s ease infinite;
        animation: gradientAnimetion 3s ease infinite;
        overflow: hidden;
        border-radius: 10px;
      }
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
        transition: 1s;
        :hover {
          scale: 1.2;
          transition: 1.5s;
        }
      }
      p {
        width: 50%;
        font-family: "Source Code Pro", monospace;
        color: #dcd4f0;
        font-size: 1.3rem;
      }
      @media (max-width: 850px) {
        flex-direction: column;
        margin-bottom: 0px;
        .imgSobre {
          height: max-content;
        }
        p {
          width: 100%;
          font-size: 1.2rem;
        }
      }
    }
  }

  .Skills {
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 0 5%;
  }

  .Projetos {
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding-top: 100px;
    padding: 0 5%;
    .Carouselsstyle {
      width: 100%;
      margin: 0 auto;
      .rec.rec-arrow:disabled {
        visibility: hidden;
      }
    }
  }

  .Contact {
    display: flex;
    flex-direction: column;
    gap: 70px;
    padding-top: 100px;
    padding: 0 5%;
    margin-bottom: 50px;
    .containerContact {
      margin-top: 30px;
      display: flex;
      gap: 30px;
      .contactInf {
        display: flex;
        flex-direction: column;
        gap: 35px;
        width: 100%;
        h3 {
          font-size: 5rem;
          color: #dcd4f0;
          font-family: "glitchFont";
          background: #95e0f1;
          background: linear-gradient(to bottom left, #95e0f1 40%, #9466fc 75%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        ul {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          gap: 25px;
          list-style: none;
          li {
            display: flex;
            a {
              display: flex;
              align-items: center;
              gap: 10px;
              font-size: 3.3rem;
              color: #dcd4f0;
              text-decoration: none;
              transition: all 1s;
              span {
                color: white;
                font-size: 1.8rem;
              }
            }
            a:hover {
              animation: float 4s ease-in-out infinite;
              color: #9466fc;
              span {
                color: #dcd4f0;
              }
            }
          }
        }
      }
      @media (max-width: 850px) {
        flex-direction: column;
        .contactInf {
          order: 1;
          h3 {
            font-size: 2rem;
          }
          ul {
            flex-direction: row;
          }
          a {
            font-size: 1rem;
            span {
              display: none;
            }
          }
        }
        ${FormStyled} {
          order: 2;
        }
      }
    }
  }

  footer {
    margin-top: 150px;
    width: 100%;
    background-color: #19151f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #6739cf;
    padding: 15px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33px;
      height: 33px;
      font-size: 3rem;
      color: #19151f;
      background-color: #6739cf;
      border-radius: 50%;
      transform: translateY(-35px);
    }
    div {
      display: flex;
      align-items: center;
      height: 60px;
      width: 80%;
      justify-content: space-around;
      h3 {
        font-size: 1.5rem;
        color: #dcd4f0;
        font-family: "Source Code Pro", monospace;
      }
      span {
        font-size: 0.8rem;
        color: white;
        font-family: "Source Code Pro", monospace;
      }
    }
  }
  @media (max-width: 850px) {
    .titulo {
      max-width: 100%;
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
