# `brew`安装出现`Checksum mismatch`解决办法

用`brew` 安装`APP` 出现 `Error: Checksum mismatch`. 说明下载的文件和期望的`HashCode` 对不上，删除对应的文件就行了

```bash
Error: Checksum mismatch.
Expected: b065e5e3783954f3e65d8d3a6377ca51649bfcfa21b356b0dd70490f74c6bd86
  Actual: e077ac577e955489eabc7092f9be9591a938e160a5f3007b8ee1b09c8a22b4b2
 Archive: /Users/symbol/Library/Caches/Homebrew/portable-ruby-2.6.3_2.yosemite.bottle.tar.gz
To retry an incomplete download, remove the file above.
Error: Failed to upgrade Homebrew Portable Ruby!
```

删除对应的文件，然后重新执行`brew` 安装脚本

```bash
rm /Users/symbol/Library/Caches/Homebrew/portable-ruby-2.6.3_2.yosemite.bottle.tar.gz
```

