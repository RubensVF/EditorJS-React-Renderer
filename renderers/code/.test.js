import CodeOutput from './index';

describe('ParagraphOutput renderer:', () => {
	const CodeOutput = shallow(<CodeOutput/>);

	it('should match snapshot', () => expect(codeOutput).toMatchSnapshot());
});
