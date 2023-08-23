import { type WorkspaceConfiguration } from 'vscode';

export interface AdviseHint {
  px: number;
  pxValue: number;
  replaceText: string;
}

export interface Config {
  width: number;
  height: number;
  customXX?: string;
  toFixedNum?: number;
}

export default class Process {
  private config: Config;
  private regPx: RegExp = /([-]?[\d.]+)p(x)?/;
  private regPxAll: RegExp = /([-]?[\d.]+)px/g;

  constructor(config: WorkspaceConfiguration) {
    this.config = {
      width: config.get('designWidth') ?? 750,
      height: config.get('designHeight') ?? 667,
      customXX: config.get('customXX'),
      toFixedNum: config.get('toFixedNum') ?? 4,
    };
  }

  convert(text: string): Array<AdviseHint> {
    const match = text.match(this.regPx);
    if (!match) {
      return [];
    }
    const pxValue = parseFloat(match[1]);
    const ret = [this.px2vw(pxValue), this.px2vh(pxValue), this.px2rem(pxValue)];

    if (this.px2custom) {
      ret.push(...this.px2custom(pxValue));
    }
    return ret;
  }

  convertAll(text: string): string {
    if (!text) {
      return text;
    }
    return text.replace(this.regPxAll, (word: string) => {
      const res = this.px2vw(parseFloat(word));
      if (res) {
        return res.replaceText;
      }
      return word;
    });
  }

  private px2vw(pxValue: number) {
    const vw = ((pxValue / this.config.width) * 100).toFixed(this.config.toFixedNum) + 'vw';
    return {
      px: pxValue,
      pxValue: pxValue,
      replaceText: vw,
    };
  }

  private px2vh(pxValue: number) {
    const vh = ((pxValue / this.config.height) * 100).toFixed(this.config.toFixedNum) + 'vh';
    return {
      px: pxValue,
      pxValue: pxValue,
      replaceText: vh,
    };
  }

  private px2rem(pxValue: number) {
    const rem = ((pxValue * 10) / this.config.width).toFixed(this.config.toFixedNum) + 'rem';
    return {
      px: pxValue,
      pxValue: pxValue,
      replaceText: rem,
    };
  }

  private px2custom(pxValue: number) {
    if (this.config.customXX) {
      const [rateStr, unit = ''] = this.config.customXX.split('%');

      const rate = parseFloat(rateStr);
      if (isNaN(rate)) {
        return [];
      }
      const vh = (pxValue * rate).toFixed(this.config.toFixedNum) + unit;
      return [
        {
          px: pxValue,
          pxValue: pxValue,
          replaceText: vh,
        },
      ];
    }
    return [];
  }
}
