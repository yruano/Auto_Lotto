<script lang="ts">
  import { onMount } from 'svelte';

  let socket: WebSocket | null = null;
  let result: string = "";

  // WebSocket 연결
  onMount(() => {
    socket = new WebSocket("ws://localhost:8080/wc");

    socket.onopen = () => {
      console.log("WebSocket 연결됨");
    };

    socket.onmessage = (event) => {
      result = event.data; // 서버에서 받은 데이터를 result에 저장
    };

    socket.onerror = (error) => {
      console.error("WebSocket 오류:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료됨");
    };

    return () => {
      if (socket) {
        socket.close(); // 컴포넌트가 언마운트될 때 WebSocket 종료
      }
    };
  });

  // 크롤링 요청 함수
  function requestCrawl() {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send("crawl"); // 서버에 'crawl' 메시지 전송
    } else {
      console.error("WebSocket 연결되지 않음");
    }
  }
</script>

<main>
  <h1>웹 크롤링 요청</h1>
  <button on:click={requestCrawl}>웹 크롤링 시작</button>
  <div>
    <h2>크롤링된 데이터:</h2>
    <p>{result || "아직 데이터를 받지 않았습니다."}</p>
  </div>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  div {
    margin-top: 20px;
    font-size: 18px;
  }
</style>
