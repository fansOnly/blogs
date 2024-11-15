### 线上测试资源

::: details JPG 文件
![jpg](/assets/test.jpg)
:::

::: details GIF 文件
![gif](/assets/test.gif)
:::

::: details MP4 文件
<a href="/blogs/assets/test.mp4" download>下载 MP4</a>
<video :src="mp4" controls></video>
:::

::: details WAV 文件
<a href="/blogs/assets/test.wav" download>下载 WAV</a>
<audio :src="wav" controls></audio>
:::

::: details MARKDOWN 文件
<div><a href="/blogs/assets/test.md" download>下载 MARKDOWN</a></div>

[markdown](/assets/test.md)
:::

::: details TXT 文件
<a href="/blogs/assets/test.txt" download>下载 TXT</a>
:::

::: details PDF 文件
<a href="/blogs/assets/test.pdf" download>下载 PDF</a>
:::

::: details DOCX 文件
<a href="/blogs/assets/test.docx" download>下载 DOCX</a>
:::

::: details XLSX 文件
<a href="/blogs/assets/test.xlsx" download>下载 XLSX</a>
:::

<script setup>
  import wav from '../public/assets/test.wav'
  import mp4 from '../public/assets/test.mp4'
  // import pdf from '../public/assets/test.pdf'
  // import docx from '../public/assets/test.docx'
  // import xlsx from '../public/assets/test.xlsx'
  // import txt from '../public/assets/test.txt'
</script>
