export = gTTsClass;
declare class gTTsClass {
  constructor(text: string, lang?: string, debug?: boolean);
  GOOGLE_TTS_URL: string;
  MAX_CHARS: number;
  LANGUAGES: {
    af: string;
    sq: string;
    ar: string;
    hy: string;
    ca: string;
    zh: string;
    "zh-cn": string;
    "zh-tw": string;
    "zh-yue": string;
    hr: string;
    cs: string;
    da: string;
    nl: string;
    en: string;
    "en-au": string;
    "en-uk": string;
    "en-us": string;
    eo: string;
    fi: string;
    fr: string;
    de: string;
    el: string;
    ht: string;
    hi: string;
    hu: string;
    is: string;
    id: string;
    it: string;
    ja: string;
    ko: string;
    la: string;
    lv: string;
    mk: string;
    no: string;
    pl: string;
    pt: string;
    "pt-br": string;
    ro: string;
    ru: string;
    sr: string;
    sk: string;
    es: string;
    "es-es": string;
    "es-us": string;
    sw: string;
    sv: string;
    ta: string;
    th: string;
    tr: string;
    vi: string;
    cy: string;
  };
  debug: boolean;
  lang: string;
  text: string;
  text_parts: string[];
  token: typeof gToken;
  getHeader(): {
    Referer: string;
    "User-Agent": string;
  };
  getPayload(
    part: any,
    idx: any
  ): {
    ie: string;
    q: string;
    tl: string;
    total: number;
    idx: number;
    client: string;
    textlen: number;
    tk: string;
  };
  stream(): NodeJS.ReadableStream;
  save(save_file: string, callback: any): void;
  _tokenize(text: string, max_size: number): string[];
  _minimize(thestring: string, delim: string, max_size: any): any;
}
import gToken = require("./gToken");
