// 谷歌统计，请去该官网获取自己的代码，这样就能统计谁访问你的网站
// function 可以使用 tab 键缩进，不会导致页面上有多个空格
const googleAdblock = `
<script async src="https://fundingchoicesmessages.google.com/i/pub-1725717718088510?ers=1" nonce="DGB9_pa80NWgiNjJ3aejog"></script><script nonce="DGB9_pa80NWgiNjJ3aejog">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>
`;

module.exports = googleAdblock;
