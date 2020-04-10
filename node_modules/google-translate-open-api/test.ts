import translate, { parseMultiple } from './src/index';

(async () => {
  const result = await translate([`I'm fine.\n\rI'm fine.\n\rI'm fine.\n\r`, 'dsadwq\nmmqwe'], {
    tld: "cn",
    to: "zh-CN",
    format: 'text'
  });
  console.log(JSON.stringify(result.data));
  const data = result.data[0];
  const parseData = parseMultiple(data);
  console.log(JSON.stringify(parseData));
})();
