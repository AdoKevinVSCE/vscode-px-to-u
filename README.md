![https://img.shields.io/badge/vscode-1.25.0-brightgreen.svg](https://img.shields.io/badge/vscode-1.35.0-brightgreen.svg) ![https://img.shields.io/badge/typescript-passing-blue.svg](https://img.shields.io/badge/typescript-passing-blue.svg)

## px to U

> A plugin that provides suggestions for converting px to vw, vh, rem, and custom units

> 支持px转换vw、vh、rem以及自定义转换的提示插件
>
> ![Demo](https://s3.bmp.ovh/imgs/2021/09/c251a0dc8755f3d4.gif)

### 支持文件类型

- html
- vue
- css
- less
- scss
- sass
- stylus

如果非上述文件格式，可通过右下角`select language mode`选择上述任意一个格式，就可触发提示。

### 配置

可通过快捷键`Ctrl + ,`打开设置页面，搜索px to u;

1. `width`，设计稿宽度，默认值`750`。用于转换vw、rem
2. `height`，设计稿高度，默认值`667`。用于转换vh
3. `toFixedNum`，小数点后保留位数，默认值`4`。
4. `customXX`，自定义提示项，默认值`1%xx`。格式为`rate%unit`，rate需为有效数字，unit为自定义的单位。如1%xx，4px可以通过计算(4\*1)xx，最后出来结果就是4xx。

### 命令

可将当前文件中的指定css单位全部替换

### Supported File Types

- html
- vue
- css
- less
- scss
- sass
- stylus

For non-listed file formats, you can trigger suggestions by selecting any of the above formats using the `select language mode` in the lower right corner.

### Configuration

You can open the settings page by using the shortcut `Ctrl + ,`, then search for `px to u`.

1. `width`, design width, default value `750`. Used for vw and rem conversions.
2. `height`, design height, default value `667`. Used for vh conversions.
3. `toFixedNum`, decimal places to round to, default value `4`.
4. `customXX`, custom suggestion item, default value `1%xx`. Format: `rate%unit`, where rate should be a valid number, and unit is the custom unit. For example, 1%xx means 4px can be calculated as (4\*1)xx, resulting in 4xx.

### Command

You can replace all specified CSS units in the current file.

[MIT](./LICENSE) License © 2025 [Kevin Law](https://github.com/AdoKevin)
