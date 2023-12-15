"use client";
import styled from "styled-components";

export const ContentLoading = styled.div`
  background: black;
  height: 100vh;
  width: 100%;
  display: flex;
  .load {
    width: 100%;
    height: 90vh;
  }
`;
export const ContainerPage = styled.div`
  background: #1c1c1c;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  aside {
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 21%;
    border: 1px solid #333333;
  }
  aside .items-top {
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    max-height: 60vh;
    overflow: hidden;
  }
  aside .items-top button {
    background: none;
    gap: 5px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    color: white;
    display: flex;
    padding: 10px;
    font-size: 15px;
    align-items: center;
    font-weight: 200;
    width: 90%;
    transition: 0.5s;
    position: relative;
    &:hover {
      background: #272727;
      #trash {
        opacity: 1;
      }
    }
    &:focus {
      border: 1px solid gray;
      background: #272727;

      #trash {
        opacity: 1;
      }
    }
  }
  aside .items-top .recent-chat {
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-top: 50px;
    overflow-y: scroll;
  }
  aside .items-top .recent-chat button {
    margin-top: 15px;
  }
  aside .items-top .recent-chat #trash {
    position: absolute;
    opacity: 0;
    right: 10px;
    transition: 0.5s;
    filter: drop-shadow(0px 0px 7px #ff5c5c);
  }
  aside .items-top .recent-chat::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  aside .items-top .recent-chat::-webkit-scrollbar-track {
    background: #272727;
  }

  /* Handle */
  aside .items-top .recent-chat::-webkit-scrollbar-thumb {
    background: #333333;
  }

  /* Handle on hover */
  aside .items-top .recent-chat::-webkit-scrollbar-thumb:hover {
    background: #272727;
  }
  aside .items-top #create-chat {
    width: 90%;
    font-size: 20px;
    position: absolute;
    top: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px 0px;
    border-radius: 10px;
    background: #c6c7f8;
    color: black;
  }

  aside .items-bottom {
    border-top: 1px solid #333333;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: baseline;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-left: 20px;
    padding-top: 40px;
    padding-bottom: 10px;
  }
  aside .items-bottom .information {
    width: 100%;
  }

  aside .items-bottom .information button {
    display: flex;
    align-items: center;
    font-size: 11px;
    background: none;
    border: none;
    padding: 10px;
    outline: none;
    color: white;
    gap: 8px;
    flex-direction: row;
    width: 100%;
    border-radius: 10px;

    & h1 {
      font-weight: 400;
    }
    transition: 0.5s;
    &:hover {
      width: 80%;
      cursor: pointer;
      background: #272727;
    }
  }

  main {
    position: fixed;
    right: 0;
    height: 100vh;
    width: 79%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }

  main .content-groups {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-bottom: 100px;
  }
  main .content-groups .group {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  main .content-groups .group {
    display: flex;
    gap: 10px;
  }

  main .content-groups .group p {
    padding: 10px;
    max-width: 300px;
    font-weight: 200;
    border-radius: 10px;
    margin-top: 10px;
    background: #272727;
    cursor: pointer;
    &:hover {
      background: #333333;
    }
  }

  main form {
    position: absolute;
    bottom: 0;
    padding-bottom: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main form .content-input {
    width: 60%;
    height: 50px;

    position: relative;
  }
  main form .content-input input {
    background-color: #272727;
    border: none;
    border-radius: 5px;
    outline: none;
    width: 100%;
    height: 100%;
    padding-left: 70px;
    color: white;
  }
  main form .content-input .File-input {
    background-color: none;
    border: none;
    border-radius: 5px;
    outline: none;
    width: 40px;
    opacity: 0;
    margin-left: 20px;
    position: absolute;
    padding-left: 0px;
    color: white;
  }
  main form .left {
    position: absolute;
    display: flex;
    gap: 10px;
    left: 10px;
    top: 15px;
  }
  main form .submit-img {
    position: absolute;
    right: 10px;
    top: 15px;
  }
  main form .submit-img button {
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
  }

  @media (max-width: 1152px) {
    aside {
      display: none;
    }
    main {
      width: 100%;
    }
  }
  @media (max-width: 957px) {
    main .content-groups .group:nth-child(2),
    main .content-groups .group:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 667px) {
    main form .content-input {
      width: 80%;
    }
  }
`;

