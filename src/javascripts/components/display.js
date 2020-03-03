import util from '../helpers/util';
import textData from '../helpers/data/textData';

const showDisplay = () => {
  const text = textData.getText();
  const domString = `<h2>${text}</h2>`;
  util.printToDom('display-container', domString);
};

export default { showDisplay };
