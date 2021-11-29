/** ParagraphOutput
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component - Adombang Munang Mbomndih
  * @version 1.0.2 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter - Adombang Munang Mbomndih
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Highlight from 'react-highlight'

//#endregion

const CodeOutput = ({ data }) => {
  console.log(`data.code: ${data.code}`);
  console.log(`data.code: ${ReactHtmlParser(data.code)}`);
  return <>
          <Highlight>{ ReactHtmlParser(data.code) }</Highlight>
          <Highlight>{'code example(){}' }</Highlight>
          <p>{ ReactHtmlParser(data.code) }</p>
        </>;
};

export default CodeOutput;
